---
title: Pages Management & Listing
description: Exhaustive walkthrough of Waravel's Pages Management suite—covering hierarchical tree views, multi-criteria compound search, filter tabs, inline zero-reload editing, bulk actions, and the trash lifecycle.
---

<div class="guide-banner guide-banner-user"><span>📄</span> User Guide: Content Management</div>

# Pages Management & Listing

The **Pages Management** console (**Content → Pages**, accessible at `/waravel/pages` or `/admin/pages`) is the central nerve center for organizing your website's content. 

Whether your site has five pages or five thousand, Waravel provides high-performance filtering, visual tree hierarchies, inline zero-reload editing, and bulk processing tools to give you total control over your digital assets.

---

## 🧭 Navigation & Primary Action Controls

When you open **Content → Pages**, the top control bar provides two primary controls:

### 1. "Create New Page" Button
Located at the top left, the prominent amber **Create New Page** button (`a[href*='pages/create']`) launches the full [Page Creation Studio](page-editor.md) to start building content from scratch.

### 2. Hierarchical View Toggle
Directly adjacent to the create button is the **Hierarchical View** checkbox (`#hierarchical-toggle`):
* **Flat View (Default):** Displays all pages in a flat, paginated table sorted by your chosen column.
* **Hierarchical Tree View (Checked):** The table instantly reorders into an indented visual family tree. 
  * Indented dashes (`—` and `——`) visually denote parent, child, and sub-page depths.
  * Collapsible tree icons let you expand or collapse deep sections.
  * Allows content editors to instantly audit parent-child relationships and site structure without clicking into individual page settings.

---

## 🔍 Multi-Criteria Advanced Search System

Directly below the top controls is Waravel's **Advanced Search Panel** (`#advanced-search-container`). Unlike primitive keyword boxes, Waravel gives you database-level search precision:

```
[ Attribute Dropdown 1 ]  [ Search Value 1 ]  [ Logic Operator: AND / OR ]  [ Attribute Dropdown 2 ]  [ Search Value 2 ]
(•) Broad match    ( ) Exact match              [ Search Button ]    [ Reset Filter ]
```

### 1. Field Selector (Attribute Dropdown 1)
Target specific database columns with pinpoint accuracy:
* **Page Title:** Searches the public headline.
* **Slug:** Searches the exact URL identifier (e.g., `services` or `contact-us`).
* **Parent Slug:** Finds all child pages belonging to a specific parent section.
* **Page Content:** Performs a deep full-text scan through the rich-text HTML and code blocks.
* **SEO Meta Title:** Targets your customized search engine titles.
* **Keywords & Tags:** Queries attached taxonomy tags.
* **Page ID / Legacy WordPress ID:** Instantly jump to a record by its database ID or its original migrated WordPress ID.

### 2. Compound Search Logic (`AND` / `OR` Operators)
Chaining conditions unlocks multi-field filtering:
* Selecting **"And"** opens the secondary attribute group (`#search-group-2`), enabling compound queries such as:
  * *Field 1:* Title contains `Services` **AND** *Field 2:* Status equals `Draft`.
* Selecting **"Or"** expands queries across multiple potential matches (e.g., Title contains `News` **OR** Tag equals `Press Release`).

### 3. Match Precision Toggles
* **Broad Match (Default):** Flexible discovery using partial keyword matches (ideal for broad searches).
* **Exact Match:** Strict filtering that requires character-for-character precision (ideal for targeting specific slugs or IDs).
* **Search & Reset:** Click **Search** (`button:has-text('Search')`) to run your query, or **Reset** to clear all filters and restore the full page list in one click.

---

## 🏷️ The Filter Tabs Bar

Directly above the data table sits a horizontal tab bar that lets you isolate pages by publishing state and access permissions in a single click:

| Tab Name | Description | Purpose |
| :--- | :--- | :--- |
| **All (X)** | Displays the complete inventory of active (non-trashed) pages. | Master overview of all site content. |
| **Top Level** | Isolates root pages that do not have any parent page assigned (`parent_id = 0`). | Auditing primary navigation and root site architecture. |
| **Published** | Shows live pages currently viewable by visitors on your public website. | Verifying live, indexable content. |
| **Draft** | Isolates work-in-progress content hidden from public visitors. | Managing unpublished drafts and content pipelines. |
| **Pending Review** | Dedicated to editorial approval workflows before going live. | Content approval and team collaboration. |
| **Public** | Pages open to all visitors without restrictions. | Standard public content. |
| **Private** | Content restricted exclusively to logged-in administrators. | Internal documentation or staging previews. |
| **Password-Protected** | Pages requiring a visitor passcode to unlock. | Client portals, confidential proposals, or gated assets. |
| **Trash** | The soft-delete holding bin for removed content. | Safeguards against accidental deletions with 1-click restore. |

---

