<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Database Structure

This document outlines the core database tables used by Waravel.

## `cache`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `key` | `varchar` | No | `null` |
| `value` | `mediumtext` | No | `null` |
| `expiration` | `int` | No | `null` |

## `cache_locks`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `key` | `varchar` | No | `null` |
| `owner` | `varchar` | No | `null` |
| `expiration` | `int` | No | `null` |

## `contact_form_submissions`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `email` | `varchar` | No | `null` |
| `subject` | `varchar` | Yes | `NULL` |
| `message` | `text` | No | `null` |
| `ip_address` | `varchar` | Yes | `NULL` |
| `user_agent` | `text` | Yes | `NULL` |
| `is_read` | `tinyint` | No | `0` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `jobs`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `queue` | `varchar` | No | `null` |
| `payload` | `longtext` | No | `null` |
| `attempts` | `tinyint` | No | `null` |
| `reserved_at` | `int` | Yes | `NULL` |
| `available_at` | `int` | No | `null` |
| `created_at` | `int` | No | `null` |

## `job_batches`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `varchar` | No | `null` |
| `name` | `varchar` | No | `null` |
| `total_jobs` | `int` | No | `null` |
| `pending_jobs` | `int` | No | `null` |
| `failed_jobs` | `int` | No | `null` |
| `failed_job_ids` | `longtext` | No | `null` |
| `options` | `mediumtext` | Yes | `NULL` |
| `cancelled_at` | `int` | Yes | `NULL` |
| `created_at` | `int` | No | `null` |
| `finished_at` | `int` | Yes | `NULL` |

