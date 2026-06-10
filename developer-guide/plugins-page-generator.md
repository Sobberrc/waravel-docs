<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# PageGenerator: Technical Reference

Technical documentation for the PageGenerator plugin: architecture, database schema, route maps, and internal processing logic.

---

## Architecture Overview

| Component | Purpose |
|---|---|
| `PageGeneratorPlugin.php` | Plugin lifecycle, route registration, table creation, boot guard |
| `PageGeneratorController` | Main generation form + content generation engine |
| `SettingsController` | AI provider management, API key configuration |
| `PlaceholderController` | CRUD for dynamic placeholder lists |
| `TemplateController` | CRUD for generation templates + duplication |
| `JobController` | Job lifecycle: create, monitor, process, cancel, retry |
| `ApiController` | AJAX endpoints: preview combinations, preview content |

---

## Database Schema (7 Tables)

### `pg_settings` & `pg_ai_providers`
Stores global plugin configuration and AI API credentials. Keys are encrypted via `Crypt::encryptString()` when `is_encrypted` is true.

### `pg_placeholder_lists`
Stores substitution values. The generation engine computes the **Cartesian product** of all selected lists to determine the job size.

### `pg_templates`
The primary blueprint for generation. Stores AI prompts, SEO patterns, structure outlines, and image handling preferences.

### `pg_jobs` & `pg_job_items`
Tracks the status of bulk generation runs. `pg_job_items` stores individual page data (placeholders, status, error logs) and supports `scheduled_at` for drip campaigns.

---

## Route Map (Simplified)

| Prefix | Handler | Purpose |
|---|---|---|
| `/waravel/plugins/page-generator/` | `PageGeneratorController` | Main Dashboard |
| `/settings` | `SettingsController` | AI & API Config |
| `/placeholders` | `PlaceholderController` | Data Lists |
| `/templates` | `TemplateController` | BLUEPRINTS |
| `/jobs` | `JobController` | Processing & Monitoring |
| `/api` | `ApiController` | AJAX Previews |

---

## Generation Engine Logic

### 1. The Placeholder Mixer
The plugin calculates every possible combination of your selected lists. If you have 10 cities and 5 services, it creates 50 "Job Items".

### 2. AI Processing Pipeline
For each item:
1. Replaces `{city}` and `{service}` tags in the prompt.
2. Dispatches to the active AI Provider (OpenAI, Claude, etc.).
3. Parses the response against the **Structure Outline**.
4. Generates SEO titles and descriptions (manual or AI-based).
5. Handles images (AI generation or stock lookup).

### 3. Queue & Background Processing
- **Watchdog**: The `pg:queue-watchdog` command ensures background workers are active.
- **AJAX Fallback**: If no worker is detected, the browser-side JavaScript polls the `process` endpoint to generate pages one-by-one.

---

## Boot Guard
Implements a triple-guard to prevent duplicate loading:
1. `PAGE_GENERATOR_LOADED` constant.
2. `static $booted` property.
3. `static $bootInProgress` property.
