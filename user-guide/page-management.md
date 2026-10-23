---
title: Page Management
description: Comprehensive guide to viewing, filtering, organizing, and bulk managing pages in Waravel.
---

# Page Management

The Page Management screen (**Content → Pages**) is the central command center for all website content in Waravel. From here, you can view, search, filter, organize parent-child hierarchies, and execute instant bulk actions across your entire database.

---

## 🔝 Top Controls

* **Create New Page Button:** Located at the top left. Launches the [Page Editor](page-editor.md) to build new content from scratch.
* **Hierarchical View Toggle:** Located directly beside the creation button. Checking this box transforms the flat data table into an indented, visual tree showing parent pages, child pages, and nested sub-pages at a glance. *(Note: Column sorting and pagination are temporarily disabled when Hierarchical View is active to maintain tree integrity).*

---

## 🔎 Advanced Search System

Waravel includes a multi-criteria search engine designed for precision filtering rather than basic keyword queries:

* **Field Selectors:** Target specific database columns, including **Page ID**, **Title**, **Slug**, **Parent Slug**, **Page Content**, **SEO Meta Title**, **Keywords**, or migrated **WordPress IDs**.
* **Compound Logic Operators:** Use the middle operator dropdown (`AND` / `OR`) to combine two conditions (e.g., *Title contains "Services"* `AND` *Status is "Draft"*).
* **Match Type:**
  * **Broad Match:** Flexible partial queries matching occurrences anywhere in the target field.
  * **Exact Match:** Strict matching for precise values (such as exact IDs or slugs).
* **Reset Button:** Instantly clears all query conditions and restores the full page index.

---

## 📑 Status & Visibility Filter Tabs

Above the table, status tabs organize your pages into dedicated categories, each displaying a live counter badge:

* **All:** Displays your total active pages across the entire website.
* **Top Level:** Filters exclusively for root pages that do not have a parent ID assigned.
* **Published:** Live pages currently active and viewable on your frontend.
* **Draft:** Work-in-progress content hidden from public visitors.
* **Pending Review:** Editorial workflow queue for pages awaiting review or sign-off.
* **Public / Private / Password Protected:** Permission filters allowing you to isolate open content from administrator-only or password-gated pages.
* **Trash:** Holds all soft-deleted pages, ensuring no content is ever deleted accidentally.

---

## ⚡ Sliding Bulk Actions Toolbar

Selecting any checkbox on the left automatically animates the **Bulk Actions Toolbar** into view:

* **Page vs Database Selection:** Check the header box to select all items on the current page, or click the banner link to select *all matching pages across your entire database*.
* **Available Bulk Actions:**
  * **Publish / Move to Draft / Move to Pending Review:** Bulk update publishing statuses in one operation.
  * **Make Public / Make Private:** Bulk toggle access restrictions.
  * **Move to Trash:** Safely unpublish and move entire sections to the Trash.
  * **Restore / Delete Permanently:** (Available inside the **Trash** tab) Recover multiple pages to their previous status or permanently purge them from the database.

---

## 📊 Master Data Table

The data grid features a **pinned header row** that remains visible as you scroll, with interactive column sorting:

| Column | Description & Capabilities |
| :--- | :--- |
| **ID** | Unique database identifier. Sortable ascending ($\uparrow$) and descending ($\downarrow$). |
| **Thumbnail** | Visual preview thumbnail generated from the page's assigned Featured Image. |
| **Title** | The page title. Hovering over any title row reveals quick action shortcuts: <br>• **View:** Opens the live public URL in a new browser tab.<br>• **Edit:** Opens the standard full-page editor.<br>• **Edit with Builder:** Launches the visual drag-and-drop Waravel Builder.<br>• **Move to Trash:** Soft-deletes the page safely. |
| **Slug** | Clean, SEO-friendly permalink identifier (e.g., `about-us`). |
| **Parent** | Displays parent slug or title showing hierarchy relationships. |
| **Status** | **Interactive Inline Dropdown:** Click the status pill directly in the table to switch between *Published*, *Pending Review*, and *Draft*. Updates save instantly in the background without reloading the page! |
| **Visibility** | **Interactive Inline Dropdown:** Click to toggle between *Public*, *Private*, or *Password Protected* with instant background persistence. |
| **Updated At** | Timestamp of latest modification. Sortable. |

---

## 🗑️ Trash & Recovery Workflow

Waravel uses a safe, multi-tier soft-deletion system:

1. **Moving to Trash:** Hover over any page row and click **Move to Trash**, or apply **Move to Trash** from the bulk menu. The page is unpublished immediately, and the Trash counter increments.
2. **Reviewing Soft-Deleted Pages:** Click the **Trash** tab to inspect all trashed content. Trashed pages retain all revision history, tags, SEO metadata, and media connections.
3. **Restoring a Page:** Hover over the trashed item and click **Restore** (or bulk select and click Apply). The page is restored immediately to its previous status.
4. **Permanent Purge:** To permanently remove a page from the database, hover and click **Delete Permanently**. A confirmation prompt prevents accidental deletion. Once confirmed, the page record and associated meta rows are cleanly erased.
