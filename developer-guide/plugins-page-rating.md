# PageRating Developer Guide

## Architecture Overview
The PageRating plugin adds user feedback functionality to Waravel sites through middleware injection and lightweight API endpoints.

### Plugin Registration
Handled by `PageRatingPlugin.php`. It registers the necessary routes for rating submissions and the middleware for injecting the widget.

### Models
- `RatingSubmission`: Represents an individual user's rating on a specific page. Records the score, user IP, and timestamp.
- `RatingAggregate`: Stores pre-calculated average scores and total counts for pages to ensure fast rendering of the widget without querying the full submissions table on every page load.

### Controllers
- `RatingController`: Handles the incoming AJAX requests when a user clicks a star. It updates both the `RatingSubmission` and `RatingAggregate` tables.

### Middleware
- `InjectRatingWidget`: This middleware intercepts the response and dynamically appends the rendered `rating-widget.blade.php` HTML to the DOM body, allowing the widget to be displayed without manually editing theme templates.

### Database Migrations
- `2026_06_04_000001_rename_page_rating_tables.php`: Sets up or modifies the schema for the `rating_submissions` and `rating_aggregates` tables.
