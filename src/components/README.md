# Componenti Riutilizzabili

Questa directory contiene tutti i componenti UI riutilizzabili del progetto Sentiero dei Sette Santi.

## Principi Generali

Tutti i componenti seguono queste best practices:

1. **Props TypeScript**: Ogni componente definisce un'interfaccia `Props` esportata con tipi forti
2. **Single Responsibility**: Ogni componente ha una singola responsabilità ben definita
3. **Props over Imports**: I dati vengono passati tramite props, non importati direttamente
4. **Composizione**: Uso di `<slot>` per permettere la composizione di contenuto
5. **Defaults**: Valori di default appropriati per props opzionali

## Componenti Disponibili

### Layout e Struttura

#### HeroSection.astro
Sezione hero con gradiente di sfondo per intestazioni delle pagine.

**Props:**
- `title` (string, required): Titolo principale
- `subtitle` (string, optional): Sottotitolo
- `badge` (string, optional): Badge sopra il titolo
- `className` (string, optional): Classi CSS aggiuntive
- Supporta `<slot>` per contenuto addizionale

```astro
<HeroSection 
  title="Titolo Principale"
  subtitle="Sottotitolo descrittivo"
  badge="Badge opzionale"
>
  <!-- Contenuto addizionale tramite slot -->
</HeroSection>
```

#### HeroCarousel.astro
Carosello hero per la homepage con immagini e overlay di testo.

**Props:**
- `images` (string[], optional): Array di URL immagini (default: placeholders)

```astro
<HeroCarousel images={['/img1.jpg', '/img2.jpg']} />
```

#### StatsGrid.astro
Griglia di statistiche con valori e etichette.

**Props:**
- `stats` (StatItem[], required): Array di `{ value, label }`
- `columns` (2 | 3 | 4, optional): Numero di colonne, default 3
- `className` (string, optional): Classi CSS aggiuntive

```astro
<StatsGrid 
  stats={[
    { value: '7', label: 'Tappe' },
    { value: '120', label: 'km' }
  ]}
  columns={3}
/>
```

### Sezioni Homepage

#### IntroSection.astro
Sezione introduttiva della homepage con statistiche e mappa.

**Props:**
- `lang` (Language, required): Lingua corrente per le traduzioni

```astro
<IntroSection lang="it" />
```

#### TrailsSection.astro
Sezione delle tappe del percorso.

**Props:**
- `lang` (Language, required): Lingua corrente per le traduzioni

```astro
<TrailsSection lang="it" />
```

#### SaintsSection.astro
Sezione dei sette santi.

**Props:**
- `lang` (Language, required): Lingua corrente per le traduzioni

```astro
<SaintsSection lang="it" />
```

#### BookingSection.astro
Sezione prenotazioni con pricing cards.

**Props:**
- `lang` (Language, required): Lingua corrente per le traduzioni

```astro
<BookingSection lang="it" />
```

### Card Components

#### TrailCard.astro
Card per visualizzare informazioni su una tappa del percorso.

**Props:**
- `id` (number, required): Numero tappa
- `title` (string, required): Titolo tappa
- `subtitle` (string, required): Sottotitolo
- `distance` (string, required): Distanza (es. "15 km")
- `duration` (string, required): Durata (es. "4-5 ore")
- `difficulty` ('Facile' | 'Intermedio' | 'Difficile', required)
- `slug` (string, required): Slug URL
- `image` (string, optional): URL immagine

```astro
<TrailCard 
  id={1}
  title="Da San Ruffino a Rubbiano"
  subtitle="L'inizio del cammino"
  distance="15 km"
  duration="5-6 ore"
  difficulty="Intermedio"
  slug="san-ruffino-rubbiano"
/>
```

#### SaintCard.astro
Card per visualizzare informazioni su uno dei Sette Santi.

**Props:**
- `id` (number, required): Numero progressivo del santo
- `name` (string, required): Nome del santo
- `subtitle` (string, required): Sottotitolo descrittivo
- `description` (string, required): Breve descrizione
- `slug` (string, required): Slug per URL
- `festivity` (string, optional): Data della festività
- `image` (string, optional): URL dell'immagine

