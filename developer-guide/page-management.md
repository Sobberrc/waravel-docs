# Page Management Internals

The Page Management system handles the creation, updating, routing, and rendering of all dynamic pages in Waravel.

## The `Page` Model

Path: `src\Models\Page.php`

The `Page` model represents a single routeable entity in the system. It supports:
- Soft Deletes
- Revision History (via JSON casting)
- Dynamic Routing

### Key Attributes
- `title`: The title of the page.
- `slug`: The URL slug (unique).
- `content`: The raw builder content or markdown.
- `status`: Published, Draft, or Archived.

## Event Listeners

When a page is saved, several listeners run:
- `PageSaving`: Automatically generates unique slugs.
- `PageSaved`: Clears relevant routing caches and triggers static site regeneration hooks if applicable.

## API Methods

You can interact with pages programmatically:
```php
use Sobberrc\Waravel\Models\Page;

$page = Page::create([
    'title' => 'My New Page',
    'slug' => 'my-new-page',
    'content' => '...',
    'status' => 'published'
]);
```
