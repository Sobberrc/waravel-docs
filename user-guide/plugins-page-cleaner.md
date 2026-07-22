# PageCleaner (User Guide)

The **PageCleaner** plugin is designed to help you permanently purge or trash underperforming, old, or unused content based on your local database criteria. It allows you to keep your Waravel site clean, preventing database bloat and maintaining a healthy URL structure.

## Dashboard Overview

Navigate to the PageCleaner Dashboard to perform manual scans or review your automation status.

### Status Cards
- **GSC Connection:** (Requires PRO) Displays whether Google Search Console is connected.
- **Automation Status:** Shows if your local (or GSC) scheduled auto-pruning tasks are active or paused.

### Local Database Scanner
The local scanner lets you filter pages currently stored in your database to decide what to clean.
- **Page Status:** Filter by Published, Draft, Pending Review, or Trashed.
- **Pages older than (Days):** Ignore pages younger than the specified age (e.g., 30 days) to prevent deleting fresh content.
- **Search Period:** Filter by creation date (All Pages, Created After, Created Before, Range).
- **Target Rules:** Specify URL patterns to *include* in the scan (e.g., `/blog/`). Supports "Contains" and "Equals To".
- **Protect Rules:** Specify URL patterns to *exclude* from the scan (e.g., `home`, `contact`, `login`). These will never be deleted.

### URL Restructuring (Advanced)
If you have the **RedirectManager** plugin active, you can enable URL Restructuring.
Normally, parent pages are protected from deletion if they have surviving children. By enabling this:
- Parent pages will no longer be protected.
- When a parent is deleted, its children move up one URL level.
- The plugin automatically writes a 301 redirect from the old child URL to the new one.

### Scan Results & Actions
After initializing a scan, the results table displays matching pages.
- Select the pages you want to clean.
- Choose an action from the dropdown: **Move to Trash (Safe)** or **Permanently Purge (All Data)**.
- Click **Execute Pruning**.

## Automation Settings

You can automate local page pruning via the Automation tab.
- **Enable Local Auto-Prune:** Turn on scheduled scans.
- **Frequency:** Daily, Weekly, or Monthly.
- **Schedule Time:** Set the specific time and day for the cron job to run.
- **Filters:** Apply the same filters (Status, Age, URL Prefix, Date Mode) to the automated scan.
- **Action:** Choose whether automated scans should Trash or Permanently Delete.

## Integration Settings
View and manage your integrations. While local scanning doesn't require APIs, the settings view allows you to see the status of integrations like Google Search Console (which requires PRO).
