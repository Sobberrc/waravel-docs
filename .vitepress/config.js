import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Waravel Ecosystem",
  description: "Comprehensive documentation for the Waravel package, plugins, themes, and infrastructure.",
  appearance: 'dark',
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Guide', link: '/user-guide/' },
      { text: 'Developer Guide', link: '/developer-guide/' },
      { text: 'Portal Guide', link: '/portal/' }
    ],
    sidebar: {
      '/user-guide/': [
        {
          text: 'Get Started',
          items: [
            { text: 'Introduction', link: '/user-guide/' },
            { text: 'Why Migrate from WordPress?', link: '/user-guide/why-migrate' },
            { text: 'Quick Start', link: '/QUICK_START' },
            { text: 'Installation Guide', link: '/INSTALLATION_GUIDE' },
            { text: 'Securing App Root & Clean URLs', link: '/user-guide/securing-app-root' },
            { 
              text: 'The Top Bar', 
              link: '/user-guide/dashboard-top-bar',
              items: [
                { text: 'Updates', link: '/user-guide/topbar-updates' },
                { text: 'Maintenance', link: '/user-guide/topbar-maintenance' },
                { text: 'Settings', link: '/user-guide/topbar-settings' },
              ]
            },
            { 
              text: 'The Side Bar', 
              link: '/user-guide/dashboard-side-bar',
              items: [
                { text: 'Marketplace', link: '/user-guide/marketplace' },
                {
                  text: 'CONTENT',
                  items: [
                    { text: 'Pages (All Pages)', link: '/user-guide/page-management' },
                    { text: 'The Page Editor', link: '/user-guide/page-editor' },
                    { text: 'Setting Up Your Homepage', link: '/user-guide/homepage-setup' },
                    { text: 'Media (Media Vault)', link: '/user-guide/media-management' },
                    { text: 'Tags', link: '/user-guide/tag-management' },
                  ]
                },
                {
                  text: 'APPEARANCE',
                  items: [
                    { text: 'Themes', link: '/user-guide/theme-engine' },
                    { text: 'Theme Customizer', link: '/user-guide/skin-customizer' },
                    { text: 'Layout Studio', link: '/user-guide/layout-studio' },
                    { text: 'Widget Editor', link: '/user-guide/widget-management' },
                  ]
                },
                {
                  text: 'TOOLS (Plugins)',
                  items: [
                    { text: 'Plugins Overview', link: '/user-guide/plugins-introduction' },
                    { text: 'Contact Form', link: '/user-guide/plugins-contact-form' },
                    { text: 'MailTester', link: '/user-guide/plugins-mail-tester' },
                    { text: 'MediaOptimizer', link: '/user-guide/plugins-media-optimizer' },
                    { text: 'MediaOptimizer Pro', link: '/user-guide/plugins-media-optimizer-pro' },
                    { text: 'PageCleaner', link: '/user-guide/plugins-page-cleaner' },
                    { text: 'PageCleaner Pro', link: '/user-guide/plugins-page-cleaner-pro' },
                    { text: 'PageGenerator', link: '/user-guide/plugins-page-generator' },
                    { text: 'PageGenerator Pro', link: '/user-guide/plugins-page-generator-pro' },
                    { text: 'PagePromoter', link: '/user-guide/plugins-page-promoter' },
                    { text: 'PagePromoter Pro', link: '/user-guide/plugins-page-promoter-pro' },
                    { text: 'PageRating', link: '/user-guide/plugins-page-rating' },
                    { text: 'PageRating Pro', link: '/user-guide/plugins-page-rating-pro' },
                    { text: 'Redirect Manager', link: '/user-guide/plugins-redirect-manager' },
                    { text: 'Redirect Manager Pro', link: '/user-guide/plugins-redirect-manager-pro' },
                    { text: 'Waravel Builder', link: '/user-guide/plugins-waravel-builder' },
                    { text: 'Waravel Slider', link: '/user-guide/plugins-waravel-slider' },
                    { text: 'Why Migrate from WordPress?', link: '/user-guide/why-migrate' },
                    { text: 'WordPress Importer', link: '/user-guide/plugins-wp-importer' },
                  ]
                },
                {
                  text: 'SUPPORT & HELP',
                  items: [
                    { text: 'Troubleshooting', link: '/user-guide/troubleshooting' },
                    { text: 'FAQs', link: '/user-guide/faq' }
                  ]
                }
              ]
            },
          ]
        }
      ],
      '/developer-guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/developer-guide/introduction' },
            { text: 'Dashboard Architecture', link: '/developer-guide/dashboard' },
          ]
        },
        {
          text: 'CORE ARCHITECTURE',
          items: [
            { text: 'Pages API', link: '/developer-guide/page-management' },
            { text: 'Media System', link: '/developer-guide/media-management' },
            { text: 'Taxonomy (Tags)', link: '/developer-guide/tag-management' },
          ]
        },
        {
          text: 'DESIGN INTERFACES',
          items: [
            { text: 'Theme Engine', link: '/developer-guide/theme-engine' },
            { text: 'Widget Architecture', link: '/developer-guide/widget-management' },
          ]
        },
        {
          text: 'PLUGINS REFERENCE',
          items: [
            { text: 'Plugin Hooks', link: '/developer-guide/plugins-introduction' },
            { text: 'Contact Form', link: '/developer-guide/plugins-contact-form' },
            { text: 'MailTester', link: '/developer-guide/plugins-mail-tester' },
            { text: 'MediaOptimizer', link: '/developer-guide/plugins-media-optimizer' },
            { text: 'MediaOptimizer Pro', link: '/developer-guide/plugins-media-optimizer-pro' },
            { text: 'PageCleaner', link: '/developer-guide/plugins-page-cleaner' },
            { text: 'PageCleaner Pro', link: '/developer-guide/plugins-page-cleaner-pro' },
            { text: 'PageGenerator', link: '/developer-guide/plugins-page-generator' },
            { text: 'PageGenerator Pro', link: '/developer-guide/plugins-page-generator-pro' },
            { text: 'PagePromoter', link: '/developer-guide/plugins-page-promoter' },
            { text: 'PagePromoter Pro', link: '/developer-guide/plugins-page-promoter-pro' },
            { text: 'PageRating', link: '/developer-guide/plugins-page-rating' },
            { text: 'PageRating Pro', link: '/developer-guide/plugins-page-rating-pro' },
            { text: 'Redirect Manager', link: '/developer-guide/plugins-redirect-manager' },
            { text: 'Redirect Manager Pro', link: '/developer-guide/plugins-redirect-manager-pro' },
            { text: 'Builder & Slider', link: '/developer-guide/plugins-builder-slider' },
            { text: 'WordPress Importer', link: '/developer-guide/plugins-wp-importer' },
          ]
        },
        {
          text: 'SYSTEM & DEPLOYMENT',
          items: [
            { text: 'Infrastructure', link: '/developer-guide/infrastructure' },
            { text: 'Database Schema', link: '/developer-guide/database' },
            { text: 'Routing & Middleware', link: '/developer-guide/routing' },
            { text: 'Plugin Development', link: '/developer-guide/plugins' },
            { text: 'Portal Integration', link: '/developer-guide/portal' },
            { text: 'Registry Server', link: '/developer-guide/registry' }
          ]
        },
        {
          text: 'ADVANCED GUIDES',
          items: [
            { text: 'Admin Bar Setup', link: '/developer-guide/advanced/ADMIN_BAR_SETUP' },
            { text: 'Advanced Plugin Dev', link: '/developer-guide/advanced/PLUGIN_DEVELOPMENT_GUIDE' },
            { text: 'Inactive Plugin Feature', link: '/developer-guide/advanced/PLUGIN_INACTIVE_FEATURE' },
            { text: 'Plugin Quick Reference', link: '/developer-guide/advanced/PLUGIN_QUICK_REFERENCE' },
            { text: 'Plugin Template', link: '/developer-guide/advanced/PLUGIN_TEMPLATE' },
            { text: 'Testing Guide', link: '/developer-guide/advanced/TESTING_GUIDE' }
          ]
        }
      ],
      '/portal/': [
        {
          text: 'Portal Overview',
          items: [
            { text: 'Introduction', link: '/portal/' },
            { text: 'Accounts & Login', link: '/portal/accounts-login' },
          ]
        },
        {
          text: 'Billing & Subscriptions',
          items: [
            { text: 'Plans & Pricing', link: '/portal/plans-pricing' },
            { text: 'Upgrading & Payments', link: '/portal/upgrading-billing' },
          ]
        },
        {
          text: 'Ecosystem Management',
          items: [
            { text: 'Licenses & Auto-Updates', link: '/portal/licenses-auto-updates' },
            { text: 'Affiliate Program', link: '/portal/affiliate-program' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sobberrc/waravel' }
    ]
  }
})
