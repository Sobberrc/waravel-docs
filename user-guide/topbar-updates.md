---
title: Updates Center
description: Manage core, theme, and plugin updates for your Waravel installation, as well as database migrations.
---

<div class="guide-banner guide-banner-user"><span>🔄</span> User Guide: Dashboard Topbar</div>

# Updates Center

The **Updates Center (🔄)** is your centralized hub for keeping Waravel and its extensions secure and up-to-date. Accessible from the dashboard top bar, it actively checks for new releases and displays a red notification badge when updates are available.

---

## 1. Core Updates

This section manages updates to the main Waravel framework itself.

*   **Version Tracking**: Displays your currently installed version alongside the latest available version from the Waravel Portal.
*   **Changelog**: Before installing, you can review the release notes to see what new features or security patches are included.
*   **One-Click Deployment**: Clicking the "Update" button securely fetches the latest core files and applies them automatically.

## 2. Extensions (Plugins & Themes)

Waravel separates core updates from extension updates, allowing you granular control over what gets upgraded.

*   **Available Updates**: Any installed Theme or Plugin that has a newer version available will be listed here.
*   **Version Selection**: For extensions, you can often select exactly which version you want to install. This is useful if you need to hold back on a major version update while deploying a minor security patch.
*   **Bulk Updates**: You can update individual extensions one-by-one, or use the "Update All" buttons to process them sequentially.

## 3. Database Migrations

When you upgrade the Waravel Core or install certain complex plugins, they may require changes to the structure of your database (new tables, new columns, etc.).

*   **Migration Alerts**: If you attempt to use a feature that requires a database change, Waravel will block the action, display a "Database migration is required" error, and redirect you to the Updates Center.
*   **Run Migrations**: A dedicated button allows you to safely execute these structural database changes. A terminal-style output window will show you exactly what tables are being created or modified in real-time. Once complete, you can safely return to your previous task.
