---
title: The Page Editor Studio
description: Complete step-by-step walkthrough of Waravel's Page Creation & Editing Studio—covering dynamic slug locking, editor modes, Add Media modals, TinyMCE, dark HTML code tabs, SEO schemas, and 301 redirects.
---

<div class="guide-banner guide-banner-user"><span>✍️</span> User Guide: Content Management</div>

# The Page Editor Studio

The **Page Editor Studio** (accessible when creating a new page at `/admin/pages/create` or editing an existing page at `/admin/pages/{id}/edit`) is Waravel's comprehensive workspace for composing, designing, and optimizing web pages.

Whether you are writing a standard article, building a complex landing page with drag-and-drop blocks, or fine-tuning structured SEO schemas, the Page Editor provides a distraction-free, professional environment.

---

## 🏛️ Top Header & Quick Return

* **"Back to Pages" Shortcut:** Located at the top right of the studio, the amber **Back to Pages** link (`a:has-text('Back to Pages')`) allows you to safely exit the editor and return to the main pages list at any time.
* **Live Frontend URL Preview:** When editing an existing page, a clickable blue URL link appears directly beside the main heading (e.g., `https://yourdomain.com/about-us`). Click it anytime to open your live page in a new tab and preview your changes as visitors see them.

---

## 📝 Title Input, Auto-Capitalization & Dynamic Slug Lock

At the top of the canvas is the primary page identifier:

```
Page Title:  [ About Our Company                                         ]
Page Slug:   [ https://yourdomain.com/about-company            ] [Edit slug]
```

### 1. Smart Auto-Capitalization
* In the **Page Title** input (`#title`), type your desired title (for example, in lowercase: `about our company`).
* As you type, Waravel automatically capitalizes each word into title case: `About Our Company`.
* Upon clicking away or leaving the field (blur), Waravel dynamically generates the web address slug: `about-our-company`.

### 2. The Dynamic Slug Lock & Custom Editing
To protect your search rankings and prevent broken links, Waravel **locks the page slug by default**:
* The `#slug` field appears disabled, preventing accidental keystrokes from altering live URLs.
* **Customizing the Slug:** Click the amber **"Edit slug"** link (`#editSlugLink`) directly beside the field.
* The field instantly unlocks: you can shorten the slug (e.g., change `about-our-company` to `about-us`).
* Click away onto any neutral background to automatically re-lock the field and save your custom URL identifier.

---

## 🔀 Editor Modes: Standard Editor vs. Waravel Builder

Directly below the title, select your preferred composition workflow:

* **Standard Editor (Default):** Selected by default, providing an ultra-clean, high-performance rich text writing canvas powered by TinyMCE. Perfect for articles, announcements, service breakdowns, and standard business content.
* **Edit with Waravel Builder:** If your active license tier includes the [Waravel Builder](plugins-waravel-builder.md), clicking this amber tab launches the full-screen visual drag-and-drop studio with multi-column layouts and pre-built blocks.

---

## 🖼️ The "Add Media" Modal & Asset Ingestion

At the top of the Content section, the amber **Add Media** button (`#openModalForContent`) connects your writing canvas directly to the [Media Vault](media-management.md):

1. Click **Add Media** (`#openModalForContent`). The centered `#mediaModal` dialog opens smoothly over your page.
2. **Browsing Existing Media:** The `#mediaGrid` displays thumbnails of all previously uploaded images, PDFs, graphics, and video files.
3. **Multi-Item Selection:** Click any image thumbnail to select it—a vibrant green indicator badge appears on the corner of the card. Click multiple images to select a batch.
4. **Uploading Directly from Your Computer:** Click the `#modalUploadToggleBtn` ("Upload New Media") button at the top of the modal to drag and drop fresh files from your desktop without leaving the editor!
5. **Inserting into Content:** Click the amber **Add selected** button (`#addSelectedMedia`). The modal closes cleanly, and all selected media files are inserted into your rich text canvas with automated responsive formatting and auto-inherited Alt Text.

---

## 🎛️ The Content Writing Canvas & Formatting Toolbar

The Standard Editor equips content teams with an intuitive formatting toolbar:

### 1. Headings & Semantic Block Formatting
Click the block formats dropdown menu (displaying `Paragraph` by default) to apply structured HTML tags:
* **Paragraph:** Standard body text.
* **Headings (H1 through H6):** Formats your document structure logically for search engines.
* **Preformatted (`<pre>`):** For displaying code snippets or monospace blocks.

