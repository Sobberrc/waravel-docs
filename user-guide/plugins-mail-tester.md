# Mail Tester Plugin - User Guide

The Mail Tester plugin for Waravel is a comprehensive diagnostics tool that ensures your email accounts are actively sending and receiving emails. It runs both SMTP (outgoing) and IMAP (incoming) tests automatically or on-demand, providing peace of mind that your essential business communications are fully functional.

## Installation and Setup

1. Install and activate the **MailTester** plugin from your Waravel Plugins dashboard.
2. Once activated, a new menu item **Mail Tester** will appear in the Waravel administration sidebar.

## Mail Tester Dashboard

The primary interface is located at **Dashboard â†’ Mail Tester**. From here you can manage mail accounts, run tests, and view history.

### Managing Mail Accounts
- **Add Account:** You can manually add email accounts by providing the Email Address, Password, SMTP Host/Port, and IMAP Host/Port.
- **cPanel Discovery:** If you use cPanel, you can navigate to the settings to configure the cPanel API. Once configured, you can click "Discover from cPanel" to automatically import all email accounts associated with your domain.
- **Account List:** The main table displays all monitored accounts, their latest SMTP status, latest IMAP status, and the timestamp of the last test. 

### Running Tests
- **Manual Test:** Click the "Run Test" button next to any specific email account to run an immediate diagnostic. The plugin will attempt to send an email via SMTP and then wait to retrieve it via IMAP.
- **Bulk Test:** Click "Test All Accounts" to queue up and execute diagnostics across all configured email addresses simultaneously.
- **Logs & History:** Click on the "History" or "Logs" tab to view detailed records of past tests, including exact error messages, duration of tests, and timestamps. You can clear these logs to save space.

## Automated Scheduling and Settings

Navigate to **Mail Tester â†’ Settings** to configure automation and notifications.

### Schedule Settings
You can configure the plugin to run tests in the background automatically:
- **Frequency:** Choose between Everyday, Weekly, or Monthly.
- **Time/Day:** Specify the exact hour, day of the week, or date of the month the diagnostic should execute.

### Notification Settings
- **Alert Email:** Specify an email address where failure alerts should be sent.
- **Alert Condition:** You will only receive a notification if one or more accounts fail their SMTP or IMAP checks during the scheduled test. The email will contain a consolidated report of the failures.

### cPanel API Settings
To use the auto-discovery feature:
- Enter your cPanel Username.
- Enter your cPanel API Token.
- Enter your cPanel Domain/Host.
