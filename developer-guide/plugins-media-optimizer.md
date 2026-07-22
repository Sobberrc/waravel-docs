# Media Optimizer Plugin - Developer Guide

The Media Optimizer plugin is a specialized file system and database synchronizer built for the Waravel CMS. It relies heavily on Laravel's Storage facade and Waravel's Media models to perform deep inspections of site assets.

## Architecture & Integration

The plugin registers itself in the Waravel ecosystem via `MediaOptimizerPlugin.php` and requires the `plugin-media-optimizer` entitlement. Its primary logic is handled within the `MediaOptimizerController`.

### API & Routes

All routes are protected by the `web` and `auth:waravel` middleware to ensure only administrators can trigger destructive file actions. The primary endpoints are:

- `GET /waravel/plugins/media-optimizer` - Renders the dashboard UI.
- `POST /waravel/plugins/media-optimizer/run-scan` - Initiates the search for unused media records by querying standard content tables (pages, posts) using regex.
- `POST /waravel/plugins/media-optimizer/unused-ids` - Fetches the array of unused media IDs.
- `POST /waravel/plugins/media-optimizer/bulk-delete` - Triggers the deletion of specific unused media IDs.
- `POST /waravel/plugins/media-optimizer/discover-ghosts` - Compares the `storage/app/public` directory against the `waravel_media` table.
- `POST /waravel/plugins/media-optimizer/register-ghost-batch` - Creates eloquent `Waravel\Models\Media` records for unindexed physical files.
- `POST /waravel/plugins/media-optimizer/prune-missing` - Executes Eloquent deletes for media records lacking physical files.

## Performance Considerations

- **Memory Limits:** The ghost discovery process (`discoverGhosts`) involves recursively scanning the storage directory. On sites with tens of thousands of images, this can be memory-intensive. It uses Laravel's `Storage::allFiles()` combined with chunked processing to prevent memory exhaustion.
- **Content Scanning:** The `runScan` endpoint relies on full-text or LIKE queries across multiple tables (e.g., searching for `/storage/media/ID` inside HTML content blocks). 

## Permissions

The plugin registers a custom permission: `manage_media_optimizer`. Roles must be granted this permission to access the routes and dashboard. This is automatically handled during plugin initialization if the super-admin assigns the entitlement.
