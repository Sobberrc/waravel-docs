---
title: Media Management
description: Comprehensive guide to the Waravel Media Manager.
---

# Media Management

The Media Manager (`Media`) is a centralized library where you can upload, view, search, and manage all the files used across your Waravel website, including images, videos, and PDF documents.

## Uploading Media

At the top of the Media Manager, you'll find the **Upload Media** section.
- Click **Choose Files** (or drag and drop) to select one or multiple files from your computer.
- Click **Upload** to send them to the server.
- An animated progress bar tracks the upload progress, and a notification toast will confirm success or provide detailed error messages if an upload fails.
- **Optimization Note**: Waravel automatically optimizes images up to 15MB. If your server is missing the PHP GD extension, a warning banner will appear notifying you that files will be uploaded in their original, unoptimized state.

## Advanced Search Filter

Similar to the Page Management area, the Media Manager includes a powerful search tool.
- **Search Criteria**: Define up to two search rules combined by an operator (`AND`, `OR`).
- **Available Fields**: ID, Name, Slug, Path, MIME Type, Size (in KB), Width, Height, Caption, Description, Alt Text, WP URL, WP ID, Page ID.
- **Match Type**: Choose **Broad match** or **Exact match**.
- **Reset**: Clears filters and reloads the grid.

## Media Gallery Grid

Media files are displayed in a responsive grid as visual cards.
- **Image Previews**: Images show a direct thumbnail.
- **Video Previews**: Videos display a generic video placeholder.
- **PDF Previews**: Documents display a PDF placeholder icon.
- **Selection Checkboxes**: The top-left corner of each card contains a checkbox. You can use the "Select All" checkbox above the grid to select all items currently visible on the page.

## Bulk Actions
When one or more items are selected via checkboxes, a **Delete Selected** button appears above the grid. Clicking this will permanently delete the selected files from the server and the database after confirmation.

## Image Details Panel

If you click anywhere on a media card (other than the checkbox), a sliding **Details Panel** appears from the right side of the screen.

The panel provides detailed information about the asset:
- A large preview of the image, or a functional video player for videos.
- **Name**: The file name.
- **URL**: A clickable link to the direct asset path.
- **Size**: Displayed in KB.
- **Dimensions**: Width and height in pixels (for images/videos).
- **Duration & Format**: Specific data for video files.
- **Delete Button**: A red button to permanently delete this specific file.

## Pagination
At the bottom of the grid, custom pagination controls allow you to navigate through your media library. You can use the "First, Prev, Next, Last" buttons or type a specific page number into the "Go to page" input to jump directly to a page.
