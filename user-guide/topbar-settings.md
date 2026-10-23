---
title: System Settings
description: Discover how to configure global branding, SEO defaults, media auto-compression, and portal synchronization in Waravel's System Settings.
---

<div class="guide-banner guide-banner-user"><span>⚙️</span> User Guide: Dashboard Topbar</div>

# System Settings

The **System Settings** hub (**⚙️ Settings** in the Top Bar at `/waravel/settings`) is your central control room for global website identity, default page layouts, automated media compression, and license synchronization.

---

## 🏛️ 1. Global Identity & Branding

The **General** tab sets the primary identifiers for your entire web presence:

* **Site Title & Tagline:** The public name and slogan of your business. These automatically populate your site header, RSS feeds, browser tab titles, and default SEO Open Graph social cards.
* **Administrative Notification Email:** The monitored address used by Waravel to deliver critical alerts—such as contact form lead notifications or security updates.
* **Timezone & Localization:** Configures your regional timezone. This ensures scheduled page publications, automated backups, and log timestamps trigger at the exact expected local hour.

---

## 🎨 2. Default Layout & Theme Synchronization

Controls the underlying master frame of your public website:

* **Default Layout Picker:** Choose which layout template wraps your pages (e.g., standard header/footer, boxed, or full-width).
* **Intelligent Theme Synchronization:** When you choose a layout, Waravel automatically verifies that your active theme and widget zones align with it, ensuring seamless visual presentation.
* **Security Validation:** Waravel strictly sanitizes layout paths, preventing invalid templates or broken references from ever reaching your visitors.

---

## 🖼️ 3. Media Processing & Automated WebP Compression

Waravel features a native image processing engine designed to guarantee ultra-fast page loads without requiring third-party optimization plugins:

* **Automatic WebP Conversion:** Toggle this ON to have Waravel automatically convert uploaded JPGs and PNGs into modern, lightweight **WebP** files on the fly.
* **Responsive Image Generation:** Waravel automatically generates scaled down copies for smartphones and tablets:
  * **Thumbnail** (`150x150`)
  * **Medium** (`300x300`)
  * **Large** (`1024x1024`)
* **Maximum Image Dimension (Cap):** Protect your server disk space from massive camera photos. Set a maximum width (e.g., `2560px`); Waravel will automatically downscale larger images while preserving visual quality.
* **Compression Quality:** Fine-tune image quality (1–100). A value of `85` delivers near-lossless clarity with up to 70% smaller file sizes.

---

## 🔑 4. Portal Synchronization & Licensing

* **License Verification:** View your active license tier (*Starter*, *Pro*, or *The Suite*) and connected domain.
* **Manual Sync:** Click **Sync License** to immediately check [portal.waravel.com](https://portal.waravel.com) and unlock newly purchased plugins or premium themes without waiting for the hourly scheduler.
