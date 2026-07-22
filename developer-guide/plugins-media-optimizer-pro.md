# Media Optimizer Pro Plugin - Developer Guide

Media Optimizer Pro builds upon the standard Media Optimizer infrastructure by introducing heavy image processing routines using standard PHP extensions (GD/Imagick).

## Architecture

The plugin is registered via `MediaOptimizerProPlugin.php` and its core logic resides in `MediaOptimizerProController`.

### API & Routes

All routes are protected by the `web` and `auth:waravel` middleware.

- `GET /waravel/plugins/media-optimizer-pro/metrics/heavy` - Scans the `waravel_media` table and file system to return analytics on large files.
- `POST /waravel/plugins/media-optimizer-pro/convert-batch` - Uses the Intervention Image library (or standard GD) to re-encode JPG/PNG to WebP format.
- `POST /waravel/plugins/media-optimizer-pro/shrink-batch` - Calculates aspect ratios and resamples large images down to a configured maximum width/height.
- `POST /waravel/plugins/media-optimizer-pro/patch-content` - Executes a complex database search-and-replace. It iterates through models (Pages, Posts, Blocks) and updates `content` columns, replacing `.jpg`/`.png` extensions with `.webp` for newly converted media.
- `POST /waravel/plugins/media-optimizer-pro/prune-originals` - Deletes the physical source files and updates the database records to reflect the new WebP file size and MIME type.
- `GET /waravel/plugins/media-optimizer-pro/automation` - Renders automation settings UI.
- `POST /waravel/plugins/media-optimizer-pro/automation/save` - Saves cron and auto-convert settings.
- `POST /waravel/plugins/media-optimizer-pro/send-report` - Dispatches a summary email of optimization savings.

## Image Processing Constraints

When working with large images in PHP, memory limits are a critical factor. 
- The plugin increases the temporary PHP `memory_limit` dynamically before processing batches (`ini_set('memory_limit', '512M')`).
- Conversion batches should be kept relatively small (10-20 images per AJAX request) to prevent Nginx/Apache timeout errors.

## Content Patching Risk

The `patchContent` method is a destructive database operation. It utilizes transactions where possible. Developers extending or modifying this plugin should ensure that database backups are taken before executing bulk content patches, as incorrect regex or string replacement can break frontend layouts.
