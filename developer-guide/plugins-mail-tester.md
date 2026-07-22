# Mail Tester Plugin - Developer Guide

The Mail Tester plugin performs complete round-trip email delivery testing (SMTP sending followed by IMAP retrieval) and integrates tightly with Waravel's task scheduling system.

## Architecture

The plugin is structured with custom models, services, and a dedicated controller hooked into the Waravel administration panel. 

- **Models:**
  - `MailAccount`: Represents a single email identity (credentials, server info, active status, last test status).
  - `MailLog`: Records historical test results (duration, success state, exact error exceptions).
- **Services:**
  - `SMTPMailer`: Handles constructing and dispatching a test email directly via SMTP (bypassing standard Laravel mailers to isolate tests to specific credentials).
  - `IMAPTester`: Connects to the mailbox via IMAP to search for the specific test email subject, verifies receipt, and then deletes the test email to keep the inbox clean.
  - `AlertNotifier`: Consolidates test failures and sends an alert to the administrator.
  - `CPanelClient`: Interacts with the cPanel UAPI to discover existing email accounts on the server.

## Event Hook & Scheduler Integration

A key feature of MailTester is its dynamic interaction with the Laravel/Waravel Console Scheduler. In `MailTesterPlugin.php`, the `registerScheduler()` method runs during the application boot phase.

```php
protected function registerScheduler(): void
{
    // Fetches settings from DB to dictate schedule dynamically
    // Injects a closure into $schedule->call() that handles the testing loop
    // Dispatches \MailTester\Services\AlertNotifier if failures occur.
}
```
This design allows end-users to change cron frequency via the UI without modifying server-level cron tabs, as long as the base `php artisan schedule:run` is active.

## Routes & API Endpoints

The plugin registers several backend routes protected by Waravel's auth and admin middleware:

- `GET /waravel/plugins/mail-tester/dashboard` - Main view rendering.
- `POST /waravel/plugins/mail-tester/accounts` - Create a new monitored account.
- `POST /waravel/plugins/mail-tester/accounts/{id}/test` - Triggers a manual, synchronous AJAX test for a specific account.
- `POST /waravel/plugins/mail-tester/accounts/test-all` - Triggers bulk diagnostics.
- `GET /waravel/plugins/mail-tester/cpanel/discover` - Hits the `CPanelClient` service to parse UAPI results.

## The Testing Flow

1. The controller or scheduler loops over active `MailAccount` instances.
2. `SMTPMailer->test($account)` sends a unique UUID-stamped email.
3. If successful, the script pauses `sleep(5)` to allow delivery.
4. `IMAPTester->testAndCleanup($account, $subject)` searches the inbox for the UUID subject.
5. If found, the email is deleted, and IMAP status is marked true.
6. Results are saved to `MailLog`, and the `MailAccount` cache columns are updated.
