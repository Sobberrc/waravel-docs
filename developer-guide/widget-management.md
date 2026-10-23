<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Widget Engine Internals & Custom Widget Development

The **Widget Engine** (`Sobberrc\Waravel\Services\WidgetManager`) powers modular, reusable UI components placed across theme zones or dashboard panels.

---

## 1. Database Schema (`waravel_widgets`)

Widgets are stored in the `waravel_widgets` table:

```sql
CREATE TABLE `waravel_widgets` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `zone` VARCHAR(100) NOT NULL, -- e.g. header-main-left, sidebar-right, footer-1
    `type` VARCHAR(100) NOT NULL, -- e.g. html, logo, menu, social, contact-form
    `title` VARCHAR(255) NULL,
    `content` LONGTEXT NULL,      -- HTML body, shortcodes, or raw text
    `settings` JSON NULL,         -- Responsive widths, icon styles, menu source IDs
    `position` INT UNSIGNED DEFAULT 0,
    `is_active` TINYINT(1) DEFAULT 1,
    `created_at` TIMESTAMP NULL,
    `updated_at` TIMESTAMP NULL,
    INDEX (`zone`, `position`, `is_active`)
);
```

---

## 2. Widget Contract & Abstract Class

Every core and plugin widget extends `Sobberrc\Waravel\Widgets\AbstractWidget`:

```php
namespace Sobberrc\Waravel\Widgets;

abstract class AbstractWidget
{
    protected array $settings = [];
    protected ?string $content = null;

    public function __construct(array $settings = [], ?string $content = null)
    {
        $this->settings = $settings;
        $this->content = $content;
    }

    /**
     * Unique widget identifier.
     */
    abstract public function getId(): string;

    /**
     * Human-readable label for the Layout Studio drawer.
     */
    abstract public function getName(): string;

    /**
     * Category in the Layout Studio (branding, navigation, content, socials).
     */
    abstract public function getCategory(): string;

    /**
     * Render the widget's HTML string.
     */
    abstract public function render(): string;
}
```

---

## 3. Creating a Custom Widget

To register a custom widget in a plugin or theme service provider:

```php
namespace MyPlugin\Widgets;

use Sobberrc\Waravel\Widgets\AbstractWidget;

class NewsletterWidget extends AbstractWidget
{
    public function getId(): string
    {
        return 'newsletter-signup';
    }

    public function getName(): string
    {
        return 'Newsletter Signup Box';
    }

    public function getCategory(): string
    {
        return 'forms';
    }

    public function render(): string
    {
        return view('my-plugin::widgets.newsletter', [
            'headline' => $this->settings['headline'] ?? 'Subscribe to our updates',
            'buttonText' => $this->settings['button_text'] ?? 'Join Free',
        ])->render();
    }
}
```

### Registration in Service Provider:
```php
use Sobberrc\Waravel\Facades\Widget;
use MyPlugin\Widgets\NewsletterWidget;

public function boot()
{
    Widget::register(NewsletterWidget::class);
}
```

---

## 4. Rendering Pipeline & Caching

When `@widgetZone('footer-1')` is invoked in a Blade template:
1. The `WidgetManager` retrieves all active records for the requested zone ordered by `position ASC`.
2. It checks Laravel's cache tag `widgets_{zone}` for a pre-rendered string.
3. If uncached, it executes shortcodes within `$widget->content`, resolves responsive sizing CSS classes, and concatenates the output.
4. Caches the compiled HTML chunk until any widget in that zone is updated or deleted.
