---
title: Theme Engine
description: Learn how to manage, activate, and configure your Waravel themes via the Theme Engine.
---

<div class="guide-banner guide-banner-user"><span>📘</span> User Guide: Appearance</div>

# Theme Engine

The **Theme Engine** is the visual heart of your Waravel application. Accessible from the dashboard (`Appearance > Themes`), it allows you to view installed themes, switch active themes, perform bulk operations, and access powerful tools like the Skin Customizer and Layout Studio.

## Navigating the Theme Engine

When you open the Theme Engine, you are presented with a clean, grid-based interface displaying all installed themes.

### Theme Cards

Each installed theme is represented by an interactive card:

1.  **Status Indicator**: Active themes are highlighted with a glowing amber border and a pulsing amber dot in the title bar. Inactive themes have a darker, more subdued appearance.
2.  **Thumbnail**: A visual preview of the theme. If no thumbnail is provided, a decorative placeholder is shown.
3.  **Hover Overlay**: Hovering over the main body of a theme card reveals detailed information, including:
    *   **Version Number**: e.g., "Version 1.0.0"
    *   **Description**: A brief summary of the theme's purpose and style.
    *   **Author**: The creator of the theme.

### Theme Actions

The actions available at the bottom of each theme card depend on whether the theme is active or inactive.

#### For the Active Theme:
*   **Customize**: Launches the **Skin Customizer**, a visual interface for adjusting colors, typography, spacing, and CSS.
*   **Layout**: Opens the **Layout Studio**, where you can manage widget placements and structural components.
*   **Deactivate**: Reverts the site to a blank, default state. *Warning: Your site will lose its current visual presentation.*

#### For Inactive Themes:
*   **Activate Theme**: Instantly switches your site's active theme to this one. This automatically applies the new theme's layouts and default skins.
*   **Delete (Trash Can Icon)**: Permanently deletes all theme files from the server. *Use with caution.*

---

## Bulk Actions & Management

The Theme Engine features a robust **Bulk Operations** toolbar, allowing you to manage multiple themes simultaneously.

### Using Bulk Actions
1.  Check the boxes in the top-left corner of the theme cards you wish to modify, or use the **Select All** checkbox in the toolbar.
2.  Select an action from the **Bulk Actions** dropdown menu.
3.  Click **Apply Action**.

### Available Bulk Operations

*   **Update**: Fetches and applies the latest version of the theme from the Waravel Marketplace.
*   **Register & Activate**: Registers the theme license with your portal account and immediately sets it as the active theme.
*   **Register**: Registers the theme license without activating the theme.
*   **Activate / Deactivate**: Toggles the active status of the selected themes.
*   **Enable auto updates / Disable auto updates**: Configures whether the theme should automatically install future releases.
*   **Delete**: Permanently removes the selected themes from your server.

### The Bulk Progress Modal

When you trigger a bulk action, Waravel displays an intuitive progress modal. 
*   **Real-time Progress Bar**: Tracks the overall completion percentage.
*   **Queue List**: Shows the status of each individual theme (e.g., "Waiting", "Processing", "Success", "Failed", or "Already Done").
*   If an error occurs (like a network issue or failed registration), the specific row will turn red and display the error message.

---

## The Marketplace Integration

At the top right of the Theme Engine, you'll find the **Browse Marketplace (🛒)** button. This seamlessly connects you to the Waravel Marketplace, where you can discover, purchase, and install new premium and free themes to expand your site's capabilities.
