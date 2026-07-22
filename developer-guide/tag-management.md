# Tag Management Internals

Tags in Waravel (`src\Models\Tag.php`) provide a flexible taxonomy system.

## Schema & Structure

The `Tag` model uses a polymorphic many-to-many relationship (`taggables`), allowing tags to be applied to any entity type in the system.

### Attributes
- `name`: Display name.
- `slug`: URL-friendly identifier.
- `type`: Used to categorize tags (e.g., 'category', 'keyword').

## Extending Taggables

To make a model taggable, use the `HasTags` trait (if provided) or manually define the morphToMany relationship:

```php
public function tags()
{
    return $this->morphToMany(Tag::class, 'taggable');
}
```

## API Methods

```php
// Syncing tags
$page->tags()->sync([1, 2, 3]);

// Attaching
$page->tags()->attach($tagId);
```
