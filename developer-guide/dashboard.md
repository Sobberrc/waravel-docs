# Dashboard API & Internal Architecture

The Waravel Dashboard serves as the central hub for administrative operations, providing developers with hooks and events to inject custom metrics, widgets, and analytics.

## Core Concepts

The dashboard operates on a widget-based architecture powered by Livewire components and Alpine.js, integrated directly into the `WaravelServiceProvider`.

### Extending the Dashboard

Developers can register custom widgets to appear on the dashboard by leveraging the `DashboardWidget` facade or injecting into the `dashboard.widgets` config array.

### Events & Hooks

The dashboard emits several events during its lifecycle:
- `DashboardLoading`: Fired before widgets are initialized.
- `DashboardLoaded`: Fired once all widgets and metrics are successfully loaded.

## Analytics Integration

By default, the dashboard can surface metrics from `Setting::class` and `Integration::class`. If analytics integrations (like Google Analytics) are active, the `dashboard` view fetches these metrics via specialized service classes.

## Customizing Layout

To modify the layout, you can override the published views or use the internal view composers registered in `WaravelServiceProvider`.
