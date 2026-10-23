---
title: Media Management
description: Comprehensive walkthrough of the Waravel Media Vault, batch uploads, automatic optimization, and asset management.
---

# Media Management (Media Vault)

The **Media Vault** (**Content → Media**) is the centralized asset library in Waravel where all website imagery, videos, downloadable PDF documents, and brand graphics reside. 

---

## 📤 Uploading Assets & Automatic Optimization

The upload manager supports rapid, high-volume asset ingestion:

* **Simultaneous Multi-File Uploads:** Drag and drop or select multiple files of varying formats (PNG, JPG, WebP, SVG, PDF, MP4) in a single batch.
* **Real-Time Transfer Progress:** An animated progress bar tracks the byte transfer in real time, followed by a toast notification upon successful completion.
* **Zero-Touch SEO & Accessibility Auto-Population:** To save time, Waravel automatically populates the **Alt Text**, **Caption**, and **Description** from the file name upon upload. Your assets are instantly accessible and SEO-ready with zero manual data entry required.
* **Instant Details Inspection:** Uploading a single file automatically slides the Details Drawer open for immediate review. During a multi-file batch upload, a prompt confirms all defaults are ready, inviting you to click any card to inspect or customize.
* **Configurable Size Limits & Compression:**
  * System settings support file upload thresholds up to **100MB**.
  * Images up to **15MB** are automatically processed, resized, and losslessly compressed upon upload.
  * *Best Practice Recommendation:* For peak Core Web Vitals and SEO performance, keep web images under 5MB and prefer modern **WebP** or compressed JPEG formats.

> [!IMPORTANT]
> If your site was newly installed, ensure you ran `php artisan storage:link` in your terminal. This creates the public symlink connecting `public/storage` to `storage/app/public` so your media assets can be served publicly without 404 errors.

---

## 🔎 Advanced Media Search Filter

The search bar at the top allows you to filter through thousands of media files with precision:

* **Compound Search Rules:** Define up to two search rules combined by logical operators (`AND` / `OR`).
* **Queryable Attributes:** Filter by **File Name**, **Slug**, **File Extension**, **File Path**, **Size in KB**, **Pixel Dimensions (Width/Height)**, **Alt Text**, **Caption**, or migrated **WordPress IDs**.
* **Match Modes:** Toggle between **Broad match** for flexible partial discovery and **Exact match** for strict lookups.
* **Reset Button:** Instantly clears all search parameters and reloads the complete collection.

---

## 🖼️ Media Gallery Grid

Assets render inside a responsive visual card grid:
* **Image Files:** Display high-resolution visual thumbnail previews.
* **Video & Documents:** Render recognizable format placeholder icons (PDF, MP4, documents) or functional video players.
* **Card Selection Checkboxes:** Checkboxes on each card allow single or multi-item selection. A **Select All** checkbox above the grid selects all items on the active page.

---

## 📋 Sliding Details Panel & Sequential Stepper

Clicking anywhere on a media card opens a dedicated **Details Panel** that slides smoothly from the right:

* **Technical Specifications:** Displays exact pixel dimensions, file size in KB, upload timestamp, and MIME type.
* **1-Click URL Copying:** Copy the direct, public CDN/storage URL directly to your clipboard with a single click.
* **Inline Metadata Editing:** Edit the **File Name**, **Alt Text**, **Caption**, and **Description** directly inside the drawer. Changes save automatically in the background.
* **Sequential Stepper Buttons:** Convenient **Previous (←)** and **Next (→)** stepper buttons at the top of the drawer allow you to cycle through your entire media collection sequentially, inspecting and updating assets one after another without closing the panel!

---

## 🗑️ Clean & Thorough Deletion

Waravel ensures that deleting media leaves no orphaned files on your hosting server:

* **Single Item Deletion:** Click the permanent delete button inside the sliding details drawer.
* **Bulk Deletion:** Select multiple checkboxes in the gallery and click the **Delete Selected** button above the grid.
* **Database & Storage Purge:** Once confirmed, Waravel erases the database record and physically removes the underlying asset from disk storage (`storage/app/public/...`), freeing up server disk space immediately.
