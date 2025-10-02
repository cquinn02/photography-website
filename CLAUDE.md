# Photography Website Development Environment

## Project Overview
Bulletproof Next.js development environment for photographers transitioning from WordPress/Squarespace to modern web development using Claude Code.

## Project Goals
- Create reliable, conflict-free development environment
- Separate content from code (frontmatter approach)
- Provide foundation for custom photography websites

## Target Users
- Photographers first, marketers second
- Embracing AI but not traditional coders
- Need reliability over complexity

## Tech Stack Decisions
- **Framework**: Next.js (SEO and performance)
- **Language**: TypeScript (type safety)
- **Styling**: Tailwind CSS (utility-first)
- **Package Manager**: pnpm (faster, more reliable)
- **Content**: Markdown frontmatter (content separation)

## Project Structure
```
photography-website/
├── CLAUDE.md                 # This file
├── docs/                     # Documentation
├── src/                      # Source code
│   ├── pages/               # Next.js pages
│   ├── components/          # Reusable components
│   └── styles/              # Global styles
├── scripts/                  # Stability scripts
│   ├── dev-stable.js        # Development monitor with auto-recovery
│   └── cleanup.js/.sh       # Port and artifact cleanup
├── logs/                     # Development logs
│   ├── dev-server.log       # General output
│   └── dev-server-errors.log # Error tracking
├── content/                  # Content files (photographer-editable)
│   ├── home.md
│   ├── about.md
│   ├── pricing.md
│   └── contact.md
├── .env.development          # Development environment config
└── public/                   # Static assets
    └── images/              # Photography images
```

## Development Workflow

### Starting Development
```bash
# Standard development
pnpm run dev

# Enhanced stability (recommended)
pnpm run dev:stable

# Clean start (removes artifacts first)
pnpm run dev:clean
```

### Stability Features
- Automatic error recovery with dev:stable command
- Memory optimization (4GB allocation)
- Port cleanup on restart
- Comprehensive error logging
- Platform-aware scripts (Windows/macOS/Linux)

### Development Commands
```bash
pnpm dev          # Standard development
pnpm dev:stable   # With monitoring & auto-recovery
pnpm dev:clean    # Clean start (removes artifacts first)
pnpm clean        # Manual cleanup
pnpm logs         # View development logs
pnpm logs:error   # View error logs only
```

### Editing Content
1. Navigate to `/content/` folder
2. Edit relevant `.md` file
3. Changes auto-reload in browser

### Adding Images
1. Place images in `/public/images/`
2. Reference as `/images/filename.jpg`

## Port Configuration
- **Assigned Port**: 3100
- **Range**: 3100-3200
- **Status**: Active - http://localhost:3100

## Brand Colors (CMQ Headshots)
```css
--cmq-gray-dark: #575757
--cmq-gray-darker: #383838
--cmq-white: #ffffff
--cmq-blue: #5a81b9
--cmq-gray-light: #f2f2f2
```

## Dependencies
All dependencies use LTS/STABLE versions for stability:
- Versions documented in `/docs/dependency-versions.md`
- Research conducted before installation
- EXACT researched versions must be installed - NO SUBSTITUTIONS

### Required Dependencies:
**Core:**
- next@[RESEARCHED_VERSION]
- react@[RESEARCHED_VERSION]
- react-dom@[RESEARCHED_VERSION]
- typescript@[RESEARCHED_VERSION]

**Styling:**
- tailwindcss@[RESEARCHED_VERSION] (MUST be v4.1+ minimum)
- @tailwindcss/postcss@[RESEARCHED_VERSION] (MUST be v4.1+ minimum)
- postcss@[RESEARCHED_VERSION]
- autoprefixer@[RESEARCHED_VERSION]

**Development:**
- @types/node@[RESEARCHED_VERSION]
- @types/react@[RESEARCHED_VERSION]
- @types/react-dom@[RESEARCHED_VERSION]
- eslint@[RESEARCHED_VERSION]
- eslint-config-next@[RESEARCHED_VERSION]
- prettier@[RESEARCHED_VERSION]

**Additional:**
- next-seo@[RESEARCHED_VERSION]
- lucide-react@[RESEARCHED_VERSION]
- gray-matter@[RESEARCHED_VERSION] (required for reading frontmatter)

### Dependency Installation Rules:
- Install the EXACT versions documented in research - NO SUBSTITUTIONS
- EXCEPTION: Tailwind CSS and @tailwindcss/postcss MUST be v4.1.0 or higher, even if research finds older stable versions
- If research finds Tailwind < v4.1.0, install v4.1.0 instead

