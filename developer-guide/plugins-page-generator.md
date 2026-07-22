# PageGenerator (Developer Guide)

The **PageGenerator** plugin is a complex system involving AI integrations, background queues, and media processing.

## Core Architecture

- **`PageGeneratorPlugin.php`**: Registers integration types (OpenAI, Anthropic, Gemini, OpenRouter), hooks, and the watchdog command for the queue.
- **Controllers**:
  - `PageGeneratorController`: Handles the main generation form and request validation. Dispatches jobs to the queue.
  - `TemplateController`: CRUD for generation templates and handling attachments.
  - `JobController`: Dashboard monitoring and interaction with running/completed jobs.
  - `QueueManagerController` & `QueueProcessorController`: Fallback queue management if standard Laravel workers aren't running.

## Background Processing (Jobs)

- **`Models\GenerationJob`**: Represents a batch of pages to generate. Contains the full JSON settings payload.
- **`Models\GenerationJobItem`**: Represents a single page within a job, storing specific placeholder values and final output data.
- **`Jobs\ProcessPageGeneration`**: The Laravel Queue Job. Processes a single `GenerationJobItem`.

## Core Services

- **`PageGenerationService`**: The orchestrator.
  - Creates the Job and JobItems by resolving all placeholder combinations (`PlaceholderService`).
  - Calls `AITextService` to generate the HTML content and SEO metadata.
  - Calls `AIImageService` to generate or assign images.
  - Calls `YouTubeService` to resolve video embeds.
  - Creates the final `Page` model in the database.
- **`PlaceholderService`**: Extracts `{tags}` from prompts, looks up values from `PlaceholderList` models, and calculates the Cartesian product of all combinations.
- **`AITextService`**: Abstracts the API calls to the configured LLM provider. Handles system prompts, context attachment parsing, and response cleaning.
- **`SchemaGeneratorService`**: Constructs JSON-LD arrays based on the requested schema types and the generated content.
- **`RateLimiterService`**: Manages API backoff and rate limit handling for external providers to prevent job failures.

## Database Schema

Key tables introduced:
- `waravel_page_generator_templates`: Stores saved configurations.
- `waravel_page_generator_placeholder_lists`: Stores global key/value lists for placeholders.
- `waravel_page_generator_jobs` & `waravel_page_generator_job_items`: Queue state tracking.
- `waravel_page_generator_settings`: Isolated settings table for API keys and defaults.
