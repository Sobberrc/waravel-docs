<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# WidgetController Reference

Technical reference for the Waravel Widget system: controller methods, Widget Studio (Alpine.js + SortableJS), drag-and-drop, layout versioning, and model architecture.

---

## WidgetController (`src/Http/Controllers/WidgetController.php` — 103 lines)

**Dependencies**: `WidgetService` (constructor-injected)

| Method | Route | HTTP | Purpose |
|---|---|---|---|
| `index()` | `waravel.widgets.index` | GET | Widget list for selected area. Validates area key against whitelist |
| `store()` | `waravel.widgets.store` | POST | Creates widget. Auto-increments `position` if not set |
| `update($widget)` | `waravel.widgets.update` | PUT | Updates widget title, content, area, position, active |
| `destroy($widget)` | `waravel.widgets.destroy` | DELETE | Deletes a widget |
| `reorder()` | — | POST | AJAX: reorders via `{ order: [id1, id2, ...] }` |

### 12 Predefined Widget Zones

| Key | Label | Group |
|---|---|---|
| `header-top-left` | Top Bar Left | Header |
| `header-top-center` | Top Bar Center | Header |
| `header-top-right` | Top Bar Right | Header |
| `header-main-left` | Header Main Left | Header |
| `header-main-center` | Header Main Center | Header |
| `header-main-right` | Header Main Right | Header |
| `sidebar-left` | Left Sidebar | Sidebar |
| `sidebar-right` | Right Sidebar | Sidebar |
| `footer-1` through `footer-4` | Footer Columns 1–4 | Footer |

### Validation

`title`: nullable|max:255, `content`: required|string, `area`: required|string, `position`: nullable|integer, `active`: boolean (checkbox)

---

## Widget Model

### Database Table: `waravel_widgets`

| Field | Type | Default | Description |
|---|---|---|---|
| `title` | varchar | NULL | Optional display title |
| `content` | longtext | NULL | HTML or shortcode content |
| `area` | varchar | `sidebar-primary` | Widget zone key |
| `layout_slug` | varchar | NULL | Associated layout |
| `position` | int | 0 | Sort order within area |
| `active` | tinyint | 1 | Whether rendered on public site |
| `type` | varchar | `html` | Widget type identifier |
| `settings` | longtext | NULL | JSON settings |
| `deleted_at` | timestamp | NULL | Soft delete |

### Scope: `area($area)` — filters by area, ordered by position

---

## Widget Studio (`widgets/studio.blade.php` — 590 lines)

Standalone full-page layout editor. Tech stack: **Alpine.js** (reactive state), **SortableJS** (drag-and-drop), **TailwindCSS CDN**.

### Alpine.js State (`widgetStudio()`)

| Property | Type | Description |
|---|---|---|
| `isDarkMode` | boolean | Theme (persisted in `localStorage`) |
| `layoutSlug` | string | Current layout identifier |
| `payload` | object | Zone→widget ID mapping: `{ 'header-main-left': [1, 3] }` |
| `allWidgets` | object | All widgets keyed by ID |
| `initialPayload` | string | JSON snapshot for change detection |
| `isActiveOnSite` | boolean | Whether layout is live |
| `hasUnsavedChanges` | computed | Compares current vs initial payload |
| `isPreviewCollapsed` | boolean | Preview panel state |
| `previewSize` | string | `desktop`, `tablet`, or `mobile` |
| `canRestore` | boolean | Whether localStorage draft exists |

### Key Methods

| Method | Description |
|---|---|
| `setupDragAndDrop()` | Initializes SortableJS — drawer (clone mode) + zone drop areas |
| `removeWidget(area, id)` | Filters widget ID from area payload |
| `saveLayout(asNew)` | POST to `themes.widget-studio.save`. Prompts for name if `asNew`. Clears draft |
| `activateLayout()` | POST to `themes.widget-studio.activate`. Blocks if unsaved changes |
| `updatePreview(area?)` | Reloads preview iframe with `wv_preview_layout` query param. Saves draft to localStorage |

### Draft Recovery

Drafts saved to `localStorage` key `waravel_layout_draft_{slug}_{layoutSlug}` on every preview update. Indigo recovery banner shown on load if draft exists.

### Default Layout Protection

Default layout is read-only (lock icon). Users must "Clone to Edit" to create an editable copy.

### Live Preview Panel

Collapsible full-screen overlay with device simulation:
- Desktop: 100% width
- Tablet: 768px, 14px border, rounded
- Mobile: 400×800px, 18px border, notch cutout

---

## View Architecture

### Index View (287 lines / 16 KB)

- 4-tab navigation (Header, Left Sidebar, Right Sidebar, Footer) with sub-area buttons
- Top Bar visibility toggle (localStorage-persisted)
- Widget table: Position, Title/Content preview, Active badge, Edit/Delete actions
- Create/Edit Modal (shared): switches between POST (create) and PUT (edit) via `_method` injection
- Content field accepts HTML and shortcodes (e.g., `[waravel-contact-form]`)

### Studio Zone Partial (`partials/studio-zone.blade.php` — 35 lines)

Reusable drop zone component. Shows zone label + machine key, dashed drop area, placed widgets with drag handles and remove buttons, "Empty Zone" placeholder.