## Critical Requirements
- [ ] Use EXACT researched dependency versions
- [ ] Check existing files with read_file before creating new ones
- [ ] Leave development server running after setup for review
- [ ] Follow instructions precisely - no enhancements

## Success Criteria
- [ ] All dependencies use EXACT RESEARCHED LTS/STABLE versions (Tailwind CSS v4.1+ minimum)
- [ ] Core dependencies installed: next, react, react-dom, typescript
- [ ] Styling dependencies installed: tailwindcss v4.1+, @tailwindcss/postcss v4.1+, postcss, autoprefixer
- [ ] TypeScript dependencies installed: @types/node, @types/react, @types/react-dom
- [ ] Development dependencies installed: eslint, eslint-config-next, prettier
- [ ] Additional dependencies installed: next-seo, lucide-react, gray-matter
- [ ] Stability scripts created and tested (dev-stable.js, cleanup script)
- [ ] Logs directory created for error tracking
- [ ] Environment variables configured (.env.development)
- [ ] Package manager conflicts resolved (no package-lock.json with pnpm)
- [ ] Port assigned within range 3100-3200
- [ ] Development server running on assigned port (FAIL if running on port 3000)
- [ ] Build completes without errors (`pnpm run build`)
- [ ] All 4 pages render successfully
- [ ] All 4 endpoints return 200 status
- [ ] Development server LEFT RUNNING for review
- [ ] Content files verified (all 4 pages)
- [ ] Git repository initialized

## Project Content Files
Content files are included in the photography-website directory and provide:
- Professional placeholder content for all 4 pages
- Proper YAML frontmatter structure (title, description)
- Contact page includes showContactForm: true in frontmatter
- Ready for photographer customization

## Next Steps After Setup
1. Edit content files in `/content/` folder
2. Add photography images to `/public/images/`
3. Update branding in Header component
4. Deploy to hosting platform

## Git Setup Commands
```bash
git init
git add .
git commit -m "Initial photography website setup"
```

## Completion Message Template
Display completion message with:
- Assigned port number
- Development server URL
- Success criteria status
- Next steps from above section

## File Locations
- **Content**: `/content/*.md` files
- **Components**: `/src/components/`
- **Component Sections**: `/src/components/sections/` (TwoColumnSection.tsx)
- **Pages**: `/src/pages/`
- **Config**: Root level config files
- **Scripts**: `/scripts/` (dev-stable.js, cleanup utilities)
- **Logs**: `/logs/` (dev-server.log, dev-server-errors.log)
- **Templates**: `/docs/configuration-templates.md`
- **Component Templates**: `/docs/templates/` (TwoColumnSection-Package-for-Cindy.md)
- **Examples**: `/docs/component-examples.md`
- **Stability Guide**: `/docs/stability-scripts-guide.md`
- **Setup Guide**: `/docs/stable-dev-setup.md`
- **Tailwind v4 Guide**: `/docs/tailwind-v4-guide.md`

## Troubleshooting
If the development server becomes unstable:
1. Stop the server (Ctrl+C)
2. Run `pnpm clean` to remove artifacts and kill hanging processes
3. Run `pnpm dev:stable` for monitored development with auto-recovery
4. Check `/logs/` directory for detailed error information

See `/docs/stable-dev-setup.md` for comprehensive troubleshooting guide.

## Platform Compatibility
The development environment automatically detects and adapts to:
- **macOS**: Uses bash scripts and native tools (lsof, kill)
- **Linux**: Compatible with standard Unix tools
- **Windows**: Falls back to Node.js scripts and Windows commands (netstat, taskkill)

Scripts handle cross-platform differences automatically, ensuring consistent behavior regardless of operating system.

---

## ⚠️ CRITICAL - DO NOT MODIFY SECTIONS

### Hero Image (src/pages/index.tsx)
```tsx
{/* ⚠️ DO NOT CHANGE: This image setup is configured to display with NO spacing above/below.
    - Uses width/height props (NOT fill) to maintain natural aspect ratio
    - Uses w-full h-auto to scale properly
    - NO aspect ratio container or object-fit needed
    Changing this will break the layout! */}
<section className="relative w-full">
  <Image
    src="/images/website media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
    alt="Professional Phoenix Headshots"
    width={1920}
    height={1080}
    className="w-full h-auto"
    sizes="100vw"
    priority
  />
</section>
```

