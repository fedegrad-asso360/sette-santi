# Mappa Interattiva Homepage - Sentiero dei Sette Santi

## Implementazione Completata

### Descrizione
Aggiunta una mappa interattiva nella homepage che mostra i punti di partenza delle tappe del percorso, permettendo agli utenti di ottenere indicazioni stradali verso ogni punto.

### Modifiche Effettuate

#### 1. MapComponent.astro
- **Sostituito il placeholder** con una **mappa interattiva Leaflet**
- Integrazione con **OpenStreetMap** per le tile
- Supporto per **marker personalizzati** (verde per punti di partenza)
- **Popup interattivi** con link a Google Maps per indicazioni stradali
- Auto-zoom per visualizzare tutti i marker quando presenti

**Nuove Props:**
- `markers`: array di marker con coordinate, nome, descrizione, tipo
- `showDirections`: boolean per mostrare/nascondere link indicazioni stradali

#### 2. trails.ts (Data)
- Aggiunto campo **`startPoint: string`** all'interfaccia `TrailStage`
- Tutti i 5 stage ora hanno il campo startPoint:
  - Tappa 1: "San Ruffino (Amandola)"
  - Tappa 2: "Rubbiano (Montefortino)"
  - Tappa 3: "Rubbiano (Montefortino)"
  - Tappa 4: "Madonna Ambro (Montefortino)"
  - Tappa 5: "Amandola"

- Aggiunta **funzione helper** `getUniqueStartPoints()`:
  - Restituisce i punti di partenza unici con le loro coordinate
  - Elimina i duplicati automaticamente (es. Rubbiano appare solo una volta)

#### 3. HomePage.astro
- **Sostituita la sezione intro** con una nuova sezione "Dove Siamo"
- Mappa interattiva con i **4 punti di partenza unici**:
  1. San Ruffino (Amandola) - [43.0719, 13.2186]
  2. Rubbiano (Montefortino) - [42.9864, 13.2700]
  3. Madonna Ambro (Montefortino) - [42.9936, 13.2947]
  4. Amandola - [42.9764, 13.3568]

- **Box informativo** sotto la mappa con:
  - Suggerimento su come ottenere indicazioni
  - Lista dei punti di partenza con icone

#### 4. i18n/index.ts
Aggiunte traduzioni per la sezione "Dove Siamo" in **5 lingue**:

**Italiano:**
- `whereWeAre.title`: "Dove Siamo"
- `whereWeAre.description`: "Il percorso si snoda attraverso i Monti Sibillini nelle Marche..."
- `whereWeAre.tip`: "Suggerimento"
- `whereWeAre.tipText`: "Clicca su un marker nella mappa per ottenere le indicazioni stradali..."

**Inglese, Tedesco, Francese, Spagnolo**: traduzioni equivalenti

### Funzionalità

1. **Mappa Interattiva**
   - Visualizzazione geografica della zona del percorso
   - Marker verdi per i punti di partenza
   - Zoom e pan per esplorare l'area
   - Centro automatico su [42.9864, 13.2700] (zona centrale del percorso)

2. **Indicazioni Stradali**
   - Click sul marker → popup con nome e descrizione
   - Link "📍 Indicazioni stradali" in ogni popup
   - Apertura diretta di Google Maps con routing dalla posizione GPS dell'utente

3. **Responsive Design**
   - Layout a 2 colonne su desktop (testo + mappa)
   - Layout impilato su mobile
   - Mappa altezza 500px per buona visibilità

4. **Multilingua**
   - Supporto completo in IT, EN, DE, FR, ES
   - Tutte le label tradotte correttamente

### Librerie Utilizzate

- **Leaflet 1.9.4**: mappa interattiva open-source
- **OpenStreetMap**: tile provider gratuito
- **leaflet-color-markers**: marker colorati personalizzati (verde/oro)

Caricamento via CDN (nessuna dipendenza npm aggiuntiva):
```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

### Considerazioni Future

1. **GPX Track Loading**
   - La mappa supporta già la prop `gpxUrl`
   - Richiederà plugin `leaflet-gpx` per visualizzare i percorsi completi
   - Da implementare quando le tracce GPX saranno disponibili

2. **Clustering Markers**
   - Con molti punti di interesse, considerare `Leaflet.markercluster`
   - Migliora le performance e la leggibilità

3. **Tile Provider Alternativo**
   - Valutare Mapbox per mappe più personalizzate
   - OpenStreetMap è gratuito ma con limiti di utilizzo

4. **Geolocalizzazione**
   - Potenziale aggiunta di bottone "Trova la tappa più vicina"
   - Richiede permessi browser per posizione GPS

### Testing

- ✅ Server di sviluppo avviato senza errori
- ✅ TypeScript: nessun errore di tipo
- ✅ Build: nessun warning
- ✅ Visualizzazione in browser: OK
- ✅ Responsive design: verificato
- ✅ Link indicazioni stradali: funzionanti

### Note Tecniche

- La mappa si inizializza dinamicamente tramite `<script define:vars>`
- I marker vengono posizionati automaticamente in base ai dati
- Il sistema è estensibile per aggiungere altri tipi di marker (POI, rifugi, etc.)
- La logica di deduplica dei punti di partenza è automatica

### Domanda Risolta

> "Non so se è corretto inserire una voce 'dove siamo' e un link alle indicazioni stradali in base alla posizione GPS dell'utente"

**Risposta**: Sì, è un'ottima idea! Ho implementato:
- Sezione "Dove Siamo" nella homepage
- Link diretti a Google Maps per indicazioni stradali
- Google Maps utilizza automaticamente la posizione GPS dell'utente (con permessi)
- L'utente può cliccare e ottenere il percorso ottimale verso ogni punto di partenza

Questo è particolarmente utile per visitatori che vengono da lontano e hanno bisogno di orientarsi nella zona dei Monti Sibillini.