```astro
<SaintCard 
  id={1}
  name="San Ruffino"
  subtitle="Il Vescovo Martire"
  description="San Ruffino, vescovo e martire..."
  slug="san-ruffino"
  festivity="18 agosto"
  image="/images/san-ruffino.jpg"
/>
```

#### BlogPostCard.astro
Card per anteprima di articoli del blog.

**Props:**
- `title` (string, required): Titolo articolo
- `description` (string, required): Descrizione breve
- `date` (Date, required): Data pubblicazione
- `slug` (string, required): Slug URL
- `tags` (string[], optional): Array di tag
- `image` (string, optional): URL immagine copertina

```astro
<BlogPostCard 
  title="Preparazione Fisica"
  description="Come prepararsi al meglio..."
  date={new Date()}
  slug="preparazione-fisica"
  tags={['trekking', 'consigli']}
/>
```

#### PricingCard.astro
Card per opzioni di prezzo/prenotazione.

**Props:**
- `icon` (string, required): Emoji icon
- `title` (string, required): Titolo opzione
- `description` (string, required): Descrizione
- `features` (PricingFeature[], required): Array di `{ text }`
- `price` (string, required): Prezzo formattato
- `badge` (string, optional): Badge testo (es. "PIÙ RICHIESTO")
- `highlighted` (boolean, optional): Se evidenziare, default false

```astro
<PricingCard 
  icon="🎒"
  title="Cammino Individuale"
  description="Percorso in autonomia..."
  features={[
    { text: 'Mappe GPS' },
    { text: 'Supporto telefonico' }
  ]}
  price="Da €299"
  highlighted={false}
/>
```

#### FeatureCard.astro
Card per evidenziare caratteristiche o servizi.

**Props:**
- `icon` (string, required): Emoji icon
- `title` (string, required): Titolo feature
- `description` (string, required): Descrizione
- `className` (string, optional): Classi CSS aggiuntive

```astro
<FeatureCard 
  icon="💬"
  title="Condividi Esperienze"
  description="Racconta la tua esperienza..."
/>
```

#### AccommodationCard.astro
Card per informazioni su alloggi.

**Props:**
- `name` (string, required): Nome struttura
- `type` (string, required): Tipo (es. "Rifugio", "Hotel")
- `description` (string, required): Descrizione
- `contact` (string, optional): Email contatto

```astro
<AccommodationCard 
  name="Rifugio Monte Bianco"
  type="Rifugio"
  description="Rifugio panoramico..."
  contact="info@rifugio.it"
/>
```

### Liste e Navigazione

#### HighlightsList.astro
Lista puntata con icone checkmark.

**Props:**
- `highlights` (string[], required): Array di elementi
- `title` (string, optional): Titolo sezione, default "Punti di Interesse"

```astro
<HighlightsList 
  highlights={[
    'Basilica di San Francesco',
    'Centro storico di Assisi',
    'Eremo delle Carceri'
  ]}
  title="Punti di Interesse"
/>
```

#### ItemNavigation.astro
Navigazione generica tra elementi precedente/successivo (tappe, santi, articoli).

**Props:**
- `previous` (NavigationLink | null, optional): `{ slug, title }` elemento precedente
- `next` (NavigationLink | null, optional): `{ slug, title }` elemento successivo
- `basePath` (string, required): Path base (es. "/trails", "/saints")
- `previousLabel` (string, optional): Label per precedente, default "Precedente"
- `nextLabel` (string, optional): Label per successivo, default "Successivo"

```astro
<ItemNavigation 
  previous={{ slug: 'tappa-1', title: 'Prima Tappa' }}
  next={{ slug: 'tappa-3', title: 'Terza Tappa' }}
  basePath="/trails"
/>
```

### Sezioni Complete

#### CTASection.astro
Sezione call-to-action con titolo, descrizione e pulsante.

**Props:**
- `title` (string, required): Titolo
- `description` (string, required): Descrizione
- `buttonText` (string, required): Testo pulsante
- `buttonLink` (string, required): Link pulsante
- `backgroundColor` ('green' | 'brown' | 'gold', optional): Colore sfondo, default 'green'

