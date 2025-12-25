# GitHub Copilot Instructions - Sentiero dei Sette Santi

## Project Overview

This is a website for "Sentiero dei Sette Santi" (Path of the Seven Saints), a spiritual trekking/pilgrimage route through Italy. The site provides comprehensive information about the trail, booking options, and aims to build a community around this spiritual journey.

### Project Goals
1. **Showcase the Trekking Route**: Present the 7 stages with detailed information, maps, and historical/cultural context
2. **Enable Bookings**: Allow users to reserve organized tours (individual, group, premium experiences)
3. **Content Publishing**: Blog section for news, events, and trekking-related content
4. **Community Building**: User engagement through comments, reviews, and social features
5. **Technical Excellence**: Fast, accessible, SEO-friendly, and maintainable codebase

## Technology Stack

- **Framework**: Astro 5.x (content-focused, static-first)
- **Styling**: Tailwind CSS 3.x (utility-first CSS)
- **Language**: TypeScript (for type safety)
- **Deployment**: Static site generation (SSG)

## Coding Conventions

### File Naming
- Use **kebab-case** for files: `trail-details.astro`, `user-comments.ts`
- Astro components: PascalCase in imports, but kebab-case filenames acceptable
- TypeScript/Data files: camelCase for exports, kebab-case for filenames

### Astro Components
- Use `.astro` files for UI components
- Define TypeScript interfaces for Props at the top of the component
- Keep components small and focused on a single responsibility
- Use Astro's built-in features (layouts, slots, props) over complex patterns

**Example:**
```astro
---
export interface Props {
  title: string;
  description?: string;
}

const { title, description = "Default description" } = Astro.props;
---

<div class="component">
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</div>
```

### TypeScript
- Always define interfaces for data structures
- Use strong typing, avoid `any`
- Export types alongside implementations
- Use optional properties (`?`) when appropriate

**Example:**
```typescript
export interface TrailStage {
  id: number;
  slug: string;
  title: string;
  difficulty: 'Facile' | 'Intermedio' | 'Difficile';
  coordinates: [number, number];
  highlights: string[];
}
```

### Tailwind CSS
- Use the custom theme colors: `trail-green`, `trail-brown`, `trail-gold`, `trail-sky`
- Prefer Tailwind utilities over custom CSS
- Use responsive prefixes: `md:`, `lg:` for responsive design
- Group related utilities logically

**Example:**
```html
<div class="bg-trail-green text-white px-4 py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
```

### Content Structure
- Store structured data in `src/data/` as TypeScript files
- Use Astro Content Collections for blog posts and dynamic content
- Keep data separate from presentation logic
- Follow the existing pattern in `src/data/trails.ts`

## Architecture Guidelines

### Page Structure
```
src/pages/
  ├── index.astro              # Homepage
  ├── percorsi/                # Trail routes
  │   └── [slug].astro        # Dynamic route for each stage
  ├── blog/                    # Blog section (to be added)
  │   ├── index.astro         # Blog listing
  │   └── [slug].astro        # Individual blog posts
  └── community/               # Community section (to be added)
      └── index.astro
```

### Component Organization
```
src/components/
  ├── MapComponent.astro       # Map integration
  ├── TrailCard.astro          # Trail stage cards
  ├── BlogPost.astro           # Blog post component
  └── CommentSection.astro     # User comments
```

### Data Management
```
src/data/
  ├── trails.ts                # Trail stages data
  ├── blog-posts.ts            # Blog content metadata
  └── site-config.ts           # Site-wide configuration
```

## Feature-Specific Guidelines

### Trail/Stage Pages
- Each stage must have: title, description, distance, duration, difficulty, elevation, highlights, coordinates, accommodation
- Use the `TrailStage` interface from `src/data/trails.ts`
- Include navigation to previous/next stages
- Support GPX file downloads
- Display interactive maps (currently placeholder, will use Leaflet/Mapbox)

### Blog Section
- Use Astro Content Collections for blog posts
- Include: title, date, author, excerpt, tags, cover image
- Support markdown/MDX for rich content
- Implement pagination for blog listing
- Add RSS feed generation

### Community/Comments
- Design for future authentication integration
- Support nested replies (threading)
- Include moderation capabilities
- Consider integration with third-party services (Disqus, Commento, etc.) or custom solution

### Booking System
- Currently displays pricing tiers (Individual, Group, Premium)
- Future: integrate with booking API/service
- Collect: name, email, phone, preferred dates, group size, special requests
- Send confirmation emails

## Design Principles

### Color Usage
- **trail-green** (`#2d5016`): Primary color, headers, CTAs, nature theme
- **trail-brown** (`#8b4513`): Secondary color, accents, earthiness
- **trail-gold** (`#d4af37`): Highlights, important info, spiritual theme
- **trail-sky** (`#87ceeb`): Backgrounds, lightness, openness

