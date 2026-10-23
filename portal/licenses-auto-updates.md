# Activating Your Waravel License & Auto-Updates

This guide walks you through connecting your active Waravel license key to your website using the command-line interface, instantly unlocking your administrative dashboard and enabling automated ecosystem updates.

---

## 🔒 The "License Required" Screen

When you complete the initial Waravel installation and sign in at `https://yourdomain.com/waravel-login`, you will encounter the **License Required** screen.

This security checkpoint prevents unauthorized installations and ensures your site is connected to the official Waravel package registry for security patches, plugin downloads, and theme synchronizations.

---

## 🔑 Step-by-Step License Activation

### Step 1: Copy Your License Key from the Portal
1. Log in to [portal.waravel.com](https://portal.waravel.com).
2. On your **Portal Dashboard**, locate the **Active Licenses** table.
3. Click the copy icon next to your license key (format: `waravel_...`).

---

### Step 2: Open cPanel Terminal
1. In your cPanel dashboard, scroll down to the **Advanced** section.
2. Click **Terminal**.
3. Navigate into your application directory (e.g. `cd ~/main_core` or `cd public_html`).

---

### Step 3: Bind Your License Key via Artisan
Run the dedicated Waravel licensing command, substituting your actual key:

```bash
php artisan waravel:license-key YOUR_WARAVEL_LICENSE_KEY
```

The CLI will securely write the key into your `.env` configuration file and output:
```text
[OK] WARAVEL_LICENSE_KEY successfully saved to .env
```

---

### Step 4: Clear Laravel Application Cache
Because Laravel aggressively caches configuration files for optimal production performance, clear the application caches so the runtime reads the newly bound environment variable:

```bash
php artisan optimize:clear
```

The terminal will confirm:
* *Configuration cache cleared*
* *Compiled views cleared*
* *Application cache cleared*
* *Route cache cleared*

---

### Step 5: Click "Retry Validation"
1. Switch back to your browser tab displaying the **License Required** screen.
2. Click the amber **Retry Validation** button.
3. The license validation resolves instantly (<200ms). The restriction overlay clears immediately, and you are welcomed directly into your fully unlocked **Waravel Dashboard**!

---

## 🔄 1-Click Auto-Updates & Sync Live

Once your license is verified, your Waravel CMS establishes a secure, encrypted link with `portal.waravel.com`.

### What This Enables:
* **Marketplace Access:** Browse, install, and activate official plugins and themes with one click.
* **Sync Live Status:** The dashboard and marketplace display an active **Sync Live** indicator, continuously validating license health and entitlement tiers.
* **Core & Extension Updates:** When a new core release, security patch, or plugin update is published, an alert badge appears in the top navigation **System Updates** tab (`/admin/updates`).
* **Zero FTP Required:** Click **Update Now** on any outdated component, and Waravel automatically downloads, verifies checksums, and applies the update in place.
