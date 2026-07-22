---
title: Page Management
description: Comprehensive guide to managing pages in Waravel.
---

# Page Management

The Page Management screen (`Pages -> All Pages`) provides a robust interface to view, filter, search, and perform bulk actions on all pages within your website.

## Top Controls

- **Create New Page Button**: Click to start building a new page from scratch.
- **Hierarchical View Toggle**: Enabling this option reorganizes the pages into a tree structure, displaying child pages nested under their parent pages. Note that when hierarchical view is active, column sorting and pagination are disabled.

## Advanced Search Filter

The comprehensive search panel at the top allows you to precisely locate pages based on multiple parameters.
- **Search Criteria**: You can define two search conditions (Field 1 and Field 2) combined by an operator (`AND`, `OR`, or `-` if only using one field).
- **Available Fields**: ID, Title, Slug, Parent ID, Parent Title, Parent Slug, Content, Meta Title, Meta Description, Keywords, Status, WP ID, WP Parent ID, URL.
- **Match Type**: Choose between **Broad match** (partial text matching) and **Exact match**.
- **Reset**: Quickly clear all search filters.

## Page Views (Tabs)

Pages are organized into status-based tabs. Each tab shows a badge with the count of pages in that category:
- **All**: Every page on the site.
- **Top Level**: Pages without a parent ID.
- **Published**: Live pages visible to the public (or with specific visibility rules).
- **Draft**: Unpublished work-in-progress pages.
- **Pending Review**: Pages waiting for editorial approval.
- **Public**: Pages accessible by anyone.
- **Private**: Pages accessible only to authenticated users or administrators.
- **Password Protected**: Pages requiring a specific password to view.
- **Trash**: Soft-deleted pages.

## Bulk Actions

When you select one or more checkboxes next to the pages, the Bulk Action container appears. You can select all pages on the current page, or click a banner link to select *all* pages matching the current filter across all pages of pagination.

**Available Actions:**
- **Move to Trash**: Sends selected active pages to the Trash.
- **Publish / Move to Draft / Move to Pending Review**: Change the publishing status of multiple pages.
- **Make Public / Make Private**: Change the visibility status.
- **Restore / Delete Permanently**: Available only in the Trash tab for recovering or permanently destroying pages.

## Data Grid (Table)

The interactive table displays page details. You can sort by clicking the column headers.

- **ID**: The unique database ID.
- **Title**: The page title. Hovering over the title reveals quick actions:
  - **View**: Opens the live page in a new tab.
  - **Edit**: Opens the Standard Editor.
  - **Edit with Builder**: Opens the visual Waravel Builder (if the builder plugin is installed).
  - **Move to Trash / Restore / Delete Permanently**: Quick single-item actions.
- **Slug**: The URL-friendly identifier.
- **Parent Slug / Parent ID / Parent Title**: Information indicating page hierarchy.
- **Status**: An interactive dropdown (`Published`, `Pending review`, `Draft`). You can change the status directly from the table, and it updates instantly.
- **Visibility**: An interactive dropdown (`Public`, `Private`, `Password protected`). Change visibility directly from the table.
- **Created At / Updated At**: Timestamps of page creation and latest modification.
- **Thumbnail**: A small preview of the page's Featured Image.

## Pagination

Standard pagination controls are available at the bottom (and top) of the list, unless the Hierarchical View is active.
