---
title: WordPress Importer
description: Complete step-by-step guide to migrating your WordPress site to Waravel with zero coding, background queues, and automatic hierarchy preservation.
---

# WordPress Importer

The **WordPress Importer** (**Tools → Plugins → WordPress Importer**) is Waravel's flagship automated migration engine. It enables site owners, agencies, and developers to transfer an entire live WordPress website straight into Waravel without writing a single line of code, exporting XML files, or sharing database credentials.

It migrates all **Pages**, **Blog Posts** (elevated into full business pages), **Categories & Tags**, **SEO Metadata**, and **Media Assets** directly into clean Eloquent models—with zero downtime and 100% non-destructive safety.

---

## 🌟 Why Migrate from WordPress to Waravel?

* **Blazing Performance:** WordPress relies on complex, legacy database queries and heavy plugin layers that degrade Time to First Byte (TTFB). Waravel is built on modern, lightning-fast Laravel infrastructure with lean database schemas and native caching.
* **Hardened Security:** Eliminates typical WordPress vulnerabilities (outdated PHP plugins, xmlrpc exploits, and exposed admin entry points) by running on Laravel's protected architecture with CSRF defense and the optional **FileGuard Security Suite**.
* **Familiar & Clean Management:** Content editors retain a familiar dashboard workflow with drag-and-drop page building, a visual Media Vault, and streamlined page management without database bloat.
* **Non-Destructive Live Transfer:** Your existing WordPress site remains 100% operational and untouched during the migration. Existing Waravel content is also completely safe.

> [!TIP]
> For an in-depth architectural comparison of database bloat, security, and sub-100ms response benchmarks, read our dedicated guide: **[Why Migrate from WordPress to Waravel?](why-migrate.md)**.

---

## 📋 Part 1: Pre-Flight Preparation in WordPress

Before initiating the migration, check these essential settings inside your WordPress dashboard:

### 1. Set Permalinks to "Post name" (CRITICAL)
1. In your WordPress admin sidebar, navigate to **Settings → Permalinks**.
2. Under **Common Settings**, select **Post name** (e.g., `https://example.com/sample-post/`).
3. Click **Save Changes** at the bottom of the page.

> [!IMPORTANT]
> Setting permalinks to **Post name** is crucial. This allows Waravel's importer to accurately extract clean URL slugs, preserve your exact link structure, and rebuild your parent-child page hierarchy without broken permalinks.

### 2. Keep SEO & Content Plugins Active
* There is **no need** to deactivate your plugins or switch to a default theme.
* Keeping plugins like **Yoast SEO**, **Rank Math**, or **Advanced Custom Fields** active is beneficial: it allows Waravel to detect and copy your exact SEO titles, meta descriptions, Open Graph tags, and structured schemas.
* Simply verify that your site is publicly accessible and not locked behind a strict IP-blocking security plugin, maintenance mode, or a "Coming Soon" splash page.

### 3. Note for Large or Older WordPress Sites
Older websites that have run for years may have accumulated orphan pages, duplicate page slugs, or leftover plugin junk data. Waravel's importer handles these safely under the hood. If your site has unusual legacy database anomalies, our dedicated support team can assist in auditing and organizing your data.

---

## 🛍️ Installing & Launching the Importer in Waravel

1. In your Waravel admin sidebar, navigate to **Marketplace** (`/waravel/marketplace`).
2. Locate the **WordPress Importer** plugin card (or switch to the **Plugins** tab).
3. Select the plugin and choose **Install and Activate** from the action menu.
4. Once active, simply **click the plugin title** right inside the Marketplace (or navigate to **Tools → Plugins → WordPress Importer**) to launch your import screen.

---

## 🚦 Processing Modes: Background Queue vs. Browser Mode

At the very top of the Importer screen, Waravel displays an active **Processing Mode** status banner:

### 1. Background Processing Mode (Recommended)
* **Status Banner:** Vibrant green banner reading **"Background Processing Mode Active"**.
* **How It Works:** Powered by Laravel's database queue (`QUEUE_CONNECTION=database`). Once you begin the import, the plugin dispatches background queue workers automatically.
* **Key Advantage:** The transfer runs entirely on your server. **You can safely navigate away, close your browser tab, or shut down your computer.** The migration continues running independently until complete!

### 2. Browser Mode
* **Status Banner:** Yellow warning banner reading **"Browser Mode Active"**.
* **How It Works:** Processes the import synchronously using sequential browser requests.
* **Requirement:** Everything functions properly, but you **must keep the browser tab open** and ensure your computer does not go to sleep while the transfer is active.

### How to Switch to Background Mode
If you see the yellow banner and want true background processing:
1. Open your site's `.env` configuration file in cPanel File Manager or terminal.
2. Add or update this single line:
   ```env
   QUEUE_CONNECTION=database
   ```
