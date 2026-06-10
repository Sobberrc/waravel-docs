<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Theme Engine Reference

Technical reference for the Waravel theming architecture: file structure, customizer logic, CSS compilation, and asset security.

---

## Theme File Structure

Each theme lives in the `themes/` directory at the application root:

```
themes/{slug}/
├── theme.json          # Metadata (name, version, author, description)
├── layouts/            # Blade layouts (e.g., base.blade.php)
├── skins/              # Schema (default.json) and saved skins
├── css/ / js/ / assets/
```

### The `theme.json` Manifest

```json
{
    "name": "twenty-twenty-six",
    "displayName": "Twenty Twenty-Six Classic",
    "version": "1.0.0",
    "description": "The default modern layout for Waravel.",
    "screenshot": "screenshot.png"
}
```

### The View Cascade

Waravel uses a cascading resolution system for views:
1.  **Active Theme:** Checks `themes/{slug}/views/`.
2.  **Core Package:** Falls back to `packages/sobberrc/waravel/resources/views/`.

Views are registered under the `theme` namespace: `theme::{slug}.layouts.base`.

---

## Theme Skin System (Customizer)

### Storage
- `waravel_theme_skins` table stores JSON payloads keyed by `theme_slug`.
- Only one skin per theme can be `is_active`.

### Compilation Pipeline (`ThemeSkinService`)
1. **Recursion**: Iterates JSON payload.
2. **Variable Mapping**: Map keys to `--wv-` prefixed CSS variables.
3. **Sanitization**: `strip_tags()` on all values.
4. **Output**: Written to `storage/app/public/waravel/skins/{theme-slug}.css`.

### Delivery Mechanism
- `@themeSkin` directive in Blade.
- Fallback 1: `<link>` tag if symlink exists.
- Fallback 2: Inline `<style>` if file exists but symlink is missing.
- Fallback 3: HTML comment error if all fail.

---

## Asset Security (`AssetController`)

Multi-layer protection for serving package/theme assets:
1. **Canonicalization**: `realpath()` to prevent `../` traversal.
2. **Root Whitelisting**: Path must start with `public/`, `storage/app/public/`, or `themes/`.
3. **MIME Mapping**: Manual extension-to-MIME map.
4. **Caching**: `Cache-Control: public, max-age=31536000`.

---

## Widget & Layout Backend

### Areas
12 hard-coded theme zones (header, footer, sidebars, content-before/after, etc.).

### Layout Studio (`WidgetStudioController`)
- **Protected Defaults**: `default-layout.json` remains read-only.
- **User Payloads**: Database-stored JSON keyed by theme slug.
- **Resolution**: `WidgetLayoutService` maps widget IDs to content for rendering.
