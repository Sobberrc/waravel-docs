---
title: Page Editor
description: A complete guide to creating and editing pages using the Standard Editor.
---

# Page Editor

The Waravel Page Editor interface is where you construct and manage individual pages. You can access it by clicking "Create New Page" or editing an existing page from the Page Management grid.

## Editor Modes

At the top of the content area, you can toggle between editor modes:
- **Standard Editor**: The default rich-text (TinyMCE) editor provided by Waravel.
- **Edit with Waravel Builder**: A button that transitions the page into the drag-and-drop visual builder (requires the Waravel Builder plugin).

## Core Content Fields (Left Column)

- **Title**: The main title of your page. Used for the H1 tag and default navigation labels.
- **Slug**: The URL identifier (e.g., `about-us`). When creating a new page, Waravel automatically generates a unique slug based on the title and parent page. You can manually edit the slug by clicking the "Edit slug" link. If a conflict occurs, Waravel will display a warning.
- **Content**: The rich-text editor for your page body.
  - **Add Media**: Above the editor, the "Add Media" button opens the Media Gallery Modal, allowing you to insert images, videos, or PDFs directly into the content block.
- **Tags**: Assign tags to organize your content. Type to search existing tags or use the "Create new tag" button if the tag doesn't exist. Selected tags appear as clickable pills that can be removed.
- **JSON Schemas**: Advanced SEO configuration allowing you to inject structured data.
  - **Schema Types**: Comma-separated list of Schema.org types (e.g., `NewsArticle, Person, Event`).
  - **Schema Code**: A textarea to paste valid JSON-LD objects.

## Page Attributes (Right Column)

The right sidebar controls the page's metadata, hierarchy, and visibility.

- **Parent Page ID**: Enter the ID of another page to make the current page a child of it. This affects the hierarchical URL structure (e.g., `/parent-slug/child-slug`).
- **Meta Title & Meta Description**: SEO fields to override the default title and description in search engine results and social media embeds.
- **Featured Image**: Set a representative image for the page. Click "Select Featured Image" to open the Media Modal. A preview of the selected image is displayed, along with a button to remove it.
- **Status**: Controls publishing state (`Published`, `Pending review`, `Draft`).
- **Visibility**: Controls access restrictions.
  - `Public`: Anyone can view.
  - `Private`: Only authenticated administrators can view.
  - `Password protected`: Reveals a **Password** field. Visitors must enter this exact password to view the page content.
- **Template**: Choose a specific layout structure if your active theme provides multiple templates.
- **Template Options**: Fine-tune the rendering of the page:
  - **Canvas Mode**: Check this to completely hide the site layout (header, footer, etc.) and render a blank canvas.
  - **Show Waravel Header**: Toggle the site header.
  - **Show Waravel Footer**: Toggle the site footer.
  - **Show Banner**: Toggle the page title banner area.
  - **Show Breadcrumbs**: Toggle the breadcrumb navigation (only available if the Banner is shown).

## Page Redirects (If RedirectManager is Active)

If the RedirectManager (or PageRedirector) plugin is installed and active, a **Page Redirect** section appears at the bottom of the editor. This allows you to forward traffic from this page's URL to another destination.

- **Original URL**: Auto-detected current URL of the page.
- **Destination URL**: Where visitors should be sent.
- **Redirect Type**: 
  - `301` / `308`: Permanent redirects (SEO friendly).
  - `302` / `307`: Temporary redirects.
  - `410`: Content permanently deleted.
  - `451`: Content unavailable for legal reasons.
- **Duration**: By clicking "Advanced: Set Duration", you can configure the redirect to expire after a certain number of Days, Weeks, Months, or Years.
- **Description**: Internal note about why the redirect was created.
- **Remove / Save Redirect**: Manage the redirection rules independently of saving the page.

## Saving Changes
Click the **Create Page** or **Update Page** button at the bottom of the form. Buttons will visually indicate a "Processing..." state to prevent double-submissions. If you press `Enter` while focused on the Title field, the form will automatically submit.
