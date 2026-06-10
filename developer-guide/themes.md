<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Theme Engine Architecture

Themes in Waravel dictate the entire frontend visual presentation of a site. The theme engine is built on top of Laravel Blade but introduces a hierarchical override system.

## Structure

Themes are placed inside the `themes/` directory of the application root.

```
themes/
└── twenty-twenty-six/
    ├── partials/
    │   ├── header.blade.php
    │   └── footer.blade.php
    ├── layouts/
    │   └── master.blade.php
    ├── css/
    │   └── index.css
    └── theme.json
```

## The View Cascade

When the `PagesController` attempts to render a view, it uses a cascading resolution system:

1.  **Active Theme:** It first checks if the requested view exists in the active theme folder (e.g., `themes/twenty-twenty-six/layouts/master.blade.php`).
2.  **Core Package:** If the file does not exist in the active theme, it falls back to the default views shipped inside the Waravel core package (`packages/sobberrc/waravel/resources/views/`).

This means a theme developer only needs to include the files they explicitly want to override.

## The `theme.json` Manifest

Similar to plugins, every theme must declare its metadata.

```json
{
    "name": "twenty-twenty-six",
    "displayName": "Twenty Twenty-Six Classic",
    "version": "1.0.0",
    "description": "The default modern layout for Waravel.",
    "screenshot": "screenshot.png"
}
```

## Assets and Compiling

Themes should include their own CSS and JS. We highly recommend using Tailwind CSS and Vite. During theme development, assets inside the theme directory must be built and linked correctly. Waravel automatically creates symlinks or copies assets from the active theme into the public `dist/` directory during theme activation.
