---
title: Updates Center & Auto-Pilot
description: Unified command hub for core system updates, theme and plugin delivery, Auto-Pilot background updates, and PHP ZipArchive pre-flight diagnostics.
---

<div class="guide-banner guide-banner-user"><span>🔄</span> User Guide: Dashboard Topbar</div>

# The Waravel Update Center

The **Update Center** (**Updates** in the top navigation bar or left sidebar) is your unified command hub for keeping your core system, active themes, and plugins running on the latest features, performance improvements, and security patches.

Every upgrade in Waravel is cryptographically verified, fully automated, and protected by pre-flight health checks.

---

## 🏗️ 1. Core Infrastructure & Auto-Pilot

The **Core Infrastructure** card gives you full visibility into your current software status:

* **Version Tracking:** Displays your currently installed version alongside the latest stable release from the official Waravel repository.
* **Release Notes:** Review changelog entries and security advisories before applying any update.
* **Auto-Pilot Toggle:**
  * When enabled, Waravel's background scheduler automatically checks for verified updates every hour.
  * Security patches and stable updates are applied smoothly in the background without taking your website offline.
* **Granular Release Targets:** A dropdown selector lets you choose specific semantic release versions, giving you the freedom to test specific builds or roll back if necessary.

---

## 🛡️ 2. Pre-Flight Security Audits

Before any package is installed, Waravel executes an automated multi-point security audit under the hood:

1. **Cryptographic Signature Verification:** Confirms the package originates from verified Waravel authors.
2. **Checksum Integrity (`SHA-256`):** Validates package hashes to prevent corrupted downloads.
3. **Atomic Extraction:** Updates are extracted to an ephemeral staging area before replacing live files, ensuring zero downtime.

---

## 🔧 3. The PHP ZipArchive Requirement (`selectorctl` Fix)

Because updates and marketplace packages are delivered as compressed archives, your server's PHP environment requires the native **`zip`** extension (`ZipArchive`).

### The Error
On some shared hosting environments, this extension may be disabled by default, causing an update pre-flight check to pause with the alert:
```text
Class "ZipArchive" not found
```

### The 30-Second Terminal Solution
You can enable the native ZIP extension immediately via your cPanel Terminal using CloudLinux's `selectorctl` utility:

1. Open **cPanel Terminal** (or SSH).
2. Run the selector control command targeting your PHP version (e.g. PHP 8.2):
   ```bash
   selectorctl --interpreter php --version 8.2 --enable-user-extensions=zip
   ```
3. Verify that the extension is active:
   ```bash
   php -m | grep zip
   ```
   The terminal will output `zip`, confirming the module is loaded and ready for both CLI and web operations.
4. Return to your Update Center and resume the update with a single click.

---

## 🧩 4. Extension Updates (Themes & Plugins)

Waravel separates core framework updates from extension updates, giving you granular control:

* **Individual or Bulk Updates:** Update extensions one-by-one or click **Update All** to process them sequentially.
* **Version Lock:** Hold back a specific plugin update if your custom theme requires a specific dependency version.

---

## 🗄️ 5. Automated Database Migrations

When core upgrades or complex plugins introduce new tables or schema changes:

* **Migration Alert:** The Update Center alerts you when structural database updates are required.
* **1-Click Execution:** Click **Run Migrations** to execute the database upgrade. A live terminal-style console displays each migration batch in real time.
