---
title: Waravel Updates & Health Diagnostics
description: Comprehensive user guide to the Waravel Update Centre, Auto-Pilot background updates, cryptographic pre-flight security, ZipArchive diagnostics with selectorctl, and 1-click database migrations.
---

<div class="guide-banner guide-banner-user"><span>🔄</span> User Guide: System Maintenance</div>

# Waravel Updates & Health Diagnostics

The **Waravel Update Centre** (accessed via **Updates** in the top navigation bar or the left sidebar menu at `/waravel/updates`) is your unified mission control for maintaining your website’s core software, visual themes, functional plugins, and database schemas.

In Waravel, modern software delivery is completely stress-free: every update is cryptographically validated, applied atomically without downtime, and safeguarded by pre-flight environment checks.

```mermaid
flowchart TD
    A["1. Update Centre Overview (/waravel/updates)"] --> B["2. Core Infrastructure & Auto-Pilot Sync"]
    B --> C["3. Pre-Flight Check: PHP ZipArchive Extension"]
    C -->|If Missing| D["4. 30-Sec Fix: selectorctl in Web Terminal"]
    D --> E["5. Live 1-Click Update (#coreDeployBtn)"]
    C -->|If Present| E
    E --> F["6. One-Click Database Migrations (#runMigrationsBtn)"]
```

---

## 🏛️ Scene 1: Introduction to the Update Centre

Navigating to `/waravel/updates` reveals a master status grid divided into dedicated operational cards:

1. **Core Infrastructure:** Manages the primary Waravel engine, framework releases (`sobberrc/waravel`), and kernel dependencies.
2. **Themes:** Tracks visual theme updates, thumbnail previews, and styling assets.
3. **Plugins:** Audits all installed extensions for new features and security advisories.
4. **Database Migrations:** Detects pending schema alterations, table additions, and indexing optimizations.
5. **CLI Mode:** Provides the exact `composer update sobberrc/waravel` command for terminal-oriented workflows with a 1-click **Copy** button.

At the top right, a prominent **Check for updates** button forces an immediate cache bypass and synchronizes with official repositories.

---

## ⚡ Scene 2: Core Infrastructure & Auto-Pilot Sync

The **Core Infrastructure** card (`#coreDeployBtn` container) provides real-time version intelligence and automated software delivery:

* **Installed Version vs Latest Stable:**
  * Displays your currently installed build alongside the latest stable release published by the Waravel engineering team.
  * When up to date, a green **"Up to Date"** badge appears with a shield icon. If a new release is detected, a pulsing red **"Update Available"** badge illuminates.
* **Auto-Pilot Background Switch (`input[onchange*="core"]`):**
  * Toggling the **Auto-Pilot** switch activates an amber indicator glow.
  * When Auto-Pilot is enabled, Waravel's background task scheduler silently checks for verified security patches and stable maintenance updates every hour.
  * Updates are safely staged, verified, and applied in the background without requiring manual clicks or taking your website offline.
* **Beta Versions Toggle (`#coreBetaWrapper`):**
  * When Auto-Pilot is active, an optional **Beta Versions** toggle appears, allowing early-adopter developers to test upcoming feature builds automatically.
* **Semantic Release Target Selector (`#coreVersionSelector`):**
  * A flexible version dropdown selector allows you to pick specific target releases (Installed, Latest Stable, Latest Beta, or historical rollbacks).
  * Changing the dropdown instantly updates the dynamic **What's New** changelog card (`#coreChangelogCard`), displaying bulleted release notes before installation.

---

## 🛡️ Scene 3: Pre-Flight Security Audits & The ZipArchive Dependency

Before any code is altered on your server, Waravel's update engine runs a series of strict pre-flight security audits:

1. **Cryptographic Checksum Verification (`SHA-256` / `SHA-1`):**
   * Downloads are authenticated against official signatures to ensure files have not been tampered with or corrupted during transit.
2. **Deep Package Inspection (Malware & Zip Slip Defense):**
   * The package inspector validates relative paths to prevent Zip Slip directory traversal attacks, verifies decompression ratios to block ZIP bombs, and scans for unauthorized executable payloads.
3. **Atomic Archive Extraction:**
   * Files are extracted directly into the package root while preserving live uptime.
4. **The ZipArchive Requirement:**
   * To safely uncompress update packages, your server's PHP interpreter requires the native **`zip`** extension (`ZipArchive`).
   * On certain shared hosting environments (or freshly provisioned CloudLinux servers), this module may be disabled by default, causing pre-flight checks to pause with a warning:
     ```text
     Class "ZipArchive" not found
     ```

---

## 💻 Scene 4: 30-Second Terminal Resolution via `selectorctl`

If your server pauses due to a missing PHP `zip` extension, you can resolve it in under 30 seconds directly from your **cPanel Terminal** or an SSH terminal window using CloudLinux’s built-in `selectorctl` utility.

### Step 1: Open Terminal & Enable the Extension
In your cPanel Terminal prompt, execute the selector command targeting your active PHP version (for example, PHP 8.2):

```bash
selectorctl --interpreter php --version 8.2 --enable-user-extensions=zip
```

The system will confirm the extension has been successfully registered.

### Step 2: Verify Extension Activation
Run a quick diagnostic check to confirm that the `zip` module is active in both CLI and web environments:

```bash
php -m | grep zip
```

The terminal will immediately output:
```text
zip
```

The module is now active and ready for high-speed atomic extraction.

---

## 🚀 Scene 5: Live 1-Click Update & Database Migration

With pre-flight validation confirmed, you are ready to apply your update:

```
[ ⚡ Install Target Version ]  →  Extracting  →  Clearing Caches  →  [ Run Migrations ]
```

1. **Trigger Live Update:**
   * Return to your browser window at `/waravel/updates`.
   * Click the prominent button: **Install** (`#coreDeployBtn`, styled with an amber bolt icon).
   * The button animates into a spinning progress indicator while the backend acquires an exclusive file lock (`core_update.lock`) to prevent race conditions.
2. **Atomic File Deployment & Automated Cache Purge:**
   * Waravel downloads the verified package, verifies its SHA-256 checksum, extracts files into place, flushes Blade view caches (`view:clear`), purges configuration and route caches (`config:clear`, `route:clear`), and resets the PHP OPcache (`opcache_reset()`).
   * An in-DOM toast notification confirms success:
     ```text
     ✓ Waravel core successfully updated to latest version via Portal!
     ```
3. **Run Database Migrations:**
   * If the release includes new database structures or column optimizations, the **Database** card highlights with an alert badge:
     ```text
     Migration Required: A recent update needs a database migration. Click the button below to fix this.
     ```
   * Click the amber **Migrate** button (`#runMigrationsBtn`).
   * A terminal console preview logs each migration batch in real time.
4. **Final Verification:**
   * Within seconds, a green checkmark illuminates, and the Core Status badge updates permanently to a vibrant emerald: **"Up to Date"**.
   * Your platform is now operating on the fastest, most secure version of Waravel with 100% data integrity and zero visitor disruption.
