---
title: Skin Customizer
description: A complete guide to using the visual Skin Customizer to adjust branding, layouts, and typography.
---

<div class="guide-banner guide-banner-user"><span>🎨</span> User Guide: Appearance</div>

# Skin Customizer

The **Skin Customizer** is a powerful visual interface that allows you to tweak the design of your active theme in real-time. You can adjust colors, spacing, typography, and even inject custom CSS without writing any code.

Access the Skin Customizer by navigating to `Appearance > Themes` and clicking the **Customize** button on your active theme.

## The Top Toolbar

The toolbar at the top of the Customizer provides global controls and status indicators.

*   **Skin Selector dropdown**: Themes can have multiple "Skins" (saved configurations). Use this dropdown to switch between the base `Default` skin and your custom saved skins.
*   **Protected Default Skin**: The `Default` skin is factory-locked to ensure you always have a safe, working baseline. You cannot modify it directly. Instead, click **Clone to Edit** to create a fresh copy that you can safely customize.
*   **Save & Publish**: Saves your current changes and makes them immediately live on the front end. A pulsing indicator shows when you have unsaved changes (isDirty).
*   **Save As...**: Clones your current configuration into a brand new skin with a custom name.
*   **Status Indicator**: Displays a green "Live on Site" badge when the current skin is actively rendering the public site.
*   **Editor Theme Toggle (🌓)**: Toggles the Customizer interface itself between Light and Dark mode to reduce eye strain.

### Draft Restoration

If you accidentally close the browser tab or lose your connection while editing, Waravel saves a local draft. When you return to the Customizer, a **Restore Draft** banner will appear at the top, allowing you to recover your unsaved progress or discard it.

---

## The Settings Panel (Sidebar)

The left sidebar houses all of your design controls, categorized logically into different structural zones of your site.

### Main Navigation Categories

1.  **Colors (Branding)**: Set global brand colors (Primary, Secondary, Accent, etc.).
2.  **Topbar**: Configure the optional slim bar above your main header.
3.  **Header**: Design the main navigation and logo area.
4.  **Body**: Set the styling for the main content wrapper.
5.  **Footer**: Design the bottom region of your site.
6.  **Additional CSS**: Inject raw, custom CSS rules for granular control.

### Structural Sub-Tabs

When you select a structural category (like Header, Body, or Footer), the panel slides to reveal granular controls organized into three tabs:

#### 1. Styling
Controls the background aesthetics. You can switch between different **Background Types**:
*   **Solid Color**: A standard, single color (hex/rgb picker).
*   **Gradient**: Create a linear gradient by selecting two colors and adjusting the angle (0-360°).
*   **Image URL**: Paste a direct link to an image file.
*   **Video URL**: Paste a direct link to an MP4 or compatible video file to create a looping background video.

#### 2. Typography
Manage text colors within the specific zone. Includes helpful **Reset** buttons to revert specific link or label colors back to the global brand defaults.

#### 3. Spacing (Responsive Controls)
Fine-tune margins and padding for pixel-perfect layouts.
*   **Device Toggles**: Switch between **Desktop**, **Tablet**, and **Mobile** views. Adjusting spacing while a device is active will apply those changes *only* to that screen size, allowing for true responsive design.
*   **Units**: Choose your preferred measurement unit (`px`, `em`, `rem`, `%`).
*   **Directional Inputs**: Independent controls for Top, Right, Bottom, and Left spacing.

---

## Topbar Configuration

The Topbar has unique controls. You must first activate the **Enable Topbar** toggle to make it visible. Once enabled, you can configure its background, font color, link color, border, and responsive spacing independently from the main Header.

## Additional CSS

For developers and power users, the **Additional CSS** panel provides a raw code editor. Any CSS rules written here will dynamically override the theme's default styles and are rendered instantly in the live preview.