## `pg_ai_providers`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `slug` | `varchar` | No | `null` |
| `type` | `varchar` | No | `'both'` |
| `api_url` | `varchar` | Yes | `NULL` |
| `api_key` | `text` | Yes | `NULL` |
| `features` | `longtext` | Yes | `NULL` |
| `models_list` | `longtext` | Yes | `NULL` |
| `is_active` | `tinyint` | No | `1` |
| `is_custom` | `tinyint` | No | `0` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `pg_jobs`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `template_id` | `bigint` | Yes | `NULL` |
| `status` | `varchar` | No | `'pending'` |
| `total_pages` | `int` | No | `0` |
| `completed_pages` | `int` | No | `0` |
| `failed_pages` | `int` | No | `0` |
| `settings` | `longtext` | Yes | `NULL` |
| `error_message` | `text` | Yes | `NULL` |
| `started_at` | `timestamp` | Yes | `NULL` |
| `completed_at` | `timestamp` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `pg_job_items`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `job_id` | `bigint` | No | `null` |
| `page_id` | `bigint` | Yes | `NULL` |
| `status` | `varchar` | No | `'pending'` |
| `placeholder_values` | `longtext` | Yes | `NULL` |
| `generated_title` | `text` | Yes | `NULL` |
| `generated_slug` | `text` | Yes | `NULL` |
| `error_message` | `text` | Yes | `NULL` |
| `retry_count` | `int` | No | `0` |
| `processed_at` | `timestamp` | Yes | `NULL` |
| `scheduled_at` | `timestamp` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `pg_placeholder_lists`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `placeholder_key` | `varchar` | No | `null` |
| `values` | `longtext` | No | `null` |
| `description` | `text` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `pg_settings`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `key` | `varchar` | No | `null` |
| `value` | `text` | Yes | `NULL` |
| `is_encrypted` | `tinyint` | No | `0` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `pg_templates`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `content_prompt` | `text` | Yes | `NULL` |
| `seo_title_template` | `varchar` | Yes | `NULL` |
| `seo_description_template` | `text` | Yes | `NULL` |
| `seo_generation_method` | `varchar` | No | `'manual'` |
| `structure_outline` | `text` | Yes | `NULL` |
| `page_length` | `varchar` | No | `'medium'` |
| `max_pages` | `int` | Yes | `NULL` |
| `custom_word_count` | `int` | Yes | `NULL` |
| `schema_types` | `longtext` | Yes | `NULL` |
| `selected_placeholders` | `longtext` | Yes | `NULL` |
| `keywords` | `text` | Yes | `NULL` |
| `internal_links` | `text` | Yes | `NULL` |
| `tags` | `text` | Yes | `NULL` |
| `image_handling` | `varchar` | No | `'prompts'` |
| `featured_image_handling` | `varchar` | No | `'none'` |
| `default_status` | `varchar` | No | `'Draft'` |
| `default_visibility` | `varchar` | No | `'Public'` |
| `parent_id` | `varchar` | Yes | `NULL` |
| `page_layout` | `varchar` | No | `'default-template'` |
| `max_content_images` | `int` | No | `1` |
| `prompt_attachments` | `longtext` | Yes | `NULL` |
| `predefined_sections` | `longtext` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `pp_pro_logs`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `type` | `varchar` | No | `'auto'` |
| `query` | `varchar` | No | `null` |
| `page_url` | `varchar` | No | `null` |
| `campaign_id` | `varchar` | Yes | `NULL` |
| `status` | `varchar` | No | `null` |
| `message` | `text` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `url_redirects`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `original_url` | `varchar` | No | `null` |
| `destination_url` | `varchar` | No | `null` |
| `redirect_type` | `varchar` | No | `'301'` |
| `duration_type` | `varchar` | No | `'forever'` |
| `duration_value` | `int` | Yes | `NULL` |
| `expires_at` | `timestamp` | Yes | `NULL` |
| `is_active` | `tinyint` | No | `1` |
| `hit_count` | `int` | No | `0` |
| `last_hit_at` | `timestamp` | Yes | `NULL` |
| `description` | `text` | Yes | `NULL` |
| `page_id` | `bigint` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `url_redirect_404_logs`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `url` | `varchar` | No | `null` |
| `referer` | `varchar` | Yes | `NULL` |
| `ip_address` | `varchar` | Yes | `NULL` |
| `hit_count` | `int` | No | `1` |
| `last_hit_at` | `timestamp` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `url_redirect_logs`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `redirect_id` | `bigint` | No | `null` |
| `ip_address` | `varchar` | Yes | `NULL` |
| `user_agent` | `text` | Yes | `NULL` |
| `referer` | `varchar` | Yes | `NULL` |
| `redirected_at` | `timestamp` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `users`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `email` | `varchar` | No | `null` |
| `email_verified_at` | `timestamp` | Yes | `NULL` |
| `password` | `varchar` | No | `null` |
| `remember_token` | `varchar` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_builder_templates`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `type` | `varchar` | No | `'page'` |
| `content` | `longtext` | No | `null` |
| `thumbnail` | `varchar` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_import_jobs`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `user_id` | `bigint` | No | `null` |
| `type` | `varchar` | No | `null` |
| `status` | `varchar` | No | `'pending'` |
| `wp_url` | `varchar` | No | `null` |
| `total_items` | `int` | No | `0` |
| `processed_items` | `int` | No | `0` |
| `failed_items` | `int` | No | `0` |
| `current_page` | `int` | No | `1` |
| `resume_from_page` | `int` | Yes | `NULL` |
| `progress_percentage` | `decimal` | No | `0.00` |
| `progress_message` | `text` | Yes | `NULL` |
| `meta_data` | `longtext` | Yes | `NULL` |
| `pages_imported` | `int` | No | `0` |
| `pages_failed` | `int` | No | `0` |
| `pages_total` | `int` | No | `0` |
| `posts_imported` | `int` | No | `0` |
| `posts_failed` | `int` | No | `0` |
| `posts_total` | `int` | No | `0` |
| `tags_imported` | `int` | No | `0` |
| `tags_failed` | `int` | No | `0` |
| `tags_total` | `int` | No | `0` |
| `media_imported` | `int` | No | `0` |
| `media_failed` | `int` | No | `0` |
| `media_total` | `int` | No | `0` |
| `current_import_type` | `varchar` | Yes | `NULL` |
| `started_at` | `timestamp` | Yes | `NULL` |
| `completed_at` | `timestamp` | Yes | `NULL` |
| `failed_at` | `timestamp` | Yes | `NULL` |
| `error_message` | `text` | Yes | `NULL` |
| `settings` | `longtext` | Yes | `NULL` |
| `parent_page_slug` | `varchar` | Yes | `NULL` |
| `results` | `longtext` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_media`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `slug` | `varchar` | Yes | `NULL` |
| `wp_url` | `varchar` | Yes | `NULL` |
| `path` | `varchar` | Yes | `NULL` |
| `paths` | `longtext` | Yes | `NULL` |
| `alt_text` | `varchar` | Yes | `NULL` |
| `mime_type` | `varchar` | No | `null` |
| `size` | `bigint` | Yes | `NULL` |
| `folder` | `varchar` | Yes | `NULL` |
| `page_id` | `bigint` | Yes | `NULL` |
| `width` | `int` | Yes | `NULL` |
| `height` | `int` | Yes | `NULL` |
| `caption` | `text` | Yes | `NULL` |
| `description` | `text` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |
| `uploaded_on` | `date` | Yes | `NULL` |

## `waravel_pages`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `user_id` | `bigint` | Yes | `NULL` |
| `title` | `varchar` | No | `null` |
| `content` | `mediumtext` | Yes | `NULL` |
| `builder_data` | `longtext` | Yes | `NULL` |
| `parent_id` | `bigint` | Yes | `NULL` |
| `container_root_id` | `bigint` | Yes | `NULL` |
| `featured_image` | `varchar` | Yes | `NULL` |
| `status` | `varchar` | No | `'Published'` |
| `visibility` | `varchar` | No | `'Public'` |
| `password` | `varchar` | Yes | `NULL` |
| `slug` | `varchar` | No | `null` |
| `wp_permalink` | `varchar` | Yes | `NULL` |
| `full_url` | `varchar` | Yes | `NULL` |
| `type` | `varchar` | Yes | `NULL` |
| `template` | `varchar` | Yes | `NULL` |
| `template_config` | `longtext` | Yes | `NULL` |
| `wp_id` | `int` | Yes | `NULL` |
| `wp_parent_id` | `int` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |
| `deleted_at` | `timestamp` | Yes | `NULL` |

## `waravel_page_tag`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `page_id` | `bigint` | No | `null` |
| `tag_id` | `bigint` | No | `null` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_plugins`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `slug` | `varchar` | Yes | `NULL` |
| `version` | `varchar` | No | `null` |
| `description` | `text` | Yes | `NULL` |
| `author` | `varchar` | Yes | `NULL` |
| `author_email` | `varchar` | Yes | `NULL` |
| `plugin_url` | `varchar` | Yes | `NULL` |
| `plugin_path` | `varchar` | No | `null` |
| `plugin_namespace` | `varchar` | No | `null` |
| `dependencies` | `longtext` | Yes | `NULL` |
| `permissions` | `longtext` | Yes | `NULL` |
| `active` | `tinyint` | No | `0` |
| `auto_update` | `tinyint` | No | `0` |
| `early_access` | `tinyint` | No | `0` |
| `pinned` | `tinyint` | No | `0` |
| `dashboard_visible` | `tinyint` | No | `0` |
| `data_preserved` | `tinyint` | No | `0` |
| `status` | `varchar` | No | `'installed'` |
| `uninstalled_at` | `timestamp` | Yes | `NULL` |
| `last_used_at` | `timestamp` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_plugin_hooks`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `plugin_id` | `bigint` | No | `null` |
| `hook_name` | `varchar` | No | `null` |
| `hook_type` | `varchar` | No | `null` |
| `priority` | `int` | No | `10` |
| `accepted_args` | `int` | No | `1` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_plugin_settings`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `plugin_id` | `bigint` | No | `null` |
| `key` | `varchar` | No | `null` |
| `value` | `longtext` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_schemas`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `page_id` | `bigint` | No | `null` |
| `schema_type` | `longtext` | Yes | `NULL` |
| `schema_data` | `longtext` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |
| `deleted_at` | `timestamp` | Yes | `NULL` |

## `waravel_seo_meta`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `page_id` | `bigint` | No | `null` |
| `meta_type` | `varchar` | No | `null` |
| `meta_value` | `text` | Yes | `NULL` |
| `meta_source` | `varchar` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |
| `deleted_at` | `timestamp` | Yes | `NULL` |

## `waravel_settings`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `key` | `varchar` | No | `null` |
| `value` | `longtext` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_sliders`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `slug` | `varchar` | No | `null` |
| `is_active` | `tinyint` | No | `1` |
| `autoplay` | `tinyint` | No | `1` |
| `autoplay_speed` | `int` | No | `5000` |
| `transition` | `varchar` | No | `'fade'` |
| `show_navigation` | `tinyint` | No | `1` |
| `show_pagination` | `tinyint` | No | `1` |
| `height_desktop` | `varchar` | No | `'600px'` |
| `height_tablet` | `varchar` | No | `'400px'` |
| `height_mobile` | `varchar` | No | `'300px'` |
| `max_width` | `varchar` | No | `'100%'` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_slides`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `slider_id` | `bigint` | No | `null` |
| `title` | `varchar` | No | `null` |
| `description` | `text` | Yes | `NULL` |
| `bg_type` | `varchar` | No | `'color'` |
| `bg_value` | `varchar` | No | `'#1a1a2e'` |
| `bg_overlay_opacity` | `int` | No | `40` |
| `text_alignment` | `varchar` | No | `'center'` |
| `btn1_text` | `varchar` | Yes | `NULL` |
| `btn1_url` | `varchar` | Yes | `NULL` |
| `btn2_text` | `varchar` | Yes | `NULL` |
| `btn2_url` | `varchar` | Yes | `NULL` |
| `heading_font_family` | `varchar` | Yes | `NULL` |
| `heading_font_size` | `varchar` | Yes | `NULL` |
| `heading_font_weight` | `varchar` | Yes | `NULL` |
| `heading_color` | `varchar` | Yes | `NULL` |
| `heading_text_transform` | `varchar` | Yes | `NULL` |
| `heading_letter_spacing` | `varchar` | Yes | `NULL` |
| `heading_margin_bottom` | `varchar` | Yes | `NULL` |
| `desc_font_family` | `varchar` | Yes | `NULL` |
| `desc_font_size` | `varchar` | Yes | `NULL` |
| `desc_font_weight` | `varchar` | Yes | `NULL` |
| `desc_color` | `varchar` | Yes | `NULL` |
| `desc_max_width` | `varchar` | Yes | `NULL` |
| `desc_margin_bottom` | `varchar` | Yes | `NULL` |
| `btn1_bg_color` | `varchar` | Yes | `NULL` |
| `btn1_text_color` | `varchar` | Yes | `NULL` |
| `btn1_border_color` | `varchar` | Yes | `NULL` |
| `btn1_border_width` | `varchar` | Yes | `NULL` |
| `btn1_border_radius` | `varchar` | Yes | `NULL` |
| `btn1_padding` | `varchar` | Yes | `NULL` |
| `btn1_font_size` | `varchar` | Yes | `NULL` |
| `btn1_font_weight` | `varchar` | Yes | `NULL` |
| `btn1_hover_bg` | `varchar` | Yes | `NULL` |
| `btn1_hover_text_color` | `varchar` | Yes | `NULL` |
| `btn1_hover_border_color` | `varchar` | Yes | `NULL` |
| `btn2_bg_color` | `varchar` | Yes | `NULL` |
| `btn2_text_color` | `varchar` | Yes | `NULL` |
| `btn2_border_color` | `varchar` | Yes | `NULL` |
| `btn2_border_width` | `varchar` | Yes | `NULL` |
| `btn2_border_radius` | `varchar` | Yes | `NULL` |
| `btn2_padding` | `varchar` | Yes | `NULL` |
| `btn2_font_size` | `varchar` | Yes | `NULL` |
| `btn2_font_weight` | `varchar` | Yes | `NULL` |
| `btn2_hover_bg` | `varchar` | Yes | `NULL` |
| `btn2_hover_text_color` | `varchar` | Yes | `NULL` |
| `btn2_hover_border_color` | `varchar` | Yes | `NULL` |
| `sort_order` | `int` | No | `0` |
| `is_active` | `tinyint` | No | `1` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_tags`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `slug` | `varchar` | No | `null` |
| `description` | `text` | Yes | `NULL` |
| `wp_permalink` | `varchar` | Yes | `NULL` |
| `wp_id` | `int` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_theme_layouts`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `theme_slug` | `varchar` | No | `null` |
| `name` | `varchar` | No | `null` |
| `slug` | `varchar` | Yes | `NULL` |
| `is_active` | `tinyint` | No | `0` |
| `payload` | `longtext` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_theme_skins`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `theme_slug` | `varchar` | No | `null` |
| `name` | `varchar` | No | `null` |
| `is_active` | `tinyint` | No | `0` |
| `payload` | `longtext` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_users`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `name` | `varchar` | No | `null` |
| `email` | `varchar` | No | `null` |
| `is_admin` | `tinyint` | No | `0` |
| `email_notifications` | `tinyint` | No | `0` |
| `email_verified_at` | `timestamp` | Yes | `NULL` |
| `password` | `varchar` | No | `null` |
| `remember_token` | `varchar` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

## `waravel_widgets`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `title` | `varchar` | Yes | `NULL` |
| `content` | `longtext` | Yes | `NULL` |
| `area` | `varchar` | No | `'sidebar-primary'` |
| `layout_slug` | `varchar` | Yes | `NULL` |
| `position` | `int` | No | `0` |
| `active` | `tinyint` | No | `1` |
| `type` | `varchar` | No | `'html'` |
| `settings` | `longtext` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |
| `deleted_at` | `timestamp` | Yes | `NULL` |

## `wordpress_importer_slugs`

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `bigint` | No | `null` |
| `import_job_id` | `bigint` | No | `null` |
| `page_id` | `bigint` | No | `null` |
| `slug` | `varchar` | No | `null` |
| `wp_permalink` | `text` | No | `null` |
| `wp_id` | `bigint` | No | `null` |
| `wp_slug` | `varchar` | No | `null` |
| `title` | `varchar` | No | `null` |
| `container_root_id` | `bigint` | Yes | `NULL` |
| `created_at` | `timestamp` | Yes | `NULL` |
| `updated_at` | `timestamp` | Yes | `NULL` |

