<div class="guide-banner guide-banner-user"><span>📖</span> User Guide: Plugin Overview</div>

# Waravel Builder (Page Architect)

The **Waravel Builder** is a powerful, modular grid system that replaces the standard text editor. It is designed for creating high-conversion landing pages, homepages, and complex layouts without writing any code.

---

## 1. Enabling Builder Mode
When creating or editing any page, you will see two tabs above the content area: **Standard** and **Waravel Builder**.
- Switching to **Waravel Builder** will hide the TinyMCE editor and reveal the modular canvas.
- *Note: Switching back to Standard will hide your builder blocks but preserve them in the database.*

---

## 2. Structural Blocks (Rows & Columns)
The builder uses a "Row-First" logic:
1. **Add Section**: Create a horizontal row.
2. **Set Columns**: Choose your layout (Full Width, 50/50, 33/33/33, etc.).
3. **Spacing**: You can adjust the top and bottom padding of any section to create "breathing room" for your design.

---

## 3. Element Blocks
Click the **+** icon in any column to add an element:
- **Rich Text**: For standard paragraphs and formatting.
- **Hero Headers**: Large, impactful titles with background support.
- **Image Blocks**: High-performance image rendering from your Media Vault.
- **Accordions**: Perfect for FAQ sections.
- **Buttons**: Customizable Call-to-Action (CTA) elements.

---

## 4. Template Library
Save time by using pre-built layouts or your own custom designs:
- **Global Templates**: Access a library of pre-designed sections and page layouts.
- **Save as Template**: Once you build a section you love, save it to your local library to reuse it across other pages.
- **Type Mapping**: Organize your templates by category (Hero, Content, FAQ, etc.) for quick access.

---

## 5. Theme Integration
Unlike generic page builders, the Waravel Builder is **Theme Native**. It automatically uses the fonts, colors, and button styles defined in your active theme, ensuring 100% visual consistency across your site.

---

## 6. Technical Integrity
- **JSON Storage**: Layouts are stored as structured JSON in the `builder_data` column, separate from the `content` HTML.
- **Sanitization Control**: Administrative users can bypass HTML sanitization for advanced custom-code blocks.
- **IDOR Protection**: Built-in permission gates ensure users can only edit their own pages within the builder console.