3. Refresh the page in your browser. The vibrant green **Background Processing Mode Active** banner will appear immediately.

---

## 📝 Configuring the Start New Import Form

Directly below the status banner, configure the migration parameters:

### 1. WordPress Website URL
Enter the public URL of your WordPress website (e.g., `https://my-wordpress-site.com`).
* **Zero Credentials Required:** You do **not** need administrative passwords, FTP credentials, or database connection strings. All communication happens securely over standard public endpoints.

### 2. New Website URL (Optional)
Enter your new Waravel domain address (e.g., `https://my-waravel-site.com`).
* Waravel uses this to automatically scan and rewrite internal links, navigation references, and image paths, ensuring zero broken links on your new site.

### 3. Parent Page (Container)
* **Set to `0` (Default):** Imports the entire WordPress site directly at the root level of your Waravel site.
* **Set to an Existing Page ID:** If you want all imported content to sit neatly inside a specific container page (for example, inside an archive, sub-folder, or designated `/blog` section), enter that Parent Page ID. Waravel will nest all incoming pages inside that container.

---

## 📊 Part 2: Fetching Totals & Launching Live Migration

### Step 1: Pre-Flight Audit (Fetch Totals)
Click the **Fetch Totals** button. Within seconds, Waravel connects to your WordPress site and audits the source data, displaying the exact counts:
* **Pages Count**
* **Blog Articles (Posts) Count**
* **Tags Count**
* **Media Files Count**

### Step 2: Content Selection & The Media Option Nuance
Tick the boxes for the content types you wish to transfer (**Pages**, **Posts**, **Tags**, **Media**).

> [!TIP]
> **Understanding the Media Checkbox:**
> You do **not** need to check the Media option if you only want the images that appear inside your pages and articles. Pages will **always automatically download and embed their pictures** regardless of this setting. 
> 
> The **Media** checkbox is specifically for copying your **entire WordPress Media Library**, including unattached or standalone files.

### Step 3: Start Import & Real-Time Progress Dashboard
1. Click the amber **Start Import** button. Waravel queues the jobs and initiates the background helper.
2. Click **View Details** to open the real-time progress dashboard.
3. The dashboard displays:
   * **Live Progress Bars:** Percentage completion per content category.
   * **Real-Time Counters:** Incoming item counts for pages, posts, and tags.
   * **Performance Metrics:** Processing speed and server memory utilization.

---

## 🧠 Under the Hood: Page Hierarchy & The 100% Tree Resolver

Here is an essential detail about how Waravel reconstructs your website structure:

### Phase 1: Ingestion (Flat Appearance Mid-Import)
While the import is actively processing, if you look at **Content → Pages**, all incoming pages temporarily appear at the flat root level of your chosen container. Even if you turn on the **Hierarchical View** toggle, nested sub-pages will not appear yet.

**This is completely normal and by design:** Waravel safely downloads all raw page records, content, and media first. It stores and tracks your original WordPress page IDs under the hood.

### Phase 2: Hierarchy Resolution (At 100% Completion)
The moment progress reaches **100%**, Waravel automatically triggers its **parent-child tree resolver**:
1. It cross-references original WordPress parent IDs against the newly created Waravel page records.
2. It resolves relative permalinks and assigns the correct nested parent relationships.
3. Your full multi-level page tree, dropdown menus, and nested sub-pages are instantly reconstructed!

### Blog Posts Elevated to Full Business Pages
In Waravel, imported blog articles are converted directly into **top-level business pages**. Waravel does not lock your content into a restrictive blog feed; instead, every post becomes a full page that you can design with visual editors, customize with widgets, and organize freely.

---

## ✅ Post-Migration Verification Checklist

Once the progress dashboard displays **Completed**:

1. **Verify Pages & Hierarchy:**
   * Go to **Content → Pages** (`/waravel/pages`).
   * Turn ON the **Hierarchical View** toggle at the top of the table.
   * You will see dashes (`—`) preceding page titles, indicating their depth and organizing children neatly under their parent pages.
2. **Inspect SEO & Schemas:**
   * Open any imported page in the [Page Editor](page-editor.md).
   * Confirm that your rich text, embedded images, **Meta Title**, **Meta Description**, and structured **JSON-LD schemas** are intact.
3. **Verify the Media Vault:**
   * Navigate to **Content → Media** (`/waravel/media`).
   * Verify that your photos and assets are stored in organized folders with clean URLs.
   *(Remember to run `php artisan storage:link` if you have not done so already during initial setup).*
4. **Verify Tags:**
   * Navigate to **Content → Tags** (`/waravel/tags`) to confirm your taxonomy tags transferred over.

---

## 🤝 Need Migration Assistance?

If your website contains tens of thousands of items, complex custom post types, or legacy database clutter, the Waravel engineering and support team can execute the entire migration for you. [Contact Waravel Support](https://waravel.com) to schedule an assisted migration.
