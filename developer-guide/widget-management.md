# Widget Management Internals

Widgets (`src\Models\Widget.php`) are reusable UI components that can be placed in various regions of the frontend layout or the dashboard.

## Widget Architecture

Each widget consists of:
1. **A Database Record:** Storing settings, type, and active status.
2. **A Class/Component:** The logic handling the data retrieval and processing.
3. **A View:** The Blade or Livewire template for rendering.

## Registration

Plugins and core systems register widgets during the boot phase:

```php
use Sobberrc\Waravel\Facades\Widget;

Widget::register('weather', WeatherWidget::class);
```

## Rendering Lifecycle

When a theme region is rendered, the Widget Engine queries all active widgets assigned to that region.
It then instantiates the respective widget classes, passes the configuration payload, and outputs the rendered HTML.

## Caching

Widgets heavily utilize Laravel's cache. By default, widget output is cached based on its configuration signature unless explicitly marked as dynamic.
