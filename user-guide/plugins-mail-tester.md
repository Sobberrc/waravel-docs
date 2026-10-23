---
title: Mail Tester
description: Monitor, diagnose, and verify your SMTP and IMAP business email delivery automatically with Waravel's Mail Tester plugin.
---

<div class="guide-banner guide-banner-user"><span>✉️</span> User Guide: Tools & Plugins</div>

# Mail Tester

The **Mail Tester** plugin (**Tools → Plugins → Mail Tester**) is an automated email health and delivery diagnostics engine. It ensures your business email accounts are reliably sending and receiving messages without silent deliverability failures.

By executing live SMTP (outgoing) and IMAP (incoming) tests automatically in the background or on-demand, Mail Tester provides continuous peace of mind that customer inquiries, lead alerts, and transactional notifications are reaching their destinations.

---

## 🌟 Key Capabilities

* **End-to-End Delivery Verification:** Sends a live test email via SMTP and verifies its arrival in the inbox via IMAP.
* **One-Click cPanel Email Discovery:** Automatically imports all email accounts associated with your domain via the cPanel API without manual typing.
* **Automated Background Scheduling:** Runs automated email health audits daily, weekly, or monthly.
* **Smart Failure Alerts:** Sends an instant alert to your administrative phone or email only if an account fails its deliverability checks.
* **Detailed Diagnostics Log:** Tracks server response times, SSL/TLS handshake status, and error logs for every test.

---

## 🖥️ The Mail Tester Dashboard

Access the monitor from **Tools → Plugins → Mail Tester**:

### 1. Monitored Accounts Table
Displays all tracked email addresses alongside their real-time health indicators:
* **Account Name:** The monitored email address (e.g., `sales@yourdomain.com`).
* **Outgoing Status (SMTP):** Vibrant green badge indicating successful handshake and send capability, or a red badge indicating authentication/server failure.
* **Incoming Status (IMAP):** Verifies inbox accessibility and retrieval.
* **Last Tested:** Exact timestamp of the latest diagnostic run.
* **One-Click Test (▶️):** Click **Run Test** next to any account to trigger an immediate diagnostic check.

### 2. Adding & Importing Accounts
* **Manual Configuration:** Click **Add Account** to enter email, password, SMTP host/port (e.g., `mail.yourdomain.com:465`), and IMAP settings.
* **cPanel Auto-Discovery:** Under **Settings → cPanel API**, enter your cPanel token. Click **Discover from cPanel** to import all domain email accounts in two seconds!

---

## ⏰ Automated Scheduling & Failure Alerts

Under the **Settings** tab:

1. **Schedule Frequency:** Choose how often Waravel audits your email accounts:
   * **Daily:** Best for high-volume sales and customer support inboxes.
   * **Weekly:** Standard check for business communications.
   * **Monthly:** Low-maintenance monitoring.
2. **Notification Alert:** Enter your personal alert email. You will only be contacted if an account fails its delivery check, including a consolidated diagnostic report pinpointing the exact error.
