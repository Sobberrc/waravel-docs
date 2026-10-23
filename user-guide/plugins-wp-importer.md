---
title: WordPress Importer
description: Complete step-by-step guide to migrating your WordPress site to Waravel with zero coding, live background queues, and automatic hierarchy preservation.
---

# WordPress Importer

The **WordPress Importer** (**Tools → Plugins → WordPress Importer**) is an enterprise-grade migration engine that effortlessly migrates existing WordPress websites into the Waravel ecosystem. 

It transfers all **Pages**, **Posts**, **Categories/Tags**, **SEO Metadata**, and **Media Assets** directly into Waravel—with zero coding and zero downtime.

---

## 🌟 Why Migrate from WordPress to Waravel?

* **Blazing Performance:** WordPress relies on complex, legacy database queries and heavy plugin layers that degrade Time to First Byte (TTFB). Waravel is built on modern, lightning-fast Laravel infrastructure with lean database schemas and native caching.
* **Hardened Security:** Eliminates typical WordPress vulnerabilities (outdated PHP plugins, xmlrpc exploits, and exposed admin entry points) by running on Laravel's protected architecture with CSRF defense and the optional **FileGuard Security Suite**.
* **Familiar & Clean Management:** Content editors retain a familiar dashboard workflow with drag-and-drop page building, a visual Media Vault, and streamlined page management without database bloat.
* **Non-Destructive Live Transfer:** Your existing WordPress site remains 100% operational and untouched during the migration.

---

## 📋 Pre-Flight Preparation in WordPress

Before initiating the migration, check these two essential settings inside your WordPress dashboard:

1. **Set Permalinks to "Post Name" (CRITICAL):**
   * In your WordPress admin sidebar, navigate to **Settings → Permalinks**.
   * Under Common Settings, select **Post name** (e.g., `https://example.com/sample-post/`).
   * Click **Save Changes**.
   > [!IMPORTANT]
   > Setting permalinks to "Post name" is essential. This ensures Waravel can accurately extract URL slugs and rebuild your nested parent-child page hierarchy without broken permalinks.

2. **Keep SEO & Content Plugins Active:**
   * You do **not** need to disable plugins or switch your theme.
   * Keeping plugins (such as Yoast SEO, Rank Math, or Advanced Custom Fields) active allows Waravel to read and preserve your search engine meta titles, descriptions, and custom formatting.
   * Simply verify that your site is not locked behind a "Coming Soon" splash page or strict IP-blocking firewall that prevents public access.

---

## 🚦 Processing Modes: Background Queue vs. Browser Mode

At the top of the Importer screen, Waravel displays your active **Processing Mode**:

### 1. Background Processing Mode (Recommended)
* **Status Banner:** Vibrant green banner reading **"Background Processing Mode Active"**.
* **How It Works:** Powered by Laravel's database queue (`QUEUE_CONNECTION=database`). Once you begin the import, Waravel dispatches background queue workers.
* **Key Advantage:** You can safely close your browser tab or shut down your computer—the transfer continues running independently on the server until complete.

### 2. Browser Mode
* **Status Banner:** Yellow warning banner.
* **How It Works:** Processes the import synchronously using browser requests.
* **Requirement:** You must keep the browser tab open until the entire migration concludes.
* **Switching to Background Mode:** Add or update this single line in your `.env` configuration file:
  ```env
  QUEUE_CONNECTION=database
  ```
  Refresh the page, and the green background processing banner will appear.

---

## 🚀 Initiating the Migration (Step-by-Step)

### Step 1: Configure Source & Target URLs
In the **Start New Import** form:
* **WordPress Website URL:** Enter the public URL of your WordPress website (e.g., `https://my-old-wordpress-site.com`). No administrative passwords or database credentials are required!
* **New Website URL (Optional):** Enter your new domain address (e.g., `https://my-new-waravel-site.com`). Waravel will automatically rewrite all internal links and embedded image URLs to your new domain, preventing broken links.
* **Parent Page ID (Container):**
  * Leave set to `0` to import pages directly at the root of your Waravel site.
  * Enter an existing Page ID to nest all imported content neatly inside a designated container page (e.g., inside an archive or `/blog` section).

---

### Step 2: Fetch Totals (Pre-Flight Audit)
Click the **Fetch Totals** button. Waravel instantly queries your WordPress site and displays the exact item counts:
* **Pages Count**
* **Posts Count**
* **Categories & Tags Count**
* **Media Assets Count**

---

### Step 3: Select Content & Launch Transfer
1. Check the boxes for the content types you wish to import (**Pages**, **Posts**, **Tags**, **Media**).
2. Click the amber **Start Import** button.

---

## 📊 Live Progress Tracking & Hierarchy Under the Hood

### Real-Time Transfer Console
The dashboard provides a real-time progress console:
* **Animated Progress Bars:** Track percentages, processed item counts, and elapsed time per content type.
* **Current Item Indicator:** Displays the exact page or image filename currently downloading.
* **Pause / Resume Controls:** Pause the transfer if you need to run server diagnostics, or cancel at any time.

### Why Pages Appear Flat Mid-Import (The 100% Tree Resolver)
> [!NOTE]
> During an active transfer, you may notice that pages temporarily appear flat at the top level. This is by design:
> 1. **Phase 1 (Ingestion):** Waravel first safely downloads all page records and raw content into the database.
> 2. **Phase 2 (Hierarchy Resolution):** The moment progress reaches **100%**, Waravel's automatic hierarchy resolver runs! It maps all parent IDs, resolves relative permalinks, and rebuilds your nested parent-child tree.

---

## ✅ Post-Migration Verification

Once the import completes with the success notification:

1. **Verify Pages & Hierarchy:**
   * Go to **Content → Pages**.
   * Turn on the **Hierarchical View** toggle at the top left.
   * Confirm that your sub-pages, nested service menus, and parent containers are structured accurately.
2. **Inspect SEO & Schemas:**
   * Open any imported page in the [Page Editor](page-editor.md).
   * Verify that the **Meta Title**, **Meta Description**, and **JSON-LD Structured Data** were faithfully imported.
3. **Verify the Media Vault:**
   * Go to **Content → Media**.
   * Confirm that your WordPress media attachments were downloaded locally to disk storage, optimized, and given auto-populated Alt Text.
