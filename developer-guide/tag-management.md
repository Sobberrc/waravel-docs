<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# TagController Reference

Technical reference for the Waravel Tag system: dual-controller architecture, AJAX APIs, validation, deletion protection, model scopes, and view architecture.

---

## Controller Architecture

Tags use **two separate controllers**:

### Dashboard TagController (`Dashboard/TagController.php` — 364 lines)

| Method | Route | HTTP | Purpose |
|---|---|---|---|
| `index()` | `waravel.tags.index` | GET | Paginated listing (20/page) with search and sort |
| `store()` | `waravel.tags.store` | POST | AJAX: creates a tag, auto-generates slug if empty |
| `show($tag)` | `waravel.tags.show` | GET | Tag detail with associated pages |
| `edit($tag)` | `waravel.tags.edit` | GET | Edit form view |
| `update($tag)` | `waravel.tags.update` | PUT | AJAX: updates tag (JSON body) |
| `destroy($tag)` | `waravel.tags.destroy` | DELETE | AJAX: deletes tag — **blocks if tag has pages** |
| `bulkDelete()` | `waravel.tags.bulk-delete` | POST | AJAX: bulk delete — skips tags with pages |
| `stats()` | — | GET | JSON stats endpoint |
| `search()` | — | GET | AJAX autocomplete: min 2 chars, limit 10 |

### Public TagController (`TagController.php` — 160 lines)

| Method | Route | HTTP | Purpose |
|---|---|---|---|
| `index()` | — | GET | All tags with page counts |
| `show($slug)` | — | GET | Tag archive: published/public pages (paginated 10). Validates slug: `^[a-z0-9-]+$` |
| `popular()` | — | GET | AJAX: popular tags. Rate limited: 100 req/min per IP |
| `search()` | — | GET | AJAX: LIKE search on name and slug |
| `store()` | — | POST | AJAX: create with auto-slug |

---

## Tag Model

### Database Table: `waravel_tags`

| Field | Type | Description |
|---|---|---|
| `name` | varchar | Display name (required, max 255) |
| `slug` | varchar | URL slug (unique, max 255) |
| `description` | text | Optional (max 1000) |
| `wp_permalink` | varchar | Original WordPress URL |
| `wp_id` | int | WordPress tag ID |

### Pivot: `waravel_page_tag` — `page_id` + `tag_id`

### Scopes: `withPageCount()`, `popular($limit)`, `recent($limit)`

---

## Deletion Protection

`destroy()` blocks deletion of tags with associated pages:
```
"Cannot delete tag 'X' because it has N associated page(s)."
```

Bulk delete skips such tags and reports errors.

## Validation

Store: `name` required|max:255, `slug` nullable|unique, `description` nullable|max:1000

## View Architecture

- **Index** (378 lines): Search, sort, data table, create modal (AJAX), bulk select/delete, notifications
- **Show** (245 lines): Two-column — metadata + associated pages table with status badges
- **Edit** (247 lines): AJAX PUT form, auto-generate slug button, field-level error display
