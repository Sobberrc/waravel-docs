<div class="guide-banner guide-banner-user"><span>📖</span> User Guide: Plugin Overview</div>

# Contact Form (Lead Capture)

The **Contact Form** plugin is your primary tool for gathering leads, inquiries, and support requests directly from your visitors. It provides a secure, stylish front-end form and a robust back-end dashboard for managing all incoming messages.

---

## What Does It Do?

1. **Renders Forms Securely**: Creates a beautiful, theme-matching contact form anywhere on your site.
2. **Centralizes Leads**: Stores every submission safely in your Waravel database.
3. **Instant Notifications**: Sends an immediate email alert to your team whenever a new message arrives.

---

## 1. Setting Up the Form

Before you place the form on your site, you should configure its behavior and security settings.

1. Navigate to **Plugins > Contact Form** in your dashboard.
2. Click on the **Settings (⚙️)** tab.
3. **Recipient Email**: Enter the primary email address where you want to receive notifications (e.g., `info@yourdomain.com`).
4. **Success Message**: Customize the text visitors see after they click "Submit" (e.g., "Thank you! We will reply within 24 hours.").
5. **Design Styles**: Waravel offers pre-built aesthetics to match your site:
   - **Modern**: Clean lines, floating labels.
   - **Minimal**: Understated, elegant input fields.
   - **Classic**: Traditional boxed inputs.
6. **Spam Protection**: We highly recommend enabling the built-in **Captcha** to prevent automated bots from flooding your database with junk mail.

---

## 2. Embedding the Form on Your Site

You can place the contact form almost anywhere using a **Shortcode**.

1. Copy the shortcode: `[waravel-contact-form]`
2. Open the **Page Editor** for your desired page (e.g., "Contact Us").
3. Paste the shortcode directly into the standard text editor.
   - *Alternatively, if using the Waravel Builder, paste the shortcode inside a "Rich Text" block.*
4. **Widgets**: You can also paste this shortcode inside a Text Widget to display the form globally in your sidebar or footer.

---

## 3. Managing Your Leads (The Inbox)

When a visitor submits the form, you don't just get an email—the message is securely stored in your dashboard.

1. Go to the main **Contact Form Dashboard**.
2. You will see a list of all **Submissions**, acting as your site's internal inbox.
3. **Status Tracking**: New messages are marked as **Unread** (highlighted in bold). Once you click to view a message, its status changes to Read.
4. **Detailed View**: Clicking a message shows you the sender's Name, Email, Subject, and the full Message body.
5. **Security Insights**: Waravel automatically logs the IP address and Browser info of the sender. This is crucial for identifying abusive users or spam patterns.
6. **Archiving**: You can select older messages and use the Bulk Action menu to delete them and keep your inbox clean.

---

## Best Practices for Lead Generation

- **Keep It Simple**: The default form asks for Name, Email, Subject, and Message. Don't crowd the page with unnecessary text around the form; let the form be the primary focus.
- **Test Your Notifications**: Once you configure your Recipient Email, go to your public site and send a test message. Check your inbox (and spam folder) to ensure the server is routing the email correctly.
- **Strategic Placement**: While having a dedicated "Contact Us" page is standard, placing the form in the footer of a high-traffic "Services" page can significantly increase conversion rates.
