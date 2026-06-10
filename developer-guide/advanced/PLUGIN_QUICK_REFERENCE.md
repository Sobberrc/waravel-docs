# Waravel Plugin Development - Quick Reference

## 🚀 Quick Start Checklist

### Required Files
- [ ] `plugin.json` - Plugin metadata
- [ ] `YourPluginNamePlugin.php` - Main plugin class
- [ ] `resources/views/dashboard/index.blade.php` - Main view (Start button target)
- [ ] `resources/views/dashboard/details.blade.php` - Details view (View Details button target)
- [ ] `resources/views/dashboard/settings.blade.php` - Settings view (Settings button target)

### Plugin Class Requirements
```php
class YourPluginNamePlugin extends Plugin
{
    protected function initializePlugin(): void
    {
        $this->name = 'Your Plugin Name';
        $this->version = '1.0.0';
        $this->description = 'Plugin description';
        $this->author = 'Your Name';
        $this->authorEmail = 'your@email.com';
        $this->pluginUrl = 'https://yourwebsite.com/plugin';
        $this->pluginNamespace = 'YourPluginNamespace';
        $this->dependencies = [];
        $this->permissions = ['your_permission'];
    }

    public function boot(): void
    {
        $this->registerRoutes();
        $this->registerViews();
    }

    protected function onInstall(): void { /* Installation logic */ }
    protected function onActivate(): void { /* Activation logic */ }
    protected function onDeactivate(): void { /* Deactivation logic */ }
    protected function onUninstall(bool $keepData = false): void { /* Uninstall logic */ }
}
```

## 🎯 Button Targets

### Start Button → Main View
**File:** `resources/views/dashboard/index.blade.php`
- Main plugin interface
- Primary functionality
- User's main interaction point

### View Details Button → Details View
**File:** `resources/views/dashboard/details.blade.php`
- Plugin information
- Version, author, description
- Feature list
- Status information

### Settings Button → Settings View
**File:** `resources/views/dashboard/settings.blade.php`
- Configuration interface
- Form handling
- Settings persistence

## ⚙️ Settings Configuration

### plugin.json Settings
```json
{
    "settings": {
        "setting_key": {
            "type": "text|boolean|select|textarea",
            "label": "Setting Label",
            "description": "Setting description",
            "required": true|false,
            "default": "default_value",
            "options": ["option1", "option2"] // for select type
        }
    }
}
```

### Settings Types
- **text** - Text input field
- **boolean** - Checkbox
- **select** - Dropdown with options
- **textarea** - Multi-line text input

## 🛣️ Route Registration

```php
protected function registerRoutes(): void
{
    Route::middleware(['web', 'auth:waravel'])
        ->prefix('waravel/plugins/your-plugin-name')
        ->name('waravel.plugins.your-plugin-name.')
        ->group(function () {
            Route::get('/', [YourController::class, 'index'])->name('index');
            Route::get('/details', [YourController::class, 'details'])->name('details');
            Route::get('/settings', [YourController::class, 'settings'])->name('settings');
            Route::post('/settings', [YourController::class, 'updateSettings'])->name('settings.update');
        });
}
```

## 🎨 View Registration

```php
protected function registerViews(): void
{
    View::addNamespace('your-plugin-namespace', __DIR__ . '/resources/views');
}
```

## 🗄️ Database Integration

### Migration Example
```php
Schema::create('your_plugin_table', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->json('data')->nullable();
    $table->timestamps();
});
```

### Model Example
```php
class YourPluginModel extends Model
{
    protected $table = 'your_plugin_table';
    protected $fillable = ['name', 'data'];
    protected $casts = ['data' => 'array'];
}
```

## 🔧 Controller Methods

### Required Methods
```php
public function index(): View
{
    return view('your-plugin-namespace::dashboard.index');
}

public function details(): View
{
    $plugin = $this->getPlugin();
    return view('your-plugin-namespace::dashboard.details', compact('plugin'));
}

public function settings(): View
{
    $plugin = $this->getPlugin();
    $settings = $this->getPluginSettings();
    return view('your-plugin-namespace::dashboard.settings', compact('plugin', 'settings'));
}

public function updateSettings(Request $request): JsonResponse
{
    // Update settings logic
    return response()->json(['success' => true, 'message' => 'Settings updated']);
}
```

## 📝 View Templates

### Main View (index.blade.php)
```php
@extends('waravel::layouts.dashboard-layouts.dashboard-base')

@section('content')
<div class="p-6">
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Your Plugin Name</h2>
        <!-- Your main plugin interface -->
    </div>
</div>
@endsection
```

### Details View (details.blade.php)
```php
@extends('waravel::layouts.dashboard-layouts.dashboard-base')

@section('content')
<div class="p-6">
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Plugin Details</h2>
        <!-- Plugin information display -->
    </div>
</div>
@endsection
```

### Settings View (settings.blade.php)
```php
@extends('waravel::layouts.dashboard-layouts.dashboard-base')

@section('content')
<div class="p-6">
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Plugin Settings</h2>
        <form method="POST" action="{{ route('waravel.plugins.your-plugin-name.settings.update') }}">
            @csrf
            <!-- Settings form fields -->
        </form>
    </div>
</div>
@endsection
```

## 🎯 Best Practices

### Naming Conventions
- **Plugin Directory:** `YourPluginName` (PascalCase)
- **Plugin Class:** `YourPluginNamePlugin.php`
- **Namespace:** `YourPluginNamespace`
- **Routes:** `waravel.plugins.your-plugin-name`

### Security
- Always validate user input
- Use CSRF protection for forms
- Implement proper authorization checks
- Sanitize data before database operations

### Performance
- Use database indexes for frequently queried columns
- Implement caching where appropriate
- Use background jobs for heavy operations
- Optimize database queries

### Error Handling
- Implement proper try-catch blocks
- Log errors for debugging
- Provide user-friendly error messages
- Handle edge cases gracefully

## 🚀 Development Workflow

1. **Create Plugin Directory** - `plugins/YourPluginName/`
2. **Add Required Files** - `plugin.json`, main plugin class
3. **Create Views** - Main, details, and settings views
4. **Implement Controllers** - Handle HTTP requests
5. **Add Database Support** - Migrations and models
6. **Test Your Plugin** - Ensure all functionality works
7. **Document Your Plugin** - Add comprehensive README

## 📚 Common Patterns

### Plugin Lifecycle
```php
// Installation
protected function onInstall(): void
{
    $this->createTables();
}

// Activation
protected function onActivate(): void
{
    $this->createTables();
    $this->createViews();
}

// Deactivation
protected function onDeactivate(): void
{
    // Cleanup if needed
}

// Uninstallation
protected function onUninstall(bool $keepData = false): void
{
    if (!$keepData) {
        $this->dropTables();
    }
}
```

### Settings Management
```php
// Get plugin settings
private function getPluginSettings(): array
{
    return \DB::table('waravel_plugin_settings')
        ->where('plugin_name', $this->getPluginName())
        ->pluck('setting_value', 'setting_key')
        ->toArray();
}

// Update plugin settings
public function updateSettings(Request $request): JsonResponse
{
    $settings = $request->input('settings', []);
    
    foreach ($settings as $key => $value) {
        \DB::table('waravel_plugin_settings')
            ->updateOrInsert(
                ['plugin_name' => $this->getPluginName(), 'setting_key' => $key],
                ['setting_value' => $value, 'updated_at' => now()]
            );
    }
    
    return response()->json(['success' => true, 'message' => 'Settings updated']);
}
```

## 🎉 Ready to Develop!

Use this quick reference alongside the full documentation to create amazing Waravel plugins! 🚀
