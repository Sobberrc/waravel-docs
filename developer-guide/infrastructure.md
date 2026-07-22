# Infrastructure & Core Services

The Waravel Core package (`sobberrc/waravel`) provides the foundational infrastructure for the entire CMS.

## Service Provider

The `WaravelServiceProvider` (`src\WaravelServiceProvider.php`) is the heart of the system.
It handles:
- Registering Configs and Views.
- Loading Migrations and Translations.
- Booting the Event Listeners.
- Registering Facades and Singleton services.

## Plugins Architecture

Plugins extend Waravel by dropping into the `plugins/` directory.
The infrastructure automatically scans, registers, and boots valid plugins, merging their routes, views, and configurations into the main lifecycle.

## Job Processing

Background tasks like imports (`src\Models\ImportJob.php`) and heavy media processing are dispatched to the Laravel queue. Developers should ensure the host application has a robust queue driver (e.g., Redis, Beanstalkd) configured.

## Events & Listeners

The event bus (`src\Events`, `src\Listeners`) is heavily utilized to decouple systems.
For example, caching listeners subscribe to model save events to purge cache automatically without tying the logic directly to the models.
