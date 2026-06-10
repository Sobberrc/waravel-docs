<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# WordPressImporter: Technical Reference

Technical documentation for the WordPressImporter plugin: state machine processing, data transformation, and resumability.

---

## Migration Architecture

The importer uses the WordPress REST API (`/wp-json/wp/v2/`) as its primary data source.

### 1. Discovery Phase
The `ImportService` queries the remote API to determine the total number of items and categories. It creates a record in `waravel_import_jobs` to track the overall progress.

### 2. State Machine Processing
The import logic follows a strict state transition:
`pending` → `processing` → `completed / failed / paused`

This state is tracked in the `status` column of the `waravel_import_jobs` table, allowing the system to handle interruptions gracefully.

### 3. Resumability
The `current_page` column acts as a cursor for the WP API's pagination. If an import is restarted, the system resumes fetching from that specific offset, preventing duplicate API requests.

---

## Content Transformation Engine

The `ImportService` performs several critical transformations on the raw WordPress HTML:

### Slug Mapping
Every imported item is logged in the `wordpress_importer_slugs` table, mapping the original `wp_id` and `wp_slug` to the new `waravel_page_id`. 

### Link Rewriting
After the content is imported, the system performs a regex scan of the HTML to find internal WordPress URLs. It cross-references the slug mapping table to update these links to their new Waravel equivalents.

### Media Sideloading
For featured images and inline attachments:
1. Downloads the binary from the remote source.
2. Passes it through the `MediaController` upload pipeline.
3. Updates the `<img>` tags in the content to use the new local paths.

---

## Shared Hosting Logic

For environments without CLI queue workers, the importer implements an **AJAX-based pull strategy**:
1. The frontend polls a dedicated `process` endpoint.
2. The server processes exactly one item (or a small batch) and returns the updated progress.
3. The frontend updates the progress bar and immediately triggers the next poll.
