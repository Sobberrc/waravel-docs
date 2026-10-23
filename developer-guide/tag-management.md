<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Tag Management Architecture & Polymorphic Taxonomy

The **Tag Management** system in Waravel (`Sobberrc\Waravel\Models\Tag`) provides a unified, polymorphic taxonomy engine that can attach to pages, blog articles, media assets, or custom entity models.

---

## 1. Database Schema

The taxonomy schema utilizes a standard polymorphic many-to-many relationship:

```sql
CREATE TABLE `waravel_tags` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL UNIQUE,
    `description` TEXT NULL,
    `wp_id` BIGINT UNSIGNED NULL, -- Preserved from WordPress migrations
    `created_at` TIMESTAMP NULL,
    `updated_at` TIMESTAMP NULL,
    INDEX (`slug`),
    INDEX (`wp_id`)
);

CREATE TABLE `waravel_taggables` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `tag_id` BIGINT UNSIGNED NOT NULL,
    `taggable_id` BIGINT UNSIGNED NOT NULL,
    `taggable_type` VARCHAR(255) NOT NULL,
    INDEX (`tag_id`),
    INDEX (`taggable_id`, `taggable_type`),
    FOREIGN KEY (`tag_id`) REFERENCES `waravel_tags`(`id`) ON DELETE CASCADE
);
```

---

## 2. Eloquent Model Relationships

### The `Tag` Model (`Sobberrc\Waravel\Models\Tag`)
```php
namespace Sobberrc\Waravel\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Tag extends Model
{
    protected $table = 'waravel_tags';
    protected $fillable = ['name', 'slug', 'description', 'wp_id'];

    public function pages(): MorphToMany
    {
        return $this->morphedByMany(Page::class, 'taggable', 'waravel_taggables');
    }
}
```

### The `HasTags` Trait
Any Eloquent model can adopt taxonomy tagging by including the `HasTags` trait:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Sobberrc\Waravel\Traits\HasTags;

class Article extends Model
{
    use HasTags;
}
```

---

## 3. Programmatic API Operations

```php
use Sobberrc\Waravel\Models\Tag;
use Sobberrc\Waravel\Models\Page;

$page = Page::find(12);

// Attach tags by ID or slug
$page->tags()->attach([1, 4, 8]);

// Sync tags on page save (automatically detaches unselected tags)
$page->tags()->sync([2, 5]);

// Create and attach on-the-fly
$newTag = Tag::firstOrCreate([
    'name' => 'Laravel 11',
    'slug' => 'laravel-11'
]);
$page->tags()->syncWithoutDetaching([$newTag->id]);

// Querying tagged entities
$tutorials = Page::whereHas('tags', function ($query) {
    $query->where('slug', 'tutorials');
})->get();
```
