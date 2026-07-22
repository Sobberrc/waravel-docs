# PageGenerator (User Guide)

The **PageGenerator** plugin is a powerful tool for bulk-generating SEO-optimized pages using AI. It supports dynamic placeholders, spintax, and automated formatting.

## Generation Form (Dashboard)

The main dashboard provides a comprehensive form to configure your page generation batch.

### Content Configuration
- **Target Keywords:** Enter the primary keywords for your pages. You can paste a list, upload a text/csv file, or use AI/GSC strategies (PRO).
- **Content Prompt:** The instructions sent to the AI (e.g., "Write a detailed service page for {keyword} in {city}"). You can use `{placeholders}` dynamically.
- **Reference Attachments:** Upload files (PDF, DOCX, TXT) to provide the AI with brand guidelines or factual context.
- **Page Length:** Choose between Short, Medium, Long, or specify a Custom word count.
- **Predefined Sections:** Inject standard blocks (e.g., FAQ schema, Contact form) into every generated page.

### Dynamic Placeholders
Placeholders allow you to generate hundreds of localized pages from a single prompt.
- Use `{city}` or `{service}` in your prompt.
- Define values globally in the **Placeholders** tab, or inline via the form.
- The plugin automatically generates all combinations.

### Media Handling
- **Images:** Choose to auto-generate images using AI (OpenAI/DALL-E), inject prompts for manual creation later, or skip entirely.
- **Videos:** Search and embed relevant YouTube videos automatically based on the page's topic.

### SEO & Structure
- **Title/Description Templates:** Manually set SEO metadata using placeholders, or let the AI generate them based on the content.
- **Schema Markup:** Select schema types (Article, LocalBusiness, FAQPage) to be automatically injected.
- **Internal Linking:** Provide a list of URLs and anchor text strategies to interlink the generated pages.
- **Parent Page:** Nest generated pages under an existing parent page.

### Pacing Strategy
- **Max Speed:** Generate all pages immediately.
- **Drip Feed:** Schedule generation over time (e.g., 5 pages per day) to simulate natural growth.

## Templates

Save your complex configurations as **Templates**.
- Load a template to quickly re-run a successful generation strategy.
- Duplicate templates to create variations.

## Job Management

The **Jobs** tab tracks your generation batches.
- View real-time progress of the queue.
- See individual page status (Pending, Processing, Completed, Failed).
- Retry failed items.
- Cancel running batches.

## Settings

Configure your global preferences:
- **AI Providers:** Select your preferred models (OpenAI, Anthropic, Gemini, OpenRouter, Custom LLM) for text and image generation.
- **YouTube Integration:** Connect channels to restrict video searches or upload sources.
