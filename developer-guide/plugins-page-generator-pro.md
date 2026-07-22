# PageGenerator PRO (Developer Guide)

**PageGenerator PRO** adds advanced intelligence and automation layers on top of the base PageGenerator infrastructure.

## Core Services

### `GscService` & `GapAnalyzer`
- **`GscService`**: Connects to the Google Search Console API. Specifically looks for "striking distance" keywords—queries with high impressions but low CTR or average positions just off the first page.
- **`GapAnalyzer`**: Cross-references the keywords returned by GSC with the existing local `Page` models in Waravel. If a keyword is found in GSC but doesn't closely match an existing page slug or title, it is flagged as a "Gap".

### `MarketDiscoveryService`
Provides fallback keyword generation when GSC data is unavailable. Uses LLM prompting to brainstorm trending topics based on the configured `seo_niche`.

### `AiClusteringService`
Takes a broad topic and uses an LLM to generate a structured JSON array of semantically related sub-topics. Used by the "Brainstorm Cluster" UI feature.

## Auto-Pilot Engine (`GscAutomationController`)

The heart of PRO is `runAutoPilot()`, which can be triggered via cron or manually.
1. It parses the JSON array of `auto_pilot_schedules`.
2. Filters schedules that match the current day of the week.
3. Loads the associated `GenerationTemplate`.
4. Resolves the `auto_pilot_keyword_source`:
   - If `gsc_internal`, calls `GscService` and `GapAnalyzer`.
   - If `gsc_market`, calls `MarketDiscoveryService`.
   - If `placeholders`, resolves raw combinations.
5. Slices the resulting array by the remaining daily `quota`.
6. Calculates the interval spacing for drip-feeding (`pacing_strategy`).
7. Dispatches instances of `\PageGenerator\Jobs\ProcessPageGeneration` with delayed `scheduled_at` timestamps using the core `PageGenerationService`.

## Database Additions

PageGenerator PRO heavily utilizes the base plugin's database structure, specifically relying on:
- `auto_pilot_keyword_source`, `auto_pilot_keyword_pattern`, `auto_pilot_keyword_fallback` columns in the `waravel_page_generator_templates` table.
- Stores its schedules in `waravel_plugin_settings` under the key `auto_pilot_schedules`.
