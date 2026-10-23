---
title: Maintenance Center
description: Discover how to optimize performance, stream live system logs, monitor background schedulers, and manage caches in Waravel's Maintenance Center.
---

<div class="guide-banner guide-banner-user"><span>🛠️</span> User Guide: Dashboard Topbar</div>

# Maintenance Center

The **Maintenance Center** (accessible via **🛠️ Maintenance** in the Top Bar at `/waravel/maintenance`) is your global diagnostic and performance command room. 

Here, you can flush system caches, inspect live server activity without touching SSH or FTP, verify your background scheduler, and manage advanced developer overrides—all through an intuitive visual interface.

---

## ⚡ 1. Cache Management & Performance Optimization

To deliver blazing sub-100ms response times, Waravel and Laravel aggressively cache configuration files, URL routing tables, and compiled views. If you make a server-level change that doesn't immediately reflect on your live website, clearing the cache is the simplest, most effective first step:

* **Config & Route Clear:** Purges cached environment settings and URL routes. Ideal after changing `.env` variables or activating new plugins.
* **App Cache Clear:** Flushes general application caches, query buffers, and temporary Marketplace indexes.
* **Global Refresh (Clear Everything):** Click the amber **Optimize Clear** button to run a safe, all-in-one purge of all cached layers simultaneously. This is the recommended action whenever you need a clean slate.

---

## 📜 2. Live System Logs (Zero FTP or SSH Required)

In traditional setups, diagnosing a server warning requires connecting via SSH or navigating complex cPanel File Manager folders to find log files.

Waravel eliminates this completely:
* **Browser Log Streaming:** The Maintenance Center streams the live tail of your `laravel.log` file directly into a clean, searchable console inside your browser.
* **Real-Time Auditing:** Watch background queue jobs process, inspect webhook deliveries, and catch any runtime errors with full stack traces in real time!

---

## 💓 3. Site Heartbeat (Background Scheduler Monitor)

Many of Waravel's automated features—including Auto-Pilot updates, the Page Generator plugin, and scheduled future publishing—rely on a background chronometer known as the **Site Heartbeat**.

* **Status Beacon:** A vibrant status badge confirms whether your Heartbeat is actively pulsing.
* **Automatic Warning System:** If your server cron job ever stops running, an amber warning icon (**⚠️**) appears next to the Maintenance link in the Top Bar.
* **One-Click Setup Instructions:** If the Heartbeat is inactive, the Maintenance page presents the exact single-line Cron command to copy and paste into your hosting provider's cPanel cron manager:
  ```bash
  * * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
  ```

---

## 📦 4. Core Resources & Developer Overrides

Designed for developers and agencies who want to customize Waravel's internal assets without losing the ability to receive upstream core updates:

* **Extract Overrides (Publish):** Safely exports internal package templates (such as TinyMCE configs, Blade views, or theme assets) out of the `vendor` directory into your local application folders for safe editing.
* **Granular Factory Reset:** Made a mistake in an override? Click **Reset** on any specific file to instantly discard local modifications and restore Waravel's factory default baseline.
