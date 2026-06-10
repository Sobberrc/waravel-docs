<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# PageCleaner: Technical Reference

Technical documentation for the PageCleaner and PageCleaner Pro suite: pruning engines, GSC integration, and automated maintenance tasks.

---

## Pruning Engines

PageCleaner implements two distinct engines for identifying content to be removed.

### Local Engine (`PageCleaner`)
- **Query Strategy**: Performs a `where` query on the `waravel_pages` table using `published_at`, `status`, and `slug` (prefix matching).
- **Parameters**: 
    - `local_auto_prune_min_age_days`: Minimum age before a page is eligible for deletion.
    - `target_prefixes`: Array of URL prefixes to scan.
- **Action**: Can be configured to perform a `delete()` (permanent) or `trash()` (soft-delete).

### Analytics Engine (`PageCleanerPro`)
- **GSC Integration**: Fetches performance metrics via the Google Search Console API.
- **Threshold Logic**:
    - `auto_prune_max_clicks`: Pages with clicks below this value are flagged.
    - `auto_prune_max_impressions`: Pages with impressions below this value are flagged.
- **Structural Safeguard**: The `auto_prune_min_pages` setting acts as a safety floor, preventing the total page count from dropping below a specified number.

---

## Automated Maintenance

The cleanup tasks are registered in the Laravel scheduler:

### Daily Local Scan
```php
$schedule->command('waravel:page-cleaner:auto-prune-local')
    ->daily();
```

### Analytics-Based Scan (Pro Only)
The Pro version adds a secondary task that verifies external data before executing:
```php
$schedule->command('waravel:page-cleaner:auto-prune-gsc')
    ->weeklyOn(1, '00:00'); // Weekly on Mondays
```

---

## Configuration

Settings are stored in the `waravel_settings` table:
- `page_cleaner_frequency`: `daily`, `weekly`, `monthly`.
- `page_cleaner_dry_run`: If enabled, logs the pages to be deleted without actually removing them (simulated execution).
