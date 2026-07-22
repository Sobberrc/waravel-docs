---
title: Layout Studio
description: A comprehensive guide to building and managing your site structure using the visual, drag-and-drop Layout Studio.
---

<div class="guide-banner guide-banner-user"><span>🏗️</span> User Guide: Appearance</div>

# Layout Studio

The **Layout Studio** is an advanced, visual drag-and-drop interface for structural site design. While the *Skin Customizer* handles colors and aesthetics, the *Layout Studio* dictates where content (Widgets) lives on the page.

You can access the Layout Studio by navigating to `Appearance > Themes` and clicking the **Layout** button on your active theme.

## The Toolbar

The top toolbar manages your layout files and their publishing status.

*   **Layout Selector**: Switch between different saved layouts. The `Default` layout is factory-protected to ensure you always have a working structural baseline.
*   **Clone to Edit**: Because the `Default` layout is protected, you must clone it to start customizing.
*   **Save Changes / Save As...**: Save your ongoing work, or branch it into a new layout file.
*   **Use this layout**: If you are editing a layout that is not currently active, click this to publish it to the live site. A green "Live on Site" badge will appear when active.
*   **Restore Draft**: Waravel auto-saves your progress. If your session is interrupted, a banner will prompt you to restore your unsaved draft.

---

## The Interface

The Layout Studio is divided into two primary sections: The **Workspace** (the visual canvas) and the **Sidebar Drawer**.

### The Workspace (Visual Canvas)

The main area of the screen provides a simplified, structural representation of your website (Header, Sidebars, Body, Footer).

*   **Drop Zones**: Dashed, highlighted areas indicate where widgets can be placed.
*   **Drag & Drop**: You can drag widgets from the sidebar directly into these zones, or move existing widgets from one zone to another.
*   **Reordering**: Drag widgets up or down within a single zone to change their display order.

### The Sidebar Drawer

The left-hand sidebar contains two main tabs: **Widgets** (your inventory) and **Inspector** (your configuration tool).

#### 1. Widgets Tab (Inventory)

This tab acts as a library of all available content blocks, intelligently categorized for easy discovery:

*   **Identity & Branding**: Logos and site identity elements.
*   **Navigation & Links**: Menus, calls to action, and buttons.
*   **Content & Text**: Standard HTML blocks and text areas.
*   **Contacts**: Social media links and contact forms.
*   **Forms & Integration**: Advanced shortcodes and dynamic elements.

To add a widget to your site, simply click and drag it from this list onto a Drop Zone in the Workspace.

#### 2. Inspector Tab (Configuration)

When you click on a widget inside the visual Workspace, the sidebar automatically switches to the **Inspector** tab. The Inspector dynamically adapts its controls based on the *type* of widget you selected.

**A. HTML & Text Widgets**
For standard content, the Inspector provides a toggle between two editing modes:
*   **Visual Mode**: A rich-text (TinyMCE) editor for formatting text, adding links, and inserting basic media without coding.
*   **Code Mode**: A raw text area for writing exact HTML or inserting Shortcodes.

**B. Logo Widgets**
If Waravel detects a logo widget, the Inspector provides specific branding controls:
*   **Media Selection**: Choose the image file for your logo.
*   **Responsive Sizing**: Explicit controls for Width, Height, and Border Radius. Crucially, you can set different sizes for **Desktop**, **Tablet**, and **Mobile** to ensure your logo looks perfect on all devices.

**C. Menu Widgets**
Navigation widgets remove the need for coding. The Inspector provides a simple **Select Menu Source** dropdown. Simply choose a menu you've built in the Menu Manager (`Appearance > Menus`), and Waravel will render it dynamically.

**D. Social Connectivity Widgets**
For social share/link widgets, the Inspector transforms into a link builder:
*   **Platform Selection**: Choose from predefined platforms (Facebook, Twitter/X, Instagram, etc.) to automatically load the correct icon.
*   **URL Input**: Add the link to your profile.
*   **Custom Icons (Iconify)**: If you select the "Custom" platform, a built-in search engine appears, allowing you to search and select from thousands of free, open-source icons via the Iconify API.
