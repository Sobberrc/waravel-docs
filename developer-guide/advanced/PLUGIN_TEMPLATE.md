# Waravel Plugin Template

This is a complete template for creating a new Waravel plugin. Copy this structure and customize it for your plugin.

## 📁 Directory Structure

```
plugins/
└── YourPluginName/
    ├── plugin.json
    ├── YourPluginNamePlugin.php
    ├── Controllers/
    │   └── YourPluginController.php
    ├── Services/
    │   └── YourPluginService.php
    ├── Models/
    │   └── YourPluginModel.php
    ├── database/
    │   └── migrations/
    │       └── 2024_01_01_000000_create_your_plugin_table.php
    ├── resources/
    │   └── views/
    │       └── dashboard/
    │           ├── index.blade.php
    │           ├── details.blade.php
    │           └── settings.blade.php
    └── README.md
```

## 📄 File Templates

### 1. plugin.json
```json
{
    "name": "Your Plugin Name",
    "version": "1.0.0",
    "description": "Brief description of your plugin functionality",
    "author": "Your Name",
    "author_email": "your@email.com",
    "plugin_url": "https://yourwebsite.com/plugin",
    "plugin_namespace": "YourPluginNamespace",
    "dependencies": [],
    "permissions": [
        "your_permission_name"
    ],
    "settings": {
        "setting_key": {
            "type": "text",
            "label": "Setting Label",
            "description": "Setting description",
            "required": true,
            "default": "default_value"
        },
        "enable_feature": {
            "type": "boolean",
            "label": "Enable Feature",
            "description": "Enable this feature",
            "default": false
        }
    },
    "hooks": {
        "hook_name": "YourPluginNamespace\\Hooks\\HookClass"
    }
}
```

### 2. YourPluginNamePlugin.php
```php
<?php

namespace YourPluginNamespace;

use Sobberrc\Waravel\Plugins\Plugin;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

// Global guard to prevent multiple plugin loading
if (defined('YOUR_PLUGIN_LOADED')) {
    return;
}
define('YOUR_PLUGIN_LOADED', true);

class YourPluginNamePlugin extends Plugin
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function initializePlugin(): void
    {
        $this->name = 'Your Plugin Name';
        $this->version = '1.0.0';
        $this->description = 'Brief description of your plugin functionality';
        $this->author = 'Your Name';
        $this->authorEmail = 'your@email.com';
        $this->pluginUrl = 'https://yourwebsite.com/plugin';
        $this->pluginNamespace = 'YourPluginNamespace';
        $this->dependencies = [];
        $this->permissions = ['your_permission_name'];
    }

    private static $booted = false;
    private static $bootInProgress = false;

    public function boot(): void
    {
        if (self::$booted || self::$bootInProgress) {
            return;
        }
        
        self::$bootInProgress = true;
        
        try {
            $this->registerRoutes();
            $this->registerViews();
            self::$booted = true;
        } catch (\Exception $e) {
            \Log::error('Your Plugin Name: Boot failed - ' . $e->getMessage());
        } finally {
            self::$bootInProgress = false;
        }
    }

    protected function registerRoutes(): void
    {
        Route::middleware(['web', 'auth:waravel'])
            ->prefix('waravel/plugins/your-plugin-name')
            ->name('waravel.plugins.your-plugin-name.')
            ->group(function () {
                Route::get('/', [\YourPluginNamespace\Controllers\YourPluginController::class, 'index'])->name('index');
                Route::get('/details', [\YourPluginNamespace\Controllers\YourPluginController::class, 'details'])->name('details');
                Route::get('/settings', [\YourPluginNamespace\Controllers\YourPluginController::class, 'settings'])->name('settings');
                Route::post('/settings', [\YourPluginNamespace\Controllers\YourPluginController::class, 'updateSettings'])->name('settings.update');
            });
    }

    protected function registerViews(): void
    {
        View::addNamespace('your-plugin-namespace', __DIR__ . '/resources/views');
    }

    protected function onInstall(): void
    {
        // Create database tables if needed
        $this->createTables();
    }

    protected function onActivate(): void
    {
        // Plugin activated - ensure tables exist
        $this->createTables();
    }

    protected function onDeactivate(): void
    {
        // Plugin deactivated
    }

    protected function onUninstall(bool $keepData = false): void
    {
        if (!$keepData) {
            // Drop plugin tables
            $this->dropTables();
        }
    }

    private function createTables(): void
    {
        // Run migrations
        \Artisan::call('migrate', [
            '--path' => 'plugins/YourPluginName/database/migrations',
            '--force' => true
        ]);
    }

    private function dropTables(): void
    {
        // Drop plugin tables
        \DB::statement('DROP TABLE IF EXISTS your_plugin_table');
    }
}
```

### 3. Controllers/YourPluginController.php
```php
<?php

namespace YourPluginNamespace\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class YourPluginController
{
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
        try {
            $settings = $request->input('settings', []);
            
            // Update plugin settings
            foreach ($settings as $key => $value) {
                \DB::table('waravel_plugin_settings')
                    ->updateOrInsert(
                        ['plugin_name' => $this->getPluginName(), 'setting_key' => $key],
                        ['setting_value' => $value, 'updated_at' => now()]
                    );
            }
            
            return response()->json([
                'success' => true,
                'message' => 'Settings updated successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update settings: ' . $e->getMessage()
            ], 500);
        }
    }
    
    private function getPlugin()
    {
        return \DB::table('waravel_plugins')
            ->where('name', $this->getPluginName())
            ->first();
    }
    
    private function getPluginName(): string
    {
        return 'Your Plugin Name';
    }
    
    private function getPluginSettings(): array
    {
        $settings = \DB::table('waravel_plugin_settings')
            ->where('plugin_name', $this->getPluginName())
            ->pluck('setting_value', 'setting_key')
            ->toArray();
            
        return $settings;
    }
}
```

