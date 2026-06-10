<div class="guide-banner guide-banner-user"><span>📖</span> User Guide: Technical & Maintenance</div>

# Troubleshooting & Support

This guide provides actionable solutions for common issues within the Waravel ecosystem. If you encounter a problem not listed here, please consult the [System Logs](topbar-maintenance.md) for more detailed error messages.

---

## 1. AI & Content Generation
### "API Key Not Configured" (Page Generator)
This occurs when you attempt to generate content before adding your Claude (Anthropic) or GPT (OpenAI) credentials.
- **Fix**: Navigate to **Page Generator > Settings** and ensure your API key is correctly entered and saved.

### "Generation Timeout" or "Hanging Job"
Long generation jobs (e.g., 50+ pages) may occasionally time out if your server's background scheduler is slow.
- **Fix**: Check the **Scheduler Heartbeat** in the [Maintenance Center](topbar-maintenance.md). Ensure your cron jobs are active. You can also "Restart" the job from the Generation History dashboard.

---

## 2. Migrations & Imports
### "Import Paused for Memory" (WordPress Importer)
The importer has detected that your server is running low on RAM and has paused to prevent a crash.
- **Fix**: This is an automated safety feature. Simply wait for the countdown timer to finish; the importer will automatically resume once the server has "cooled down."

### "Failed to Fetch Totals"
Waravel cannot connect to your source WordPress site.
- **Fix**: Ensure your source site is public and not blocked by a firewall or "Coming Soon" page. Also, verify that the WordPress REST API is enabled on the source site.

---

## 3. SEO & Connectivity
### "Redirect Loop Detected" (Redirect Manager)
You have created a redirect that points back to itself (e.g., Page A -> Page B -> Page A).
- **Fix**: The Redirect Manager includes loop protection and will usually block these, but if a loop occurs, navigate to the **Redirect Dashboard** and delete the conflicting rule.

### `DEVELOPER_TOKEN_NOT_APPROVED` (Page Promoter)
A common Google Ads API error.
- **Fix**: Ensure your Google Ads Developer Token is approved for "Basic Access" or "Standard Access." If you are using a new token, it may only work with Google Ads Test Accounts until fully approved.

---

## 4. Updates & Infrastructure
### "HTTP 500 Error" After an Update
- **Fix**: Use the **Rollback** feature in **Marketplace > Registry Activity**. If you cannot access the dashboard, you can manually restore the backup `.zip` file located in the `storage/backups` directory.

### "CSS Changes Not Showing"
Your custom theme skins are compiled and cached for speed.
- **Fix**: Navigate to the **Maintenance Center** and click **"Clear View Cache"** and **"Optimize Clear."** This forces Waravel to re-render your design settings.
