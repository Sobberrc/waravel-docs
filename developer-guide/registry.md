<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Package Registry & Auto-Pilot

The **Package Registry** acts as the distribution hub for the Waravel ecosystem. It serves the physical `.zip` files containing core updates, plugins, and themes, alongside metadata regarding versions and compatibility.

## The Auto-Pilot System

Instead of forcing users to download `.zip` files from a portal and upload them manually via FTP or a clunky uploader, Waravel utilizes the **Auto-Pilot System** for seamless, one-click installations and background updates.

When an update or installation is triggered:

1.  **Request:** The Waravel Site sends a request to the Registry API with the desired item ID and the site's active License Key.
2.  **Verification:** The Registry validates the License Key against the Portal Server to ensure the user has the correct entitlement.
3.  **Delivery:** If valid, the Registry responds with a secure, temporary, signed URL to the `.zip` payload.
4.  **Extraction:** The local `UpdateService` downloads the payload to the `storage/app/waravel/temp` directory, extracts it, and dynamically moves the files to the appropriate `plugins/`, `themes/`, or core framework directories.
5.  **Migration & Cache:** The system automatically runs any necessary database migrations included in the package and flushes the application cache to finalize the update.

## Version Rollbacks

The Auto-Pilot system maintains a local backup of the previous version before applying an update. If an update introduces a breaking change, administrators can utilize the **Rollback** feature from the dashboard to restore the exact files and database state from the previous stable version.
