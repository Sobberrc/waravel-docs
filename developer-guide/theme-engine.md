# Theme Engine API

The Theme Engine manages layouts, skins, and frontend presentation. It utilizes `ThemeLayout` and `ThemeSkin` models.

## Theme Architecture

Themes in Waravel are structured using Blade templates and configuration files.

### ThemeLayout Model
Represents the structural foundation of a page (Header, Footer, Sidebars).
- Evaluated when a page route is resolved.

### ThemeSkin Model
Represents the visual styling (Colors, Typography, CSS Variables) applied over a layout.

## Hooks & Registration

Themes are registered within the `WaravelServiceProvider` or a dedicated theme service provider.
You can programmatically set the active theme:

```php
use Sobberrc\Waravel\Facades\Theme;

Theme::set('my-custom-theme');
```

## Fallback Mechanisms

If a view is not found in the active theme, Waravel's theme engine falls back to the default core views, ensuring the system remains functional even if a theme is incomplete.
