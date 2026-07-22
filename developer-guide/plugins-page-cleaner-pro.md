# PageCleaner PRO (Developer Guide)

**PageCleaner PRO** extends the base plugin with Google Search Console integration, advanced pruning services, and automated traffic-based cleanup.

## Core Services

### `GscAnalyzerService`
Handles communication with the Google Search Console API.
- Queries GSC for page performance data over a specified timeframe.
- Calculates aggregates for clicks, impressions, and average position.
- Identifies pages that fall below the user-defined thresholds.

### `PruningService`
Overrides the basic deletion logic.
- Safely handles relational data cleanup (e.g., removing orphaned meta tags, media references).
- Processes bulk actions with optimized database queries.

### `UrlRestructuringService`
Works in tandem with RedirectManager (if active).
- Analyzes parent-child relationships before deletion.
- Calculates the new target URL for surviving children.
- Triggers the creation of 301 redirects in the RedirectManager database before executing the parent deletion.

## Automation (`AutoPruneCommand.php`)

The PRO plugin registers a separate scheduled command for GSC-based pruning.
- It fetches the GSC settings (thresholds, timeframe).
- Uses `GscAnalyzerService` to fetch underperforming URLs.
- Matches GSC URLs to local `Page` models.
- Applies the target/protect filters and age restrictions.
- Passes the matching IDs to the `PruningService`.

## Integration with Base Plugin

PageCleaner PRO injects itself into the base PageCleaner views and controllers.
- In `DashboardController`, it checks for the existence of `PageCleanerProPlugin`.
- The frontend uses the `$isProActive` variable to toggle the visibility of the GSC scan tab and GSC automation settings, replacing upsells with actual forms.
