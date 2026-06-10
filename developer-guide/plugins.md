<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Plugin Development

Waravel's plugin system allows developers to extend the core application's functionality without modifying the core files. Plugins can introduce new routes, controllers, database tables, and dashboard views.

## Architecture & Bootstrapping

Plugins reside in the `plugins/` directory of the host application.

When the Laravel application boots, the Waravel core `PluginServiceProvider` scans this directory. For every active plugin, it loads the plugin's root `ServiceProvider`.

A standard plugin structure looks like this:

```
plugins/
└── sobberrc/
    └── page-promoter/
        ├── src/
        │   ├── Providers/
        │   │   └── PluginServiceProvider.php
        │   ├── Http/
        │   │   └── Controllers/
        │   └── Models/
        ├── resources/
        │   └── views/
        ├── database/
        │   └── migrations/
        ├── routes/
        │   └── web.php
        └── plugin.json
```

## The `plugin.json` Manifest

Every plugin requires a `plugin.json` file. This is the metadata file the Marketplace and Auto-Pilot system read to determine versions and dependencies.

```json
{
    "name": "sobberrc/page-promoter",
    "displayName": "Page Promoter Pro",
    "version": "1.2.0",
    "description": "Advanced Google Ads API integration.",
    "require": {
        "sobberrc/waravel": "^2.0.0"
    },
    "providers": [
        "Sobberrc\\PagePromoter\\Providers\\PluginServiceProvider"
    ]
}
```

## Creating a Plugin

1.  **Generate Scaffold:** You can use the provided artisan commands to scaffold a new plugin or manually create the directory structure above.
2.  **Register Routes:** Define your routes in `routes/web.php` and load them in your Service Provider.
3.  **Publish Assets:** If your plugin has CSS/JS assets, register them in your Service Provider's `boot` method so they can be published to the public directory during installation.

> [!CAUTION]
> Plugins must never directly modify the database tables owned by the core `waravel` package. Instead, rely on Laravel relationships or add separate tables linked by foreign keys.
