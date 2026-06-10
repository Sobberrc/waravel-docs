# Waravel Background Import - Installation Guide

## Quick Start

### 1. Install the Background Import Branch

```bash
# Add the repository
composer config repositories.waravel vcs https://github.com/Sobberrc/Waravel.git

# Install the background import feature
composer require "sobberrc/waravel:dev-feature/background-import"
```

### 2. Run Installation

```bash
# Install Waravel with queue support
php artisan waravel:install

# Run migrations (if updating existing installation)
php artisan migrate
```

### 3. Start Queue Worker

```bash
# Start the queue worker for background imports
php artisan queue:work --queue=wordpress-import
```

### 4. Access the Feature

Navigate to your Waravel dashboard and go to:
**Import WordPress > WordPress Import**

## What's New

✅ **Server-Side Processing**: Import runs independently of browser  
✅ **Real-Time Progress**: Live updates via Server-Sent Events  
✅ **Job Control**: Pause, resume, cancel, restart imports  
✅ **Error Recovery**: Resume from specific page numbers  
✅ **CLI Management**: Control imports via artisan commands  

## Production Setup

### Supervisor Configuration

For production, use Supervisor to keep queue workers running:

```ini
[program:waravel-queue-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/your/project/artisan queue:work --queue=wordpress-import --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=2
redirect_stderr=true
stdout_logfile=/path/to/your/project/storage/logs/queue-worker.log
stopwaitsecs=3600
```

### Environment Variables

Add to your `.env` file:

```env
QUEUE_CONNECTION=database
WARAVEL_CACHE_ENABLED=true
```

## CLI Commands

```bash
# List all import jobs
php artisan waravel:import list

# Check job status
php artisan waravel:import status --job-id=123

# Pause/resume/cancel jobs
php artisan waravel:import pause --job-id=123
php artisan waravel:import resume --job-id=123
php artisan waravel:import cancel --job-id=123

# Clean up old jobs
php artisan waravel:import cleanup --days=30
```

## Troubleshooting

### Queue Worker Not Running
```bash
php artisan queue:work --queue=wordpress-import
```

### Check Job Status
```bash
php artisan waravel:import list
```

### View Logs
```bash
tail -f storage/logs/laravel.log
```

## Support

- 📖 Full Documentation: See `BACKGROUND_IMPORT.md`
- 🐛 Issues: [GitHub Issues](https://github.com/Sobberrc/Waravel/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/Sobberrc/Waravel/discussions)
