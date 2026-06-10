<div class="guide-banner guide-banner-user"><span>📖</span> User Guide: Plugin Overview</div>

# Redirect Manager & 404 Monitor

The **Redirect Manager** is a critical SEO utility. When you change a URL, delete a page, or migrate from another platform, any visitors trying to access the old URL will hit a "404 Not Found" error. This harms the user experience and damages your search engine rankings. 

This plugin solves that by catching those errors and smoothly routing users to the correct new destination, preserving your site's "Link Equity."

---

## What Does It Do?

1. **Creates Routing Rules**: Easily set up Permanent (301) or Temporary (302) redirects.
2. **Monitors Broken Links**: The system actively watches your site for 404 errors and logs them.
3. **One-Click Fixes**: Turn a broken link into a working redirect instantly from the dashboard.

---

## 1. Creating a Redirect

There are two primary ways to create a redirect in Waravel.

### Method A: From the Page Editor (For Specific Pages)
If you are editing an existing page and decide to change its slug (e.g., from `/old-services` to `/new-services`), you should create a redirect immediately.
1. Open the page in the **Page Editor**.
2. Scroll to the bottom of the right-hand sidebar to the **Page Redirect** section.
3. Enter the new destination URL.
4. Select the type (usually **301 Permanent**).
5. Save the page. Waravel will now automatically forward traffic from the old URL to the new one.

### Method B: From the Redirect Dashboard (Site-Wide Rules)
If you are redirecting an old URL that no longer exists in your database:
1. Navigate to **Plugins > Redirects**.
2. Click **Create New Redirect**.
3. **Source URL**: Enter the old, broken path (e.g., `/contact-us.php`).
4. **Target URL**: Enter the new path on your Waravel site (e.g., `/contact`).
5. **Expiration**: You can set temporary redirects to expire automatically after 30 or 90 days.
6. Click Save.

---

## 2. Understanding Redirect Types

Choosing the correct code is vital for SEO and browser behavior:
- **301 (Moved Permanently)**: Tells search engines the page has moved forever. Transfers link equity. Use this for 95% of URL changes.
- **302 (Found/Temporary)**: Indicates a temporary move. Does not transfer link equity.
- **307 (Temporary Redirect)**: The modern version of 302. Ensures the HTTP method (GET/POST) does not change.
- **308 (Permanent Redirect)**: The modern version of 301. Ensures the HTTP method does not change.
- **410 (Gone)**: Use this if you have deleted a page permanently and want to tell Google to stop indexing it entirely.

---

## 3. Hit Tracking & Analytics
Every redirect rule includes built-in analytics:
- **Hit Count**: See exactly how many times a redirect has been triggered.
- **Last Hit**: Know the exact timestamp of the most recent usage.
- **IP & Referer Logging**: View detailed logs (if enabled) of who is accessing your old URLs and where they are coming from.

---

## 3. The 404 Error Monitor

You can't fix broken links if you don't know they exist. The 404 Monitor acts as an early warning system.

1. Navigate to the **404 Monitor** tab in the plugin.
2. You will see a list of every URL that a visitor (or a search engine bot) tried to access but failed.
3. **Hit Tracking**: The system sorts these by the number of hits. If a URL has 500 hits, it is a critical issue that needs fixing immediately.
4. **Convert to Redirect**: Next to any 404 error, click the **"Create Redirect"** button. Waravel will pre-fill the old URL for you, allowing you to instantly assign a new destination and fix the leak.

---

## 4. Advanced Performance & Security

### `.htaccess` Integration
For ultimate performance, Waravel can write your redirect rules directly into the server's `.htaccess` file.
- **Why it matters**: Server-level redirects happen instantly, before PHP or the database even load. This makes them incredibly fast.
- **How to use**: In the plugin settings, toggle "Enable Server-Level Redirects." (Note: Ensure your server supports Apache `.htaccess` overrides before enabling).

### Built-in Safeguards
- **Loop Protection**: The plugin automatically scans your rules to prevent "Infinite Loops" (where Page A redirects to Page B, and Page B redirects back to Page A, breaking the site).
- **Security Blocks**: The system prevents users from creating redirects that point to dangerous internal protocols or private IP addresses.