### Typography
- Use Inter font family (already loaded)
- Headings: Bold, hierarchical (text-4xl, text-3xl, text-2xl)
- Body: text-lg or text-base, good line-height for readability
- Maintain consistent spacing

### Accessibility
- Use semantic HTML elements
- Include proper ARIA labels where needed
- Ensure good color contrast (WCAG AA minimum)
- Support keyboard navigation
- Provide alt text for all images

### Performance
- Optimize images (use Astro's Image component when adding images)
- Lazy load images below the fold
- Minimize JavaScript usage (leverage Astro's zero-JS approach)
- Use static generation where possible

## Content Guidelines

### Italian Language
- Primary language is Italian (it-IT)
- Use formal/respectful tone for spiritual content
- Be descriptive and evocative for trail descriptions
- Use clear, concise language for technical information

### Spiritual Respect
- Treat religious content with respect and sensitivity
- Acknowledge the sacred nature of pilgrimage sites
- Balance spiritual and practical information
- Be inclusive and welcoming to all faiths

### Trail Information
- Always include safety information
- Provide accurate technical details (distance, elevation, difficulty)
- Mention seasonal considerations
- Include emergency contacts where relevant

## Development Workflow

### Adding a New Feature
1. Check if existing components/patterns can be reused
2. Create TypeScript interfaces for new data structures
3. Build component in isolation first
4. Test responsive behavior (mobile, tablet, desktop)
5. Ensure accessibility compliance
6. Update relevant documentation

### Modifying Existing Features
1. Understand the current implementation fully
2. Make minimal, surgical changes
3. Test that existing functionality still works
4. Update TypeScript interfaces if data structure changes
5. Keep backwards compatibility where possible

### Testing
- Manually test all new features in development mode
- Check responsive design at different breakpoints
- Test navigation and links
- Verify forms and interactive elements
- Build and preview production build before deploying

## Common Tasks

### Adding a New Trail Stage
1. Add entry to `trailStages` array in `src/data/trails.ts`
2. Follow the `TrailStage` interface exactly
3. Ensure slug is unique and URL-friendly
4. Provide complete information (description, highlights, accommodation)
5. Page will be automatically generated via `[slug].astro`

### Creating a Blog Post
1. Create markdown file in content collection (when implemented)
2. Include frontmatter: title, date, author, excerpt, tags
3. Write content in markdown
4. Add cover image to public/images/blog/
5. Will be automatically listed on blog index

### Styling a New Component
1. Use Tailwind utilities first
2. Follow the color scheme (trail-green, trail-brown, trail-gold, trail-sky)
3. Make it responsive (use md:, lg: prefixes)
4. Add hover states for interactive elements
5. Ensure consistent spacing with other components

## Maintenance Notes

### Dependencies
- Keep Astro updated to latest stable version
- Update Tailwind CSS cautiously (check for breaking changes)
- Pin major versions, allow minor/patch updates
- Test thoroughly after dependency updates

### Performance Monitoring
- Keep build times reasonable (currently fast due to static generation)
- Monitor bundle sizes if adding client-side JavaScript
- Optimize images before committing to repository
- Use Astro's built-in optimization features

### SEO Considerations
- Include meta descriptions for all pages
- Use proper heading hierarchy (h1, h2, h3)
- Generate sitemap.xml (Astro can do this)
- Add structured data for trail/event pages (schema.org)
- Implement Open Graph tags for social sharing

## Future Considerations

### Planned Features
- **Maps**: Integrate Leaflet or Mapbox for interactive maps
- **Authentication**: User accounts for community features
- **Multi-language**: Support EN, DE, FR, ES beyond IT
- **Progressive Web App**: Offline access to trail information
- **Mobile App**: Companion app for on-trail navigation

### Scalability
- Design data structures to support additional trails/routes
- Keep components generic and reusable
- Plan for increased content volume (more blog posts, user comments)
- Consider CMS integration for non-technical content editors

### Integration Points
- Payment gateway for booking system
- Email service for notifications
- Analytics for tracking user behavior
- Social media API for sharing features
- Weather API for trail conditions

## Questions to Ask When Making Changes

1. **Does this maintain the spiritual and respectful tone of the site?**
2. **Is this accessible to users with disabilities?**
3. **Will this work well on mobile devices?**
4. **Does this follow the existing code patterns?**
5. **Is this the minimal change needed to achieve the goal?**
6. **Have I tested this in both development and production builds?**
7. **Does this maintain or improve site performance?**
8. **Is the TypeScript typing complete and accurate?**

## Getting Help

- Check Astro documentation: https://docs.astro.build
- Review Tailwind CSS docs: https://tailwindcss.com/docs
- Refer to existing components in `src/components/` for patterns
- Look at `src/data/trails.ts` for data structure examples
- Test changes in development mode before committing

---

**Remember**: This is a spiritual project. Approach it with care, respect, and attention to detail. Every feature should serve the pilgrim's journey, both physical and spiritual.
