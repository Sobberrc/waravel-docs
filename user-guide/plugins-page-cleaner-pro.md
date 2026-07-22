# PageCleaner PRO (User Guide)

**PageCleaner PRO** enhances the base PageCleaner plugin by integrating with Google Search Console (GSC). This allows you to make data-driven pruning decisions based on real-world traffic, impressions, and clicks.

## GSC Performance Scanner

In the Dashboard, the PRO version unlocks the **GSC Performance Scanner** tab.

### Data Filters
- **Timeframe:** Analyze data from the Last Month, 3 Months, 6 Months, or 12 Months.
- **Pages older than (Days):** Protect new content by ignoring pages created recently.
- **Performance Metrics:**
  - **Less than (Clicks):** Target pages with low clicks.
  - **Less than (Impressions):** Target pages with low impressions.
  - **Not on the first (Pages):** Target pages that rank poorly (e.g., not in the top 2 pages of search results).
- **Target & Protect Rules:** Similar to the local scanner, specify URL patterns to include or exclude.
- **Zero-Impression Trap:** Option to include pages with 0 impressions (which may not even be indexed by Google).

### URL Restructuring
Just like the base plugin, you can enable URL Restructuring (requires RedirectManager) to safely delete parent pages and automatically create 301 redirects for their children.

## Automated GSC Pruning

In the Automation tab, PRO users can configure **GSC Auto-Prune**:
- Set frequency (Daily, Weekly, Monthly) and specific run times.
- Configure automatic deletion based on the performance thresholds (Clicks, Impressions, Ranking).
- Choose the action: Move to Trash or Permanently Purge.
- This ensures your site is constantly shedding dead weight without manual intervention.

## Integration Settings
To use PRO features, you must assign a Google Search Console integration in the Settings tab. Ensure you have authorized Waravel to access your GSC data via the main Integrations hub.
