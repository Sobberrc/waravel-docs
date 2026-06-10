<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Plugin System Architecture

Waravel features a robust, isolated plugin architecture that allows for deep system integration while maintaining core stability.

---

## Plugin Lifecycle

Every plugin must extend the `Sobberrc\Waravel\Plugins\WaravelPlugin` base class and implement a `register()` and `boot()` method.

### 1. Registration (`register`)
- Runs early in the Laravel request lifecycle.
- Used for binding services into the container and merging configuration.
- **Note**: Database access should be avoided here as the connection may not be fully initialized.

### 2. Booting (`boot`)
- Runs after all providers are registered.
- Used for registering routes, loading views, and attaching event listeners.
- **Boot Guard**: Most core plugins implement a triple-guard (constant + static flag + re-entrant flag) to prevent duplicate loading during complex service provider chains.

---

## Technical Integration Points

### Database Migrations
Plugins manage their own tables. On activation, the `PluginController` triggers the plugin's internal migration logic. We recommend using a prefix (e.g., `pg_` for PageGenerator) to avoid collisions with the core `waravel_` tables.

### Route Namespacing
All plugin routes should be grouped under the `/waravel/plugins/{slug}` prefix and protected by the `auth:waravel` and `WaravelAdminAccess` middleware.

### Entitlement Enforcement
Premium features are gated by the `EntitlementManager`.
```php
if (!EntitlementManager::has('plugin-slug')) {
    // Register a 403 fallback route or hide UI elements
}
```

---

## Common Plugin Services

- **Hook Manager**: Allows plugins to tap into core events (e.g., `page_created`).
- **Shortcode Manager**: Enables plugins to register custom tags (e.g., `[my-plugin-widget]`) for use in the Page Editor.
- **Update Centre Integration**: Plugins can hook into the update pipeline to receive automated updates from the Package Registry.

---

## The Dashboard Index View
The main plugins view (`waravel.plugins.index`) uses AJAX for all lifecycle actions (activate, deactivate, update, delete). It parses each plugin's `plugin.json` manifest to display versioning, authorship, and status.
