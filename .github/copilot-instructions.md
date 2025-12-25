# GitHub Copilot Instructions - Sentiero dei Sette Santi

## Project Overview

This is a website for "Sentiero dei Sette Santi" (Path of the Seven Saints), a spiritual trekking/pilgrimage route through the Marche region in Italy. The site provides comprehensive information about the 5-stage circular trail, booking options, and aims to build a community around this spiritual journey through the Sibillini Mountains.

### Project Goals
1. **Showcase the Trekking Route**: Present the 5 stages with detailed information, maps, and historical/cultural context
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

### Internationalization (i18n)
- Multi-language support configuration in `src/i18n/index.ts`
- Supported languages: Italian (it - default), English (en), German (de), French (fr), Spanish (es)
- Use `useTranslations(lang)` helper to get translated strings
- Content language: Italian by default
- URI structure: English (e.g., `/trails`, `/saints`)
- Future: language-specific routes (e.g., `/en/trails`, `/de/trails`)

```typescript
import { useTranslations, getLangFromUrl } from '../i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const title = t('hero.title');
```

## Architecture Guidelines

### Page Structure
```
src/pages/
  ├── index.astro              # Homepage
  ├── trails/                  # Trail routes (English URI)
  │   └── [slug].astro        # Dynamic route for each stage
  ├── saints/                  # Saints section (English URI)
  │   ├── index.astro         # Redirects to homepage saints section
  │   └── [slug].astro        # Individual saint pages
  ├── blog/                    # Blog section
  │   ├── index.astro         # Blog listing
  │   └── [slug].astro        # Individual blog posts
  └── community/               # Community section
      └── index.astro
```

**Pages should be thin:**
- Import and compose components
- Handle data fetching/transformation
- Pass data to components via props
- Minimal inline markup - delegate to components
- Keep business logic separate from presentation

### Component Organization
```
src/components/
  ├── HeroCarousel.astro          # Homepage carousel
  ├── MapComponent.astro           # Map integration
  ├── HeroSection.astro            # Reusable hero sections
  ├── StatsGrid.astro              # Statistics display grid
  ├── TrailCard.astro              # Trail stage cards
  ├── BlogPostCard.astro           # Blog post preview cards
  ├── PricingCard.astro            # Pricing/booking option cards
  ├── FeatureCard.astro            # Feature highlight cards
  ├── CTASection.astro             # Call-to-action sections
  ├── StageNavigation.astro        # Navigation between trail stages
  ├── AccommodationCard.astro      # Accommodation display cards
  └── HighlightsList.astro         # Bulleted list with icons
```

### Component Guidelines

**All components should:**
- Define TypeScript interfaces for Props at the top
- Be small and focused on a single responsibility
- Accept data via props rather than importing it directly
- Use composition via slots when appropriate
- Include appropriate default values for optional props

**Naming Conventions:**
- Components: PascalCase in imports (e.g., `TrailCard`)
- Files: kebab-case for filenames (e.g., `trail-card.astro`)
- Props interfaces: Named `Props` and exported
- Use descriptive prop names that clarify intent

### Data Management
```
src/data/
  ├── trails.ts                # Trail stages data
  ├── saints.ts                # Saints data
  ├── blog-posts.ts            # Blog content metadata (if needed)
  └── site-config.ts           # Site-wide configuration (if needed)

src/i18n/
  └── index.ts                 # i18n configuration and translations
```

**Data Best Practices:**
- Keep data separate from components
- Use TypeScript interfaces for all data structures
- Export helper functions alongside data (e.g., `getTrailStageBySlug`)
- Components receive data via props, never import data directly

## Available Reusable Components

### HeroSection.astro
Hero header section with gradient background. Used at the top of most pages.

**Props:**
- `title` (string, required): Main heading
- `subtitle` (string, optional): Subheading text
- `badge` (string, optional): Badge text above title
- `className` (string, optional): Additional CSS classes
- Supports `<slot>` for additional content

**Example:**
```astro
<HeroSection 
  title="Community"
  subtitle="Condividi le tue esperienze"
  badge="Tappa 1 di 5"
>
  <StatsGrid stats={stats} columns={3} />
</HeroSection>
```

