# Internationalization (i18n) Setup

This directory contains the internationalization configuration for the Sentiero dei Sette Santi website.

## Supported Languages

- **Italian (it)** - Default language
- **English (en)**
- **German (de)**
- **French (fr)**
- **Spanish (es)**

## Structure

### `index.ts`

Main i18n configuration file containing:

- **languages**: Object mapping language codes to their native names
- **defaultLang**: Default language (Italian)
- **getLangFromUrl()**: Helper to extract language from URL
- **useTranslations()**: Helper to retrieve translated strings
- **translations**: Translation dictionaries for all supported languages

## Usage

### In Astro Components

```astro
---
import { useTranslations, getLangFromUrl } from '../i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('hero.title')}</h1>
<p>{t('hero.subtitle')}</p>
```

### Translation Keys

Translation keys are organized by section:

- **Navigation**: `nav.*` (home, trails, saints, blog, community, booking)
- **Homepage**: `hero.*`, `intro.*`, `stats.*`, `trails.*`, `saints.*`, `booking.*`
- **Trail Details**: `trail.*` (difficulty, distance, duration, etc.)
- **Common**: `common.*` (readMore, backToList, etc.)

### Adding New Translations

To add a new translation key:

1. Add the key-value pair to all language objects in the `translations` object
2. Use the key in your component via `t('your.key')`

Example:

```typescript
export const translations = {
  it: {
    // ... existing translations
    'newSection.title': 'Nuovo Titolo',
  },
  en: {
    // ... existing translations
    'newSection.title': 'New Title',
  },
  // ... other languages
};
```

## Current Implementation

Currently, the site uses:
- **English URIs**: `/trails`, `/saints`, `#trails`, `#saints`, `#booking`
- **Italian content**: All text content is in Italian by default
- **Future**: Language-specific routes (e.g., `/en/trails`, `/de/trails`)

## Roadmap

- [ ] Implement language switcher in navigation
- [ ] Add language-specific routes (`/[lang]/...`)
- [ ] Translate data content (trail descriptions, saint histories)
- [ ] Add language detection based on browser preferences
- [ ] Generate language-specific sitemaps
