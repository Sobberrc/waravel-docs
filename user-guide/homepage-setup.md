---
title: Setting Up Your Homepage
description: Comprehensive guide to configuring the Waravel homepage, canonical 301 routing, SEO schemas, theme customization, and modular widgets.
---

# Setting Up Your Homepage

Your homepage is your website's digital storefront—the first impression visitors see and the core foundation of your brand authority and SEO rankings.

In Waravel, setting up and refining your homepage is simple, modular, and fully integrated with the CMS engine.

---

## 📄 1. Managing the Homepage Content

In Waravel, the homepage is managed just like any other page inside the central content index:

1. Navigate to **Content → Pages** from the left sidebar.
2. Locate the page with the unique slug: **`home`**.
3. Click **Edit** to open the [Page Editor](page-editor.md).
4. Customize your content:
   * **Headline & Title:** Set your main brand headline.
   * **Hero Banner:** Upload or select a high-resolution hero background from the **Media Vault**.
   * **Body Content:** Use the rich-text formatting tools or switch to the **Code** tab to embed responsive HTML components.
5. In the right sidebar, refine your **SEO Meta Settings**:
   * **Meta Title:** Descriptive title under 60 characters for search engines and browser tabs.
   * **Meta Description:** Engaging summary under 160 characters describing your services.
   * **JSON-LD Schema:** Paste structured data (e.g. `Organization` or `WebSite`) so Google displays rich search cards.
6. Click the amber **Update Page** button to publish your changes.

---

## 🔀 2. Canonical Routing & 301 Redirect (`/home` → `/`)

When migrating websites from legacy platforms or WordPress, existing backlinks or old links may point to `/home` instead of your clean root web address (`https://yourdomain.com`).

To prevent duplicate content penalties from search engines and ensure all visitors land on the official front door, configure a permanent **301 Redirect**:

### Option A: Via Application Routes (`routes/web.php`)
Open your application routes file at `main_core/routes/web.php` and add:

```php
// Redirect legacy /home requests cleanly to root with HTTP 301
Route::redirect('/home', '/', 301);
```

### Option B: Via Redirect Manager Plugin
If the **Redirect Manager** plugin is active:
1. Open the **home** page in the Page Editor.
2. Scroll to the **Page Redirect** card at the bottom.
3. Set **Destination URL** to `/` and select **301 Permanent**.
4. Click **Save Redirect**.

All traffic and search engine authority requesting `/home` will automatically and permanently pass to your clean root domain.

---

## 🎨 3. Appearance & Theme Customization

With content and routing in place, personalize the visual layout of your front page:

1. Go to **Appearance → Themes**.
2. Click **Customize** on your active theme.
3. Configure your brand elements:
   * **Logo Alignment & Sizing:** Upload your brand logo and set header positioning.
   * **Navigation Menus:** Choose which menu appears in the primary header.
   * **Front-Page Sections:** Toggle modular homepage sections on or off, such as:
     * *Hero Callout & CTA Buttons*
     * *Featured Services Grid*
     * *Client Testimonials Slider*
     * *Lead Generation Contact Card*

---

## 🧩 4. Modular Layouts with the Widget Studio

To add dynamic widgets without code:

1. Navigate to **Appearance → Widget Editor** (or Layout Studio).
2. Drag and drop modular elements into your theme's designated homepage widget zones (e.g., `Home Top`, `Home Feature`, `Home Bottom`).
3. Position newsletter signups, recent post carousels, or custom marketing banners with instant drag-and-drop precision.
