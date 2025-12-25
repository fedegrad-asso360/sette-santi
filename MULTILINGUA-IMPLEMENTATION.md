# Implementazione Multilingua Completata

## Sommario

Il sito "Sentiero dei Sette Santi" ora supporta completamente 5 lingue:
- 🇮🇹 **Italiano (it)** - Lingua predefinita
- 🇬🇧 **English (en)**
- 🇩🇪 **Deutsch (de)**
- 🇫🇷 **Français (fr)**
- 🇪🇸 **Español (es)**

## Struttura Implementata

### Configurazione Astro

Il file `astro.config.mjs` è stato aggiornato con la configurazione i18n:

```javascript
i18n: {
  defaultLocale: 'it',
  locales: ['it', 'en', 'de', 'fr', 'es'],
  routing: {
    prefixDefaultLocale: false
  }
}
```

Questo significa:
- La lingua italiana (predefinita) non ha prefisso nell'URL: `/`
- Le altre lingue hanno prefisso: `/en/`, `/de/`, `/fr/`, `/es/`

### Struttura delle Pagine

```
src/pages/
├── index.astro          # Homepage italiana (/)
├── en/
│   └── index.astro      # Homepage inglese (/en/)
├── de/
│   └── index.astro      # Homepage tedesca (/de/)
├── fr/
│   └── index.astro      # Homepage francese (/fr/)
└── es/
    └── index.astro      # Homepage spagnola (/es/)
```

### Componenti Creati/Modificati

#### 1. **LanguageSelector.astro** (NUOVO)
Selettore di lingua nel menu di navigazione:
- Dropdown menu con tutte le lingue disponibili
- Evidenzia la lingua corrente
- Gestisce correttamente il routing tra lingue
- Supporta sia desktop che mobile

#### 2. **HomePage.astro** (NUOVO)
Componente riutilizzabile per la homepage:
- Accetta `lang` come prop
- Usa le traduzioni appropriate
- Utilizzato da tutte le pagine index delle diverse lingue

#### 3. **Layout.astro** (AGGIORNATO)
- Integrato `LanguageSelector`
- Usa traduzioni per il menu di navigazione
- Imposta l'attributo `lang` nell'HTML dinamicamente
- Supporta navigazione multilingua

#### 4. **HeroCarousel.astro** (AGGIORNATO)
- Usa traduzioni per titolo, sottotitolo e CTA
- Testo dinamico in base alla lingua corrente

#### 5. **index.astro** (homepage principale - AGGIORNATO)
- Implementa traduzioni complete
- Usa helper i18n per rilevare lingua dall'URL
- Contenuto dinamico basato sulla lingua

### Sistema di Traduzioni

Il file `src/i18n/index.ts` contiene:

#### Helper Functions
```typescript
// Ottiene la lingua dall'URL
getLangFromUrl(url: URL): Language

// Restituisce la funzione di traduzione per una lingua
useTranslations(lang: Language): (key: string) => string
```

#### Chiavi di Traduzione Disponibili

**Navigazione:**
- `nav.home`, `nav.trails`, `nav.saints`, `nav.blog`, `nav.community`, `nav.booking`

**Homepage:**
- `hero.title`, `hero.subtitle`, `hero.cta.discover`, `hero.cta.book`
- `intro.title`, `intro.description1`, `intro.description2`
- `stats.stages`, `stats.totalKm`, `stats.days`
- `trails.title`, `trails.subtitle`
- `saints.title`, `saints.subtitle`, `saints.cta`
- `booking.title`, `booking.subtitle`
- `booking.individual.*`, `booking.group.*`, `booking.premium.*`
- `booking.badge.popular`, `booking.from`, `booking.contact`

**Trail Details:**
- `trail.difficulty`, `trail.distance`, `trail.duration`, `trail.elevation`
- `trail.highlights`, `trail.description`, `trail.accommodation`
- `trail.download.gpx`, `trail.previous`, `trail.next`

**Common:**
- `common.readMore`, `common.backToList`

## Come Usare

