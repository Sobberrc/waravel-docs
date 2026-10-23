---
title: Page Editor
description: Comprehensive guide to creating, formatting, and configuring pages using the Standard Editor in Waravel.
---

# Page Editor

The Waravel **Page Editor** is a powerful authoring interface designed to craft rich, SEO-optimized content with complete control over formatting, media embeds, taxonomy, structured data, and layout attributes.

You can access it by clicking **Create New Page** or clicking **Edit** on any page row in the [Page Management](page-management.md) console.

---

## 🧭 Header Navigation & Editor Modes

* **Back to Pages Link:** Located at the top right. Returns you to the Pages Management grid without saving unsaved drafts.
* **Live Permalink Preview:** When editing an existing page, a live URL link appears beside the title, allowing you to preview the frontend page in a new browser tab.
* **Editor Modes:**
  * **Standard Editor:** Selected by default. A rich-text writing environment for articles, company profiles, announcements, and standard web content.
  * **Edit with Waravel Builder:** Available for plans with the visual builder plugin, launching a visual drag-and-drop page-building studio.

---

## 📝 Core Content Fields (Main Column)

### 1. Title & Automatic Slug Generation
* **Page Title:** The primary heading of your page. As you type, Waravel automatically formats and capitalizes words.
* **Locked URL Slug:** Below the title, Waravel automatically generates a clean, URL-safe slug (e.g., `about-our-company`). To prevent accidental permalink changes that could break external links, the slug is locked by default.
* **Editing the Slug:** Click the **Edit slug** link to unlock the input, modify the address, and click away to lock it again.

### 2. Rich Text Formatting Toolbar
The Standard Editor provides complete styling and layout controls:
* **Typography:** Format text as standard paragraphs, headings (H1–H6), or preformatted code blocks.
* **Inline Styling:** Bold, italics, underline, strikethrough, text colors, and font styles.
* **Lists & Alignments:** Bulleted lists, numbered lists, left/center/right/justified alignment, and blockquotes.
* **Tables & Hyperlinks:** Insert multi-column tables, format cell borders, and create internal/external links with custom target attributes.

### 3. Media Embedding ("Add Media")
Click the **Add Media** button above the toolbar to open the **Media Vault Modal**:
* Browse existing photos, graphics, PDFs, and videos.
* Upload new files via drag-and-drop from your desktop.
* Select items and click **Add selected** to insert them directly into your content at the cursor position.

### 4. Code View & Dark Mode Syntax Editor
Click the **Code** tab above the content area to inspect and manipulate raw HTML:
* **Syntax Highlighting & Theme:** Toggle between **Light Mode** and **Dark Mode** for comfortable code editing.
* **Custom Code Insertion:** Insert custom `<style>` blocks or `<script>` tags for granular control over individual page designs.
* **Fullscreen Writing:** Click the **Fullscreen** button to expand the editor to your entire screen for distraction-free writing in both Visual and Code modes.

### 5. Tag Taxonomy
Categorize pages and connect related content using the interactive tag badge system:
* Click into the tag input and type to search existing tags.
* Press **Enter** to attach a tag badge.
* If a tag does not exist, click **Create new tag** to register it instantly.
* Click the **"x"** on any badge to detach it.

### 6. JSON Schemas (Structured Data for SEO)
Inject structured data schemas for search engines without manual theme coding:
* **Schema Detection:** Paste valid JSON-LD objects (single object or array) into the Schema Code box.
* **Rich Snippets:** Waravel automatically parses and registers Schema.org types (e.g., `AboutPage`, `Organization`, `Article`, `Event`, `Product`), helping Google and other search engines render rich cards and search snippets.

---

## ⚙️ Page Attributes & Publishing (Right Sidebar)

The right sidebar controls hierarchy, SEO overrides, featured images, and visibility rules:

### 1. Parent Page ID (Hierarchy)
* Enter the ID of another page to nest this page as a child (e.g., `/services/web-development`).
* Leave blank for top-level root pages.

### 2. SEO Meta Settings
* **Meta Title:** Override the default title tag shown in search engine results and browser tabs (recommended: under 60 characters).
* **Meta Description:** The search summary snippet displayed beneath your link (recommended: under 160 characters).

### 3. Featured Image
* Click **Select Featured Image** to pick a high-resolution cover photo from the Media Vault.
* Serves as your page banner and automatically generates social media Open Graph thumbnails when shared on Twitter/X, LinkedIn, and Facebook.

### 4. Status & Visibility Controls
* **Status:**
  * **Draft:** Saves content as an unpublished work-in-progress.
  * **Pending Review:** Queues the page for editorial sign-off.
  * **Published:** Makes the page live on the public frontend.
* **Visibility:**
  * **Public:** Open access for all visitors.
  * **Private:** Restricted strictly to authenticated administrators.
  * **Password Protected:** Displays a secret key field; visitors must enter the correct password to view content.

### 5. Template & Layout Options
* **Theme Template:** Select from custom page layouts provided by your active theme.
* **Canvas Mode:** Hides standard site layouts (header, footer, and navigation bars), rendering a blank canvas—ideal for marketing funnels and conversion landing pages.
* **Layout Toggles:** Individually toggle the **Waravel Header**, **Waravel Footer**, **Page Banner**, and **Breadcrumbs**.

---

## 🔀 Automated Page Redirects (Redirect Manager)

When the **Redirect Manager** plugin is active, a dedicated redirect card appears at the bottom of the editor:

* **Original URL:** Automatically detects your current page URL.
* **Destination URL:** Specify the new destination address.
* **Redirect Types:**
  * `301` / `308`: Permanent redirects (passes full SEO link equity).
  * `302` / `307`: Temporary redirects.
  * `410`: Content permanently removed (tells search engines to de-index immediately).
  * `451`: Unavailable for legal reasons.
* **Duration & Notes:** Set an expiration timeframe or add internal notes explaining why the redirect was created.

---

## 💾 Saving & Publishing

* **New Pages:** Click the amber **Create Page** button at the bottom of the sidebar. Waravel publishes the page and redirects you to the Pages Management console with your new page highlighted at the top.
* **Existing Pages:** Click the amber **Update Page** button. Changes are committed immediately to the live site.
