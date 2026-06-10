<div class="guide-banner guide-banner-dev"><span>🛠️</span> Developer Guide: Technical Reference</div>

# ContactForm: Technical Reference

Technical documentation for the ContactForm plugin: architecture, database schema, and public API.

---

## Architecture

- **Service Provider**: `ContactFormPlugin.php` (Registers shortcode, routes, and mailable).
- **Controller**: `ContactFormController`.
- **Shortcode**: `[waravel-contact-form]` handled by `ShortcodeProcessor`.
- **Mailable**: `ContactFormMail`.

---

## Database Schema

### `contact_form_submissions`

| Column | Type | Purpose |
|---|---|---|
| `name` | string | Submitter's name |
| `email` | string (indexed) | Submitter's email |
| `subject` | string (nullable) | Message subject |
| `message` | text | Message body |
| `ip_address` | string | Anti-spam tracking |
| `is_read` | boolean (indexed) | Dashboard status |

---

## Public API & Submission

The form submits via AJAX to the following endpoint:
`POST /api/contact-form/submit`

### Security Layers
1. **CSRF Protection**: All requests must include a valid CSRF token.
2. **Throttling**: Rate-limited to 10 submissions per minute via the `throttle:10,1` middleware.
3. **Mathematical Captcha**: If enabled, the answer is verified server-side using a session-backed key.

---

## Diagnostic Tools

The plugin includes several internal routes for troubleshooting:
- `/test-contact-form-plugin`: Dumps current settings and DB registration status.
- `/test-email`: Sends a test email using the configured `ContactFormMail` class.
- `/fix-plugin`: Self-repair utility that re-seeds default settings and creates missing DB records.

---

## Settings Fallback
The `SettingsController` implements a dual-layer save logic: it first attempts to use the standard Eloquent update, but falls back to a direct `DB` table update if the model fails, ensuring settings can always be persisted.
