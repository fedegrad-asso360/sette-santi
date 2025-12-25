# Tracce GPX - Sentiero dei Sette Santi

Questa cartella contiene i file GPX (GPS Exchange Format) per ogni tappa del Sentiero dei Sette Santi.

## File Richiesti

### Tappa 1: San Ruffino - Rubbiano
- **File**: `tappa-1-san-ruffino-rubbiano.gpx`
- **Distanza**: 15 km
- **Dislivello**: +350m / -280m

### Tappa 2: Rubbiano - San Leonardo (a/r)
- **File**: `tappa-2-rubbiano-san-leonardo.gpx`
- **Distanza**: 12 km (andata e ritorno)
- **Dislivello**: +200m / -200m

### Tappa 3: Rubbiano - Santuario dell'Ambro
- **File**: `tappa-3-rubbiano-ambro.gpx`
- **Distanza**: 18 km
- **Dislivello**: +480m / -320m

### Tappa 4: Santuario dell'Ambro - Amandola
- **File**: `tappa-4-ambro-amandola.gpx`
- **Distanza**: 16 km
- **Dislivello**: +280m / -450m

### Tappa 5: Amandola - San Ruffino
- **File**: `tappa-5-amandola-san-ruffino.gpx`
- **Distanza**: 20 km
- **Dislivello**: +380m / -420m

## Come Creare le Tracce GPX

### 1. Utilizzando GPS/Smartphone
Il metodo più accurato è percorrere fisicamente il sentiero con un dispositivo GPS o un'app sul telefono:

**App consigliate**:
- **Komoot** (iOS/Android) - Ottima per trekking
- **Strava** (iOS/Android) - Popolare tra gli sportivi
- **OsmAnd** (iOS/Android) - Basata su OpenStreetMap
- **ViewRanger** (iOS/Android) - Specializzata in escursionismo

**Processo**:
1. Avvia la registrazione all'inizio della tappa
2. Mantieni il telefono/GPS acceso durante tutto il percorso
3. Ferma la registrazione alla fine
4. Esporta la traccia in formato GPX

### 2. Pianificazione Online
Se non puoi percorrere fisicamente il sentiero, puoi creare le tracce online:

