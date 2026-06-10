# WordPress Import - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Setup Queue Workers

**Option A: Development (Quick Test)**
```bash
# Terminal 1: Start queue worker
php artisan queue:work --verbose --tries=3 --timeout=3600

# Keep this terminal open while testing
```

**Option B: Production (Recommended)**
See [QUEUE_SETUP.md](QUEUE_SETUP.md) for full setup instructions.

### Step 2: Access Import Dashboard

Navigate to:
```
https://yoursite.com/waravel/import/wp
```

### Step 3: Start Your First Import

1. **Enter WordPress Credentials**
   - WordPress URL: `https://your-wordpress-site.com`
   - Username: Your WordPress admin username
   - Password: Your WordPress admin password

2. **Fetch Totals**
   - Click "Fetch Totals" button
   - Wait for counts to appear

3. **Select Import Options**
   - ✅ Import Pages (preserves hierarchy)
   - ✅ Import Posts (as top-level pages)
   - ✅ Import Tags (under auto-created "Tag" page)
   - ⬜ Import Media Files (optional, takes longer)

4. **Optional: Configure Advanced Options**
   - **New Domain**: Replace URLs in content
   - **Parent Container**: Nest all imports under existing page

5. **Start Import**
   - Click "Start Import"
   - Monitor progress in real-time
   - Use pause/resume/cancel as needed

## 🎯 What Happens During Import

### Import Sequence
1. **Pages Import**: Preserves WordPress parent-child relationships
2. **Posts Import**: Creates posts as top-level pages (type='post')
3. **Tags Import**: Creates tags under auto-created "Tag" page (type='tag')
4. **Media Import**: Downloads and stores media files locally
5. **Finalization**: Maps relationships and replaces domains

### Data Imported
- ✅ **Content**: Title, content, slug, status
- ✅ **SEO Data**: Meta title, meta description, keywords
- ✅ **Schema Data**: Structured data from WordPress
- ✅ **Media Files**: Images, videos with URL replacement
- ✅ **Hierarchy**: Parent-child relationships preserved

## 🔧 Troubleshooting

### Queue Worker Not Running
```bash
# Check if worker is running
ps aux | grep "queue:work"

# Start worker if not running
php artisan queue:work --verbose --tries=3 --timeout=3600
```

### Import Stuck or Failed
```bash
# Check failed jobs
php artisan queue:failed

# Retry failed jobs
php artisan queue:retry all

# Check logs
tail -f storage/logs/laravel.log
```

### Memory Issues
```bash
# Increase PHP memory limit
php -d memory_limit=512M artisan queue:work --verbose --tries=3 --timeout=3600
```

### Permission Issues
```bash
# Fix storage permissions
chmod -R 775 storage/
chown -R www-data:www-data storage/

# Link public storage
php artisan storage:link
```

## 📊 Monitoring Progress

### Web Dashboard
- Real-time progress bars
- Pause/resume/cancel controls
- Error reporting and retry options
- Job history and statistics

### Command Line
```bash
# Monitor queue
php artisan queue:monitor

# Check import jobs
php artisan waravel:import status

# View logs
tail -f storage/logs/laravel.log
```

## 🎛️ Advanced Features

### Nested Import
- Set "Parent Container" to existing page ID
- All imported content becomes children of that page
- Preserves original hierarchy within container

### Domain Replacement
- Set "New Domain" to replace WordPress URLs
- Updates all links and media URLs in content
- Useful for staging/production migrations

### Selective Import
- Choose specific content types to import
- Skip media for faster imports
- Import only what you need

### Resume Capability
- Jobs survive server restarts
- Automatic retry on failures
- Manual pause/resume controls

## 🔄 Common Workflows

### Full Site Migration
1. Import Pages + Posts + Tags + Media
2. Set new domain for URL replacement
3. Monitor progress and handle any failures
4. Verify imported content

### Content-Only Import
1. Import Pages + Posts + Tags only
2. Skip media for faster import
3. Handle media separately if needed

### Nested Import for Organization
1. Create container page manually
2. Set as parent container in import
3. All WordPress content becomes organized under container

## 📝 Next Steps

1. **Test with Small Site**: Start with a small WordPress site
2. **Monitor Performance**: Watch memory usage and processing time
3. **Scale Up**: Use production queue setup for larger imports
4. **Customize**: Modify import logic for specific needs

## 🆘 Need Help?

- Check logs: `storage/logs/laravel.log`
- Review failed jobs: `php artisan queue:failed`
- Monitor queue workers: `php artisan queue:monitor`
- Check documentation: [QUEUE_SETUP.md](QUEUE_SETUP.md)

## ✅ Success Indicators

- ✅ Queue worker running without errors
- ✅ Import progress updating in dashboard
- ✅ Content appearing in pages list
- ✅ Media files downloading to storage
- ✅ No failed jobs in queue
