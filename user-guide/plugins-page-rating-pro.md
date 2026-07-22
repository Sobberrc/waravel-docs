# PageRatingPro User Guide

## Overview
PageRatingPro enhances the standard PageRating plugin by adding deep analytics, advanced widget configurations, and shortcode support for precise widget placement.

## Analytics Dashboard
The new `dashboard/analytics.blade.php` view provides comprehensive insights into your ratings:
- **Trends Over Time**: View charts showing how ratings fluctuate on a daily or weekly basis.
- **Top Rated Pages**: Identify which content is resonating most with your audience.
- **Needs Improvement**: Quickly spot pages that are receiving consistently low scores.

## Enhanced Widget & Shortcodes
- Instead of just displaying at the bottom of the page, the Pro version allows you to use shortcodes (e.g., `[rating-widget]`) to embed the widget anywhere within your content.
- The `dashboard/settings.blade.php` has been expanded to offer more granular control over widget appearance, including custom star icons and animation effects.
