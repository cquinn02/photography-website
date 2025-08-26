# TwoColumnSection Component Package for Cindy

## What This Component Does
Creates a responsive 50/50 split section with text on one side and an image on the other. Perfect for showcasing services, about sections, or any content that benefits from visual + text layout.

## Files Needed

### 1. Component File
Copy this file to your project: `/src/components/sections/TwoColumnSection.tsx`

### 2. Registry Addition
Add this import to your `DynamicComponents.tsx`:
```typescript
import TwoColumnSection from './sections/TwoColumnSection'
```

And add to your COMPONENT_REGISTRY:
```typescript
export const COMPONENT_REGISTRY = {
  // ... your existing components
  TwoColumnSection,
} as const
```


## Frontmatter Examples

### Basic Example (Text Left, Image Right)
```yaml
components:
  - type: TwoColumnSection
    props:
      title: "Your Service Title"
      subtitle: "Optional Subtitle"
      description: "Describe your service or message here. This text will appear on the left side."
      ctaText: "Learn More"
      ctaLink: "/contact"
      imageUrl: "/images/your-image.jpg"
      imageAlt: "Description of your image"
      backgroundColor: "#f5f5f5"
```

### Reversed Example (Image Left, Text Right)
```yaml
components:
  - type: TwoColumnSection
    props:
      title: "Another Service"
      description: "This section has the image on the left and text on the right."
      ctaText: "Get Started"
      ctaLink: "/pricing"
      imageUrl: "/images/another-image.jpg"
      reverseColumns: true
      backgroundColor: "#e8e8e8"
```

### Multiple Sections Example
```yaml
components:
  - type: TwoColumnSection
    props:
      title: "First Service"
      description: "Description for first service..."
      imageUrl: "/images/service1.jpg"
      reverseColumns: false
      
  - type: TwoColumnSection
    props:
      title: "Second Service"
      description: "Description for second service..."
      imageUrl: "/images/service2.jpg"
      reverseColumns: true
      
  - type: TwoColumnSection
    props:
      title: "Third Service"
      description: "Description for third service..."
      imageUrl: "/images/service3.jpg"
      reverseColumns: false
```

## All Available Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | string | required | Main heading text |
| `subtitle` | string | optional | Small text above title |
| `description` | string | required | Main body text |
| `ctaText` | string | optional | Button text |
| `ctaLink` | string | optional | Button link |
| `imageUrl` | string | required | Path to image |
| `imageAlt` | string | optional | Image alt text |
| `backgroundColor` | string | optional | Background color for text side |
| `reverseColumns` | boolean | false | true = image left, false = text left |
| `mobileStackOrder` | string | "text-first" | "text-first" or "image-first" on mobile |
| `breakpoint` | string | "lg" | When to stack: "md", "lg", "xl", "2xl" |
| `textSize` | string | "medium" | Text size: "small", "medium", "large" |

## Responsive Behavior

### Desktop (above breakpoint)
- 50/50 split layout
- Image height drives the section height
- Text is vertically centered

### Mobile (below breakpoint)
- Stacks vertically
- Order controlled by `mobileStackOrder`
- Full width sections

### Breakpoint Options
- `"md"` - Stacks at 768px and below (tablets)
- `"lg"` - Stacks at 1024px and below (default)
- `"xl"` - Stacks at 1280px and below (recommended for lots of text)
- `"2xl"` - Stacks at 1536px and below (very large screens)

## Styling Notes

### Inherits From Your Theme
- Font family
- Base text colors
- Spacing (if customized in Tailwind)

### Fixed Styles
- Button: Black background, white text
- Layout proportions and responsive behavior
- Text opacity variations (80% for subtitle, 90% for description)

### Customization Tips
1. **Colors**: Set in `backgroundColor` prop or via CSS/Tailwind theme
2. **Fonts**: Configure in your Tailwind config
3. **Buttons**: Override with custom CSS classes if needed

## Installation Steps

1. Copy `TwoColumnSection.tsx` to your `/src/components/sections/` folder
2. Add import and registry entry to `DynamicComponents.tsx`
3. Add image domain to `next.config.js` (if using external images)
4. Restart your dev server
5. Add component to your page's frontmatter
6. Test responsive behavior at different screen sizes

## Example Page Structure

```markdown
---
title: "Your Page Title"
description: "Page description for SEO"
components:
  - type: TwoColumnSection
    props:
      title: "Welcome to My Business"
      description: "Tell your story here..."
      imageUrl: "/images/hero.jpg"
      ctaText: "Learn More"
      ctaLink: "/about"
---

# Optional markdown content below components
Any additional content you want below the components.
```

That's it! The component is now ready to use throughout your site.