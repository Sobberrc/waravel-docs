# WaravelSlider Developer Guide

## Architecture
WaravelSlider provides a UI for managing slides and registers a shortcode to render them on the frontend. The frontend uses a lightweight JS/CSS implementation to display the slider.

### Models
- Slider: Represents a group of slides.
- Slide: Represents an individual slide, related to a Slider, containing content and styling JSON.

### Services
- ShortcodeProcessor: Registers the [waravel-slider] shortcode and handles its compilation into HTML by rendering the slider.blade.php view.

### Controllers
- WaravelSliderController: Manages the backend CRUD operations for sliders and slides.

### Assets
- slider.css / slider.js: The frontend assets responsible for the animation and interaction of the slider. These are automatically injected when the shortcode is processed on a page.
