---
title: Media Optimizer
description: Scan, detect, and clean up orphaned files, unused media, and broken database records with Waravel's Media Optimizer plugin.
---

<div class="guide-banner guide-banner-user"><span>🧹</span> User Guide: Tools & Plugins</div>

# Media Optimizer

The **Media Optimizer** plugin (**Tools → Plugins → Media Optimizer**) is an automated storage hygiene utility. Over time, active websites accumulate abandoned images, deleted draft attachments, and broken database links that waste disk space and slow down backups.

Media Optimizer runs deep synchronization scans between your server's physical disk storage and your Waravel database, letting you safely reclaim disk space with a single click.

---

## 🌟 Key Capabilities

* **Unused Media Audit:** Scans your database to detect images and documents that are no longer embedded in any published page, article, or widget.
* **Ghost File Discovery:** Detects discrepancies between your physical disk and your database:
  * **Orphaned Disk Files:** Images lingering in your storage folders that have no database reference.
  * **Broken Records:** Database rows pointing to missing or deleted physical files.
* **Batch Reconnection:** Automatically register discovered orphaned files into your [Media Vault](media-management.md) so you can reuse them.
* **Safe Pruning:** Safely purge broken database rows and permanently delete abandoned assets.

---

## 🔍 How to Run a Storage Cleanup

Navigate to **Tools → Plugins → Media Optimizer**:

### Step 1: Scan for Unused Media
1. Click **Run Scan**.
2. Media Optimizer performs a deep scan across all published pages and layouts.
3. Review the list of unreferenced assets, select items to remove, and click **Bulk Delete** to instantly reclaim server disk space.

### Step 2: Discover & Sync Ghost Files
1. Click **Discover Ghosts**.
2. The plugin compares your physical `/storage/app/public/media` folder against your media database tables.
3. Choose your cleanup action:
   * **Register Ghost Batch:** Found valuable photos uploaded via FTP? Click this to generate database records so they appear in your visual Media Vault!
   * **Prune Missing:** Remove broken database rows pointing to missing files, ensuring zero broken image icons on your site.
