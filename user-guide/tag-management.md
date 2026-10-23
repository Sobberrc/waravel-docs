---
title: Tag Management
description: Discover how to organize, categorize, and cross-reference your content using Waravel's Tag Management suite.
---

<div class="guide-banner guide-banner-user"><span>🏷️</span> User Guide: Content</div>

# Tag Management

The **Tag Management** suite (**Content → Tags**, accessible at `/waravel/tags`) gives you full control over your website's taxonomy. Tags allow visitors to discover related articles and pages easily, while helping search engines understand your site's content topics and semantic structure.

---

## 🔍 Overview, Search & Smart Filtering

At the top of the Tags screen, you have full control over your taxonomy inventory:

* **Instant Search Bar:** Type any keyword, slug, or description snippet to filter your tags live.
* **Smart Sorting Options:**
  * **Sort By:** Tag Name, Usage Count (number of linked pages), or Creation Date.
  * **Order:** Ascending or Descending.
* **Search & Clear Buttons:** Apply complex filters in a single click, or reset to view all tags.

---

## ➕ Creating a New Tag

To create a new tag without leaving the list:

1. Click the amber **Create Tag** button at the top right.
2. In the modal that appears:
   * **Name (Required):** The public display name (e.g., `Tutorials`, `Product Updates`, `Press Releases`).
   * **Slug (Optional):** The web-friendly URL identifier (e.g., `product-updates`). If left blank, Waravel **automatically generates a clean, URL-safe slug** from the tag name!
   * **Description:** An optional note explaining the tag's topic.
3. Click **Save Tag**.

> [!TIP]
> **On-the-Fly Tag Creation:**
> You don't have to navigate to the Tags screen every time you need a new tag! When writing an article in the **[Page Editor](page-editor.md)**, you can type new tags directly into the sidebar field and press Enter to create and assign them on the fly.

---

## 📋 The Tags Table & Legacy WordPress Badges

The data table provides clear visibility into your taxonomy:

* **Selection Checkbox:** Select individual or all tags for bulk operations.
* **Tag Name & WordPress Badge:** If a tag was imported from an existing WordPress website via the [WordPress Importer](plugins-wp-importer.md), a blue **WordPress** pill badge appears next to the name for historical tracking.
* **Slug:** The live URL path (e.g., `/tags/tutorials`).
* **Pages Count Pill:** An amber badge showing the exact number of pages currently assigned to this tag.
* **Created Date:** Exact creation timestamp.
* **Row Actions:**
  * **View (👁️):** Opens the public tag archive page in a new tab, showing all published content under this topic.
  * **Edit (✏️):** Opens the dedicated two-column Tag Editor.
  * **Delete (🗑️):** Removes the tag. *(Note: Deleting a tag is 100% safe—it merely unassigns the tag and never deletes the actual pages associated with it).*

---

## 🗑️ Bulk Actions

Need to clean up multiple old tags?
1. Tick the checkboxes next to the tags you wish to remove (or use the master **Select All** checkbox in the table header).
2. Click the red **Delete Selected** button that appears at the top right.
3. Confirm the prompt to safely remove all selected tags simultaneously.