### StatsGrid.astro
Grid of statistics with value and label pairs.

**Props:**
- `stats` (StatItem[], required): Array of `{ value, label }` objects
- `columns` (2 | 3 | 4, optional): Number of columns, default 3
- `className` (string, optional): Additional CSS classes

### TrailCard.astro
Card component displaying trail stage information.

**Props:**
- `id` (number, required): Stage number
- `title` (string, required): Stage title
- `subtitle` (string, required): Stage subtitle
- `distance` (string, required): Distance info
- `duration` (string, required): Duration info
- `difficulty` ('Facile' | 'Intermedio' | 'Difficile', required)
- `slug` (string, required): URL slug for the stage

### BlogPostCard.astro
Card component for blog post previews.

**Props:**
- `title` (string, required): Post title
- `description` (string, required): Post excerpt
- `date` (Date, required): Publication date
- `slug` (string, required): URL slug
- `tags` (string[], optional): Array of tags
- `image` (string, optional): Cover image URL

### PricingCard.astro
Card for pricing/booking options with features list.

**Props:**
- `icon` (string, required): Emoji icon
- `title` (string, required): Option title
- `description` (string, required): Description
- `features` (PricingFeature[], required): Array of `{ text }` objects
- `price` (string, required): Price text
- `badge` (string, optional): Badge text (e.g., "PIÙ RICHIESTO")
- `highlighted` (boolean, optional): Whether to highlight, default false

### FeatureCard.astro
Card component for feature highlights.

**Props:**
- `icon` (string, required): Emoji icon
- `title` (string, required): Feature title
- `description` (string, required): Feature description
- `className` (string, optional): Additional CSS classes

### CTASection.astro
Call-to-action section with title, description, and button.

**Props:**
- `title` (string, required): Section title
- `description` (string, required): Section description
- `buttonText` (string, required): Button text
- `buttonLink` (string, required): Button link
- `backgroundColor` ('green' | 'brown' | 'gold', optional): Background color, default 'green'

### StageNavigation.astro
Navigation between trail stages (previous/next).

**Props:**
- `previousStage` (StageLink | null, optional): `{ slug, title }` for previous stage
- `nextStage` (StageLink | null, optional): `{ slug, title }` for next stage

### AccommodationCard.astro
Card for accommodation information.

**Props:**
- `name` (string, required): Accommodation name
- `type` (string, required): Type (e.g., "Rifugio", "Hotel")
- `description` (string, required): Description
- `contact` (string, optional): Contact email

### HighlightsList.astro
Bulleted list with checkmark icons.

**Props:**
- `highlights` (string[], required): Array of items to display
- `title` (string, optional): Section title, default "Punti di Interesse"

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
- **trail-green** (`#5a8a6b`): Primary color, headers, CTAs, nature and spiritual growth
- **trail-brown** (`#5e3b20`): Secondary color from logo, accents, earthiness
- **trail-gold** (`#d4af37`): Highlights, important info, spiritual moments
- **trail-sky** (`#87a8c3`): Backgrounds, lightness, openness and hope

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
6. Check if changes affect any shared components

### Creating New Components
1. Define TypeScript interface for Props
2. Keep component focused on single responsibility
3. Accept data via props, not direct imports
4. Use slots for content composition when appropriate
5. Follow naming conventions (PascalCase import, kebab-case file)
6. Test in isolation before using in pages
7. Document props and usage in copilot-instructions.md

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

### Using Existing Components in Pages
1. Import required components at the top of the page
2. Prepare data in the frontmatter section
3. Pass data via props to components
4. Use components instead of inline HTML markup
5. Compose components with slots when needed

**Example:**
```astro
---
import HeroSection from '../components/HeroSection.astro';
import StatsGrid from '../components/StatsGrid.astro';

const stats = [
  { value: '7', label: 'Tappe' },
  { value: '~120', label: 'km Totali' }
];
---

<HeroSection title="Percorsi" subtitle="Scopri le tappe">
  <StatsGrid stats={stats} columns={2} />
</HeroSection>
```

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