## 📊 The Master Data Table & Sticky Header

The data table is engineered for rapid high-volume content management:

### 1. Pinned (Sticky) Header Row
As you scroll through extensive page lists, the header row stays pinned to the top of the browser viewport. Every column header is interactive and displays clear directional arrows:
* **Sorting Columns:** Click **Title**, **Author**, **Date Created**, or **Last Updated** to toggle between **Ascending (A–Z / Oldest)** and **Descending (Z–A / Newest)**.

### 2. Row Hover Quick Action Shortcuts
Moving your mouse cursor over any page title row smoothly unveils a set of context actions directly underneath:
* **View (👁️):** Opens the live page URL in a new browser tab for instant verification.
* **Edit (✏️):** Opens the full [Page Editor Studio](page-editor.md) to modify content, templates, tags, or SEO schemas.
* **Edit with Builder (🏗️):** Launches the visual drag-and-drop [Waravel Builder](plugins-waravel-builder.md) (available on Starter, Pro, and Suite plans).
* **Move to Trash (🗑️):** Soft-deletes the page safely with a single click.

---

## ⚡ Zero-Reload Inline Table Editing (AJAX)

One of Waravel's greatest productivity breakthroughs is **inline table editing**. You never have to wait for a full page editor to load just to make a quick status or visibility adjustment!

### 1. Inline Status Dropdown
* In the **Status** column, click directly on any status pill badge (e.g., *Draft*).
* An inline dropdown menu expands inside the table cell:
  * **Published** (Vibrant green pill with checkmark)
  * **Draft** (Muted slate pill)
  * **Pending Review** (Amber pill)
* Select your new status. Waravel commits the change via background AJAX in **fractions of a second**—the badge updates with a subtle green pulse with **zero full-page reload**!

### 2. Inline Visibility Dropdown
* In the **Visibility** column, click the visibility pill to expand its inline menu:
  * **Public** (Globe icon)
  * **Private** (Lock icon)
  * **Password Protected** (Key icon)
* Updates immediately in the background without refreshing the browser.

---

## 📦 The Sliding Bulk Actions Toolbar

When managing tens or hundreds of pages simultaneously, Waravel's floating **Bulk Actions Toolbar** streamlines your workflow:

```
[✓ Checkbox]  2 selected  |  [ Bulk Actions Dropdown: Publish v ]  [ Apply Action Button ]
```

### 1. Triggering Bulk Selection
* Tick the checkbox on the far left of any table row.
* The floating Bulk Actions toolbar smoothly slides into view at the top of the table, displaying the exact count of selected items (e.g., `2 selected`).
* **Master Checkbox (Current Page):** Tick the checkbox in the table header to select all visible pages on your current screen.
* **Global Database Selection Banner:** When all items on the current page are checked, a blue alert banner appears:
  > *"All 20 pages on this screen are selected. Click here to select all 485 pages matching this filter across your entire database."*
  * Clicking this link enables true global multi-page batch processing across your entire site!

### 2. Available Bulk Actions (Active Tabs)
In the **All**, **Published**, and **Draft** views, the bulk dropdown offers:
* **Publish:** Instantly publishes all selected pages to the live site.
* **Move to Draft:** Unpublishes live pages back to draft state.
* **Submit for Review:** Flags selected pages for editorial review.
* **Make Public:** Updates visibility of all selected items to public access.
* **Make Private:** Restricts access exclusively to logged-in administrators.
* **Move Pages to Trash:** Safely unpublishes and moves all selected items to the Trash holding bin.

---

## 🗑️ The Trash Lifecycle: Soft-Deletes, Restoring & Permanent Deletion

Waravel protects your content against accidental loss with a two-stage trash lifecycle:

### 1. Moving Pages to Trash (Soft Deletion)
* Clicking **Move to Trash** on a row hover or running a bulk trash action unpublishes the page immediately.
* Trashed pages are removed from public navigation, internal search, and live indexing.
* **Zero Data Loss:** All rich text content, embedded media, SEO titles, descriptions, and custom JSON schemas remain completely intact in your database.

### 2. Restoring Trashed Content
1. Click the **Trash** tab in the filter bar.
2. Hover over any trashed page row to reveal:
   * **Restore (↩️):** Instantly restores the page back to its previous status (Draft or Published) and restores its original URL hierarchy.
   * **Delete Permanently (❌):** Prompts an in-DOM confirmation dialog.
3. **Bulk Restore:** Select multiple trashed pages, choose **Restore** from the bulk actions toolbar, and click **Apply Action** to resurrect entire site sections at once.

### 3. Permanent Deletion (Irreversible Removal)
* In the Trash tab, clicking **Delete Permanently** triggers a styled in-DOM confirmation modal warning that this action cannot be undone.
* Confirming the prompt permanently deletes the database record, frees up slugs, and cleans up attached taxonomy links.
