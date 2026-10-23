<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Theme Engine API & Architecture

The **Theme Engine** is Waravel's presentation layer, managing structural layouts, visual CSS skins, widget drop zones, and dynamic template rendering.

---

## 1. Directory Structure & Manifest (`theme.json`)

Themes reside in `themes/{theme-name}/` or within custom vendor packages. Every valid theme requires a `theme.json` manifest:

```json
{
  "name": "TwentyTwentySix",
  "slug": "twentytwentysix",
  "version": "1.0.0",
  "author": "Sobberrc",
  "description": "Modern minimalist corporate theme with full responsive widget zones.",
  "default_skin": "default",
  "default_layout": "base",
  "layouts": {
    "base": "layouts/base.blade.php",
    "canvas": "layouts/canvas.blade.php"
  },
  "widget_zones": [
    "topbar",
    "header-main-left",
    "header-main-right",
    "sidebar-left",
    "sidebar-right",
    "footer-1",
    "footer-2",
    "footer-3",
    "footer-copyright"
  ]
}
```

---

## 2. Database Models & Schema

The Theme Engine persists state across two primary Eloquent models:

### A. `ThemeLayout` Model (`waravel_theme_layouts`)
Controls the structural placement of content widgets across registered zones:
```sql
CREATE TABLE `waravel_theme_layouts` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `theme_id` VARCHAR(100) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `data` JSON NOT NULL, -- Stores zone-to-widget IDs mapping
    `is_active` TINYINT(1) DEFAULT 0,
    `is_protected` TINYINT(1) DEFAULT 0,
    `created_at` TIMESTAMP NULL,
    `updated_at` TIMESTAMP NULL,
    INDEX (`theme_id`, `slug`)
);
```

### B. `ThemeSkin` Model (`waravel_theme_skins`)
Controls CSS custom property tokens, branding colors, typography, and responsive spacing:
```sql
CREATE TABLE `waravel_theme_skins` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `theme_id` VARCHAR(100) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `data` JSON NOT NULL, -- Brand colors, font sizes, margins, custom CSS
    `is_active` TINYINT(1) DEFAULT 0,
    `is_protected` TINYINT(1) DEFAULT 0,
    `created_at` TIMESTAMP NULL,
    `updated_at` TIMESTAMP NULL,
    INDEX (`theme_id`, `slug`)
);
```

---

## 3. Dynamic Skin Compilation Pipeline

When a page request resolves, the `ThemeManager` loads the active `ThemeSkin` JSON data and compiles CSS custom variables directly into the document `<head>`:

```php
namespace Sobberrc\Waravel\Services;

class ThemeManager
{
    public function renderSkinCss(ThemeSkin $skin): string
    {
        $data = $skin->data;
        $css = ":root {\n";
        
        // Brand Colors
        foreach ($data['colors'] ?? [] as $key => $val) {
            $css .= "  --wv-color-{$key}: {$val};\n";
        }
        
        // Responsive Spacing Tokens
        foreach ($data['spacing']['desktop'] ?? [] as $zone => $values) {
            $css .= "  --wv-space-{$zone}-top: {$values['top']};\n";
            $css .= "  --wv-space-{$zone}-bottom: {$values['bottom']};\n";
        }
        
        $css .= "}\n";
        
        // Additional Custom CSS overrides
        if (!empty($data['additional_css'])) {
            $css .= "\n/* User Overrides */\n" . $data['additional_css'];
        }
        
        return $css;
    }
}
```

---

## 4. Blade Structural Layouts & Widget Slots

Theme layouts leverage Waravel's `@widgetZone` directive to render assigned widgets into designated DOM regions:

```blade
{{-- themes/twentytwentysix/layouts/base.blade.php --}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {!! Theme::seoTags($page) !!}
    <style>{!! Theme::activeSkinCss() !!}</style>
</head>
<body class="theme-{{ Theme::activeSlug() }}">
    {{-- Top Bar Zone --}}
    @if(Theme::topbarEnabled())
        <div id="site-topbar" class="wv-topbar-wrapper">
            @widgetZone('topbar')
        </div>
    @endif

    {{-- Main Header --}}
    <header id="site-header">
        <div class="header-left">@widgetZone('header-main-left')</div>
        <div class="header-right">@widgetZone('header-main-right')</div>
    </header>

    {{-- Main Content Canvas --}}
    <main id="site-main" class="container">
        @yield('content')
    </main>

    {{-- Footer Multi-Column --}}
    <footer id="site-footer">
        <div class="footer-col-1">@widgetZone('footer-1')</div>
        <div class="footer-col-2">@widgetZone('footer-2')</div>
        <div class="footer-col-3">@widgetZone('footer-3')</div>
        <div class="footer-bottom">@widgetZone('footer-copyright')</div>
    </footer>
</body>
</html>
```

---

## 5. Programmatic API Reference

```php
use Sobberrc\Waravel\Facades\Theme;

// Get the currently active theme model
$activeTheme = Theme::active();

// Activate a theme by slug (switches layouts and default skin automatically)
Theme::activate('twentytwentysix');

// Retrieve all available skins for a theme
$skins = Theme::skins('twentytwentysix');

// Programmatically clone a protected skin to an editable branch
$newSkin = Theme::cloneSkin($skinId, 'Summer Campaign 2026');

// Purge theme cache and trigger frontend recompile
Theme::clearCache();
```
