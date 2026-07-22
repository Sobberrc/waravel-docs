# PageCleaner (Developer Guide)

The **PageCleaner** plugin handles the cleanup of local Waravel pages.

## Architecture & Core Files

- **`PageCleanerPlugin.php`**: The main plugin class. Registers routes, views, settings, and schedules the auto-prune command.
- **`Controllers/DashboardController.php`**: Handles dashboard view rendering, local scans, and page pruning execution.
- **`Console/Commands/AutoPruneLocalCommand.php`**: The scheduled command that executes the background pruning.

## Database & Settings

The plugin stores its configuration in the core `waravel_plugin_settings` table.
Key settings include:
- `local_auto_prune_enabled`
- `local_auto_prune_frequency`
- `local_auto_prune_min_age_days`
- `local_auto_prune_action`

## Scanning Logic (`DashboardController::scanLocal`)

The local scanner builds an Eloquent query on the `Waravel\Models\Page` model:
1. **Filters:** Applies status, date ranges, and age restrictions.
2. **Target Rules:** Uses `LIKE` or `=` to enforce URL inclusion criteria.
3. **Protect Rules:** Uses `NOT LIKE` or `!=` to enforce URL exclusion criteria.
4. **Ancestor Protection:** By default, it builds a tree of all published pages and removes parents of healthy pages from the deletion candidates. This is bypassed if `restructure_urls` is enabled.

## Pruning Execution (`DashboardController::purge`)

When executing a purge:
1. If URL Restructuring is enabled, it delegates to `UrlRestructuringService` (from PRO/RedirectManager) to resolve and write 301 redirects *before* deletion.
2. If `PageCleanerPro` is active, it delegates to `PruningService` for advanced cascading deletions.
3. Otherwise, it falls back to basic `delete()` or `forceDelete()` on the Eloquent model.

## Hooks & Commands
- **Cron Schedule:** Registers `waravel:page-cleaner:auto-prune-local` in `PageCleanerPlugin::scheduleTasks()`.
