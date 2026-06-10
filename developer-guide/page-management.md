<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# PagesController Reference

Technical reference for the Waravel Pages system: controllers, models, routes, search engine, and view architecture.

---

## Controllers

### PagesController (`src/Http/Controllers/PagesController.php` — 1,499 lines)

| Method | Route | HTTP | Purpose |
|---|---|---|---|
| `index()` | `waravel.pages.index` | GET | Paginated page listing with sorting, search, and hierarchical view |
| `create()` | `waravel.pages.create` | GET | Page creation form |
| `store()` | `waravel.pages.store` | POST | Creates a new page with tags, SEO meta, schema markup |
| `edit($id)` | `waravel.pages.edit` | GET | Page edit form (pre-populated) |
| `update($id)` | `waravel.pages.update` | PUT | Updates an existing page |
| `destroy($id)` | `waravel.pages.destroy` | DELETE | Soft-deletes (trash) or permanently deletes a page |
| `show($slug)` | Public route | GET | Public page rendering with access control |
| `quickUpdate($id)` | `waravel.pages.quick-update` | POST | AJAX: inline field update (status, visibility) |
| `bulkAction()` | `waravel.pages.bulk-action` | POST | AJAX: bulk trash/restore/publish/delete |
| `trashed()` | `waravel.pages.trashed` | GET | Soft-deleted pages listing |
| `restore($id)` | `waravel.pages.restore` | POST | Restores a trashed page |
| `generateSlug()` | `waravel-generate-slug` | POST | AJAX: generates unique slug from title, checks parent-scoped collisions |

### Dashboard\TagController (`src/Http/Controllers/Dashboard/TagController.php` — 364 lines)

Used within the page editor for tag management. See [Tags Controller Reference](./tag-management.md).

---

## Page Model (`Sobberrc\Waravel\Models\Page`)

### Database Table: `waravel_pages`

| Field | Type | Default | Description |
|---|---|---|---|
| `id` | bigint | auto | Primary key |
| `user_id` | bigint | NULL | Creator user ID |
| `title` | varchar | — | Page title (required) |
| `content` | mediumtext | NULL | HTML content (TinyMCE output) |
| `builder_data` | longtext | NULL | Waravel Builder JSON data |
| `parent_id` | bigint | NULL | Parent page ID for hierarchy |
| `container_root_id` | bigint | NULL | Root container for WordPress imports |
| `featured_image` | varchar | NULL | Storage path to featured image |
| `status` | varchar | `Published` | `Published`, `Pending review`, `Draft` |
| `visibility` | varchar | `Public` | `Public`, `Private`, `Password protected` |
| `password` | varchar | NULL | Page password (when visibility is password-protected) |
| `slug` | varchar | — | URL slug (required, unique per parent) |
| `wp_permalink` | varchar | NULL | Original WordPress URL |
| `full_url` | varchar | NULL | Computed full URL path |
| `type` | varchar | NULL | Page type identifier |
| `template` | varchar | NULL | Blade template filename |
| `template_config` | longtext | NULL | JSON: `disable_layout`, `show_header`, `show_footer`, `show_banner`, `show_breadcrumbs` |
| `wp_id` | int | NULL | Original WordPress page ID |
| `wp_parent_id` | int | NULL | Original WordPress parent ID |
| `deleted_at` | timestamp | NULL | Soft delete timestamp |

### Relationships

| Relation | Type | Target |
|---|---|---|
| `tags()` | BelongsToMany | `Tag` via `waravel_page_tag` |
| `parent()` | BelongsTo | `Page` |
| `children()` | HasMany | `Page` |
| `schemas()` | HasMany | `Schema` |
| `seoMeta()` | HasMany | `SeoMeta` |

---

## Advanced Search Engine

The index view supports a **dual-condition boolean query builder** with 14 searchable fields.

### Searchable Fields

| Field Key | DB Column | Type |
|---|---|---|
| `id` | `id` | Numeric (exact) |
| `title` | `title` | Text |
| `slug` | `slug` | Text |
| `parent_id` | `parent_id` | Numeric (exact) |
| `parent_title` | Join on `parent.title` | Text |
| `parent_slug` | Join on `parent.slug` | Text |
| `content` | `content` | Text |
| `meta_title` | Join on `waravel_seo_meta` | Text |
| `meta_description` | Join on `waravel_seo_meta` | Text |
| `keywords` | Join on `waravel_seo_meta` | Text |
| `status` | `status` | Text |
| `wp_id` | `wp_id` | Numeric (exact) |
| `wp_parent_id` | `wp_parent_id` | Numeric (exact) |
| `url` | `full_url` | Text |

### Search Logic

- Two conditions can be combined with `AND` or `OR` logic
- Each condition supports **Broad match** (`LIKE '%term%'`) or **Exact match** (`=`)
- Numeric fields always use exact equality regardless of match type

### Inline Quick-Update API

`POST /waravel/pages/quick-update/{id}` with `{ field, value }`

Updates a single field (status or visibility) via AJAX without page reload. Returns JSON success/error.

### Bulk Action API

`POST /waravel/pages/bulk-action` with `{ action, page_ids[] }`

| Action | View | Effect |
|---|---|---|
| `trash` | Active pages | Soft-deletes selected pages |
| `publish` | Active pages | Sets status to "Published" |
| `restore` | Trash view | Restores soft-deleted pages |
| `force_delete` | Trash view | Permanently deletes pages |

### Slug Generation API

`POST /waravel-generate-slug` with `{ title, parent_id? }`

1. Generates slug via `Str::slug($title)`
2. Checks uniqueness within the same parent scope
3. Appends numeric suffix if collision found (`my-page-2`, `my-page-3`)
4. Returns `{ slug, conflict: bool }`

---

## Hierarchical Tree Rendering

When `hierarchical=true` is passed to the index, `PagesController::renderHierarchyPages()` generates a recursive HTML tree. Each level adds `&nbsp;` indentation and `─` connector markers. Pagination is disabled in this mode.

---

## View Architecture

### Index View (`pages/index.blade.php` — 781 lines)

- 11 sortable table columns with sticky header
- Per-row checkboxes with select-all
- Inline `<select>` dropdowns for live status/visibility editing
- Row hover actions: View, Edit, Edit with Builder (conditional), Trash/Restore/Delete
- Dual search form with dynamic width expansion
- Black header / amber text design (`#000000` / `#fbbf24`)

### Create View (`pages/create.blade.php` — 1,830 lines)

Two-column layout (75% content / 25% sidebar):

**Left column**: Title, slug (auto-generated, editable), editor mode tabs (Standard/Builder), TinyMCE WYSIWYG with media insertion, tag autocomplete with inline creation, schema markup editor (JSON)

**Right column**: Parent page ID, SEO fields (meta title, meta description), featured image selector, status/visibility dropdowns, password field (conditional), template selector, template config checkboxes (canvas mode, header, footer, banner, breadcrumbs)

**Media Gallery Modal**: Full-screen overlay with upload form (XHR + progress bar), 10-column thumbnail grid, pagination, multi-select with green checkmarks

### Edit View (`pages/edit.blade.php` — 2,466 lines)

Extends Create with: pre-populated fields, live URL display, "Update Page" button, existing tag/schema pre-population, featured image preview with remove button.

### Anti-Double-Submit

Submit button disables and shows "Processing..." after first click to prevent duplicate form submissions.
