# Media Management API

The Media system in Waravel (`src\Models\Media.php`) handles file uploads, optimizations, and attachments to other models.

## The `Media` Model

The `Media` model acts as a centralized repository for all uploaded files (images, documents, videos).

### Key Features
- **Disk Abstraction:** Built on top of Laravel's filesystem abstraction, supporting local, S3, and other cloud providers.
- **Image Optimization:** Hooks into the media upload lifecycle to optimize and resize images automatically.
- **Polymorphic Relations:** Can be easily attached to `Page`, `Widget`, or custom plugin models.

## API Usage

Uploading a file programmatically:
```php
use Sobberrc\Waravel\Models\Media;

$media = Media::upload($request->file('image'), 'uploads');
```

## Media Events

- `MediaUploading`: Fired before the file is stored.
- `MediaUploaded`: Fired after storage and database record creation.
- `MediaDeleting`: Fired before file removal.
