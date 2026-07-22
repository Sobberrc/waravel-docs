# PageRatingPro Developer Guide

## Architecture Overview
PageRatingPro replaces or extends key components of the base PageRating plugin to provide advanced analytics and shortcode parsing capabilities.

### Plugin Registration
`PageRatingProPlugin.php` registers additional routes for the analytics dashboard and overrides base services where necessary.

### Controllers
- `AnalyticsController`: A new controller responsible for querying the `RatingSubmission` data, aggregating it by time periods or pages, and passing it to the `analytics.blade.php` view.
- `RatingController`: An extended or overridden version of the base controller, potentially handling additional metadata during the rating submission process.

### Services
- `ShortcodeProcessor`: This service parses page content before it is rendered, looking for the `[rating-widget]` shortcode. If found, it dynamically injects the `rating-widget.blade.php` view into that specific location, giving users precise control over placement.

### Middleware
- `InjectRatingWidget`: The middleware is updated in the Pro version. Instead of blindly appending to the bottom of the DOM, it can intelligently cooperate with the `ShortcodeProcessor` or respect advanced placement settings defined in the database.
