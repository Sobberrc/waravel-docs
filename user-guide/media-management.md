---
title: Media Vault (Media Management)
description: Exhaustive walkthrough of Waravel's Media Vault—covering centralized asset management, multi-criteria attribute search, batch multi-format uploads, auto-inherited SEO metadata, sliding inspector drawer with sequential stepper, and safe permanent deletion.
---

<div class="guide-banner guide-banner-user"><span>🖼️</span> User Guide: Asset Management</div>

# Media Vault (Media Management)

The **Waravel Media Vault** (**Content → Media**, accessible at `/waravel/media`) is your centralized command center for all digital assets across your website. 

From photography and transparent PNG logos to responsive WebP graphics, downloadable PDF documents, and MP4 background videos, the Media Vault provides lightning-fast browsing, multi-file batch uploads, automated SEO metadata generation, and zero-delay sliding drawer inspections.

---

## 🏛️ Centralized Asset Gallery

When you navigate to **Content → Media**, the master asset gallery (`#mediaGallery`) displays your complete digital collection:

* **Visual Thumbnail Previews:** Image formats (JPEG, PNG, WebP, GIF, SVG) present high-resolution visual previews.
* **Format-Specific Placeholders:** Non-image assets—such as MP4 video clips, PDF whitepapers, audio tracks, and zip archives—display clear, recognizable format-specific placeholder icons.
* **Hover Interaction:** Hovering over any media card highlights its filename, dimensions, and quick selection state.

---

## 🔍 Advanced Search Bar & Logical Attribute Querying

Anchored directly above the asset grid is the **Advanced Search Bar** (`#advanced-search-form`). Designed to handle libraries containing tens of thousands of files, it allows you to chain multi-field search conditions with logical precision:

```
[ Attribute Dropdown 1: File Name v ]  [ Query Value 1 ]  [ Operator: AND v ]  [ Attribute Dropdown 2: Extension v ]  [ Query Value 2 ]
(•) Broad match    ( ) Exact match    [ Search Button ]    [ Reset Filter ]
```

### 1. Granular Query Attributes
Click the attribute dropdown (`select[name="search_field_1"]`) to query specific file properties:
* **File Name:** Targets the original uploaded file title (e.g., `laptop.jpg`).
* **Slug:** Targets the URL-safe slug identifier.
* **File Extension:** Filters by format (`webp`, `png`, `jpg`, `pdf`, `mp4`).
* **File Path:** Searches storage folder paths.
* **File Size (KB):** Finds assets above or below specific weight thresholds.
* **Pixel Dimensions:** Queries specific widths or heights (e.g., `1920x1080`).
* **Alt Text:** Finds images by their screen-reader and SEO accessibility descriptions.
* **Caption & Description:** Queries editorial and contextual text fields.

### 2. Logical Operators (`AND` / `OR`)
* **Chaining with "AND":** Selecting **`AND`** in the middle dropdown (`#search_logic`) immediately expands the secondary query group (`#search-group-2`). This allows compound searches—such as finding files where the Name contains `banner` **AND** the Extension equals `webp`.
* **Chaining with "OR":** Broadens discovery across multiple criteria (e.g., Extension equals `png` **OR** Extension equals `webp`).

### 3. Match Precision Toggles
* **Broad Match (Default):** Returns partial, flexible keyword matches.
* **Exact Match:** Requires character-for-character precision.
* **Reset Button:** Clears all active filters and returns you to the complete media library instantly.

---

## 📄 Pagination Navigation & Jump-To Field

At the bottom of the grid, the pagination bar (`.pagination-container`) provides effortless navigation through large media libraries:
* **Page Status Indicator:** Displays *"Showing page X of Y"*.
* **Numeric Jump-To Field (`#jumpToPage`):** Type any page number and hit Enter to jump directly to that page of results without clicking through pages sequentially.
* **Directional Controls:** Quick buttons for **First**, **Previous**, **Next**, and **Last**.

---

## 🚀 Multi-File Batch Upload & Auto-Inherited Metadata

Uploading assets into Waravel is fast, multi-threaded, and fully automated:

```
+-----------------------------------------------------------+
|  Drag and drop files here, or click to browse             |
|  [ laptop.jpg ]  [ graph.png ]  [ banner.webp ]  [ doc.pdf ]  |
+-----------------------------------------------------------+
[ Progress: ========================================> 100% ]
```

