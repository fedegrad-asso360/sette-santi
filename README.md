# Sentiero dei Sette Santi 🏔️⛪

Un sito web moderno per il percorso di trekking/pellegrinaggio spirituale attraverso l'Italia, seguendo le orme di sette grandi santi della tradizione cristiana.

## 📖 Descrizione

Il Sentiero dei Sette Santi è un cammino spirituale e naturalistico che attraversa l'Italia centrale e settentrionale, collegando i luoghi dedicati a sette santi significativi della tradizione cristiana. Questo progetto web fornisce tutte le informazioni necessarie per pianificare e vivere questa esperienza unica.

## ✨ Caratteristiche

### Implementate
- **Homepage Showcase**: Presentazione del percorso con hero section e statistiche
- **7 Tappe Dettagliate**: Ogni tappa dedicata a un santo con:
  - Informazioni tecniche (distanza, durata, dislivello, difficoltà)
  - Descrizione del percorso e punti di interesse
  - Mappe interattive (placeholder)
  - Tracce GPX scaricabili
  - Informazioni sugli alloggi
- **Sistema di Prenotazione**: Sezione per prenotare tour organizzati (individuale, gruppo, premium)
- **Design Responsive**: Ottimizzato per tutti i dispositivi
- **Navigazione Intuitiva**: Collegamenti tra tappe successive e precedenti

### In Sviluppo
- **Blog**: Sezione per pubblicare news ed eventi sul trekking
- **Community**: Area per commenti e interazioni degli utenti
- **Mappe Reali**: Integrazione Leaflet/Mapbox per mappe interattive
- **Galleria Fotografica**: Immagini delle tappe e dei paesaggi
- **Sistema di Recensioni**: Feedback degli utenti sulle tappe

## 🛠️ Tecnologie Utilizzate

- **[Astro](https://astro.build)** v5.16.6 - Framework web moderno per siti content-focused
- **[Tailwind CSS](https://tailwindcss.com)** v3.4.19 - Framework CSS utility-first
- **TypeScript** - Type safety e migliore developer experience
- **Node.js** - Runtime JavaScript

## 📋 Prerequisiti

- Node.js 18.x o superiore
- npm 9.x o superiore

## 🚀 Installazione e Configurazione

1. **Clona il repository**
   ```bash
   git clone https://github.com/fedegrad-asso360/sette-santi.git
   cd sette-santi
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```
   Il sito sarà disponibile su `http://localhost:4321`

4. **Build per produzione**
   ```bash
   npm run build
   ```

5. **Preview della build di produzione**
   ```bash
   npm run preview
   ```

## 📁 Struttura del Progetto

```
sette-santi/
├── public/              # File statici (immagini, GPX, favicon)
├── src/
│   ├── components/      # Componenti Astro riutilizzabili
│   │   └── MapComponent.astro
│   ├── data/           # Dati strutturati
│   │   └── trails.ts   # Dati delle 7 tappe
│   ├── layouts/        # Layout di pagina
│   │   └── Layout.astro
│   ├── pages/          # Route del sito
│   │   ├── index.astro          # Homepage
│   │   └── percorsi/
│   │       └── [slug].astro     # Pagine dinamiche per ogni tappa
│   └── styles/         # Stili globali (se necessari)
├── astro.config.mjs    # Configurazione Astro
├── tailwind.config.mjs # Configurazione Tailwind
├── tsconfig.json       # Configurazione TypeScript
└── package.json        # Dipendenze e scripts
```

## 🎨 Temi e Colori

Il sito utilizza una palette di colori ispirata alla natura e alla spiritualità:

- **trail-green** (`#2d5016`) - Verde principale per natura e crescita
- **trail-brown** (`#8b4513`) - Marrone per la terra e i sentieri
- **trail-gold** (`#d4af37`) - Oro per la spiritualità e l'illuminazione
- **trail-sky** (`#87ceeb`) - Azzurro cielo per apertura e speranza

## 🗺️ Le Sette Tappe

1. **San Francesco - Assisi**: Il punto di partenza spirituale (12 km, Facile)
2. **Santa Chiara - Spello**: Dalla contemplazione ai fiori (15 km, Intermedio)
3. **San Benedetto - Norcia**: Sulle orme del santo patrono d'Europa (18 km, Difficile)
4. **Sant'Antonio - Padova**: Il santo dei miracoli (20 km, Intermedio)
5. **San Giuseppe - Milano**: Il patrono dei lavoratori (16 km, Facile)
6. **San Carlo Borromeo - Arona**: Il riformatore della Chiesa (14 km, Facile)
7. **Santa Rita - Torino**: La santa delle cause impossibili (22 km, Intermedio)

## 🔧 Comandi Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build` | Crea la build di produzione in `./dist/` |
| `npm run preview` | Preview locale della build di produzione |
| `npm run astro` | Esegui comandi CLI di Astro |

## 🤝 Contribuire

Questo progetto è aperto a contributi! Se desideri contribuire:

1. Fai un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📝 Roadmap

### Fase 1 - Contenuti Base (Completata)
- [x] Homepage con presentazione
- [x] Struttura delle 7 tappe
- [x] Sistema di navigazione
- [x] Sezione prenotazioni

### Fase 2 - Contenuti Dinamici (In Corso)
- [ ] Blog per news ed eventi
- [ ] Sistema di commenti/community
- [ ] Integrazione mappe reali (Leaflet/Mapbox)
- [ ] Galleria fotografica

### Fase 3 - Funzionalità Avanzate
- [ ] Sistema di autenticazione utenti
- [ ] Profili pellegrini
- [ ] Tracking progressi personali
- [ ] Sistema di prenotazione integrato
- [ ] Multi-lingua (IT, EN, DE, FR, ES)

### Fase 4 - Ottimizzazione
- [ ] SEO avanzato
- [ ] Performance optimization
- [ ] PWA features
- [ ] App mobile companion

## 📄 Licenza

Copyright © 2024 Sentiero dei Sette Santi. Tutti i diritti riservati.

## 📧 Contatti

- Email: info@settesanti.it
- Telefono: +39 123 456 7890
- Website: [settesanti.it](https://settesanti.it)

## 🙏 Ringraziamenti

Grazie a tutti i pellegrini e gli appassionati che supportano questo progetto e mantengono viva la tradizione dei cammini spirituali in Italia.