**Why this matters:**
- Using `fill` prop will break the layout and add gray spacing
- Using aspect ratio containers will add unwanted spacing
- Using `object-cover` or `object-contain` will crop/letterbox the image
- This setup ensures the image displays at its natural size with NO gaps

### Header Component (src/components/Header.tsx)
- **Uses `position: fixed`** (not sticky) because `overflow-x: hidden` on body prevents sticky from working
- **Shrinks on scroll** after 50px (logo changes from medium to small, padding reduces)
- **Client component** with scroll event listeners
- **Main content** has `pt-[120px]` in Layout to prevent content hiding behind fixed header
- ⚠️ DO NOT change the 120px padding - this is the exact amount needed to prevent header from covering H1

## Mobile Optimization Rules

### Desktop vs Mobile Changes
**IMPORTANT:** Mobile-only changes MUST NOT affect desktop layout. Always use responsive classes:

✅ **Correct:**
```tsx
className="w-1/2 md:w-1/4"        // Mobile: half width, Desktop: quarter width
className="flex-1 sm:flex-1"      // Only flex on small screens and up
className="text-center md:text-left"  // Centered on mobile, left on desktop
```

❌ **Incorrect:**
```tsx
className="w-1/4"                 // Affects all screen sizes
className="flex-1"                // Affects all screen sizes
```

### Component-Specific Mobile Rules

**TwoColumnSection:**
- Mobile titles always blue (#5a81b9)
- Text centered on mobile (`text-center` in mobile layout)
- Body text respects `textColor` prop (white on gray backgrounds)

**FourImageRow:**
- Shows 1 image per row on mobile (2 total images)
- Hides images 3 and 4 on mobile: `className={index >= 2 ? 'hidden md:block' : ''}`
- Desktop shows all 4 images in a row

**FAQ Section:**
- Single tap to flip cards on mobile (removed onMouseEnter/onMouseLeave handlers)
- No double-tap requirement

**Footer:**
- Contact Info and Quick Links centered on mobile: `className="text-center md:text-left"`
- Flex items centered: `className="justify-center md:justify-start"`

**Header:**
- Mobile: Logo and button stacked vertically, centered
- Desktop: Logo and button side by side

**Pricing Buttons:**
- Centered on mobile: `items-center` on container
- Only flex-grow on desktop: `sm:flex-1` instead of `flex-1`

## Current Stack Versions
- Next.js: 15.4.6
- React: 19.1.0
- TypeScript: 5.9.2
- Tailwind CSS: 4.1.0
- pnpm: 10.14.0

## Features Implemented

### SEO & Analytics
- **Google Analytics 4**: Configured via `NEXT_PUBLIC_GA_ID` environment variable
- **Sitemap**: `/public/sitemap.xml`
- **Robots.txt**: `/public/robots.txt`
- **Next-SEO**: Integrated in Layout component

### Security
- Enterprise security headers in `next.config.js`:
  - HSTS (max-age=63072000)
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection
  - Referrer-Policy
  - Permissions-Policy

### UI/UX Features
- **Shrinking sticky header** that reduces size on scroll
- **Mobile-optimized layouts** with centered content
- **Single-tap FAQ cards** for mobile
- **Responsive typography** with mobile-specific sizes
- **Fixed header** that stays at top (works with overflow-x hidden)

## Common Issues & Solutions

### Issue: Hero image has gray spacing above/below
**Cause:** Image section was modified to use aspect ratio containers or object-fit
**Solution:** Restore original hero image code (see CRITICAL section above)

### Issue: Header doesn't stick when scrolling
**Cause:** Header uses `position: sticky` which doesn't work with `overflow-x: hidden`
**Solution:** Header is already fixed with `position: fixed` - if not working, check for CSS overrides

### Issue: Mobile changes affect desktop layout
**Cause:** Non-responsive classes used (e.g., `w-full` instead of `w-full md:w-1/2`)
**Solution:** Always use responsive prefixes for mobile-specific changes

### Issue: Build cache errors
**Cause:** Stale Next.js build cache
**Solution:** Run `pnpm clean` then restart dev server

## Deployment Info

### AWS Amplify
- **Repository**: github.com/cquinn02/photography-website
- **Branch**: main
- **Build command**: `pnpm run build`
- **Port**: 3100 (local development)

### Environment Variables Required
```
NEXT_PUBLIC_GA_ID=your-ga-measurement-id
```

---
*This file serves as persistent memory for Claude Code across sessions.*
*Last Updated: October 2, 2025*