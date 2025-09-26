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
    slug: 'san-francesco-assisi',
    title: 'San Francesco - Assisi',
    subtitle: 'Il punto di partenza spirituale',
    description: 'Iniziamo il nostro cammino dalla Basilica di San Francesco ad Assisi, cuore della spiritualità francescana. Un percorso che attraversa i luoghi più significativi della vita del Santo.',
    distance: '12 km',
    duration: '4-5 ore',
    difficulty: 'Facile',
    elevation: '+200m / -150m',
    highlights: [
      'Basilica di San Francesco',
      'Centro storico di Assisi',
      'Eremo delle Carceri',
      'Panorama sulla Valle Umbra'
    ],
    coordinates: [43.0719, 12.6186],
    gpxUrl: '/gpx/tappa-1-san-francesco.gpx',
    images: ['/images/tappa1-1.jpg', '/images/tappa1-2.jpg'],
    accommodation: [
      {
        name: 'Hotel Subasio',
        type: 'Albergo',
        description: 'Hotel storico nel centro di Assisi con vista panoramica',
        contact: 'info@hotelsubasio.com'
      },
      {
        name: 'Casa San Gabriele dell\'Addolorata',
        type: 'Rifugio',
        description: 'Struttura religiosa con camere semplici e accoglienza francescana'
      }
    ]
  },
  {
    id: 2,
    slug: 'santa-chiara-spello',
    title: 'Santa Chiara - Spello',
    subtitle: 'Dalla contemplazione ai fiori',
    description: 'Dal Santuario di Santa Chiara proseguiamo verso Spello, borgo medievale famoso per le sue infiorate e i vicoli fioriti che ci accompagnano in questo tratto del percorso.',
    distance: '15 km',
    duration: '5-6 ore',
    difficulty: 'Intermedio',
    elevation: '+350m / -280m',
    highlights: [
      'Santuario di Santa Chiara',
      'Borgo medievale di Spello',
      'Chiesa di Santa Maria Maggiore',
      'Panorami sulla Valle di Assisi'
    ],
    coordinates: [42.9864, 12.6700],
    gpxUrl: '/gpx/tappa-2-santa-chiara.gpx',
    images: ['/images/tappa2-1.jpg', '/images/tappa2-2.jpg'],
    accommodation: [
      {
        name: 'Palazzo Bocci',
        type: 'Albergo',
        description: 'Elegante palazzo del XIV secolo nel cuore di Spello'
      },
      {
        name: 'La Bastiglia',
        type: 'B&B',
        description: 'Charming B&B con vista panoramica e giardino'
      }
    ]
  },
  {
    id: 3,
    slug: 'san-benedetto-norcia',
    title: 'San Benedetto - Norcia',
    subtitle: 'Sulle orme del santo patrono d\'Europa',
    description: 'Raggiungiamo Norcia, città natale di San Benedetto, attraversando paesaggi montani e luoghi di profonda spiritualità benedettina.',
    distance: '18 km',
    duration: '6-7 ore',
    difficulty: 'Difficile',
    elevation: '+480m / -320m',
    highlights: [
      'Basilica di San Benedetto',
      'Centro storico di Norcia',
      'Prodotti tipici umbri',
      'Paesaggi montani dei Sibillini'
    ],
    coordinates: [42.7936, 13.0947],
    gpxUrl: '/gpx/tappa-3-san-benedetto.gpx',
    images: ['/images/tappa3-1.jpg', '/images/tappa3-2.jpg'],
    accommodation: [
      {
        name: 'Grotta Azzurra',
        type: 'Albergo',
        description: 'Hotel tradizionale nel centro di Norcia con cucina tipica'
      },
      {
        name: 'Casale nel Parco dei Sibillini',
        type: 'Agriturismo',
        description: 'Agriturismo immerso nella natura con produzione biologica'
      }
    ]
  },
  {
    id: 4,
    slug: 'sant-antonio-padova',
    title: 'Sant\'Antonio - Padova',
    subtitle: 'Il santo dei miracoli',
    description: 'Proseguiamo verso nord per raggiungere Padova e la magnifica Basilica di Sant\'Antonio, luogo di pellegrinaggio mondiale e centro di devozione millenaria.',
    distance: '20 km',
    duration: '7-8 ore',
    difficulty: 'Intermedio',
    elevation: '+280m / -380m',
    highlights: [
      'Basilica di Sant\'Antonio',
      'Cappella degli Scrovegni',
      'Orto Botanico di Padova',
      'Centro storico universitario'
    ],
    coordinates: [45.4064, 11.8768],
    gpxUrl: '/gpx/tappa-4-sant-antonio.gpx',
    images: ['/images/tappa4-1.jpg', '/images/tappa4-2.jpg'],
    accommodation: [
      {
        name: 'Casa del Pellegrino',
        type: 'Albergo',
        description: 'Hotel gestito dai Frati Minori, adiacente alla Basilica'
      },
      {
        name: 'B&B Al Santo',
        type: 'B&B',
        description: 'Accogliente B&B a pochi passi dalla Basilica del Santo'
      }
    ]
  },
  {
    id: 5,
    slug: 'san-giuseppe-milano',
    title: 'San Giuseppe - Milano',
    subtitle: 'Il patrono dei lavoratori',
    description: 'Raggiungiamo Milano e la Chiesa di San Giuseppe, simbolo della devozione del santo patrono dei lavoratori nel cuore economico d\'Italia.',
    distance: '16 km',
    duration: '5-6 ore',
    difficulty: 'Facile',
    elevation: '+120m / -180m',
    highlights: [
      'Chiesa di San Giuseppe',
      'Duomo di Milano',
      'Navigli milanesi',
      'Quartieri storici della città'
    ],
    coordinates: [45.4642, 9.1900],
    gpxUrl: '/gpx/tappa-5-san-giuseppe.gpx',
    images: ['/images/tappa5-1.jpg', '/images/tappa5-2.jpg'],
    accommodation: [
      {
        name: 'Hotel San Giuseppe',
        type: 'Albergo',
        description: 'Hotel tradizionale nel centro di Milano'
      },
      {
        name: 'Ostello della Gioventù',
        type: 'Rifugio',
        description: 'Sistemazione economica per pellegrini e viaggiatori'
      }
    ]
  },
  {
    id: 6,
    slug: 'san-carlo-borromeo-arona',
    title: 'San Carlo Borromeo - Arona',
    subtitle: 'Il riformatore della Chiesa',
    description: 'Ci dirigiamo verso Arona, città natale di San Carlo Borromeo, dove si erge la maestosa statua del santo con vista sul Lago Maggiore.',
    distance: '14 km',
    duration: '4-5 ore',
    difficulty: 'Facile',
    elevation: '+180m / -120m',
    highlights: [
      'Sancarlone di Arona',
      'Casa natale di San Carlo',
      'Lungolago di Arona',
      'Vista sul Lago Maggiore'
    ],
    coordinates: [45.7573, 8.5506],
    gpxUrl: '/gpx/tappa-6-san-carlo.gpx',
    images: ['/images/tappa6-1.jpg', '/images/tappa6-2.jpg'],
    accommodation: [
      {
        name: 'Hotel Atlantic',
        type: 'Albergo',
        description: 'Hotel moderno con vista lago e servizi completi'
      },
      {
        name: 'Villa Giulia',
        type: 'B&B',
        description: 'Elegante villa storica con giardino panoramico'
      }
    ]
  },
  {
    id: 7,
    slug: 'santa-rita-torino',
    title: 'Santa Rita - Torino',
    subtitle: 'La santa delle cause impossibili',
    description: 'Concludiamo il nostro cammino a Torino, nella Chiesa di Santa Rita, dove si venera la santa delle cause impossibili, meta finale di questo percorso di fede e natura.',
    distance: '22 km',
    duration: '7-8 ore',
    difficulty: 'Intermedio',
    elevation: '+340m / -280m',
    highlights: [
      'Chiesa di Santa Rita',
      'Duomo di Torino (Sindone)',
      'Mole Antonelliana',
      'Centro storico sabaudo'
    ],
    coordinates: [45.0703, 7.6869],
    gpxUrl: '/gpx/tappa-7-santa-rita.gpx',
    images: ['/images/tappa7-1.jpg', '/images/tappa7-2.jpg'],
    accommodation: [
      {
        name: 'Grand Hotel Sitea',
        type: 'Albergo',
        description: 'Hotel di lusso nel cuore elegante di Torino'
      },
      {
        name: 'Casa per Ferie Santa Rita',
        type: 'Rifugio',
        description: 'Struttura religiosa con camere semplici e accoglienza calorosa'
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