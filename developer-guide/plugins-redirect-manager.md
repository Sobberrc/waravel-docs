<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# RedirectManager: Technical Reference

Technical documentation for the RedirectManager plugin: middleware interception, analytics logging, and 404 monitoring.

---

## Interception Logic

The RedirectManager operates at the middleware level of the HTTP lifecycle. This ensures that redirects are processed as early as possible, before Laravel's primary router attempts to resolve the request.

### Middleware Implementation
The plugin registers a `RedirectMiddleware` that:
1. Canonicalizes the current request path.
2. Queries the `url_redirects` table for an exact match on `source_url`.
3. If an active match is found:
    - Increments the `hit_count`.
    - Logs the visit details (IP, UA, Referrer) to `url_redirect_logs`.
    - Dispatches a redirect response with the configured `status_code`.

---

## Database Schema

### `url_redirects`
Stores the mapping between source and target URLs.
- `status_code`: Supports 301, 302, 307, 308.
- `is_active`: Boolean switch for the middleware.

### `url_redirect_404_logs`
Tracks non-matching requests that result in a 404 error.
- Aggregates hits by URL to identify high-priority links for correction.
- Used by the dashboard to provide the "One-Click Fix" functionality.

---

## Performance Considerations

- **Indexing**: Both `source_url` and the 404 `url` are indexed to ensure that the middleware check remains high-performance even with thousands of redirects.
- **Log Aggregation**: 404 hits are aggregated in the database rather than creating a new record for every hit, preventing log table bloat.

---

## Bulk Operations

The `RedirectController` handles CSV imports. It uses a chunked processing approach to handle large files without exceeding memory limits. All imported URLs are automatically sanitized to ensure they are relative to the site root.