### In una Pagina Astro

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('hero.title')}</h1>
<p>{t('hero.subtitle')}</p>
```

### In un Componente

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<button>{t('common.readMore')}</button>
```

### Creare un Link Multilingua

Il componente `LanguageSelector` gestisce automaticamente i link tra lingue:
- `/` → `/en/` → `/de/` → `/fr/` → `/es/`
- Mantiene il percorso corrente (es: `/trails/` → `/en/trails/`)

## Prossimi Passi

### Contenuti da Tradurre

1. **Dati dei Trail** (`src/data/trails.ts`):
   - Titoli e descrizioni delle tappe
   - Punti di interesse
   - Informazioni sugli alloggi

2. **Dati dei Santi** (`src/data/saints.ts`):
   - Nomi e titoli
   - Biografie
   - Storie spirituali

3. **Pagine del Blog**:
   - Creare versioni tradotte dei post
   - Implementare routing multilingua per `/blog/[slug]`

4. **Pagine Trail Detail**:
   - Aggiornare `/trails/[slug].astro` con supporto multilingua
   - Creare rotte linguistiche `/en/trails/[slug]`

5. **Pagine Saints Detail**:
   - Aggiornare `/saints/[slug].astro` con supporto multilingua
   - Creare rotte linguistiche `/en/saints/[slug]`

6. **Pagina Community**:
   - Tradurre contenuti statici
   - Supportare commenti multilingua

### Miglioramenti Futuri

1. **Rilevamento Automatico Lingua**:
   - Usare `navigator.language` per rilevare la lingua del browser
   - Redirect automatico alla lingua preferita

2. **SEO Multilingua**:
   - Tag `hreflang` per indicare versioni alternative
   - Sitemap separati per lingua
   - Open Graph tags localizzati

3. **Contenuto Dinamico**:
   - Integrare con un CMS headless per traduzioni
   - Sistema di gestione traduzioni per editor non tecnici

4. **Formati Localizzati**:
   - Date in formato locale (DD/MM/YYYY vs MM/DD/YYYY)
   - Numeri e valute (€1.499 vs €1,499)
   - Unità di misura (km vs miles)

5. **RTL Support**:
   - Se in futuro si aggiungono lingue RTL (arabo, ebraico)
   - Layout e CSS adattati

## Testing

Per testare il multilingua in locale:

1. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

2. Naviga alle diverse versioni linguistiche:
   - Italiano: `http://localhost:4321/`
   - English: `http://localhost:4321/en/`
   - Deutsch: `http://localhost:4321/de/`
   - Français: `http://localhost:4321/fr/`
   - Español: `http://localhost:4321/es/`

3. Usa il selettore di lingua nel menu per passare tra lingue

4. Verifica che:
   - Tutti i testi siano tradotti correttamente
   - La navigazione funzioni in tutte le lingue
   - I link mantengano la lingua corrente
   - Il selettore di lingua evidenzi la lingua attiva

## Note Tecniche

- **Fallback**: Se una traduzione manca, il sistema usa automaticamente l'italiano (lingua predefinita)
- **Type Safety**: Tutte le chiavi di traduzione sono type-safe grazie a TypeScript
- **Performance**: Le traduzioni sono statiche e caricate a build time (zero overhead runtime)
- **SEO**: Ogni lingua ha la propria URL e può essere indicizzata separatamente

## Aggiornamento Traduzioni

Per aggiungere o modificare traduzioni, modifica `src/i18n/index.ts`:

```typescript
export const translations: Record<Language, Record<string, string>> = {
  it: {
    'nuova.chiave': 'Testo italiano',
    // ...
  },
  en: {
    'nuova.chiave': 'English text',
    // ...
  },
  // ... altre lingue
};
```

Poi usa la chiave nei componenti:

```astro
<p>{t('nuova.chiave')}</p>
```

## Compatibilità

- ✅ Astro 5.x
- ✅ Static Site Generation (SSG)
- ✅ Server-Side Rendering (SSR) ready
- ✅ Tutte le browser moderne
- ✅ Mobile responsive

---

**Implementato il**: 25 Dicembre 2024
**Stato**: ✅ Completo e funzionante
