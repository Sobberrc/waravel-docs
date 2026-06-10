<div class="guide-banner guide-banner-user"><span>📖</span> User Guide: Plugin Overview</div>

# Page Generator (Standard)

The **Page Generator** is the core engine for scaling your site's content. It allows you to create hundreds of unique, SEO-optimized pages using AI templates and dynamic variables.

---

## 1. Core Workflow
1. **Define a Template**: Create a reusable content prompt (e.g., "Write a landing page for {Service} in {Location}").
2. **Placeholders**: Define dynamic variables (e.g., `Service`, `Location`) and their corresponding values.
3. **Attachments**: Upload PDF, Word, or text files to provide context and "knowledge" to the AI for more accurate generation.
4. **Generate**: Waravel processes the prompt for each variable combination, creating unique pages for each.

---

## 2. Key Features
- **Dynamic Placeholders**: Use `{variable_name}` in your prompts to inject data dynamically.
- **Spintax Support**: Use `{word1|word2|word3}` syntax to create randomized variations in your templates.
- **Context Attachments**: Upload documents to the template to give the AI specific data to use during generation.
- **Job Management**: Monitor generation progress via the **Jobs** console. If a queue worker isn't available, the plugin supports AJAX-based processing.

---

## 3. AI Providers & Models
The standard version allows you to manage multiple providers:
- **OpenAI**: Support for GPT-4o, GPT-4 Turbo, etc.
- **Anthropic**: Support for Claude 3.5 Sonnet, Opus, and Haiku.
- **Custom Models**: Use the "Fetch Models" feature to pull the latest available models from your API provider.

---

## 4. SEO & Publishing
- **SEO Templates**: Define unique Title and Meta Description templates for all generated pages.
- **Auto-Parenting**: Automatically nest generated pages under a specific parent page for better site structure.
- **Status Control**: Save generated items as **Draft**, **Private**, or **Public**.

---

> [!TIP]
> **Need GSC Automation and Auto-Pilot?**
> Check out the **[Page Generator Pro](./plugins-page-generator-pro.md)** for advanced features like Google Search Console integration and automated content gap scanning.