### 1. Multi-Format Batch Ingestion
* You can select and upload multiple files of different types simultaneously in a single batch (e.g., uploading a JPEG photo, a PNG diagram, a WebP graphic, a PDF document, and an MP4 video all at once).
* Click **Upload** (`#uploadForm`). An animated progress bar (`#uploadProgress`) tracks the byte transfer in real time.
* A high-visibility green confirmation toast (`#uploadResult`) verifies when all items are safely stored on the server.

### 2. Automated Smart Metadata Generation (Zero Typing)
To save content teams hours of repetitive data entry, Waravel **automatically derives and populates the Alt Text, Caption, and Description directly from the filename upon upload**:
* For example, uploading `how-app-works-mobile.webp` automatically formats the text into clean, human-readable title case: `How App Works Mobile`.
* **Instant SEO & Accessibility:** Your images are immediately optimized for search engines and screen readers the moment they hit the server, with zero manual typing required!

### 3. Review Behavior (Single vs. Batch Uploads)
* **Single File Upload:** The details drawer slides open automatically for instant inspection and URL copying.
* **Batch Upload:** Waravel displays a confirmation prompt confirming that all defaults have been automatically generated, inviting you to click on any card to review or customize.

---

## ⚙️ Upload Limits & Optimization Settings

Waravel protects server performance and storage capacity through customizable safeguards configured in **Settings → Media Optimization**:

* **Max Upload Threshold:** Supports configurable upload file limits up to **100MB** directly in your dashboard settings.
* **Automatic Client-Side Compression:** Images up to **15MB** are automatically processed, stripped of unnecessary EXIF metadata, and compressed during upload.
* **Recommended Best Practice:** For optimal PageSpeed and Core Web Vitals, we recommend keeping standard web imagery under **5MB**, utilizing lightweight WebP or compressed JPEG formats.
* **Max Dimension Cap:** Set a maximum width (e.g., `2560px`). Massive photos taken with commercial cameras are proportionately downscaled before saving to prevent server disk bloat.
* **Compression Quality:** Adjustable from 1 to 100 (default `85` delivers near-lossless clarity with substantial weight reduction).

---

## 🗂️ The Sliding Inspector Drawer

Clicking on any media card in the gallery smoothly slides open the **Media Inspector Drawer** (`#imageDetailsPanel`) from the right side of the screen:

```
+----------------------------------------------------+
|  < Prev                 Media Details              Next >  |
+----------------------------------------------------+
|  [ High-Resolution Preview Box ]                   |
|                                                    |
|  File Name:   how-app-works-mobile.webp            |
|  Dimensions:  1920 x 1080 px                       |
|  File Size:   142 KB                               |
|  MIME Type:   image/webp                           |
|  Uploaded:    October 23, 2026                     |
|                                                    |
|  Public URL:  [https://domain.com/storage/...] [📋]|
|                                                    |
|  Alt Text:    [ How App Works Mobile             ] |
|  Caption:     [ How App Works Mobile             ] |
|  Description: [ How App Works Mobile             ] |
|                                                    |
|  [ Delete Permanently (Red Button) ]               |
+----------------------------------------------------+
```

### 1. One-Click Public CDN/Storage URL Copying
* Next to the public URL display, click the **Copy URL** button (`#copyUrlBtn`).
* Waravel instantly copies the absolute public storage link to your operating system clipboard, accompanied by a subtle confirmation pulse.

### 2. Sequential Stepper Navigation (`Prev` / `Next`)
* Located at the top of the drawer, the **Previous** (`#prevImageBtn`) and **Next** (`#nextImageBtn`) stepper arrows allow you to browse sequentially through your entire media library.
* You can audit captions, review Alt Text, or grab URLs for dozens of assets in a row **without ever closing and reopening the drawer**!

### 3. Permanent Deletion & Optimistic UI
* To delete an unwanted file, click the red **Delete Permanently** button (`#deleteImageBtn`).
* An in-DOM confirmation dialog pops up to prevent accidental clicks.
* Upon confirming, the drawer slides closed and the card is removed from the grid immediately via **optimistic UI rendering**, while server disk files and database rows are purged cleanly in the background.

---

## ⚠️ Critical Server Requirement: Storage Symlink (`storage:link`)

For your uploaded images and media to be served publicly by LiteSpeed, Nginx, or Apache without 404 errors, your server requires the standard Laravel storage symlink:

```bash
php artisan storage:link
```

This creates the symbolic link from `public/storage` to `storage/app/public`. Without this link, files are safely stored on disk but the web server will return 404 Not Found when browsers request them.
