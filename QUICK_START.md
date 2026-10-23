# Waravel Quick Start Cheatsheet

Need to install or verify Waravel quickly? Follow this condensed cheatsheet to deploy Waravel on cPanel or any standard Linux/SSH hosting in under 5 minutes.

---

## ⚡ 5-Minute Installation Cheatsheet

Once your clean Laravel application is deployed via Softaculous (or `composer create-project laravel/laravel .`), open your terminal in the application directory and run these commands in sequence:

```bash
# 1. Navigate to application root
cd public_html

# 2. Register Waravel Portal repository
composer config repositories.waravel '{"type": "composer", "url": "https://portal.waravel.com"}'

# 3. Pull in Waravel Core Package
composer require sobberrc/waravel

# 4. Run database migrations
php artisan migrate

# 5. Create public storage symlink for media assets
php artisan storage:link

# 6. Run interactive Waravel setup wizard
php artisan waravel:install
```

---

## 🔑 Post-Installation: License Activation

1. Access your login page at `https://yourdomain.com/waravel-login` and log in with your admin credentials.
2. When the **License Required** screen appears, copy your key from [portal.waravel.com](https://portal.waravel.com) and run:

```bash
# Bind license key to .env
php artisan waravel:license-key YOUR_WARAVEL_LICENSE_KEY

# Clear cached configuration
php artisan optimize:clear
```

3. Return to the browser tab and click **Retry Validation** to immediately unlock the dashboard.

---

## 🛡️ Quick Security: Eliminating `/public` from URLs

To move sensitive application core files outside the public web root and enable clean 301 redirects:

```bash
# Move app files to main_core and symlink public directory
mv public_html main_core && ln -s main_core/public public_html && rm -f main_core/.htaccess
```

Then ensure your `.htaccess` file inside `main_core/public/` handles trailing slashes and 301 redirects cleanly.

---

## 🧭 Command Quick Reference

| Command | Purpose |
| :--- | :--- |
| `composer config repositories.waravel ...` | Links Composer to `portal.waravel.com` package registry |
| `composer require sobberrc/waravel` | Downloads Waravel core and dependencies |
| `php artisan migrate` | Creates Waravel schema (pages, settings, taxonomy, plugins) |
| `php artisan storage:link` | Generates `public/storage` symlink for media library files |
| `php artisan waravel:install` | Configures admin account and initializes starter layout |
| `php artisan waravel:license-key <key>` | Sets `WARAVEL_LICENSE_KEY` in `.env` |
| `php artisan optimize:clear` | Purges config, view, route, and application caches |
