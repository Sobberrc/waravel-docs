---
title: Tag Management
description: Comprehensive guide to creating and managing tags in Waravel.
---

# Tag Management

The Tag Management interface (`Pages -> Tags`) allows you to organize your content by creating, editing, and deleting tags. Tags help visitors find related pages easily and improve the internal structure of your website.

## Overview and Search

At the top of the Tags screen, you can find the primary controls:
- **Create Tag**: Opens a modal to instantly create a new tag without leaving the page.
- **Search Bar**: Quickly locate tags by typing a name, slug, or description.
- **Sorting Options**: 
  - **Sort by**: Name, Pages Count, or Date.
  - **Order**: Ascending or Descending.
- **Search & Clear Buttons**: Apply your search filters or clear them to view all tags.

## Creating a Tag

Clicking the **Create Tag** button opens a modal window with the following fields:
- **Name (Required)**: The display name of the tag (e.g., `News`, `Tutorials`).
- **Slug**: The URL-friendly version of the name. If left empty, Waravel will automatically generate a valid slug based on the Name field.
- **Description**: An optional text block describing the tag's purpose.

*Note: You can also create tags directly on the fly while editing a page in the Page Editor.*

## Tags Table

The data table lists all available tags along with their details:
- **Checkbox**: Used for bulk selection.
- **Name**: The tag's display name. Tags imported from a legacy WordPress site will display a blue `WordPress` badge.
- **Slug**: The URL identifier.
- **Pages**: A pill showing the count of how many pages are currently using this tag.
- **Description**: A truncated view of the tag's description.
- **Created**: The date the tag was added to the system.
- **Actions**:
  - **View**: Takes you to the public archive page showing all content assigned to this tag.
  - **Edit**: Opens the dedicated Tag Editor screen.
  - **Delete**: Prompts for confirmation and permanently removes the tag. (This does not delete the pages associated with it; it merely unassigns the tag).

## Bulk Actions

By selecting the checkboxes next to multiple tags (or using the "Select All" checkbox in the table header), a **Delete Selected** button will appear at the top right of the screen. This allows you to permanently delete multiple tags at once.

## Editing a Tag

When you click **Edit** on a tag, you are taken to a dedicated editing screen separated into two columns:

**Left Column (Editable Data):**
- **Name**: Update the tag's display name.
- **Slug**: Edit the URL identifier. An **"Auto-generate"** button is available to instantly regenerate the slug based on the current Name.
- **Description**: Modify the tag's description.

**Right Column (Tag Information):**
- **Created & Last Updated**: Exact timestamps of the tag's lifecycle.
- **Pages Count**: The total number of pages currently assigned to this tag.
- **WordPress ID & Import Info**: If the tag was migrated from a WordPress installation via the Legacy Importer, this section displays its original WordPress ID and the original URL (permalink) for historical reference.
