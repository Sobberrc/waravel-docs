# Waravel Plugin Development Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [Plugin Structure](#plugin-structure)
3. [Required Files](#required-files)
4. [Plugin Class Requirements](#plugin-class-requirements)
5. [View Requirements](#view-requirements)
6. [Settings Configuration](#settings-configuration)
7. [Routes and Controllers](#routes-and-controllers)
8. [Database Integration](#database-integration)
9. [Best Practices](#best-practices)
10. [Example Plugin](#example-plugin)

## 🎯 Overview

Waravel plugins extend the core functionality of the Waravel package. This guide provides comprehensive documentation for developing compatible plugins that integrate seamlessly with the Waravel platform.

## 📁 Plugin Structure

```
plugins/
└── YourPluginName/
    ├── plugin.json                    # Plugin metadata
    ├── YourPluginNamePlugin.php       # Main plugin class
    ├── Controllers/                   # HTTP controllers
    ├── Services/                      # Business logic
    ├── Models/                        # Database models
    ├── Jobs/                          # Background jobs
    ├── Console/                       # Artisan commands
    ├── database/                      # Migrations
    │   └── migrations/
    ├── resources/                     # Views and assets
    │   ├── views/
    │   │   ├── dashboard/             # Main plugin interface
    │   │   │   ├── index.blade.php    # Main view (Start button target)
    │   │   │   ├── details.blade.php  # View Details content
    │   │   │   └── settings.blade.php # Settings content
    │   │   └── components/            # Reusable components
    │   └── assets/                    # CSS, JS, images
    └── README.md                      # Plugin documentation
```

## 📄 Required Files

### 1. plugin.json (Required)
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
        "permission_name_1",
        "permission_name_2"
    ],
    "settings": {
        "setting_key": {
            "type": "text|boolean|select|textarea",
            "label": "Setting Label",
            "description": "Setting description",
            "required": true|false,
            "default": "default_value",
            "options": ["option1", "option2"] // for select type
        }
    },
    "hooks": {
        "hook_name": "YourPluginNamespace\\Hooks\\HookClass"
    }
}
```

### 2. Main Plugin Class (Required)
```php
<?php

namespace YourPluginNamespace;

use Sobberrc\Waravel\Plugins\Plugin;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

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
        $this->description = 'Plugin description';
        $this->author = 'Your Name';
        $this->authorEmail = 'your@email.com';
        $this->pluginUrl = 'https://yourwebsite.com/plugin';
        $this->pluginNamespace = 'YourPluginNamespace';
        $this->dependencies = [];
        $this->permissions = ['permission_name'];
    }

    public function boot(): void
    {
        $this->registerRoutes();
        $this->registerViews();
    }

    protected function onInstall(): void
    {
        // Plugin installation logic
    }

    protected function onActivate(): void
    {
        // Plugin activation logic
    }

    protected function onDeactivate(): void
    {
        // Plugin deactivation logic
    }

    protected function onUninstall(bool $keepData = false): void
    {
        // Plugin uninstallation logic
    }
}
```

## 🎨 View Requirements

### 1. Main View (Start Button Target)
**File:** `resources/views/dashboard/index.blade.php`

This is the main interface that users see when they click the "Start" button.

```php
@extends('waravel::layouts.dashboard-layouts.dashboard-base')

@section('content')
<div class="p-6">
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Your Plugin Name</h2>
        
        <!-- Main plugin interface content -->
        <div class="space-y-4">
            <!-- Your plugin's main functionality here -->
        </div>
    </div>
</div>
@endsection
```

### 2. Details View (View Details Button Target)
**File:** `resources/views/dashboard/details.blade.php`

This provides comprehensive information about the plugin.

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
        
        <!-- Additional details content -->
    </div>
</div>
@endsection
```

### 3. Settings View (Settings Button Target)
**File:** `resources/views/dashboard/settings.blade.php`

This provides the plugin's configuration interface.

```php
@extends('waravel::layouts.dashboard-layouts.dashboard-base')

@section('content')
<div class="p-6">
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Plugin Settings</h2>
        
        <form method="POST" action="{{ route('waravel.plugins.settings.update', $plugin->name) }}">
            @csrf
            
            @foreach($settings as $key => $setting)
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $setting['label'] }}
                </label>
                
                @if($setting['type'] === 'text')
                    <input type="text" name="settings[{{ $key }}]" 
                           value="{{ $setting['value'] ?? $setting['default'] }}"
                           class="w-full px-3 py-2 border border-gray-300 rounded-md">
                @elseif($setting['type'] === 'boolean')
                    <input type="checkbox" name="settings[{{ $key }}]" value="1"
                           {{ ($setting['value'] ?? $setting['default']) ? 'checked' : '' }}
                           class="mr-2">
                @elseif($setting['type'] === 'select')
                    <select name="settings[{{ $key }}]" 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md">
                        @foreach($setting['options'] as $option)
                            <option value="{{ $option }}" 
                                    {{ ($setting['value'] ?? $setting['default']) === $option ? 'selected' : '' }}>
                                {{ $option }}
                            </option>
                        @endforeach
                    </select>
                @endif
                
                @if(isset($setting['description']))
                    <p class="text-sm text-gray-500 mt-1">{{ $setting['description'] }}</p>
                @endif
            </div>
            @endforeach
            
            <div class="flex justify-end">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Save Settings
                </button>
            </div>
        </form>
    </div>
</div>
@endsection
```

## ⚙️ Settings Configuration

Define your plugin settings in `plugin.json`:

```json
{
    "settings": {
        "api_key": {
            "type": "text",
            "label": "API Key",
            "description": "Enter your API key for external service",
            "required": true
        },
        "enable_feature": {
            "type": "boolean",
            "label": "Enable Feature",
            "description": "Enable this feature",
            "default": false
        },
        "processing_mode": {
            "type": "select",
            "label": "Processing Mode",
            "description": "Choose how to process data",
            "options": ["automatic", "manual", "scheduled"],
            "default": "automatic"
        }
    }
}
```

## 🛣️ Routes and Controllers

### 1. Register Routes in Plugin Class
```php
protected function registerRoutes(): void
{
    Route::middleware(['web', 'auth:waravel'])
        ->prefix('waravel/plugins/' . $this->pluginNamespace)
        ->name('waravel.plugins.' . $this->pluginNamespace . '.')
        ->group(function () {
            Route::get('/', [YourController::class, 'index'])->name('index');
            Route::get('/details', [YourController::class, 'details'])->name('details');
            Route::get('/settings', [YourController::class, 'settings'])->name('settings');
            Route::post('/settings', [YourController::class, 'updateSettings'])->name('settings.update');
        });
}
```

### 2. Controller Example
```php
<?php

namespace YourPluginNamespace\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class YourController
{
    public function index()
    {
        return view('your-plugin-namespace::dashboard.index');
    }
    
    public function details()
    {
        $plugin = $this->getPlugin();
        return view('your-plugin-namespace::dashboard.details', compact('plugin'));
    }
    
    public function settings()
    {
        $plugin = $this->getPlugin();
        $settings = $this->getPluginSettings();
        return view('your-plugin-namespace::dashboard.settings', compact('plugin', 'settings'));
    }
    
    public function updateSettings(Request $request): JsonResponse
    {
        // Update plugin settings
        return response()->json(['success' => true, 'message' => 'Settings updated']);
    }
}
```

## 🗄️ Database Integration

### 1. Create Migrations
```php
// database/migrations/2024_01_01_000000_create_your_plugin_table.php
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
            $table->text('data');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('your_plugin_table');
    }
};
```

### 2. Create Models
```php
<?php

namespace YourPluginNamespace\Models;

use Illuminate\Database\Eloquent\Model;

class YourModel extends Model
{
    protected $table = 'your_plugin_table';
    
    protected $fillable = [
        'name',
        'data'
    ];
}
```

## 🎯 Best Practices

### 1. Naming Conventions
- **Plugin Directory:** `YourPluginName` (PascalCase)
- **Plugin Class:** `YourPluginNamePlugin.php`
- **Namespace:** `YourPluginNamespace`
- **Routes:** `waravel.plugins.your-plugin-name`

### 2. Security
- Always validate user input
- Use CSRF protection for forms
- Implement proper authorization checks
- Sanitize data before database operations

### 3. Performance
- Use database indexes for frequently queried columns
- Implement caching where appropriate
- Use background jobs for heavy operations
- Optimize database queries

### 4. Error Handling
- Implement proper try-catch blocks
- Log errors for debugging
- Provide user-friendly error messages
- Handle edge cases gracefully

### 5. Documentation
- Include comprehensive README.md
- Document all public methods
- Provide usage examples
- Include troubleshooting guide

## ⚠️ Critical Troubleshooting Guide

### 🚨 Common Issues and Solutions

#### 1. **Plugin Detection Issues**

**Problem:** Plugin not detected or "Plugin class not found" error
```bash
ERROR: No plugin file found {"plugin_path":"/path/to/plugin","plugin_name":"Plugin Name"}
```

**Solutions:**
- ✅ **Unified Naming:** Ensure plugin directory name, main file name, class name, and `plugin.json` name are all consistent
- ✅ **File Naming:** Main plugin file must be `{PluginName}Plugin.php` (e.g., `RedirectManagerPlugin.php`)
- ✅ **Class Naming:** Class must be `{PluginName}Plugin` (e.g., `RedirectManagerPlugin`)
- ✅ **Namespace:** Must match in both file and `plugin.json`

**Example:**
```php
// Directory: plugins/RedirectManager/
// File: RedirectManagerPlugin.php
// Class: RedirectManagerPlugin
// Namespace: RedirectManager
// plugin.json: "name": "RedirectManager"
```

#### 2. **View Namespace Issues**

**Problem:** `No hint path defined for [plugin-namespace]` error
```bash
ERROR: No hint path defined for [redirect-manager]
```

**Solutions:**
- ✅ **Method Visibility:** Make `registerViews()` method `public` in your plugin class
- ✅ **Service Provider:** Ensure Waravel service provider calls `registerViews()` on plugins
- ✅ **View Registration:** Use correct namespace in `View::addNamespace()`

**Example:**
```php
public function registerViews(): void
{
    View::addNamespace('redirect-manager', $this->pluginPath . '/resources/views');
}
```

#### 3. **Route Registration Issues**

**Problem:** Routes not working or 404 errors
```bash
ERROR: Target class [PluginNamespace\Controllers\Controller] does not exist
```

**Solutions:**
- ✅ **Method Visibility:** Make `registerRoutes()` method `public`
- ✅ **Manual Includes:** Use `require_once` for controllers in route closures
- ✅ **Route Conflicts:** Avoid conflicts with Waravel's catch-all routes
- ✅ **Controller Loading:** Pass `$pluginPath` to controller constructors

**Example:**
```php
public function registerRoutes(): void
{
    $pluginPath = $this->pluginPath;
    
    Route::middleware(['web', 'auth:waravel'])
        ->prefix('waravel/plugins/your-plugin')
        ->name('waravel.plugins.your-plugin.')
        ->group(function () use ($pluginPath) {
            Route::get('/', function () use ($pluginPath) {
                require_once $pluginPath . '/Controllers/YourController.php';
                $controller = new \YourPluginNamespace\Controllers\YourController($pluginPath);
                return $controller->index();
            })->name('index');
        });
}
```

#### 4. **Database Table Issues**

**Problem:** Wrong table names or missing tables
```bash
ERROR: Base table or view not found: 1146 Table 'pages' doesn't exist
```

**Solutions:**
- ✅ **Correct Table Names:** Use `waravel_pages` instead of `pages`
- ✅ **Table Creation:** Implement `ensureTablesExist()` method in controllers
- ✅ **Migration Integration:** Create tables on plugin activation
- ✅ **Manual Creation:** Fallback to manual table creation if migrations fail

**Example:**
```php
private function ensureTablesExist(): void
{
    if (!\Schema::hasTable('your_plugin_table')) {
        \Schema::create('your_plugin_table', function ($table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }
}
```

#### 5. **Controller Return Type Issues**

**Problem:** `Return value must be of type Illuminate\View\View, Illuminate\Http\Response returned`
```bash
ERROR: Controller method must return View, not Response
```

**Solutions:**
- ✅ **Consistent Return Types:** Always return `View` from controller methods
- ✅ **Error Handling:** Use try-catch with View fallbacks, not Response
- ✅ **Method Signatures:** Match return type hints with actual returns

**Example:**
```php
public function index(): View
{
    try {
        return view('plugin-namespace::dashboard.index', compact('data'));
    } catch (\Exception $e) {
        return view('plugin-namespace::dashboard.index', [
            'data' => collect(),
            'error' => $e->getMessage()
        ]);
    }
}
```

#### 6. **Class Autoloading Issues**

**Problem:** Classes not found during plugin loading
```bash
ERROR: Class "PluginNamespace\Controllers\Controller" not found
```

**Solutions:**
- ✅ **Manual Includes:** Use `require_once` in route closures
- ✅ **Constructor Injection:** Pass `$pluginPath` to controller constructors
- ✅ **Service Loading:** Manually include services and models in controllers

**Example:**
```php
// In route closure
require_once $pluginPath . '/Controllers/YourController.php';
$controller = new \YourPluginNamespace\Controllers\YourController($pluginPath);

// In controller constructor
public function __construct($pluginPath = null)
{
    if ($pluginPath) {
        require_once $pluginPath . '/Services/YourService.php';
        require_once $pluginPath . '/Models/YourModel.php';
    }
}
```

### 🔧 Debugging Checklist

#### Before Plugin Activation:
1. ✅ Check plugin directory name matches class name
2. ✅ Verify main plugin file is named correctly
3. ✅ Ensure class name matches file name
4. ✅ Confirm namespace is consistent
5. ✅ Validate `plugin.json` structure

#### After Plugin Activation:
1. ✅ Check if routes are registered (check logs)
2. ✅ Verify view namespace is registered
3. ✅ Test simple routes first
4. ✅ Check database table creation
5. ✅ Validate controller return types

#### Common Debug Routes:
```php
// Add these debug routes to test plugin functionality
Route::get('/test-simple', function () {
    return response()->json(['status' => 'Plugin working!']);
})->name('test-simple');

Route::get('/test-view', function () {
    return view('plugin-namespace::dashboard.index', ['data' => []]);
})->name('test-view');
```

### 📋 Plugin Development Checklist

#### ✅ File Structure:
- [ ] Plugin directory with consistent naming
- [ ] Main plugin class with correct naming
- [ ] `plugin.json` with matching metadata
- [ ] Controllers, Services, Models directories
- [ ] Database migrations directory
- [ ] Views directory with required files

#### ✅ Plugin Class:
- [ ] Extends `Sobberrc\Waravel\Plugins\Plugin`
- [ ] Public `registerRoutes()` method
- [ ] Public `registerViews()` method
- [ ] Proper `initializePlugin()` implementation
- [ ] Lifecycle methods (`onInstall`, `onActivate`, etc.)

#### ✅ Routes:
- [ ] Use route closures with manual includes
- [ ] Pass `$pluginPath` to controllers
- [ ] Avoid conflicts with Waravel routes
- [ ] Test routes individually

#### ✅ Views:
- [ ] Required view files (index, details, settings)
- [ ] Correct view namespace registration
- [ ] Proper view namespace in controller returns
- [ ] Error handling in views

#### ✅ Database:
- [ ] Correct table names (use `waravel_` prefix)
- [ ] Table creation on activation
- [ ] Fallback table creation in controllers
- [ ] Proper model relationships

#### ✅ Controllers:
- [ ] Manual class includes
- [ ] Consistent return types
- [ ] Error handling with try-catch
- [ ] Proper validation

### 🚀 Quick Start Template

Use this template to avoid common issues:

```php
<?php

namespace YourPluginNamespace;

use Sobberrc\Waravel\Plugins\Plugin;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

class YourPluginNamePlugin extends Plugin
{
    protected function initializePlugin(): void
    {
        $this->name = 'Your Plugin Name';
        $this->pluginNamespace = 'YourPluginNamespace';
        // ... other properties
    }

    public function boot(): void
    {
        // Plugin boot logic - routes and views are registered by Waravel service provider
    }

    public function registerRoutes(): void
    {
        $pluginPath = $this->pluginPath;
        
        Route::middleware(['web', 'auth:waravel'])
            ->prefix('waravel/plugins/your-plugin')
            ->name('waravel.plugins.your-plugin.')
            ->group(function () use ($pluginPath) {
                Route::get('/', function () use ($pluginPath) {
                    require_once $pluginPath . '/Controllers/YourController.php';
                    $controller = new \YourPluginNamespace\Controllers\YourController($pluginPath);
                    return $controller->index();
                })->name('index');
            });
    }

    public function registerViews(): void
    {
        View::addNamespace('your-plugin-namespace', $this->pluginPath . '/resources/views');
    }

    protected function onActivate(): void
    {
        $this->createTables();
    }

    private function createTables(): void
    {
        // Create your plugin tables here
    }
}
```

## 📝 Example Plugin

Here's a complete example of a simple plugin:

### plugin.json
```json
{
    "name": "Task Manager",
    "version": "1.0.0",
    "description": "Simple task management plugin",
    "author": "Your Name",
    "author_email": "your@email.com",
    "plugin_url": "https://yourwebsite.com/task-manager",
    "plugin_namespace": "TaskManager",
    "dependencies": [],
    "permissions": ["manage_tasks"],
    "settings": {
        "max_tasks": {
            "type": "text",
            "label": "Maximum Tasks",
            "description": "Maximum number of tasks allowed",
            "default": "100"
        },
        "auto_archive": {
            "type": "boolean",
            "label": "Auto Archive",
            "description": "Automatically archive completed tasks",
            "default": true
        }
    }
}
```

### TaskManagerPlugin.php
```php
<?php

namespace TaskManager;

use Sobberrc\Waravel\Plugins\Plugin;
use Illuminate\Support\Facades\Route;

class TaskManagerPlugin extends Plugin
{
    protected function initializePlugin(): void
    {
        $this->name = 'Task Manager';
        $this->version = '1.0.0';
        $this->description = 'Simple task management plugin';
        $this->author = 'Your Name';
        $this->authorEmail = 'your@email.com';
        $this->pluginUrl = 'https://yourwebsite.com/task-manager';
        $this->pluginNamespace = 'TaskManager';
        $this->dependencies = [];
        $this->permissions = ['manage_tasks'];
    }

    public function boot(): void
    {
        $this->registerRoutes();
        $this->registerViews();
    }

    protected function registerRoutes(): void
    {
        Route::middleware(['web', 'auth:waravel'])
            ->prefix('waravel/plugins/task-manager')
            ->name('waravel.plugins.task-manager.')
            ->group(function () {
                Route::get('/', [TaskController::class, 'index'])->name('index');
                Route::get('/details', [TaskController::class, 'details'])->name('details');
                Route::get('/settings', [TaskController::class, 'settings'])->name('settings');
                Route::post('/settings', [TaskController::class, 'updateSettings'])->name('settings.update');
            });
    }

    protected function registerViews(): void
    {
        View::addNamespace('task-manager', __DIR__ . '/resources/views');
    }
}
```

## 🚀 Getting Started

1. **Create Plugin Directory:** `plugins/YourPluginName/`
2. **Add Required Files:** `plugin.json`, main plugin class
3. **Create Views:** Main, details, and settings views
4. **Implement Controllers:** Handle HTTP requests
5. **Add Database Support:** Migrations and models
6. **Test Your Plugin:** Ensure all functionality works
7. **Document Your Plugin:** Add comprehensive README

## 📚 Additional Resources

- [Laravel Documentation](https://laravel.com/docs)
- [Blade Template Engine](https://laravel.com/docs/blade)
- [Laravel Migrations](https://laravel.com/docs/migrations)
- [Laravel Eloquent](https://laravel.com/docs/eloquent)

---

**Happy Plugin Development! 🎉**

For support and questions, please refer to the Waravel documentation or contact the development team.
