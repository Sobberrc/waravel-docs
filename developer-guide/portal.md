<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Portal Server & License Management

The **Waravel Portal** is the central authority for managing user accounts, SaaS subscriptions, and plugin/theme entitlements. It operates independently from the client's Waravel Site and communicates securely via webhooks.

## Webhook Synchronization

When a user upgrades their license plan or purchases a marketplace item on the Portal, the target Waravel Site must be informed so it can unlock the premium features.

This is handled by the `WebhookDispatcher`:

1.  **Trigger:** A billing event occurs on the Portal (e.g., successful Stripe charge).
2.  **Dispatch:** The Portal sends an HTTP POST request to the client site's registered webhook URL (e.g., `https://client-site.com/waravel/webhook`).
3.  **Verification:** The payload is signed with a cryptographic signature. The client site verifies this signature using its unique License Key to prevent spoofing.
4.  **Sync:** Once verified, the client site updates its local `license_entitlements` cache in the database. 

## Entitlement Checks

Client sites never query the Portal on every page load—this would cause severe performance issues. Instead, features are gated by checking the local cache:

```php
if (Waravel::hasEntitlement('page-promoter-pro')) {
    // Render premium UI
}
```

If a webhook fails due to network issues, the client site can manually trigger a "Sync License" from the dashboard settings, which makes a standard API pull request to the Portal.
