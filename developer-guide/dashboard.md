<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Dashboard & Settings Reference

Technical reference for the Waravel Dashboard (entry point), the Key-Value Settings system, and the Maintenance Centre.

---

## Dashboard Architecture

The dashboard is the central administration interface, powered by a combination of controllers and global View Composers.

### Dashboard Controller (`DashboardController.php`)

| Method | Route | HTTP | Purpose |
|---|---|---|---|
| `index()` | `waravel.dashboard` | GET | Renders the primary dashboard view (`waravel::dashboard.index`) |

### Dashboard View Composers

The `WaravelServiceProvider` registers several View Composers that inject live data into every dashboard render (sidebar and base layouts):

- **Update Badge Composer**: Attached to `dashboard-sidebar` and `dashboard-base`. It calls `$updateService->getUpdateCount()` to display the total number of core and plugin updates.
- **Heartbeat Detection Composer**: Monitors system health by checking the `waravel_last_heartbeat` setting. If the timestamp is older than 5 minutes, it flags `$heartbeatMissing`.
- **Active Theme Composer**: Resolves the display name of the current theme by reading `active_theme` or parsing the `default_layout` setting.
- **Core Update Banner**: Checks if the core version is outdated and injects version metadata into the top banner of every page.

### System Heartbeat
A scheduled task runs every minute to pulse the system:
```php
$schedule->call(function () {
    DB::table('waravel_settings')->updateOrInsert(
        ['key' => 'waravel_last_heartbeat'],
        ['value' => now()->toDateTimeString(), 'updated_at' => now()]
    );
})->everyMinute();
```

---

## Settings System

Waravel uses a unified Key-Value storage system for application configuration, stored in the `waravel_settings` table.

### Setting Model (`Sobberrc\Waravel\Models\Setting`)

| Method | Description |
|---|---|
| `get($key, $default)` | Retrieves a value. Returns `$default` if key doesn't exist |
| `set($key, $value)` | `updateOrCreate` logic to persist a value as a string |

### Common Setting Keys

| Key | Purpose |
|---|---|
| `default_layout` | Blade path for the site layout (e.g., `theme::default.layouts.base`) |
| `active_theme` | The slug of the currently active theme |
| `core_auto_update` | Flag for the Auto-Pilot update system |
| `core_early_access` | Flag for opting into Beta releases |
| `migration_pending` | Flag indicating a pending database update |

---

## Maintenance Centre (`MaintenanceController.php`)

Provides a web-based interface for system maintenance, file management, and logs.

### Command Execution Whitelist
A strict whitelist defines allowed Artisan commands to prevent arbitrary code execution:
- `vendor:publish` (with specific tags: `waravel-config`, `waravel-package`, etc.)
- `config:clear`, `route:clear`, `view:clear`, `cache:clear`, `optimize:clear`

### File Scanner & Reset
- **Scanner**: Recursively scans `config`, `views`, `assets`, and `routes` directories to list published files.
- **Reset**: Allows granular deletion of specific published files or "nuclear" deletion of entire categories. Implements strict **Path Traversal Protection** via `realpath()` and `str_starts_with()` checks.

### Log Viewer
- Efficiently reads the last 500 lines of any `.log` file using an `fseek`-based tail reader (prevents OOM errors on large logs).
- Filenames are regex-validated to prevent directory traversal.

---

## Security & Self-Healing

### Middleware Stack
- `auth:waravel`: Core authentication guard.
- `WaravelAdminAccess`: Permission check.
- `VerifyLicense`: Enforces license validity on all dashboard routes.
- `waravel.store.intended`: Stores URL for post-login redirection.

### Self-Healing Exception Handler
The Service Provider intercepts `QueryException` errors. If a "Table not found" or "Column not found" error occurs on a `waravel` route, the system automatically redirects the user to the Update Centre to run pending migrations.

### Login Security Events
Listens for `Login` and `Failed` auth events to dispatch security notifications (new login alerts and brute-force detection).

### Database Charset Override
If `waravel.database.emoji_support` is enabled, the provider dynamically reconfigures the connection to `utf8mb4` during boot.
