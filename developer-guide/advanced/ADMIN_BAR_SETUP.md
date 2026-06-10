# Waravel Admin Bar Setup

The Waravel Admin Bar provides a WordPress-like admin bar on your frontend pages when you're logged in as a waravel_user.

## ✅ Automatic Setup (Recommended)

The admin bar is **automatically included** in Waravel's default page template. No additional setup required!


## 🔧 Manual Setup (If Using Custom Templates)

If you're using custom page templates, add this code to your template where you want the admin bar to appear:

```blade
<!-- Waravel Admin Bar (WordPress-like) -->
@auth('waravel')
<div id="waravel-admin-bar" style="
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #23282d;
    color: #fff;
    padding: 0;
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    z-index: 999999;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    line-height: 32px;
">
    <div style="display: flex; align-items: center; height: 100%;">
        <a href="/waravel" style="
            color: #fff;
            text-decoration: none;
            padding: 0 8px;
            display: flex;
            align-items: center;
            height: 100%;
            border-right: 1px solid #3c434a;
            font-weight: 600;
        " onmouseover="this.style.background='#3c434a'" onmouseout="this.style.background='transparent'">
            <span style="margin-right: 5px;">⚡</span>Waravel
        </a>
        <a href="{{ route('waravel.pages.edit', $page->id) }}" style="
            color: #fff;
            text-decoration: none;
            padding: 0 8px;
            display: flex;
            align-items: center;
            height: 100%;
            border-right: 1px solid #3c434a;
        " onmouseover="this.style.background='#3c434a'" onmouseout="this.style.background='transparent'">
            <span style="margin-right: 5px;">✏️</span>Edit Page
        </a>
        <a href="{{ route('waravel.pages.index') }}" style="
            color: #a7aaad;
            text-decoration: none;
            padding: 0 8px;
            display: flex;
            align-items: center;
            height: 100%;
            border-right: 1px solid #3c434a;
        " onmouseover="this.style.background='#3c434a'; this.style.color='#fff'" onmouseout="this.style.background='transparent'; this.style.color='#a7aaad'">
            <span style="margin-right: 5px;">📄</span>All Pages
        </a>
    </div>
    <div style="display: flex; align-items: center; height: 100%;">
        <span style="color: #a7aaad; padding: 0 8px; border-right: 1px solid #3c434a;">Howdy, {{ Auth::guard('waravel')->user()->name }}</span>
        <a href="{{ route('waravel-logout') }}" style="
            color: #a7aaad;
            text-decoration: none;
            padding: 0 8px;
            display: flex;
            align-items: center;
            height: 100%;
        " onmouseover="this.style.background='#3c434a'; this.style.color='#fff'" onmouseout="this.style.background='transparent'; this.style.color='#a7aaad'">
            Logout
        </a>
    </div>
</div>

<style>
/* Push body content down to account for admin bar */
body {
    margin-top: 32px !important;
}

/* Ensure admin bar stays on top */
#waravel-admin-bar {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 999999 !important;
}

/* WordPress-style hover effects */
#waravel-admin-bar a:hover {
    background: #3c434a !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    #waravel-admin-bar {
        flex-direction: column;
        height: auto;
        min-height: 32px;
    }
    
    #waravel-admin-bar > div {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    body {
        margin-top: 64px !important;
    }
}
</style>
@endauth
```

## 🎨 Features

- **WordPress-like styling** - Familiar dark admin bar
- **Edit Page link** - Direct link to edit current page
- **All Pages link** - Quick access to pages dashboard
- **User info** - Shows logged-in user name
- **Logout link** - Quick logout functionality
- **Responsive design** - Works on mobile devices
- **Non-intrusive** - Only shows when logged in

## 🔒 Security

- Only displays when `waravel_user` is authenticated
- Automatically hides on dashboard pages
- No sensitive data exposed to non-authenticated users

## 📱 Responsive Behavior

- **Desktop**: Full horizontal bar with all features
- **Mobile**: Stacked layout with centered content
- **Auto-adjusts**: Body margin automatically adjusted

## 🛠️ Customization

The admin bar styles can be customized by modifying the CSS in `public/js/waravel-admin-bar.js`.

## ❓ Troubleshooting

**Admin bar not showing?**
1. Make sure you're logged in as a waravel_user
2. Check that the JavaScript file is loading: `public/js/waravel-admin-bar.js`
3. Verify meta tags are present in your page template

**Styling conflicts?**
- The admin bar uses `z-index: 999999` to stay on top
- Body margin is automatically adjusted with `margin-top: 32px`
- Check for conflicting CSS rules