#### A. Con Komoot (Raccomandato)
1. Vai su [komoot.com](https://www.komoot.com/)
2. Clicca su "Pianifica un tour"
3. Imposta punto di partenza e arrivo
4. Aggiungi waypoint intermedi seguendo il percorso
5. Seleziona "Escursionismo" come tipo di attività
6. Esporta in formato GPX

#### B. Con GPSies / AllTrails
1. Usa [AllTrails](https://www.alltrails.com/) o servizi simili
2. Cerca percorsi esistenti nella zona
3. Modifica o crea nuovi percorsi
4. Esporta in GPX

#### C. Con QGIS/JOSM (Avanzato)
Per utenti esperti che vogliono creare tracce molto precise:
1. Scarica [QGIS](https://qgis.org/)
2. Carica mappe OpenStreetMap
3. Digitalizza il percorso
4. Esporta come GPX

### 3. Da Mappe CAI
Se hai accesso a mappe CAI ufficiali del percorso:
1. Scannerizza/ottieni la mappa digitale
2. Usa software di georeferenziazione
3. Digitalizza il tracciato
4. Esporta in GPX

## Struttura File GPX

Un file GPX base dovrebbe avere questa struttura:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" 
     creator="Sentiero dei Sette Santi"
     xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>Tappa 1: San Ruffino - Rubbiano</name>
    <desc>Prima tappa del Sentiero dei Sette Santi</desc>
  </metadata>
  <trk>
    <name>San Ruffino - Rubbiano</name>
    <trkseg>
      <trkpt lat="43.0719" lon="13.2186">
        <ele>540</ele>
      </trkpt>
      <!-- Altri punti della traccia -->
    </trkseg>
  </trk>
</gpx>
```

## Validazione dei File GPX

Prima di pubblicare, valida i file GPX:

### Online
- [GPX Validator](https://www.topografix.com/gpx_validation.asp)
- [GPSies Validator](https://www.gpsies.com/)

### Software
- **GPXSee** - Visualizzatore e validatore
- **Viking** - Editor GPX open source

### Verifica Checklist
- [ ] File valido secondo lo standard GPX 1.1
- [ ] Traccia continua senza interruzioni
- [ ] Coordinate corrette (lat/lon in gradi decimali)
- [ ] Elevazione inclusa per ogni punto (se possibile)
- [ ] Metadata compilati (nome, descrizione)
- [ ] File < 1MB (per prestazioni web)

## Ottimizzazione

I file GPX possono diventare molto grandi. Ottimizzali prima di pubblicarli:

### Ridurre i Punti
Mantieni un punto ogni 10-15 metri:

```bash
# Con GPSBabel
gpsbabel -i gpx -f input.gpx \
         -x simplify,count=500 \
         -o gpx -F output.gpx
```

### Rimuovere Metadata Non Necessari
Mantieni solo name, desc, e waypoints essenziali.

## Integrazione nel Sito

I file GPX vengono utilizzati dal componente `MapComponent.astro` per:
1. Visualizzare il tracciato sulla mappa interattiva
2. Permettere il download agli utenti
3. Calcolare statistiche automatiche (se implementato)

## Waypoints Importanti

Per ogni tappa, includi waypoints per:
- **Punto di partenza** - Inizio tappa
- **Punto di arrivo** - Fine tappa
- **Punti di interesse** - Chiese, santuari, belvedere
- **Punti acqua** - Fontane, bar, rifugi
- **Punti critici** - Bivi, passaggi difficili

Esempio waypoint:

```xml
<wpt lat="43.0719" lon="13.2186">
  <name>Chiesa San Ruffino</name>
  <desc>Punto di partenza del cammino</desc>
  <sym>Church</sym>
</wpt>
```

## Fonti di Dati Geografici

### Mappe Aperte
- **OpenStreetMap** - [openstreetmap.org](https://www.openstreetmap.org/)
- **Sentieri Italia CAI** - [sentieriitaliacai.it](https://www.sentieriitaliacai.it/)

### Mappe Ufficiali
- **Regione Marche** - Portale cartografico
- **Parco Nazionale Monti Sibillini**
- **CAI - Club Alpino Italiano** - Sezione locale

### Dati LIDAR
Per elevazioni molto precise:
- **Geoportale Nazionale** - [geoportale.it](http://www.pcn.minambiente.it/)

## Copyright e Licenze

### Per Tracce Create da Te
Puoi applicare una licenza:
- **CC BY-SA 4.0** - Permette riuso con attribuzione
- **ODbL** - Open Database License (compatibile con OSM)

### Per Tracce da Altre Fonti
- Verifica sempre la licenza d'uso
- Attribuisci correttamente la fonte
- Rispetta i termini di utilizzo

## Backup

Mantieni sempre backup delle tracce originali:
- Su cloud (Google Drive, Dropbox)
- Su repository Git (se non troppo grandi)
- Su disco esterno

## Testing

Prima di pubblicare:
1. **Visualizza** la traccia su GPXSee o software simile
2. **Controlla** che il percorso sia corretto
3. **Verifica** che i dati di elevazione siano sensati
4. **Testa** il download dal sito web
5. **Importa** in un'app GPS per verificare compatibilità

## Placeholder Temporanei

Per lo sviluppo, puoi usare tracce GPX di test. Esempio semplice:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1">
  <metadata>
    <name>Test Track</name>
  </metadata>
  <trk>
    <trkseg>
      <trkpt lat="43.07" lon="13.22"><ele>540</ele></trkpt>
      <trkpt lat="43.08" lon="13.23"><ele>560</ele></trkpt>
      <trkpt lat="43.09" lon="13.24"><ele>590</ele></trkpt>
    </trkseg>
  </trk>
</gpx>
```

## Risorse Utili

### Software
- **QGIS** - GIS open source professionale
- **GPXSee** - Visualizzatore leggero
- **Viking** - Editor GPS
- **GPSBabel** - Conversione formati GPS

### Siti Web
- [Komoot](https://www.komoot.com/) - Pianificazione tracce
- [AllTrails](https://www.alltrails.com/) - Community di tracce
- [Wikiloc](https://www.wikiloc.com/) - Condivisione tracce
- [OpenRouteService](https://openrouteservice.org/) - Routing open source

### Documentazione
- [GPX 1.1 Schema](https://www.topografix.com/GPX/1/1/)
- [OpenStreetMap Wiki](https://wiki.openstreetmap.org/)
- [Leaflet GPX Plugin](https://github.com/mpetazzoni/leaflet-gpx)

## Supporto

Per assistenza nella creazione delle tracce GPX:
- Contatta il CAI locale
- Chiedi alla community di OpenStreetMap
- Consulta forum di trekking e escursionismo
