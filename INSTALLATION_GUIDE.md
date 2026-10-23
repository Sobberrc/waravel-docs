# Installing Laravel and Waravel on cPanel

This step-by-step guide walks you through deploying a clean Laravel foundation and installing the Waravel core ecosystem on a standard cPanel hosting environment.

---

## 📋 Prerequisites & Requirements

Before you begin, ensure your hosting environment satisfies the following requirements:

* **cPanel Access:** Standard cPanel account with **Terminal** access enabled (or SSH credentials).
* **PHP Version:** PHP 8.2 or higher (recommended: PHP 8.2+ with `bcmath`, `ctype`, `fileinfo`, `json`, `mbstring`, `openssl`, `pdo_mysql`, `tokenizer`, `xml`, and `zip` extensions).
* **Database:** MySQL 5.7+ or MariaDB 10.3+.
* **Package Manager:** Composer pre-installed on the server.
* **Auto-Installer:** Softaculous Apps Installer (available in almost all cPanel distributions).

---

## 🚀 Step 1: Deploy Base Laravel via Softaculous

Softaculous allows you to deploy a pristine Laravel installation with a single click, automatically generating an isolated database and framework credentials.

1. **Log in to cPanel** directly or via your hosting provider's client dashboard.
2. Scroll to the **Software** section and click **Softaculous Apps Installer** (or click its icon on the cPanel sidebar).
3. In the Softaculous search bar, type `Laravel`, or navigate to **Frameworks → Laravel**.
4. Click the blue **Install Now** button.
5. Configure your deployment options:
   * **Choose Protocol:** Select `https://` (or `https://www.` depending on your domain configuration).
   * **Choose Domain:** Select the target domain or subdomain for your Waravel site.
   * **In Directory:** Clear this field completely to install directly into the web root (e.g., `public_html`), rather than a subdirectory like `public_html/laravel`.
6. Scroll to the bottom and click **Install**. Softaculous will download and extract Laravel and set up the `.env` database connection automatically.

---

## 💻 Step 2: Open cPanel Terminal & Navigate to App Root

1. Return to the main cPanel dashboard (`/frontend/jupiter/index.html`).
2. Scroll down to the **Advanced** section and click **Terminal**.
3. Once the interactive command prompt opens, navigate into your application directory:

```bash
cd public_html
```

> [!NOTE]
> Depending on your hosting provider or addon domain setup, your target folder may differ (e.g., `subdomains/blog` or `domains/example.com/public_html`). Ensure your terminal prompt displays the root directory containing your newly deployed Laravel `composer.json` file.

---

## 📦 Step 3: Register the Waravel Composer Repository

To allow Composer to locate and download the Waravel package from the official portal distribution server, register the custom repository:

```bash
composer config repositories.waravel '{"type": "composer", "url": "https://portal.waravel.com"}'
```

This updates your `composer.json` to include the authenticated Waravel package registry.

---

## 📥 Step 4: Require the Waravel Core Package

Pull in the Waravel core package and its required dependencies via Composer:

```bash
composer require sobberrc/waravel
```

Composer will resolve the dependency tree, download the Waravel core files, and rebuild the optimized autoloader.

---

## 🗄️ Step 5: Execute Database Migrations

Run database migrations to initialize the Waravel table schema:

```bash
php artisan migrate
```

This creates all essential tables:
* `waravel_pages` & revisions
* `waravel_settings`
* `waravel_plugins` & extension registry
* `waravel_tags` & taxonomy relationships
* Waravel admin roles and permissions

---

## 🔗 Step 6: Create the Public Storage Symlink

Waravel requires a symbolic link from `public/storage` to `storage/app/public` so that media uploads, thumbnails, and theme assets are publicly accessible via HTTP:

```bash
php artisan storage:link
```

> [!IMPORTANT]
> Always execute `php artisan storage:link`. If this step is omitted, files uploaded through the Waravel Media Vault will save to storage but will result in 404 errors when rendered on public pages or previewed in the dashboard.

---

## ⚙️ Step 7: Run the Interactive Waravel Installer

Initialize Waravel by running the automated installation wizard:

```bash
php artisan waravel:install
```

Follow the interactive prompts in your terminal:

1. **Admin Name:** Enter your full name or administrator display name (e.g., `Admin User`).
2. **Admin Email:** Enter the administrative email address you will use to log in (e.g., `admin@yourdomain.com`).
3. **Password:** Enter a strong password for the root administrative account.
4. **Confirm Password:** Re-type the password to confirm.
5. **Starter Layout:** Choose your preferred initial layout / starter template from the options presented.

Upon completion, you will see the confirmation banner:
```text
Waravel installed successfully!
```

---

## 🔐 Step 8: Sign In & The License Required Screen

1. Open a new browser tab and navigate to your Waravel login route:
   ```text
   https://yourdomain.com/waravel-login
   ```
2. Log in using the administrative email address and password you specified during `php artisan waravel:install`.
3. Upon signing in, you will be greeted by the **License Required** screen.

> [!TIP]
> **This is completely expected for fresh installations!** Waravel requires an active license key from the Waravel Portal to unlock the admin dashboard, enable automatic updates, and activate ecosystem plugins.

---

## ⏭️ Next Steps

Now that your base installation is complete:

1. **Obtain Your License Key:** If you have not generated a license key yet, review the [Portal Plans & Licensing Guide](/portal/plans-pricing) to register and copy your key.
2. **Activate Your License:** Follow our [License Activation Guide](/portal/licenses-auto-updates) to connect your key via `php artisan waravel:license-key` and click **Retry Validation**.
3. **Secure Your App Root:** Check our guide on [Securing App Root & Eliminating /public](/developer-guide/infrastructure) to isolate your core Laravel files and ensure clean URLs.
