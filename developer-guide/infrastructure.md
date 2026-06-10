<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Infrastructure & Ecosystem Reference

Technical reference for the Waravel backend systems: Update Centre, Queue Manager, Plugin Manager, Marketplace, and Service Provider.

---

## 1. Core Resources (`MaintenanceController`)

The Maintenance Center provides tools for system recovery and low-level resource management via the **Core Resources** tab.

### Extraction & Reset (Publishing)
- **Extract (Publish)**: Allows developers to copy package resources to the local application using `Artisan::call('vendor:publish')`. This is the primary method for **overwriting** default package logic:
    - **Views**: Publish the `waravel-views` tag to override the UI in `resources/views/vendor/waravel`.
    - **Configs**: Publish `waravel-config` to customize engine behavior in `config/waravel.php`.
    - **Assets**: Re-publish `waravel-assets` to sync public JS/CSS files after updates.
- **Reset Resources**: Deletes local overrides to revert to the core package state.



### System Diagnostics
- **Scheduler Heartbeat**: Monitored via a timestamp in `waravel_settings` updated by the `waravel:schedule-run` command.
- **Log Explorer**: Uses the `tail` logic to read the last `N` lines of `storage/logs/laravel.log`. Performance is O(1) relative to file size as it reads from the end of the file.

---

## 2. Update Centre (`UpdatesController` + `UpdateService`)

### Version Resolution
- **Current Version**: Detected from `composer.json` or `composer.lock`. Falls back to `0.0.0`.
- **Latest Version**: Fetched from Portal API or Satis Repo. Filters beta versions based on `core_early_access` setting.

### Core Update Pipeline (`performCoreUpdate`)
1. **Resolve**: Target version and URL.
2. **Download**: Authenticated GET request with 300s timeout.
3. **Integrity Check**: SHA-256 or SHA-1 verification.
4. **ZIP Security**: `validateZipSecurity()` checks for Zip Slip and bombs.
5. **Extraction**: `ZipArchive` extraction to package root.
6. **Cache Flush**: Clears Blade, config, route, app caches, and OPcache.
7. **Auto-Migrate**: `migrate --force`. Sets `migration_pending` setting on failure.

---

## 3. Queue Manager (`QueueManagerController`)

### OS-Aware Processing
- **Linux/macOS**: `nohup php artisan queue:work &`
- **Windows**: `start /B php artisan queue:work`
- PID tracking for all processes.

---

## 4. Plugin Manager (`PluginController`)

### Lifecycle Methods
- `index`, `upload`, `activate`, `deactivate`, `delete`, `update`, `info`, `launch`, `getHooks`, `register`, `cleanupDatabase`.

### Security & Licensing
- Entitlement checks via `EntitlementManager::has()`.
- Unauthorised access returns 403 or upgrade required view.

---

## 5. Service Provider Architecture (`WaravelServiceProvider`)

The central orchestrator.

### `register()` Phase
- Merges configs.
- Registers core singletons (Waravel, ImageManager, HookManager, PluginManager, etc.).

### `boot()` Phase
- License verification.
- Route loading (main + programmatic).
- View namespaces (`waravel`, `theme`).
- Blade components and directives.
- Migration discovery and command registration.
- Plugin loading.
