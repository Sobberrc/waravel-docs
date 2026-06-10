<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# PagePromoter: Technical Reference

Technical documentation for the PagePromoter and PagePromoter Pro suite: OAuth integration, automation engines, and audit logging.

---

## Architecture Overview

PagePromoter is built as a two-tier system: a base integration layer and a premium automation engine.

### Standard Layer (`PagePromoter`)
- **Google Ads OAuth**: Implements the Google Ads API client using OAuth2. Authentication settings are stored securely in the plugin's encrypted settings.
- **Manual API Dispatch**: Handles the `PagePromoterController@promote` action, which pushes page metadata to the Google Ads API.
- **Connection Diagnostic**: The `/test-connection` endpoint validates the Developer Token and Refresh Token.

### Pro Layer (`PagePromoterPro`)
- **Search Console Integration**: Pulls organic performance data to identify ad targets.
- **Auto-Pilot Command**: `pp-pro:run-autopilot` is the core engine. It parses performance data and generates `Campaign`, `AdGroup`, and `Ad` records via the Google Ads API.

---

## Background Processing

The Pro engine registers an hourly task in the Laravel scheduler:

```php
$schedule->command('pp-pro:run-autopilot')
    ->hourly()
    ->withoutOverlapping()
    ->onOneServer();
```

---

## Database & Logging

### Audit Table: `pp_pro_logs`

| Field | Type | Description |
|---|---|---|
| `type` | string | `auto` (Background) or `manual` (User-triggered) |
| `query` | string | The search keyword that triggered the ad |
| `page_url` | string | The destination page on the Waravel site |
| `campaign_id` | string | The ID returned by Google Ads |
| `status` | string | `success` or `failed` |
| `message` | text | Full error response from the Google API for debugging |

---

## Configuration Settings

- `auto_pilot_enabled`: Global boolean switch for the background engine.
- `auto_pilot_limit`: Integer limit on the number of ads generated per day.
- `google_ads_developer_token`: Required for API authentication.
