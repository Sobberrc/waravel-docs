# PageRedirectorPro Developer Guide

## Architecture
As an add-on plugin, PageRedirectorPro relies on the foundation built by PageRedirector. It registers additional routes, controllers, and services to handle advanced processing.

### Services
- AiSuggestionService: Uses algorithms (like Levenshtein distance or LLM APIs) to match 404 paths to existing active slugs.
- ChainDetectorService: Traverses the Redirect models to identify circular dependencies or multi-hop redirects (e.g., A -> B -> C).
- ClickAnalyticsService: Processes the RedirectLog entries to generate aggregated statistics for the Analytics dashboard.
- CsvImportService: Parses CSV uploads and batch-inserts/updates redirect records.
- SitemapService: Hooks into the site's sitemap generation process to exclude URLs that are actively being redirected.

### Controllers
- ProDashboardController: Manages the specific views and data requirements for the Pro interface, such as the analytics and chain management pages.

### Extensibility
- Pro features are deeply integrated with the base plugin's event system, listening for RedirectCreated or RedirectUpdated to trigger re-evaluations of chains and suggestions.
