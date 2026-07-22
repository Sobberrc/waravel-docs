# Media Optimizer Pro Plugin - User Guide

The Media Optimizer Pro plugin extends the core media management capabilities of Waravel by introducing advanced image compression, bulk format conversion, and automated maintenance workflows. It is designed to drastically reduce bandwidth consumption and improve page load speeds.

## Accessing the Plugin

After activating the plugin, navigate to **Dashboard â†’ Media Optimizer Pro**.

## Pro Features & Usage

### 1. Heavy Metrics & Analysis
The dashboard provides a **Heavy Metrics** panel. This analyzes your entire media library to highlight "heavy" assetsâ€”large images that are negatively impacting your site's load times. 
- You can view total library size, average image size, and a list of the largest files on the server.

### 2. Bulk WebP Conversion
WebP is a modern image format that provides superior lossless and lossy compression for images. 
- **Convert Batch:** Select a batch of standard JPG/PNG files and instantly convert them to WebP format. This drastically reduces file size while maintaining visual quality.

### 3. Bulk Shrinking
If your site contains excessively large images (e.g., raw 4K photos uploaded by users), you can use the **Shrink Batch** tool.
- This will resize the physical dimensions of massive images down to a reasonable maximum width (e.g., 1920px), saving massive amounts of storage space.

### 4. Patch Content
When you convert an image from JPG to WebP, the URL of the image changes. The **Patch Content** tool scans all of your pages, posts, and blocks. It automatically updates `<img src="...">` tags that point to the old JPGs, replacing them with the new WebP URLs.

### 5. Prune Originals
Once you have converted images to WebP and successfully patched your content, you no longer need the original JPG or PNG files.
- **Prune Originals:** This safely deletes the original non-WebP files to reclaim server storage space.

### 6. Automation & Scheduling
Navigate to the **Automation** tab to configure background processing.
- You can set the plugin to automatically run image conversions and shrinking at scheduled intervals (e.g., nightly).
- You can also configure email reports using the **Send Report** feature, which will notify administrators of the storage saved after automated batch jobs complete.
