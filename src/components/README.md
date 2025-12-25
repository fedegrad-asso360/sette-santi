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

```astro
<HeroSection 
  title="Titolo Principale"
  subtitle="Sottotitolo descrittivo"
  badge="Badge opzionale"
>
  <!-- Contenuto addizionale tramite slot -->
</HeroSection>
```

#### StatsGrid.astro
Griglia di statistiche con valori e etichette.

```astro
<StatsGrid 
  stats={[
    { value: '7', label: 'Tappe' },
    { value: '120', label: 'km' }
  ]}
  columns={3}
/>
```

### Card Components

#### TrailCard.astro
Card per visualizzare informazioni su una tappa del percorso.

```astro
<TrailCard 
  id={1}
  title="San Francesco d'Assisi"
  subtitle="Da Assisi a Gubbio"
  distance="25 km"
  duration="6-7 ore"
  difficulty="Intermedio"
  slug="san-francesco-assisi"
/>
```

#### BlogPostCard.astro
Card per anteprima di articoli del blog.

```astro
<BlogPostCard 
  title="Titolo Articolo"
  description="Breve descrizione..."
  date={new Date()}
  slug="titolo-articolo"
  tags={['trekking', 'spiritualità']}
  image="/images/post.jpg"
/>
```

#### PricingCard.astro
Card per opzioni di prezzo/prenotazione.

```astro
<PricingCard 
  icon="🎒"
  title="Cammino Individuale"
  description="Descrizione dell'opzione..."
  features={[
    { text: 'Mappe GPS' },
    { text: 'Supporto telefonico' }
  ]}
  price="Da €299"
  badge="PIÙ RICHIESTO"
  highlighted={true}
/>
```

#### FeatureCard.astro
Card per evidenziare caratteristiche o servizi.

```astro
<FeatureCard 
  icon="💬"
  title="Condividi Esperienze"
  description="Racconta la tua esperienza..."
/>
```

#### AccommodationCard.astro
Card per informazioni su alloggi.

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

#### StageNavigation.astro
Navigazione tra tappe precedente/successiva.

```astro
<StageNavigation 
  previousStage={{ slug: 'tappa-1', title: 'Prima Tappa' }}
  nextStage={{ slug: 'tappa-3', title: 'Terza Tappa' }}
/>
```

### Sezioni Complete

#### CTASection.astro
Sezione call-to-action con titolo, descrizione e pulsante.

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

#### HeroCarousel.astro
Carosello hero per la homepage con immagini e call-to-action.

```astro
<HeroCarousel />
```

#### MapComponent.astro
Componente per visualizzare mappe interattive.

```astro
<MapComponent 
  height="500px"
  center={[43.075, 12.608]}
  zoom={12}
  gpxUrl="/gpx/percorso.gpx"
/>
```

## Convenzioni di Naming

- **File**: kebab-case (es. `trail-card.astro`)
- **Import**: PascalCase (es. `import TrailCard from './TrailCard.astro'`)
- **Props Interface**: Sempre chiamata `Props` ed esportata
- **Props**: camelCase (es. `backgroundColor`, `buttonText`)

## Aggiungere Nuovi Componenti

1. Crea il file in `src/components/` con nome kebab-case
2. Definisci l'interfaccia `Props` in cima al file
3. Esporta l'interfaccia con `export interface Props {}`
4. Usa TypeScript per tutti i tipi
5. Aggiungi valori di default appropriati
6. Documenta il componente in questo README
7. Aggiungi il componente a `.github/copilot-instructions.md`

## Esempio Completo

```astro
---
// src/components/esempio-card.astro

export interface Props {
  title: string;                    // Required
  description?: string | undefined; // Optional con undefined esplicito
  active?: boolean | undefined;     // Optional boolean
  className?: string | undefined;   // Optional CSS classes
}

const { 
  title, 
  description, 
  active = false,                   // Default value
  className = "" 
} = Astro.props;
---

<div class={`card ${active ? 'active' : ''} ${className}`}>
  <h3>{title}</h3>
  {description && <p>{description}</p>}
  <slot />
</div>

<style>
  .card {
    /* Component styles */
  }
</style>
```

## Test e Verifica

Prima di committare nuovi componenti:

1. Verifica che non ci siano errori TypeScript
2. Testa il componente in almeno una pagina
3. Controlla la responsività su diversi breakpoint
4. Verifica l'accessibilità (contrast, ARIA labels)
5. Assicurati che segua il design system del progetto

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
- `.github/copilot-instructions.md` per le linee guida complete
- Gli esempi nelle pagine esistenti in `src/pages/`
- La documentazione di Astro: https://docs.astro.build