```astro
<CTASection 
  title="Inizia il Tuo Cammino"
  description="Prenota oggi la tua esperienza..."
  buttonText="Prenota Ora"
  buttonLink="/prenota"
  backgroundColor="green"
/>
```

### Componenti Speciali

#### MapComponent.astro
Componente per visualizzare mappe interattive.

**Props:**
- `height` (string, optional): Altezza mappa, default "400px"
- `center` ([number, number], required): Coordinate centro [lat, lng]
- `zoom` (number, optional): Livello zoom, default 12
- `gpxUrl` (string, optional): URL file GPX da visualizzare
- `markers` (Marker[], optional): Array di marker personalizzati
- `showDirections` (boolean, optional): Mostra direzioni, default false
- `circles` (Circle[], optional): Array di cerchi da disegnare

```astro
<MapComponent 
  height="500px"
  center={[43.075, 12.608]}
  zoom={12}
  gpxUrl="/gpx/percorso.gpx"
/>
```

#### LanguageSelector.astro
Selettore lingua (componente futuro per cambio lingua).

## Convenzioni di Naming

- **File**: kebab-case (es. `trail-card.astro`)
- **Import**: PascalCase (es. `import TrailCard from './TrailCard.astro'`)
- **Props Interface**: Sempre chiamata `Props` ed esportata
- **Props**: camelCase (es. `backgroundColor`, `buttonText`)

## Struttura Tipica di un Componente

```astro
---
export interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Default description' } = Astro.props;
---

<div class="component">
  <h1>{title}</h1>
  {description && <p>{description}</p>}
  <slot />
</div>
```

## Aggiungere Nuovi Componenti

1. Crea il file in `src/components/` con nome kebab-case
2. Definisci l'interfaccia `Props` in cima al file
3. Esporta l'interfaccia con `export interface Props {}`
4. Usa TypeScript per tutti i tipi
5. Aggiungi valori di default appropriati
6. Documenta il componente in questo README
7. Aggiungi il componente a `.github/copilot-instructions.md`

## Componenti Rimossi/Deprecati

- ~~**HomePage.astro**~~ - Rimosso: sostituito da sezioni modulari (IntroSection, TrailsSection, SaintsSection, BookingSection)
- ~~**StageNavigation.astro**~~ - Rimosso: sostituito da ItemNavigation.astro più generico

## Best Practices

1. **Sempre definire Props TypeScript** con `export interface Props`
2. **Usare valori di default** per props opzionali
3. **Preferire composizione** tramite `<slot>` quando appropriato
4. **Non importare dati** direttamente - passarli tramite props
5. **Mantenere componenti piccoli** e focalizzati su una singola responsabilità
6. **Utilizzare i18n** per testi nelle sezioni tramite prop `lang`
7. **Documentare ogni nuovo componente** in questo README

<div class={`card ${active ? 'active' : ''} ${className}`}>
## Best Practices

1. **Sempre definire Props TypeScript** con `export interface Props`
2. **Usare valori di default** per props opzionali
3. **Preferire composizione** tramite `<slot>` quando appropriato
4. **Non importare dati** direttamente - passarli tramite props
5. **Mantenere componenti piccoli** e focalizzati su una singola responsabilità
6. **Utilizzare i18n** per testi nelle sezioni tramite prop `lang`
7. **Documentare ogni nuovo componente** in questo README

## Riuso e Composizione

I componenti sono progettati per essere composti insieme:

```astro
<HeroSection title="Percorsi">
  <StatsGrid stats={stats} />
</HeroSection>

<section class="py-16">
  <div class="grid md:grid-cols-3 gap-8">
    {stages.map(stage => (
      <TrailCard {...stage} />
    ))}
  </div>
</section>

<CTASection 
  title="Prenota Ora"
  description="Inizia il tuo viaggio..."
  buttonText="Prenota"
  buttonLink="/prenota"
/>
```

## Supporto

Per domande o suggerimenti sui componenti, consulta:
- `.github/copilot-instructions.md` per le linee guida complete del progetto
- Gli esempi nelle pagine esistenti in `src/pages/`
- La documentazione di Astro: https://docs.astro.build
