<div class="guide-banner guide-banner-user"><span>📖</span> User Guide: Plugin Overview</div>

# WordPress Importer

Migrating away from legacy systems shouldn't require a developer. The **WordPress Importer** is an enterprise-grade migration tool designed to pull your entire WordPress site—Pages, Posts, Categories (Tags), and Media—directly into the Waravel ecosystem.

---

## What Does It Do?

1. **Connects via API**: It uses the native WordPress REST API to safely read your old site's data without needing database credentials.
2. **Preserves Structure**: It maps WordPress categories to Waravel Tags, and maintains the Parent/Child hierarchy of your pages.
3. **Downloads Media**: It doesn't just link to your old images; it physically downloads them to your new Waravel Media Vault and updates the `src` tags in your content.

---

## 1. Preparing for Migration

Before you begin, ensure your source WordPress site meets these requirements:
- **Publicly Accessible**: The site cannot be hidden behind a "Coming Soon" plugin or a basic auth password wall.
- **REST API Enabled**: By default, WordPress has this on. Ensure no security plugins (like Wordfence) are blocking the `/wp-json/` endpoints.

---

## 2. Starting the Import (Step-by-Step)

1. Navigate to **Plugins > WordPress Importer**.
2. Click **Start New Import**.
3. **Source URL**: Enter the full address of your old site (e.g., `https://old-site.com`).
4. **Pre-Flight Check**: Click the **"Fetch Totals"** button. Waravel will ping the WordPress API and tell you exactly how many Pages, Posts, and Media items exist. If this fails, check your source URL and ensure the API is accessible.
5. **Select Content Types**: Check the boxes for what you want to bring over (Pages, Posts, Tags, Media).
6. **Assign a Parent Page (Optional)**: If you are importing a WordPress blog into an existing Waravel site, you can select an existing page (like "Blog") to act as the parent container for all imported posts.
7. **Domain Remapping**: If you are changing domain names, enter your new URL here. Waravel will scan all imported content and rewrite internal links (e.g., changing `old-site.com/about` to `new-site.com/about`) automatically.
8. Click **Begin Import**.

---

## 3. The Live Console & Progress

Migrations can take anywhere from 5 minutes to several hours, depending on the size of your media library.

- **Real-Time Streaming**: You do not need to refresh the page. The dashboard uses Server-Sent Events (SSE) to stream live progress bars for each content type.
- **Background Processing**: You can close the browser window entirely. The importer runs on Waravel's background scheduler (cron job). You can return to the Importer dashboard at any time to see the progress.
- **Job Controls**: From the dashboard, you can click **Pause** to temporarily halt the import, or **Cancel** to abort it entirely.

---

## 4. The Intelligent Resource Guard

Importing gigabytes of images can easily crash a standard web server. To prevent this, the Waravel Importer features a built-in Memory Protection System.

- **Automated Pausing**: If the importer detects that your server's RAM usage is spiking to dangerous levels, it will automatically pause the job.
- **Cooldown Timers**: You will see a countdown timer on the dashboard. The system is giving the server time to process images and clear its memory cache.
- **Auto-Resume**: Once the timer hits zero and the server is healthy, the import will automatically resume exactly where it left off.
- **Rate Limiting**: The importer adds slight delays between API calls to ensure it doesn't accidentally trigger a DDoS protection block from your old WordPress host.

---

## Best Practices Post-Migration

- **Check Your Permalinks**: After the import, use the **Redirect Manager** plugin to ensure any URLs that changed during the migration are properly 301 redirected.
- **Review Media**: Check your Media Vault. Sometimes, WordPress plugins generate dozens of tiny, useless thumbnail sizes. You can use Waravel's bulk-delete feature to clean these up.
- **Run the Page Cleaner**: WordPress often leaves behind hundreds of empty "Auto-Drafts." Run the **Page Cleaner** plugin to instantly scan for and delete these useless remnants.
