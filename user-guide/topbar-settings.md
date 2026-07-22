---
title: System Settings
description: Configure the global behavior, appearance settings, and identity of your Waravel site.
---

<div class="guide-banner guide-banner-user"><span>⚙️</span> User Guide: Dashboard Topbar</div>

# System Settings

The **Settings (⚙️)** module, accessible from the top navigation bar of your Dashboard, is the central control hub for your Waravel installation's global configuration. It is divided into logical tabs to help you manage different aspects of your site.

## 1. Global Identity (Site Configuration)

This tab contains the fundamental identifiers for your website.

*   **Site Title & Tagline**: The primary name and short description of your site. These are used extensively in SEO meta tags, RSS feeds, and visual components like the Header (if a logo image is not used).
*   **Administrative Email**: The email address used by the system to send critical alerts, such as failed plugin updates or contact form submissions. Ensure this is a monitored address.
*   **Timezone**: Sets the global PHP timezone for your application. This affects scheduled posts, the Heartbeat chronometer, and log timestamps.

## 2. Layout & Presentation

This critical section dictates the "Skeleton" of your public pages.

*   **Default Layout Picker**: Choose the primary Blade layout file that wraps your content.
*   **Theme Synchronization**: When you select a layout that belongs to a specific theme (e.g., `theme::twentytwentysix.base`), Waravel intelligently synchronizes your **Active Theme** setting to match. This ensures your widgets and CSS skins are perfectly aligned with your chosen structural layout.
*   **Security Validation**: Waravel strictly validates layout paths to prevent unauthorized file access. Only approved naming conventions are permitted.

## 3. Media Processing (Image Optimization)

Waravel includes a robust, automated image processing engine designed to improve page load speeds. This tab controls how images are handled when uploaded to the Media Manager.

*   **Format Conversion (WebP)**: You can force Waravel to automatically convert all uploaded JPEGs and PNGs into the highly optimized WebP format.
*   **Responsive Generation**: Waravel automatically generates scaled-down versions of your images to serve to mobile devices. You can individually toggle the generation of:
    *   **Thumbnail** (150x150)
    *   **Medium** (300x300)
    *   **Large** (1024x1024)
*   **Max Upload Dimension**: To prevent server storage bloat, you can set a maximum pixel dimension (e.g., 2560px). Any image larger than this will be proportionately shrunk before saving.
*   **Max Upload Size (MB)**: Hard limit on file sizes.
*   **Image Quality**: Set the compression strength (1-100) for JPEGs and WebPs. Lower numbers save space but reduce visual fidelity. *We recommend ~85 for the best balance.*

> [!WARNING]
> **Server Requirements**: The Media Processing features require the `GD` PHP extension to be installed on your server. If it is missing, a red warning will appear in the settings panel, and optimization settings will be ignored.

## 4. Advanced Controls

*   **Portal Synchronization**: Force a sync with the Waravel Portal to validate your license and refresh available premium features and updates.