### 2. Styling & Layout Tools
* **Typography:** Bold, Italic, Strikethrough, Underline, and Subscript/Superscript.
* **Alignment:** Left, Center, Right, and Justified text distribution.
* **Lists:** Numbered lists, bulleted lists, and indentation controls.
* **Quotes & Dividers:** Visual blockquotes for testimonials and horizontal divider rules (`<hr>`).
* **Tables:** Insert, style, and manage responsive data tables with custom borders, headers, and cell backgrounds.
* **Hyperlinks:** Insert internal and external links with optional `target="_blank"` (new tab) and `rel="nofollow"` attributes.

---

## 💻 The Code Tab (Raw HTML, Custom CSS & Scripts)

For developers and technical creators who need absolute granular control:
* Click the **Code Tab** (`#btn-open-code`) above the writing canvas.
* The editor switches into a syntax-highlighted, dark-mode code editor displaying the exact raw HTML markup.
* **Custom Style Tags:** Insert `<style>` blocks to apply localized CSS rules specifically to this page.
* **Custom Scripts:** Insert `<script>` snippets for tracking pixels, interactive calculators, or custom third-party widgets.
* Switch back to the **Visual Editor** tab at any time—Waravel preserves your custom code without stripping tags!

---

## ⚙️ Right Sidebar: Publishing Settings & Page Metadata

The collapsible right-hand sidebar manages page lifecycle, hierarchy, and search engine optimization:

### 1. Publishing Status & Visibility
* **Status Dropdown:** 
  * `Draft` (Unpublished work-in-progress).
  * `Published` (Live on website).
  * `Scheduled` (Reveals date and time pickers for future automated publishing).
* **Visibility Dropdown:**
  * `Public` (Accessible to everyone).
  * `Private` (Visible only to logged-in administrators).
  * `Password Protected` (Reveals a password input; visitors must enter this passcode to view the page).
* **Author Selector:** Assign editorial credit to any registered team member.

### 2. Page Hierarchy & Parent Assignment
* **Parent Page Dropdown (`#parent_id`):** 
  * Leave set to `None (Top Level)` for root pages.
  * Select an existing page (e.g., *Company*) to establish a parent-child relationship.
  * Waravel automatically nests the page in your hierarchical tree view and maps clean sub-page URLs (e.g., `https://yourdomain.com/company/about-us`).

### 3. Featured Image (Cover Photo)
* The **Featured Image** card displays your cover image thumbnail (e.g., `laptop.jpg`).
* Click **Select Image** to choose from your Media Vault, or click **Remove Image** to clear the thumbnail.
* Featured images automatically populate Open Graph social cards and theme blog archive grids.

### 4. Template Selection & Canvas Mode
* **Template Dropdown:** Choose the master template governing this page.
* **Canvas Mode Toggle:** Switch to full-width Canvas layout to strip default theme headers, footers, and sidebars—creating a 100% blank, edge-to-edge canvas for landing pages and marketing funnels.

### 5. Tags & Taxonomy
* Assign existing tags using the multi-select field, or type a new tag name and press Enter to create and assign it on the fly.

---

## 🎯 SEO Meta & Structured JSON-LD Schemas

Waravel eliminates the need for bulky third-party SEO plugins:

* **Meta Title:** Enter your search engine headline (recommended 50–60 characters).
* **Meta Description:** Write your search snippet summary (recommended 150–160 characters).
* **Structured JSON-LD Schema:** Paste or generate structured schema markup (e.g., `Article`, `FAQPage`, `Product`, or `LocalBusiness`). Waravel injects this directly into the document `<head>` for rich Google search snippets.
* **Social Preview Card:** Displays a live preview of how your page appears when shared on Twitter/X, Facebook, and LinkedIn.

---

## 🔄 Page Redirects (301 & 302 Preservation)

If your plan includes the **Page Redirector** plugin, the bottom of the editor features the dedicated **Page Redirect Panel**:

1. **Auto-Detected Source URL:** The `#original_url` field automatically detects and locks your current page URL (e.g., `https://yourdomain.com/about-us`).
2. **Destination URL Input:** In the `#destination_url` field, enter where visitors should be forwarded (e.g., `/services` or a new domain).
3. **Redirect Type:**
   * **301 Permanent Redirect (SEO-Friendly):** Transfers 100% of link equity and search authority to the new URL.
   * **302 Temporary Redirect:** For short-term campaigns, maintenance, or seasonal promotions without altering search indexing.
4. **Duration & Internal Notes:** Set an automatic expiration period (30 or 90 days) and add an internal memo.
5. **Save Redirect:** Click the amber **Save Redirect** button. A green confirmation banner confirms that traffic will be forwarded automatically without 404 errors!

---

## 💾 Committing & Saving Changes

Once your content and settings are configured:
* Click the prominent amber **Publish Page** (or **Update Page**) button (`#btn-save-page`).
* Waravel commits all changes to your database, refreshes the live view, and displays an in-DOM success notification. Your page is immediately live for visitors!