### 4. Services/YourPluginService.php
```php
<?php

namespace YourPluginNamespace\Services;

class YourPluginService
{
    public function processData(array $data): array
    {
        // Your business logic here
        return $data;
    }
    
    public function validateSettings(array $settings): array
    {
        $errors = [];
        
        // Validate settings
        if (isset($settings['required_field']) && empty($settings['required_field'])) {
            $errors[] = 'Required field cannot be empty';
        }
        
        return $errors;
    }
}
```

### 5. Models/YourPluginModel.php
```php
<?php

namespace YourPluginNamespace\Models;

use Illuminate\Database\Eloquent\Model;

class YourPluginModel extends Model
{
    protected $table = 'your_plugin_table';
    
    protected $fillable = [
        'name',
        'data',
        'status'
    ];
    
    protected $casts = [
        'data' => 'array'
    ];
}
```

### 6. database/migrations/2024_01_01_000000_create_your_plugin_table.php
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('your_plugin_table', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->json('data')->nullable();
            $table->string('status')->default('active');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('your_plugin_table');
    }
};
```

### 7. resources/views/dashboard/index.blade.php
```php
@extends('waravel::layouts.dashboard-layouts.dashboard-base')

@section('content')
<div class="p-6">
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Your Plugin Name</h2>
        
        <div class="space-y-4">
            <p class="text-gray-600">Welcome to your plugin! This is the main interface.</p>
            
            <!-- Your plugin's main functionality here -->
            <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="text-lg font-semibold text-blue-800 mb-2">Quick Actions</h3>
                <div class="space-x-2">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Action 1
                    </button>
                    <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Action 2
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
```

### 8. resources/views/dashboard/details.blade.php
```php
@extends('waravel::layouts.dashboard-layouts.dashboard-base')

@section('content')
<div class="p-6">
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Plugin Details</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 class="text-lg font-semibold mb-2">Plugin Information</h3>
                <table class="w-full">
                    <tr><td class="font-medium">Name:</td><td>{{ $plugin->name }}</td></tr>
                    <tr><td class="font-medium">Version:</td><td>{{ $plugin->version }}</td></tr>
                    <tr><td class="font-medium">Author:</td><td>{{ $plugin->author }}</td></tr>
                    <tr><td class="font-medium">Status:</td><td>{{ $plugin->active ? 'Active' : 'Inactive' }}</td></tr>
                </table>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-2">Description</h3>
                <p class="text-gray-600">{{ $plugin->description }}</p>
            </div>
        </div>
        
        <div class="mt-6">
            <h3 class="text-lg font-semibold mb-2">Features</h3>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
        </div>
    </div>
</div>
@endsection
```

### 9. resources/views/dashboard/settings.blade.php
```php
@extends('waravel::layouts.dashboard-layouts.dashboard-base')

@section('content')
<div class="p-6">
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Plugin Settings</h2>
        
        <form id="settingsForm" method="POST" action="{{ route('waravel.plugins.your-plugin-name.settings.update') }}">
            @csrf
            
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Setting Label
                    </label>
                    <input type="text" name="settings[setting_key]" 
                           value="{{ $settings['setting_key'] ?? '' }}"
                           class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <p class="text-sm text-gray-500 mt-1">Setting description</p>
                </div>
                
                <div>
                    <label class="flex items-center">
                        <input type="checkbox" name="settings[enable_feature]" value="1"
                               {{ ($settings['enable_feature'] ?? false) ? 'checked' : '' }}
                               class="mr-2">
                        <span class="text-sm font-medium text-gray-700">Enable Feature</span>
                    </label>
                    <p class="text-sm text-gray-500 mt-1">Enable this feature</p>
                </div>
            </div>
            
            <div class="flex justify-end mt-6">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Save Settings
                </button>
            </div>
        </form>
    </div>
</div>

<script>
document.getElementById('settingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Settings saved successfully!');
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        alert('Error saving settings: ' + error.message);
    });
});
</script>
@endsection
```

### 10. README.md
```markdown
# Your Plugin Name

## Description
Brief description of your plugin functionality.

## Installation
1. Copy the plugin directory to `plugins/YourPluginName/`
2. The plugin will be automatically detected by Waravel
3. Activate the plugin from the Waravel dashboard

## Usage
1. Go to the Waravel dashboard
2. Navigate to Plugins
3. Find your plugin and click "Start"
4. Configure settings as needed

## Features
- Feature 1
- Feature 2
- Feature 3

## Requirements
- Waravel package
- PHP 8.2+
- Laravel 10+

## Support
For support and questions, please contact [your-email@domain.com]

## License
[Your License]
```

## 🚀 Getting Started

1. **Copy this template** to `plugins/YourPluginName/`
2. **Replace placeholders** with your actual plugin details
3. **Customize the functionality** according to your needs
4. **Test your plugin** thoroughly
5. **Document your plugin** in README.md

## 📝 Customization Checklist

- [ ] Update `plugin.json` with your plugin details
- [ ] Rename `YourPluginNamePlugin.php` to match your plugin
- [ ] Update namespace in all PHP files
- [ ] Customize the main view (`index.blade.php`)
- [ ] Customize the details view (`details.blade.php`)
- [ ] Customize the settings view (`settings.blade.php`)
- [ ] Implement your business logic in Services
- [ ] Create your database models
- [ ] Add your database migrations
- [ ] Test all functionality
- [ ] Update README.md

Happy plugin development! 🎉
