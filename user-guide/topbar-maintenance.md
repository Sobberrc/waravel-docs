<div class="guide-banner guide-banner-user"><span>📖</span> User Guide: Technical & Maintenance</div>

# Maintenance Center

The Maintenance Center (**🔧**) provides a centralized dashboard for system diagnostics, performance optimization, and advanced resource management.

---

## 1. Cache
Waravel and Laravel cache configuration, routes, and views to ensure your site loads at maximum speed.
- **Config & Route Clear**: Use these if you have changed system settings or URLs and the changes aren't appearing.
- **App Cache Clear**: Purges the general application data cache.
- **Clear Everything (Optimize Clear)**: A "Global Refresh" that purges all system caches at once.

---

## 2. Logs
- **System Logs**: View the real-time `laravel.log` file directly in your browser.
- **Real-Time Auditing**: The log viewer tails the end of your files, allowing you to debug activity or errors without needing server access.

---

## 3. Scheduler (Site Heartbeat)
- **Status Monitor**: Displays whether your site's "Heartbeat" (Cron Job) is active.
- **Why it matters**: The Heartbeat wakes up Waravel every minute to process **Auto-Pilot** updates, **Page Generator** schedules, and background tasks.
- **Setup Guide**: Includes step-by-step instructions for configuring Cron Jobs in cPanel or other hosting environments.

---

## 4. Core Resources (Technical)
This section is for managing the underlying files of the Waravel package.

> [!IMPORTANT]
> **Developer Note**: Core Resources allow you to "Extract" (Publish) files from the package to your local application folders. This is used by developers to **overwrite** default designs or configurations.

- **Extract Overrides (Publish)**: Copy Assets, TinyMCE, Configs, or Views to your application so you can safely edit them.
- **Reset Resources**: A recovery tool to permanently delete your local overrides and **revert back** to Waravel's default core files.
