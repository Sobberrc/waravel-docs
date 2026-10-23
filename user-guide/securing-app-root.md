# Securing App Root & Eliminating /public from URLs

This production guide walks you through the industry-standard method to eliminate `/public` from your website links on cPanel while safely moving sensitive Laravel application files outside the web root.

---

## 🛑 The Problem with Common Workarounds

On standard cPanel shared hosting, the web server's document root defaults to `public_html`. Because Laravel serves public assets from its internal `public/` directory, new installations often display `example.com/public/` in the address bar.

Many online guides suggest risky workarounds:
* **Modifying `index.php`:** Changing path definitions inside `public_html/index.php`. This breaks when running Composer updates and leaves sensitive files exposed.
* **Placing `.env` in `public_html`:** Exposes database credentials, APP_KEY, and API secrets to the public web if web server rewrite rules fail.

### The Production Solution

We use the clean, hardened architecture demonstrated in the official Waravel tutorials:
1. **Application Core Isolation:** Move the entire Laravel application into a private sibling folder (`main_core`) inaccessible from the public web.
2. **Public Symlink:** Create a symbolic link pointing `public_html` directly to `main_core/public`.
3. **Hardened `.htaccess`:** Deploy production Apache rewrite rules that enforce 301 redirects, strip `/public` if visitors or search engines request old URLs, and pass security headers for Waravel API and the **FileGuard Security Suite**.

---

## ⚡ Step 1: Relocate Core Files & Create Public Symlink

1. Log into your **cPanel** dashboard.
2. Scroll to the **Advanced** section and open the **Terminal**.
3. Run the following single command in your terminal:

```bash
mv public_html main_core && ln -s main_core/public public_html && rm -f main_core/.htaccess
```

### What this command does:
1. `mv public_html main_core` — Moves your existing Laravel project into a secure folder named `main_core` at your account root (outside the public web).
2. `ln -s main_core/public public_html` — Creates a fast, native symbolic link from `public_html` pointing strictly to `main_core/public`.
3. `rm -f main_core/.htaccess` — Removes any leftover root-level `.htaccess` file so all rewrite handling is delegated to the public controller.

---

## 🔒 Step 2: Deploy Production `.htaccess`

To guarantee that any legacy requests containing `/public` are automatically redirected to clean URLs with permanent HTTP 301 headers, and to enable seamless compatibility with **FileGuard Security Suite**, update `main_core/public/.htaccess`.

Run the following command directly in your cPanel Terminal:

```bash
cat << 'EOF' > main_core/public/.htaccess
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Clean 301 Redirect: Strip /public from URLs
    RewriteCond %{THE_REQUEST} \s/+public/([^\s?]*) [NC]
    RewriteRule ^ /%1 [R=301,L]
    RewriteCond %{THE_REQUEST} \s/+public[\s?] [NC]
    RewriteRule ^ /? [R=301,L]

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Pass through Anti-CSRF Token for Waravel API & FileGuard Security
    RewriteCond %{HTTP:X-XSRF-Token} .
    RewriteRule .* - [E=HTTP_X_XSRF_TOKEN:%{HTTP:X-XSRF-Token}]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
EOF
```

---

## 🧪 Step 3: Live Verification

1. **Test Root URL:** Open your browser and navigate to `https://yourdomain.com`. Your homepage should load cleanly with no `/public` in the address bar.
2. **Test 301 Redirect:** Manually type `https://yourdomain.com/public` or `https://yourdomain.com/public/waravel-login`. The web server should automatically rewrite the request and 301 redirect to `https://yourdomain.com` or `https://yourdomain.com/waravel-login`.
3. **Verify Security:** Attempt to browse to `https://yourdomain.com/.env` or `https://yourdomain.com/composer.json`. Because the document root strictly points to `main_core/public`, these files do not exist in the web document tree and return a 404/403, keeping your server secure.

---

## ❓ Frequently Asked Questions

### What if I need to run Artisan or Composer commands later?
Because your application files now live in `main_core`, navigate to `main_core` whenever running terminal commands:
```bash
cd ~/main_core
php artisan optimize:clear
```

### Can I still use the cPanel File Manager?
Yes. To edit application files, open File Manager and enter the `main_core` folder. `public_html` will appear as a symbolic link shortcut pointing to `main_core/public`.
