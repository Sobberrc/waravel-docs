<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# MediaController Reference

Technical reference for the Waravel Media system: controller methods, upload pipeline, security validation, file processing services, search engine, and deletion logic.

---

## MediaController (`src/Http/Controllers/MediaController.php` — 801 lines)

**Dependencies**: `ImageProcessor`, `VideoProcessor` (constructor-injected)

### Routes

| Method | Route | HTTP | Purpose |
|---|---|---|---|
| `index()` | `waravel.media.index` | GET | Renders the Media Manager view with server-side search |
| `upload()` | `waravel.media.upload` | POST | Multi-file upload with security validation |
| `getMediaFiles()` | `waravel/media-files` | GET | AJAX: paginated media listing with search (24 per page) |
| `loadMoreMedia()` | `waravel/media/load-more-media` | GET | AJAX: paginated media for in-page modals (10 per page) |
| `destroy($id)` | `waravel/media/{id}` | DELETE | Single media deletion + file cleanup |
| `bulkDelete()` | `waravel/media/bulk-delete` | DELETE | Bulk deletion by ID array |

---

## Media Model (`Sobberrc\Waravel\Models\Media`)

### Database Table: `waravel_media`

| Field | Type | Default | Description |
|---|---|---|---|
| `id` | bigint | auto | Primary key |
| `name` | varchar | — | Original filename |
| `slug` | varchar | NULL | URL-safe deduplicated slug |
| `wp_url` | varchar | NULL | WordPress origin URL (for imports) |
| `path` | varchar | NULL | Primary storage path |
| `paths` | longtext (JSON) | NULL | All size variants: `original`, `thumbnail`, `medium`, `large`, `video_thumbnail` |
| `alt_text` | varchar | NULL | Accessibility alt text |
| `mime_type` | varchar | — | MIME type (e.g., `image/jpeg`) |
| `size` | bigint | NULL | File size in bytes |
| `folder` | varchar | NULL | Folder grouping |
| `page_id` | bigint | NULL | Associated page ID |
| `width` | int | NULL | Image width in pixels |
| `height` | int | NULL | Image height in pixels |
| `caption` | text | NULL | Caption text |
| `description` | text | NULL | Description text |
| `uploaded_on` | date | NULL | Upload date |

---

## Upload Pipeline

### Storage Path Convention

Files are stored in WordPress-style year/month directories:

```
storage/app/public/uploads/{YYYY}/{MM}/{slug}.{ext}
```

### Slug Deduplication

```php
$count = 2;
while (Media::where('slug', $slug)->exists()) {
    $slug = Str::slug($originalName) . '-' . $count;
    $count++;
}
```

### Security Validation (`validateFile()`)

4-layer security check on every uploaded file:

| Layer | Check | Rule |
|---|---|---|
| 1 | File Size | Max **10 MB** |
| 2 | MIME Whitelist | `image/jpeg`, `image/png`, `image/gif`, `image/webp`, `image/svg+xml`, `application/pdf`, `video/mp4`, `video/quicktime`, `video/x-msvideo` |
| 3 | Extension Whitelist | `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg`, `pdf`, `mp4`, `mov`, `avi` |
| 4 | Dangerous Blocklist | `php`, `php3`, `php4`, `php5`, `phtml`, `exe`, `bat`, `cmd`, `com`, `scr`, `vbs`, `js`, `jar` |

### Image Content Validation (`validateImageContent()`)

- `getimagesize()` must return valid data (catches disguised executables)
- Max dimensions: **8000×8000 pixels** (prevents decompression DoS)

### SVG Security

1. **Admin-only**: Non-admin users get `"Security Restriction: Only administrators are allowed to upload SVG files"`
2. **Sanitization**: `SvgSanitizer` (zero-dependency internal service) strips `<script>`, event handlers, and XSS vectors

### File Processing by Type

| Type | Service | Processing |
|---|---|---|
| Images | `ImageProcessor::process()` | Generates WordPress-style size variants (thumbnail, medium, large, original). Reads dimensions via `getimagesize()` |
| Videos | `VideoProcessor` | Stored as-is. `generateVideoThumbnail()` extracts a poster frame. All paths stored in `paths` JSON |
| PDFs/Other | None | Stored as-is, no processing |

### Laravel Validation Rule

```php
$request->validate([
    'files.*' => 'required|file|mimes:jpeg,png,jpg,gif,svg,webp,pdf,mp4,mov,avi|max:102400'
]);
```

---

## Search Engine

Both `index()` and `getMediaFiles()` implement the same dual-condition boolean search engine.

### Searchable Fields (14)

| Field Key | Type | Special Behavior |
|---|---|---|
| `id` | Numeric | Exact match always |
| `name` | Text | Broad/exact |
| `slug` | Text | Broad/exact |
| `path` | Text | Broad/exact |
| `mime_type` | Text | Broad/exact |
| `size` | Special | Input in **KB**, auto-converted to bytes via `round($value * 1024)`, searched with **±2 byte tolerance** using `whereBetween()` |
| `width` | Numeric | Exact match |
| `height` | Numeric | Exact match |
| `caption` | Text | Broad/exact |
| `description` | Text | Broad/exact |
| `alt_text` | Text | Broad/exact |
| `wp_url` | Text | Broad/exact |
| `wp_id` | Numeric | Exact match |
| `page_id` | Numeric | Exact match |

### URL-Based Simple Search (Fallback)

If a full URL is pasted into the simple search:
```php
$parsed = parse_url($search);
$path = ltrim($parsed['path'], '/');
$path = preg_replace('#^(public/)?storage/#', '', $path);
$query->where('path', $path);
```

### Hyphen-Aware Text Search

```php
$hyphenSearch = str_replace(' ', '-', $search);
$q->where('name', 'like', "%$search%")
  ->orWhere('name', 'like', "%$hyphenSearch%");
```

---

## Deletion Pipeline

### Single Delete (`destroy()`)

1. Deletes the primary file at `media.path`
2. Iterates `media.paths` JSON and deletes all size variations
3. For videos: calls `VideoProcessor::deleteVideoThumbnail()`
4. Deletes the database record

### Bulk Delete (`bulkDelete()`)

Same as single delete in a loop over `Media::whereIn('id', $imageIds)`. Additionally checks for leftover thumbnails at `uploads/videos/video-thumbnails/{slug}.jpg`.

---

## View Architecture

### Media Index (`media/index.blade.php` — 780 lines)

All content loaded via **AJAX** (`loadMediaPage()`) — no full page reloads.

- Upload form with XHR progress bar (percentage + pulse animation at 100%)
- Advanced search form (`#0f172a` dark panel) with dynamic placeholder for Size field
- Responsive CSS Grid gallery (1→3→4 columns)
- Per-item checkboxes with Select All (supports indeterminate state)
- Side panel (1/3 width, slides from right) with file details, video duration detection via `<video>.loadedmetadata`
- Pagination: page counter + jump-to-page input + First/Prev/Next/Last links
- Toast notifications (fixed top-right, auto-hide 3s)
