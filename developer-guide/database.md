# Database & Schema Internals

Waravel leverages Laravel's Eloquent ORM with specialized schemas for CMS capabilities.

## Core Tables

The core installation migrations create the following foundational tables:
- `pages`: Content and routing entries.
- `media`: File metadata and mappings.
- `tags` / `taggables`: Taxonomy.
- `widgets`: Configuration for dynamic components.
- `settings`: Key-value store for global configuration.
- `seo_metas`: SEO overrides and metadata for dynamic entities.

## Schema Model (`src\Models\Schema.php`)

The `Schema` model often manages dynamic schema generation or interacts with JSON fields in the settings table to define custom fields for pages or widgets without altering the physical database structure.

## Migrations Strategy

Waravel package migrations are published to the host application. Updates to the core package that require database changes will provide new migration files that users must run via `php artisan migrate`.

## Traits

Common traits used across models:
- `HasMedia`: Enables attaching files.
- `HasSeo`: Hooks into the `seo_metas` table.
- `HasTags`: Enables the taxonomy relations.
