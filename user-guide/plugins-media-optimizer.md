# Media Optimizer Plugin - User Guide

The Media Optimizer plugin is an essential maintenance utility designed for Waravel CMS. Over time, content management systems accumulate orphaned files, unused media, and broken database records. This plugin provides tools to scan and safely clean up your storage, ensuring a tidy and efficient filesystem.

## Accessing the Plugin

After installing and activating MediaOptimizer from your Plugins dashboard, a new link will appear in your admin sidebar under **Media Optimizer**.

## Features & Usage

### 1. Unused Media Scan
This feature scans your Waravel database to find media items that have been uploaded but are no longer referenced in any pages, posts, or custom content blocks.

- **Run Scan:** Click this button to initiate a deep search through your site's content.
- **Bulk Delete:** Once the scan completes, a list of unused media IDs will be populated. You can select items to delete them, permanently removing them from storage and reclaiming space.

### 2. Ghost File Discovery
"Ghost" files refer to discrepancies between your filesystem and your database.
- **Orphaned Files:** Images that exist on your server's disk but do not have an associated media entry in the database.
- **Missing Files (Broken Links):** Media entries in your database that point to files that no longer exist on the disk.

By clicking **Discover Ghosts**, the plugin performs a deep synchronization check.

### 3. Registering & Pruning Ghosts
Once the ghost discovery is complete, you are presented with two options:
- **Register Ghost Batch:** If the plugin finds orphaned files on your disk, you can run this action to automatically create database records for them. This allows them to be seen and used in the Waravel Media Library again.
- **Prune Missing:** If the plugin finds database records pointing to missing files, running this action will safely delete those broken database entries.

### 4. Reset Statistics
At any time, you can clear the cache of the current scan results by clicking **Reset Stats**, which clears the plugin's temporary cache and readies it for a fresh scan.
