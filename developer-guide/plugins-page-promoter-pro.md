# PagePromoterPro Developer Guide

## Architecture Overview
PagePromoterPro extends the capabilities of the base PagePromoter plugin, introducing automated console commands and advanced services.

### Plugin Registration
Registered via `PagePromoterProPlugin.php`, which ensures that both the Pro routes and the background commands are properly loaded.

### Console Commands
- `RunAutoPilotAds`: Located in `Console\Commands\RunAutoPilotAds.php`. This command should be scheduled to run periodically (e.g., via a cron job). It evaluates current ad performance and makes automated adjustments based on user-defined rules.

### Services
- `AutoPilotService`: Contains the core logic for the AutoPilot feature. It interacts with the `GoogleAdsService` (from the base plugin) to adjust bids, pause underperforming ads, or scale up successful ones.

### Database Migrations
- `2026_06_04_000001_rename_pp_pro_logs_table.php`: Updates the database schema to support advanced logging capabilities for AutoPilot actions. Ensure this migration is run upon installing the Pro version.
