export interface TrailStage {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  distance: string;
  duration: string;
  difficulty: 'Facile' | 'Intermedio' | 'Difficile';
  elevation: string;
  highlights: string[];
  coordinates: [number, number];
  gpxUrl?: string;
  images: string[];
  accommodation: {
    name: string;
    type: 'Albergo' | 'B&B' | 'Rifugio' | 'Agriturismo';
    description: string;
    contact?: string;
  }[];
}

export const trailStages: TrailStage[] = [
  {
    id: 1,
    slug: 'san-ruffino-rubbiano',
    title: 'Da San Ruffino a Rubbiano',
    subtitle: 'L\'inizio del cammino spirituale',
    description: 'Iniziamo il nostro cammino da San Ruffino, attraversando paesaggi collinari marchigiani fino a raggiungere Rubbiano. Un percorso che unisce natura e spiritualità.',
    distance: '15 km',
    duration: '5-6 ore',
    difficulty: 'Intermedio',
    elevation: '+350m / -280m',
    highlights: [
      'Chiesa di San Ruffino',
      'Panorami sulle colline marchigiane',
      'Borghi medievali lungo il percorso',
      'Sentieri naturalistici'
    ],
    coordinates: [43.0719, 13.2186],
    gpxUrl: '/gpx/tappa-1-san-ruffino-rubbiano.gpx',
    images: ['/images/tappa1-1.jpg', '/images/tappa1-2.jpg'],
    accommodation: [
      {
        name: 'Locanda di Rubbiano',
        type: 'Albergo',
        description: 'Struttura accogliente nel centro di Rubbiano'
      },
      {
        name: 'Agriturismo Le Colline',
        type: 'Agriturismo',
        description: 'Immerso nella natura con prodotti tipici locali'
      }
    ]
  },
  {
    id: 2,
    slug: 'rubbiano-san-leonardo',
    title: 'Da Rubbiano a San Leonardo (a/r)',
    subtitle: 'Un\'escursione contemplativa',
    description: 'Da Rubbiano ci dirigiamo verso San Leonardo in un percorso di andata e ritorno. Un\'esperienza di riflessione e immersione nella natura dei Monti Sibillini.',
    distance: '12 km (a/r)',
    duration: '4-5 ore',
    difficulty: 'Facile',
    elevation: '+200m / -200m',
    highlights: [
      'Santuario di San Leonardo',
      'Paesaggi dei Monti Sibillini',
      'Flora e fauna locale',
      'Luoghi di meditazione'
    ],
    coordinates: [42.9864, 13.2700],
    gpxUrl: '/gpx/tappa-2-rubbiano-san-leonardo.gpx',
    images: ['/images/tappa2-1.jpg', '/images/tappa2-2.jpg'],
    accommodation: [
      {
        name: 'Locanda di Rubbiano',
        type: 'Albergo',
        description: 'Ritorno alla base di Rubbiano'
      },
      {
        name: 'B&B Il Pellegrino',
        type: 'B&B',
        description: 'Camera semplice e accogliente'
      }
    ]
  },
  {
    id: 3,
    slug: 'rubbiano-ambro',
    title: 'Da Rubbiano al Santuario dell\'Ambro',
    subtitle: 'Verso il cuore spirituale del percorso',
    description: 'Lasciamo Rubbiano per raggiungere il suggestivo Santuario dell\'Ambro, immerso nelle montagne. Una tappa di grande significato spirituale e naturalistica.',
    distance: '18 km',
    duration: '6-7 ore',
    difficulty: 'Difficile',
    elevation: '+480m / -320m',
    highlights: [
      'Santuario della Madonna dell\'Ambro',
      'Gola dell\'Ambro',
      'Eremo di San Michele',
      'Cascate e sentieri montani'
    ],
    coordinates: [42.9936, 13.2947],
    gpxUrl: '/gpx/tappa-3-rubbiano-ambro.gpx',
    images: ['/images/tappa3-1.jpg', '/images/tappa3-2.jpg'],
    accommodation: [
      {
        name: 'Foresteria del Santuario',
        type: 'Rifugio',
        description: 'Accoglienza semplice presso il santuario'
      },
      {
        name: 'Rifugio Monti Sibillini',
        type: 'Rifugio',
        description: 'Rifugio di montagna con atmosfera autentica'
      }
    ]
  },
  {
    id: 4,
    slug: 'ambro-amandola',
    title: 'Dal Santuario dell\'Ambro ad Amandola',
    subtitle: 'Dalla montagna al borgo',
    description: 'Scendiamo dal santuario verso Amandola, caratteristico borgo marchigiano. Un percorso che ci riporta alla civiltà attraverso paesaggi mozzafiato.',
    distance: '16 km',
    duration: '5-6 ore',
    difficulty: 'Intermedio',
    elevation: '+280m / -450m',
    highlights: [
      'Centro storico di Amandola',
      'Chiesa di Sant\'Agostino',
      'Musei locali',
      'Prodotti tipici marchigiani'
    ],
    coordinates: [42.9764, 13.3568],
    gpxUrl: '/gpx/tappa-4-ambro-amandola.gpx',
    images: ['/images/tappa4-1.jpg', '/images/tappa4-2.jpg'],
    accommodation: [
      {
        name: 'Hotel Paradiso',
        type: 'Albergo',
        description: 'Hotel confortevole nel centro di Amandola'
      },
      {
        name: 'B&B Le Terrazze',
        type: 'B&B',
        description: 'B&B con vista panoramica sulle montagne'
      }
    ]
  },
  {
    id: 5,
    slug: 'amandola-san-ruffino',
    title: 'Da Amandola a San Ruffino',
    subtitle: 'Il ritorno alle origini',
    description: 'Chiudiamo il cerchio del nostro cammino tornando a San Ruffino, il punto di partenza. Un percorso conclusivo che porta con sé le esperienze vissute.',
    distance: '20 km',
    duration: '6-7 ore',
    difficulty: 'Intermedio',
    elevation: '+380m / -420m',
    highlights: [
      'Ritorno a San Ruffino',
      'Panorami conclusivi',
      'Riflessione sul cammino percorso',
      'Celebrazione finale'
    ],
    coordinates: [43.0719, 13.2186],
    gpxUrl: '/gpx/tappa-5-amandola-san-ruffino.gpx',
    images: ['/images/tappa5-1.jpg', '/images/tappa5-2.jpg'],
    accommodation: [
      {
        name: 'Hotel San Ruffino',
        type: 'Albergo',
        description: 'Hotel tradizionale per concludere il cammino'
      },
      {
        name: 'Casa del Pellegrino',
        type: 'Rifugio',
        description: 'Struttura religiosa per l\'accoglienza finale'
      }
    ]
  }
];

export function getTrailStageBySlug(slug: string): TrailStage | undefined {
  return trailStages.find(stage => stage.slug === slug);
}

export function getAllTrailSlugs(): string[] {
  return trailStages.map(stage => stage.slug);
}