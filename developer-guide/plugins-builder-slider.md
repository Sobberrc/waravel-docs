<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# Builder & Slider: Technical Reference

Technical documentation for the WaravelBuilder and WaravelSlider visual design plugins: data persistence, security gates, and responsive schema logic.

---

## WaravelBuilder: Architecture

The Builder is a JSON-driven visual editor that integrates directly with the core page model.

### Data Persistence
- **Table Modification**: On activation, the plugin adds a `builder_data` (longText/JSON) column to the `waravel_pages` table.
- **Reusable Components**: The `waravel_builder_templates` table stores serialized JSON snippets of page sections.

### Security & Access Control
- **IDOR Protection**: Implements a dedicated Laravel Gate (`update-builder-page`).
- **AJAX Validation**: Every block-level save request is validated against the `Page` model's ownership and the user's `waravel-admin` permission level.

---

## WaravelSlider: Engine Logic

The Slider engine uses a parent-child relationship to manage complex slide groups.

### Relational Structure
- `waravel_sliders`: Parent container storing global settings (heights, widths, speed, transitions).
- `waravel_slides`: Child items storing specific content, images, and CTA button data.

### Responsive Design Schema
The slider configuration stores a multi-dimensional array of dimensional constraints:
- `height_desktop`, `height_tablet`, `height_mobile`
- `max_width`
- `contain_mode` (cover vs. contain)

### Shortcode Resolver
The plugin registers a shortcode with the `ShortcodeManager`:
```php
Shortcode::register('waravel-slider', function($attr) {
    $slider = Slider::with('slides')->find($attr['id']);
    return view('waravel::plugins.slider.render', compact('slider'));
});
```

---

## UI Components
- **Drag-and-Drop**: Built using Alpine.js and SortableJS for high-performance reordering.
- **Real-time Preview**: Uses an `<iframe>` bridge to render the live slider/builder state without CSS collisions from the dashboard.
