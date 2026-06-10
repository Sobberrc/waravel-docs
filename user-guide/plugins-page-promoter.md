<div class="guide-banner guide-banner-user"><span>📖</span> User Guide: Plugin Overview</div>

# Page Promoter (Standard)

The **Page Promoter** provides the secure diagnostic bridge between your Waravel site and the **Google Ads API**. It handles the complex authentication handshake and provides a simplified console for verifying your connection health.

---

## 1. Secure API Configuration
Configure your enterprise marketing credentials directly in the dashboard:
- **Developer Token**: Your approved Google Ads developer identifier.
- **OAuth Credentials**: Client ID and Client Secret from your Google Cloud Project.
- **Refresh Token**: Persistent authentication for automated background requests.
- **Customer ID**: Your specific Google Ads Manager or Client account ID.

---

## 2. Connection Diagnostics
The diagnostic console allows you to verify every step of the API handshake:
- **Service Initialization**: Confirms the Google Ads PHP SDK is correctly configured.
- **Authorization Check**: Validates that your OAuth credentials and Refresh Token are active and haven't expired.
- **Account Discovery**: Confirms that your Developer Token has the correct permissions to access the specified Customer ID.

---

## 3. Manual Promotion
The standard version allows you to identify specific pages for promotion and prepares them for the Pro campaign builder:
- **Targeting**: Select internal pages for conversion tracking.
- **Status Tracking**: Monitor the "Ads Ready" status of your pages.

---

> [!TIP]
> **Automate Your Ads with GSC Data?**
> Upgrade to **[Page Promoter Pro](./plugins-page-promoter-pro.md)** to unlock the **Auto-Pilot Ads** engine and the integrated **Campaign Builder**.
