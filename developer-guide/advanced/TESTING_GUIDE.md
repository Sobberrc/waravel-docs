# WordPress Import System - Testing Guide

## 🎯 Pre-Test System Check

### Step 1: Run System Test Command

```bash
php artisan waravel:test-import-system
```

This will check:
- ✅ Database tables exist
- ✅ Queue tables are set up
- ✅ Service classes can be instantiated
- ✅ Routes are registered
- ✅ Storage permissions are correct
- ✅ Environment variables are set

**Expected Result**: 90%+ pass rate

### Step 2: Setup Queue Tables (if needed)

If queue tables are missing:

```bash
php artisan queue:table
php artisan queue:failed-table
php artisan migrate
```

### Step 3: Fix Storage Permissions (if needed)

```bash
# Create storage link
php artisan storage:link

# Fix permissions (Linux/Mac)
chmod -R 775 storage/
chown -R www-data:www-data storage/

# Windows: Ensure storage/ folder has write permissions
```

## 🚀 Live Testing Process

### Step 1: Start Queue Worker

**Terminal 1** (keep this running):
```bash
php artisan queue:work --verbose --tries=3 --timeout=3600
```

You should see:
```
[2024-01-01 12:00:00][0] Processing: ...
[2024-01-01 12:00:00][0] Processed: ...
```

### Step 2: Access Import Dashboard

Navigate to:
```
http://your-site.com/waravel/import/wp
```

**Expected**: Form with WordPress credentials fields

### Step 3: Test WordPress Connection

1. **Enter Test WordPress Site**:
   - URL: `https://demo.wp-api.org` (public test site)
   - Username: `demo`
   - Password: `demo`

2. **Click "Fetch Totals"**

**Expected Result**:
- ✅ Totals appear (pages, posts, tags counts)
- ✅ Import options become visible
- ✅ No JavaScript errors in console

### Step 4: Test Small Import

1. **Select Import Types**:
   - ✅ Import Pages (should show count)
   - ⬜ Import Posts (uncheck for faster test)
   - ⬜ Import Tags (uncheck for faster test)
   - ⬜ Import Media (uncheck for faster test)

2. **Click "Start Import"**

**Expected Results**:
- ✅ Job starts immediately
- ✅ Progress bar appears and updates
- ✅ Queue worker shows processing messages
- ✅ Import completes successfully

### Step 5: Verify Import Results

1. **Check Pages Dashboard**:
   ```
   http://your-site.com/waravel/pages
   ```

2. **Verify**:
   - ✅ Pages imported with correct titles
   - ✅ Content is present
   - ✅ Hierarchy preserved (if applicable)
   - ✅ No duplicate pages

## 🔍 Advanced Testing

### Test 1: Full Import with Real WordPress Site

1. **Use Your WordPress Site**:
   - Enter your WordPress credentials
   - Select all import types
   - Set new domain (optional)
   - Start import

2. **Monitor Progress**:
   - Watch queue worker output
   - Check progress in dashboard
   - Monitor for errors

### Test 2: Pause/Resume Functionality

1. **Start Large Import**
2. **Click "Pause"** during processing
3. **Verify**: Job pauses, worker stops processing
4. **Click "Resume"**
5. **Verify**: Job continues from where it left off

### Test 3: Error Handling

1. **Enter Invalid Credentials**
2. **Try to Start Import**
3. **Verify**: Proper error messages displayed

### Test 4: Nested Import

1. **Create Parent Page** manually
2. **Set "Parent Container"** to that page ID
3. **Start Import**
4. **Verify**: All imported content is under parent page

## 🐛 Troubleshooting

### Queue Worker Issues

**Problem**: Worker not processing jobs
```bash
# Check if worker is running
ps aux | grep "queue:work"

# Restart worker
php artisan queue:restart
php artisan queue:work --verbose
```

**Problem**: Jobs failing
```bash
# Check failed jobs
php artisan queue:failed

# View specific failure
php artisan queue:failed --id=1

# Retry failed jobs
php artisan queue:retry all
```

### Import Issues

**Problem**: No totals fetched
- Check WordPress credentials
- Verify WordPress REST API is enabled
- Check network connectivity

**Problem**: Import stuck
- Check queue worker is running
- Check Laravel logs: `tail -f storage/logs/laravel.log`
- Check database for job status

**Problem**: Media not downloading
- Check storage permissions
- Verify storage link exists
- Check available disk space

### Database Issues

**Problem**: Foreign key errors
```bash
# Check if all migrations ran
php artisan migrate:status

# Run missing migrations
php artisan migrate
```

## 📊 Success Criteria

### ✅ Basic Test Success
- [ ] System test passes (90%+)
- [ ] Queue worker starts without errors
- [ ] Dashboard loads correctly
- [ ] Can fetch totals from WordPress
- [ ] Can start and complete small import
- [ ] Imported content appears correctly

### ✅ Advanced Test Success
- [ ] Full import completes successfully
- [ ] Pause/resume works correctly
- [ ] Error handling works properly
- [ ] Nested import works
- [ ] Domain replacement works
- [ ] Media files download correctly
- [ ] Parent-child relationships preserved

## 🎉 Next Steps After Successful Testing

1. **Production Setup**:
   - Configure Redis queues
   - Set up Supervisor for workers
   - Configure proper logging

2. **Performance Optimization**:
   - Test with large WordPress sites
   - Monitor memory usage
   - Optimize worker settings

3. **Documentation**:
   - Document any site-specific configurations
   - Create user guides
   - Document troubleshooting steps

## 🆘 Getting Help

If tests fail:

1. **Check Logs**:
   ```bash
   tail -f storage/logs/laravel.log
   ```

2. **Check Queue Status**:
   ```bash
   php artisan queue:monitor
   php artisan queue:failed
   ```

3. **Run System Test Again**:
   ```bash
   php artisan waravel:test-import-system
   ```

4. **Check Database**:
   ```sql
   SELECT * FROM waravel_import_jobs ORDER BY created_at DESC LIMIT 5;
   ```

Remember: The system is designed to be fault-tolerant. Most issues can be resolved by restarting the queue worker or retrying failed jobs.
