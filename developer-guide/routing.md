<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Routing & Views

The Waravel routing engine intercepts requests to serve content dynamically based on the active theme, layout configurations, and database page models.

## Page Resolution

When a user visits a URL (e.g., `/about-us`):

1.  **Route Match:** The `PagesController@show` method catches the slug.
2.  **Database Lookup:** It queries the `pages` table for a matching slug.
3.  **Smart 404 Fallback:** If the exact slug isn't found, the Smart 404 mechanism kicks in to look for closely related slugs or misspellings before returning a branded 404 page.
4.  **Access Control:** The system checks the page's status (Public, Draft, Private, Password-Protected). Drafts and Private pages return restricted views unless an administrator is logged in.

## Dashboard Routing

The administrative interface is protected by the `waravel` auth guard and several core middlewares.

| Feature | Route Prefix | Controller Namespace |
|---|---|---|
| Pages | `/waravel/pages` | `Dashboard\PagesController` |
| Media | `/waravel/media` | `MediaController` |
| Tags | `/waravel/tags` | `Dashboard\TagController` |
| Widgets | `/waravel/widgets` | `WidgetController` |
| Themes | `/waravel/themes` | `ThemesController` |

### Core Middleware Stack

All dashboard routes pass through:
- `auth:waravel`: Ensures the user is authenticated as a Waravel administrator.
- `WaravelAdminAccess`: Checks for specific site-level permissions.
- `VerifyLicense`: Validates that the current installation has an active license for premium features.

## View Hierarchy

Waravel uses Laravel Blade but overrides the default pathing to prioritize the active **Theme**.

The rendering fallback order is:
1.  `themes/{active-theme}/views/`
2.  `packages/sobberrc/waravel/resources/views/` (Core Defaults)

This allows themes to safely override any core view without modifying package files.

## The `PageGenerator` Plugin

Routing interacts heavily with plugins like `PageGenerator`. If a page is marked as an aggregate or dynamically generated page, the router delegates the content rendering to the plugin's service classes rather than pulling a static block of HTML from the `content` database column.

