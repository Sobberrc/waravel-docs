---
title: Widget Management
description: Learn how to manage the content of your site's sidebars, footers, and structural areas.
---

<div class="guide-banner guide-banner-user"><span>🧩</span> User Guide: Appearance</div>

# Widget Management

Widgets are reusable blocks of content that can be placed into specific structural areas of your website, such as sidebars, headers, and footers. The **Widgets Management** interface (`Appearance > Widgets`) allows you to control what content appears in these designated zones.

## Understanding Widget Areas (Zones)

Waravel organizes widget areas into logical, tabbed groups based on their location on the page:

1.  **Header**: Contains sub-groups for the **Top Bar** (if enabled) and the **Main Header**.
2.  **Left Sidebar**: The primary left-hand column.
3.  **Right Sidebar**: The primary right-hand column.
4.  **Footer**: Contains columns for the bottom of your site.

### The Top Bar Toggle

When viewing the **Header** tab, you will see a toggle labeled **Show Top Bar Areas**. The top bar is an optional, slim line of content above the main header (often used for contact info or secondary links). If your design doesn't require a top bar, you can uncheck this box to hide those widget areas from the interface and keep your workspace clean.

## Managing Widgets in an Area

Clicking on a specific area button (e.g., `header-main-left` or `footer-1`) will load the active widgets assigned to that zone.

### The Widget List

The table displays all widgets currently in the selected area:
*   **Pos (Position)**: Determines the order in which widgets are displayed. Lower numbers appear first. *(Note: Drag-and-drop reordering is available within the Layout Studio, but position numbers govern the raw order here).*
*   **Title / Content**: Shows the optional title and a preview snippet of the widget's content (HTML or Shortcode).
*   **Active Status**: A badge indicating whether the widget is currently rendering on the front end (`Active` or `Inactive`).
*   **Actions**: Buttons to **Edit** or **Delete** the widget.

### Adding a New Widget

To add content to the current area:
1.  Click the **Add Widget to [Area Name]** button at the bottom of the list.
2.  A modal will appear.
3.  **Title (Optional)**: Provide an internal title. Some themes may render this title visually above the widget content.
4.  **Content**: This is the core of the widget. You can enter:
    *   **Plain Text / HTML**: Standard text or HTML markup (e.g., `<p>Hello World</p>`).
    *   **Shortcodes**: Powerful dynamic tags provided by Waravel or installed plugins (e.g., `[waravel-contact-form]`).
5.  **Active**: Toggle this off if you want to save the widget as a draft without displaying it.
6.  **Save Widget**.

### Editing and Deleting

*   **Edit**: Clicking edit opens the same modal, allowing you to modify the title, content, or active status.
*   **Delete**: Permanently removes the widget. If you just want to hide it temporarily, use the Active toggle instead.

---

> [!TIP]
> **Advanced Layouts**
> While the Widgets Management screen is great for simple content insertion, we highly recommend using the **Layout Studio** (accessible via the Theme Engine) for a visual, drag-and-drop approach to managing your widgets and their styling.
