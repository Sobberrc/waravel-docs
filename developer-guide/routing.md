# Routing Architecture

Waravel employs a hybrid routing system combining static, explicitly defined routes and dynamic, database-driven catch-all routes.

## Core Routes

Core administrative and API routes are defined within the package's `routes/` directory and loaded via `WaravelServiceProvider`.
These include dashboard access, media endpoints, and REST APIs for plugins.

## Dynamic Routing

For the frontend, Waravel uses a fallback route mechanism.
If a URL does not match any registered static route, the request falls through to the dynamic router.

### The Catch-All Process
1. URL is matched against the `slug` column in the `pages` table.
2. If found, the `PageController` resolves the associated layout, widgets, and content.
3. If not found, a 404 response is returned.

## Caching & Performance

Dynamic routes are cached internally to prevent database hits on every request.
When a `Page` or `SeoMeta` is updated, the routing cache listener clears the relevant entries to ensure immediate updates.
