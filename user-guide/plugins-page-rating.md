# PageRating User Guide

## Overview
The PageRating plugin allows you to effortlessly collect feedback and ratings from your visitors. It injects a customizable rating widget into your pages, enabling users to rate your content out of 5 stars.

## The Rating Widget
The core of the plugin is the rating widget (`rating-widget.blade.php`).
- Displays seamlessly at the bottom of designated pages.
- Allows users to click on stars to submit their rating.
- Shows current average rating and total vote count.

## Dashboard Settings
In the dashboard (`dashboard/settings.blade.php`), you can configure:
- Which pages should display the rating widget.
- Visual styles (colors, sizes) of the widget.
- Custom thank-you messages displayed after a user submits a rating.

## Uninstallation
If you decide to remove the plugin, you can access the `uninstall-confirmation.blade.php` page to safely remove the plugin and optionally clean up associated rating data from the database.
