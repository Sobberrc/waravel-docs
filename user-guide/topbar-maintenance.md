---
title: Maintenance Center
description: Diagnostics, caching, system logs, and resource extraction for your Waravel site.
---

<div class="guide-banner guide-banner-user"><span>🛠️</span> User Guide: Dashboard Topbar</div>

# Maintenance Center

The **Maintenance Center (🛠️)**, accessible from the dashboard top bar, provides a centralized interface for system diagnostics, performance optimization, and advanced resource management.

---

## 1. Cache Management

Waravel and the underlying Laravel framework aggressively cache configuration, routes, and views to ensure your site loads at maximum speed. If you make changes that don't immediately appear on the live site, clearing the cache is the first troubleshooting step.

*   **Config & Route Clear**: Purges cached system configurations and URL routing tables. Use this if you have manually changed environment variables or installed a plugin that registered new routes.
*   **App Cache Clear**: Purges general application data (like the Marketplace index or cached queries).
*   **Clear Everything (Optimize Clear)**: A "Global Refresh" that safely purges all system caches at once. This is the recommended action if you are unsure which cache is causing an issue.

---

## 2. System Logs

Instead of requiring SSH or FTP access to read server logs, Waravel streams them directly to your browser.

*   **Real-Time Auditing**: The log viewer displays the tail end of your `laravel.log` file, allowing you to debug activity or trace errors immediately.

---

## 3. Site Heartbeat (Scheduler)

Many of Waravel's advanced features—such as Auto-Pilot updates, the Page Generator plugin, and scheduled posts—rely on a background chronometer known as the "Heartbeat."

*   **Status Monitor**: A diagnostic badge indicates if your Heartbeat is actively pulsing. If it has stopped, a warning icon (⚠️) will appear next to the Maintenance link in the top bar.
*   **Setup Guide**: If the Heartbeat is inactive, the Maintenance page provides the exact Cron command you need to copy and paste into your hosting provider's cPanel.

---

## 4. Core Resources (Developer Tools)

This section is designed for developers who wish to modify Waravel's core files without losing the ability to receive upstream updates.

> [!CAUTION]
> Modifying core resources requires development experience. Do not perform these actions on a live production site unless you are familiar with Laravel's publishing mechanism.

*   **Extract Overrides (Publish)**: This tool copies internal package files (like Assets, TinyMCE configurations, Config files, or Blade Views) out of the hidden `vendor` directory and places them into your local application folders. Once published, you can safely edit them, and your changes will override the core defaults.
*   **Granular Reset**: A recovery tool that permanently deletes your local overrides on a file-by-file basis. This is used to instantly revert a broken customization back to Waravel's default factory state.
