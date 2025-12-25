# Immagini per il Sentiero dei Sette Santi

Questa cartella deve contenere le immagini per le varie sezioni del sito.

## Immagini delle Tappe

### Tappa 1: San Ruffino - Rubbiano
- `tappa1-chiesa-san-ruffino.jpg` - Facciata della Chiesa di San Ruffino
- `tappa1-panorama-colline.jpg` - Vista panoramica delle colline marchigiane
- `tappa1-sentiero-bosco.jpg` - Sentiero immerso nel bosco
- `tappa1-borgo-medievale.jpg` - Borgo medievale marchigiano

### Tappa 2: Rubbiano - San Leonardo (a/r)
- `tappa2-santuario-san-leonardo.jpg` - Santuario di San Leonardo
- `tappa2-bosco-faggi.jpg` - Bosco di faggi
- `tappa2-vista-sibillini.jpg` - Panorama dei Monti Sibillini
- `tappa2-prato-fiorito.jpg` - Prato con fiori selvatici

### Tappa 3: Rubbiano - Santuario dell'Ambro
- `tappa3-santuario-ambro.jpg` - Santuario della Madonna dell'Ambro
- `tappa3-gola-ambro.jpg` - Canyon della Gola dell'Ambro
- `tappa3-cascate.jpg` - Cascate dell'Ambro
- `tappa3-eremo-san-michele.jpg` - Eremo rupestre di San Michele
- `tappa3-sentiero-cresta.jpg` - Sentiero di montagna

### Tappa 4: Santuario dell'Ambro - Amandola
- `tappa4-panorama-valle.jpg` - Panorama della Valle del Tenna
- `tappa4-centro-amandola.jpg` - Centro storico di Amandola
- `tappa4-chiesa-agostino.jpg` - Facciata della Chiesa di Sant'Agostino
- `tappa4-sentiero-discesa.jpg` - Sentiero nel bosco
- `tappa4-teatro-fenice.jpg` - Teatro La Fenice

### Tappa 5: Amandola - San Ruffino
- `tappa5-partenza-amandola.jpg` - Amandola al mattino
- `tappa5-colline-panorama.jpg` - Panorama sulle colline marchigiane
- `tappa5-sentiero-finale.jpg` - Sentiero tra i campi
- `tappa5-borgo-storico.jpg` - Borgo medievale
- `tappa5-arrivo-san-ruffino.jpg` - Chiesa di San Ruffino vista dall'arrivo

## Specifiche Tecniche

### Dimensioni Consigliate
- **Immagini galleria tappe**: 1200x800px (rapporto 3:2)
- **Immagini hero/carousel**: 1920x1080px (rapporto 16:9)
- **Immagini card**: 800x600px (rapporto 4:3)

### Formato
- Preferibile: **JPEG** (per fotografie)
- Qualità: 80-85% (buon compromesso tra qualità e dimensione file)
- Dimensione file massima: 300-500KB per immagine

### Ottimizzazione
Per ottimizzare le immagini prima del caricamento:

```bash
# Con ImageMagick
convert input.jpg -resize 1200x800^ -quality 85 output.jpg

# Con Sharp (Node.js)
npm install sharp
node optimize-images.js
```

### Placeholder
Durante lo sviluppo, puoi usare servizi di placeholder come:
- [Lorem Picsum](https://picsum.photos/) - `https://picsum.photos/1200/800`
- [Unsplash Source](https://source.unsplash.com/) - `https://source.unsplash.com/1200x800/?nature,mountain`
- [Placeholder.com](https://placeholder.com/) - `https://via.placeholder.com/1200x800`

### Dove Trovare Immagini
Per il sito reale, le immagini dovrebbero essere:
1. **Fotografie originali** scattate durante il cammino
2. **Immagini di archivio** con licenza appropriata:
   - [Unsplash](https://unsplash.com/) - Licenza gratuita
   - [Pexels](https://www.pexels.com/) - Licenza gratuita
   - [Pixabay](https://pixabay.com/) - Licenza gratuita
3. **Immagini fornite** da enti turistici locali o parrocchie

### Note Importanti
- Assicurati di avere i **diritti d'uso** per tutte le immagini
- Aggiungi **credit fotografici** quando richiesto
- Mantieni una **coerenza stilistica** tra le immagini
- Verifica che le immagini siano **rappresentative** dei luoghi reali
- Includi sempre **testo alternativo** (alt text) per l'accessibilità

## Struttura Cartelle

```
public/images/
├── README-IMAGES.md (questo file)
├── tappa1-chiesa-san-ruffino.jpg
├── tappa1-panorama-colline.jpg
├── tappa1-sentiero-bosco.jpg
├── tappa1-borgo-medievale.jpg
├── tappa2-santuario-san-leonardo.jpg
├── tappa2-bosco-faggi.jpg
├── ... (altre immagini)
└── blog/ (per immagini del blog)
```

## Script di Ottimizzazione

Esempio di script Node.js per ottimizzare le immagini:

```javascript
// optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './raw-images';
const outputDir = './public/images';

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    sharp(path.join(inputDir, file))
      .resize(1200, 800, { fit: 'cover' })
      .jpeg({ quality: 85 })
      .toFile(path.join(outputDir, file))
      .then(info => console.log(`Ottimizzato: ${file}`))
      .catch(err => console.error(`Errore: ${file}`, err));
  }
});
```

## Checklist Pre-Pubblicazione

- [ ] Tutte le immagini sono presenti
- [ ] Immagini ottimizzate (dimensione < 500KB)
- [ ] Diritti d'uso verificati
- [ ] Alt text configurato nel codice
- [ ] Test su diverse dimensioni schermo
- [ ] Verifica tempi di caricamento
