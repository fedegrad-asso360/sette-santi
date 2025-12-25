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
  elevationGain: string;
  elevationLoss: string;
  highestPoint: string;
  lowestPoint: string;
  highlights: string[];
  coordinates: [number, number];
  startPoint: string;
  gpxUrl?: string;
  images: {
    url: string;
    caption: string;
    alt: string;
  }[];
  technicalInfo: {
    terrain: string[];
    signage: string;
    waterPoints: string[];
    difficulty: string;
    recommendedPeriod: string;
    warnings: string[];
  };
  pointsOfInterest: {
    name: string;
    description: string;
    distance: string;
  }[];
  accommodation: {
    name: string;
    type: 'Albergo' | 'B&B' | 'Rifugio' | 'Agriturismo';
    description: string;
    contact?: string;
    phone?: string;
    website?: string;
  }[];
}

export const trailStages: TrailStage[] = [
  {
    id: 1,
    slug: 'san-ruffino-rubbiano',
    title: 'Da San Ruffino a Rubbiano',
    subtitle: 'L\'inizio del cammino spirituale',
    description: 'Iniziamo il nostro cammino da San Ruffino, attraversando paesaggi collinari marchigiani fino a raggiungere Rubbiano. Un percorso che unisce natura e spiritualità, passando per borghi storici e sentieri immersi nella campagna. Il tracciato si snoda tra boschi di querce e campi coltivati, offrendo panorami suggestivi sulle colline circostanti e scorci dei Monti Sibillini in lontananza.',
    distance: '15 km',
    duration: '5-6 ore',
    difficulty: 'Intermedio',
    elevation: '+350m / -280m',
    elevationGain: '+350m',
    elevationLoss: '-280m',
    highestPoint: '720m s.l.m.',
    lowestPoint: '540m s.l.m.',
    highlights: [
      'Chiesa di San Ruffino (secolo XII)',
      'Panorami sulle colline marchigiane',
      'Borghi medievali lungo il percorso',
      'Sentieri naturalistici tra querce e ulivi',
      'Vista sui Monti Sibillini'
    ],
    coordinates: [43.0719, 13.2186],
    startPoint: 'San Ruffino (Amandola)',
    gpxUrl: '/gpx/tappa-1-san-ruffino-rubbiano.gpx',
    images: [
      {
        url: '/images/tappa1-chiesa-san-ruffino.jpg',
        caption: 'Chiesa di San Ruffino, punto di partenza del cammino',
        alt: 'Facciata della Chiesa di San Ruffino'
      },
      {
        url: '/images/tappa1-panorama-colline.jpg',
        caption: 'Panorama sulle dolci colline marchigiane',
        alt: 'Vista panoramica delle colline marchigiane'
      },
      {
        url: '/images/tappa1-sentiero-bosco.jpg',
        caption: 'Sentiero nel bosco di querce',
        alt: 'Sentiero immerso nel bosco'
      },
      {
        url: '/images/tappa1-borgo-medievale.jpg',
        caption: 'Uno dei borghi medievali lungo il percorso',
        alt: 'Borgo medievale marchigiano'
      }
    ],
    technicalInfo: {
      terrain: [
        'Strade sterrate (45%)',
        'Sentieri di montagna (35%)',
        'Tratti asfaltati secondari (20%)'
      ],
      signage: 'Segnavia bianco-rosso CAI e segnaletica specifica del Sentiero dei Sette Santi',
      waterPoints: [
        'Fontana a San Ruffino (km 0)',
        'Fontana pubblica a Ponte (km 7)',
        'Bar a Rubbiano (km 15)'
      ],
      difficulty: 'Percorso di media difficoltà con alcuni tratti in salita. Richiede buona preparazione fisica e scarpe da trekking adeguate.',
      recommendedPeriod: 'Aprile - Ottobre (evitare i mesi più caldi di Luglio e Agosto)',
      warnings: [
        'Portare scorta d\'acqua sufficiente (almeno 1,5L)',
        'Alcuni tratti esposti al sole',
        'Verificare condizioni meteo prima della partenza',
        'Consigliato partire la mattina presto'
      ]
    },
    pointsOfInterest: [
      {
        name: 'Chiesa di San Ruffino',
        description: 'Antica chiesa romanica del XII secolo, punto di partenza del cammino. All\'interno affreschi del XIV secolo.',
        distance: 'km 0'
      },
      {
        name: 'Borgo di Ponte',
        description: 'Piccolo borgo medievale con case in pietra e una chiesetta del \'600. Punto di sosta ideale.',
        distance: 'km 7'
      },
      {
        name: 'Belvedere Monte Alto',
        description: 'Punto panoramico con vista a 360° sulle colline marchigiane e i Monti Sibillini.',
        distance: 'km 11'
      },
      {
        name: 'Rubbiano',
        description: 'Borgo di arrivo con centro storico ben conservato e diverse strutture ricettive.',
        distance: 'km 15'
      }
    ],
    accommodation: [
      {
        name: 'Locanda di Rubbiano',
        type: 'Albergo',
        description: 'Struttura accogliente nel centro di Rubbiano con camere confortevoli e ristorante tipico',
        contact: 'info@locandadirubbiano.it',
        phone: '+39 0733 123456',
        website: 'www.locandadirubbiano.it'
      },
      {
        name: 'Agriturismo Le Colline',
        type: 'Agriturismo',
        description: 'Immerso nella natura con prodotti tipici locali. Cucina casalinga e atmosfera familiare.',
        contact: 'info@agrilecolline.it',
        phone: '+39 0733 234567'
      },
      {
        name: 'B&B Casa del Viandante',
        type: 'B&B',
        description: 'Bed & Breakfast economico nel centro storico, ideale per pellegrini',
        contact: 'casaviandante@email.it',
        phone: '+39 333 1234567'
      }
    ]
  },
  {
    id: 2,
    slug: 'rubbiano-san-leonardo',
    title: 'Da Rubbiano a San Leonardo (a/r)',
    subtitle: 'Un\'escursione contemplativa',
    description: 'Da Rubbiano ci dirigiamo verso San Leonardo in un percorso di andata e ritorno. Un\'esperienza di riflessione e immersione nella natura dei Monti Sibillini. Il sentiero attraversa boschi di faggi secolari e prati fioriti, conducendo al suggestivo Santuario di San Leonardo, un luogo di pace e contemplazione immerso nel verde.',
    distance: '12 km (a/r)',
    duration: '4-5 ore',
    difficulty: 'Facile',
    elevation: '+200m / -200m',
    elevationGain: '+200m',
    elevationLoss: '-200m',
    highestPoint: '740m s.l.m.',
    lowestPoint: '540m s.l.m.',
    highlights: [
      'Santuario di San Leonardo (secolo XIII)',
      'Paesaggi dei Monti Sibillini',
      'Flora e fauna locale (caprioli, cinghiali, aquile)',
      'Luoghi di meditazione e silenzio',
      'Boschi di faggi secolari'
    ],
    coordinates: [42.9864, 13.2700],
    startPoint: 'Rubbiano (Montefortino)',
    gpxUrl: '/gpx/tappa-2-rubbiano-san-leonardo.gpx',
    images: [
      {
        url: '/images/tappa2-santuario-san-leonardo.jpg',
        caption: 'Santuario di San Leonardo immerso nel verde',
        alt: 'Santuario di San Leonardo'
      },
      {
        url: '/images/tappa2-bosco-faggi.jpg',
        caption: 'Suggestivo bosco di faggi lungo il percorso',
        alt: 'Bosco di faggi'
      },
      {
        url: '/images/tappa2-vista-sibillini.jpg',
        caption: 'Vista sui Monti Sibillini',
        alt: 'Panorama dei Monti Sibillini'
      },
      {
        url: '/images/tappa2-prato-fiorito.jpg',
        caption: 'Prato fiorito in primavera',
        alt: 'Prato con fiori selvatici'
      }
    ],
    technicalInfo: {
      terrain: [
        'Sentieri di montagna (60%)',
        'Strade sterrate (30%)',
        'Tratti su prato (10%)'
      ],
      signage: 'Segnavia bianco-rosso CAI n. 223 e indicazioni per il Santuario',
      waterPoints: [
        'Fontana a Rubbiano (km 0)',
        'Fontana presso il Santuario (km 6)',
        'Ritorno a Rubbiano (km 12)'
      ],
      difficulty: 'Percorso facile adatto a tutti, con pendenze moderate. Ideale per famiglie e per chi desidera una camminata tranquilla.',
      recommendedPeriod: 'Aprile - Ottobre (particolarmente suggestivo in primavera per la fioritura)',
      warnings: [
        'Tratti nel bosco possono essere scivolosi dopo la pioggia',
        'Portare acqua anche se il percorso è breve',
        'Rispettare il silenzio nei pressi del Santuario',
        'Possibile avvistamento fauna selvatica'
      ]
    },
    pointsOfInterest: [
      {
        name: 'Fonte del Pellegrino',
        description: 'Antica fonte dove i pellegrini si fermavano per dissetarsi. Acqua fresca e pura di sorgente.',
        distance: 'km 2'
      },
      {
        name: 'Belvedere dei Sibillini',
        description: 'Punto panoramico naturale con vista sulla catena montuosa dei Sibillini.',
        distance: 'km 4'
      },
      {
        name: 'Santuario di San Leonardo',
        description: 'Antico santuario del XIII secolo dedicato a San Leonardo, patrono dei prigionieri. Luogo di grande spiritualità e pace.',
        distance: 'km 6'
      },
      {
        name: 'Eremo del Silenzio',
        description: 'Piccolo eremo nascosto nel bosco, ideale per momenti di meditazione.',
        distance: 'km 5 (ritorno)'
      }
    ],
    accommodation: [
      {
        name: 'Locanda di Rubbiano',
        type: 'Albergo',
        description: 'Ritorno alla base di Rubbiano. Camera e colazione con possibilità di cena.',
        contact: 'info@locandadirubbiano.it',
        phone: '+39 0733 123456',
        website: 'www.locandadirubbiano.it'
      },
      {
        name: 'B&B Il Pellegrino',
        type: 'B&B',
        description: 'Camera semplice e accogliente con atmosfera familiare. Gestione cordiale.',
        contact: 'pellegrino@email.it',
        phone: '+39 333 2345678'
      },
      {
        name: 'Foresteria San Leonardo',
        type: 'Rifugio',
        description: 'Possibilità di pernottamento semplice presso il Santuario (su prenotazione)',
        contact: 'santuario.sanleonardo@diocesi.it',
        phone: '+39 0733 345678'
      }
    ]
  },
  {
    id: 3,
    slug: 'rubbiano-ambro',
    title: 'Da Rubbiano al Santuario dell\'Ambro',
    subtitle: 'Verso il cuore spirituale del percorso',
    description: 'Lasciamo Rubbiano per raggiungere il suggestivo Santuario dell\'Ambro, immerso nelle montagne. Una tappa di grande significato spirituale e naturalistica. Il percorso ci porta nel cuore dei Monti Sibillini, attraversando la spettacolare Gola dell\'Ambro e passando per l\'eremo di San Michele. Questa è considerata la tappa più impegnativa ma anche la più gratificante del cammino.',
    distance: '18 km',
    duration: '6-7 ore',
    difficulty: 'Difficile',
    elevation: '+480m / -320m',
    elevationGain: '+480m',
    elevationLoss: '-320m',
    highestPoint: '1020m s.l.m.',
    lowestPoint: '540m s.l.m.',
    highlights: [
      'Santuario della Madonna dell\'Ambro (secolo XV)',
      'Gola dell\'Ambro - canyon naturale spettacolare',
      'Eremo di San Michele Arcangelo',
      'Cascate dell\'Ambro (30m di salto)',
      'Sentieri montani panoramici',
      'Flora endemica dei Sibillini'
    ],
    coordinates: [42.9936, 13.2947],
    startPoint: 'Rubbiano (Montefortino)',
    gpxUrl: '/gpx/tappa-3-rubbiano-ambro.gpx',
    images: [
      {
        url: '/images/tappa3-santuario-ambro.jpg',
        caption: 'Il maestoso Santuario della Madonna dell\'Ambro',
        alt: 'Santuario della Madonna dell\'Ambro'
      },
      {
        url: '/images/tappa3-gola-ambro.jpg',
        caption: 'La spettacolare Gola dell\'Ambro',
        alt: 'Canyon della Gola dell\'Ambro'
      },
      {
        url: '/images/tappa3-cascate.jpg',
        caption: 'Le cascate dell\'Ambro nel loro splendore',
        alt: 'Cascate dell\'Ambro'
      },
      {
        url: '/images/tappa3-eremo-san-michele.jpg',
        caption: 'Eremo di San Michele Arcangelo',
        alt: 'Eremo rupestre di San Michele'
      },
      {
        url: '/images/tappa3-sentiero-cresta.jpg',
        caption: 'Sentiero panoramico sulla cresta',
        alt: 'Sentiero di montagna'
      }
    ],
    technicalInfo: {
      terrain: [
        'Sentieri di montagna rocciosi (50%)',
        'Strade sterrate (25%)',
        'Passaggi su rocciaattrezzati (15%)',
        'Tratti asfaltati (10%)'
      ],
      signage: 'Segnavia bianco-rosso CAI n. 145 e n. 146. Segnaletica per il Santuario ben visibile.',
      waterPoints: [
        'Fontana a Rubbiano (km 0)',
        'Fonte San Michele (km 8)',
        'Fontana presso cascate (km 12)',
        'Santuario dell\'Ambro (km 18)'
      ],
      difficulty: 'Percorso impegnativo con dislivello significativo e alcuni passaggi esposti. Richiede buona preparazione fisica, esperienza di trekking in montagna e attrezzatura adeguata. Non adatto a chi soffre di vertigini.',
      recommendedPeriod: 'Maggio - Settembre (evitare in caso di maltempo o neve)',
      warnings: [
        'Portare scorta d\'acqua abbondante (almeno 2L)',
        'Bastoncini da trekking consigliati',
        'Alcuni passaggi esposti e rocciosi',
        'Verificare sempre le previsioni meteo',
        'Partire molto presto per evitare il caldo',
        'Tratti nella gola possono essere umidi e scivolosi',
        'Presenza di cavi fissi in alcuni punti',
        'Consigliata guida esperta per chi non conosce il percorso'
      ]
    },
    pointsOfInterest: [
      {
        name: 'Borgo di Forcella',
        description: 'Antico borgo abbandonato con case in pietra. Testimonianza della vita montana di un tempo.',
        distance: 'km 5'
      },
      {
        name: 'Eremo di San Michele Arcangelo',
        description: 'Eremo rupestre scavato nella roccia, dedicato all\'Arcangelo Michele. Luogo di grande suggestione spirituale.',
        distance: 'km 8'
      },
      {
        name: 'Ingresso Gola dell\'Ambro',
        description: 'Inizio dello spettacolare canyon naturale. Pareti rocciose alte fino a 100 metri.',
        distance: 'km 10'
      },
      {
        name: 'Cascate dell\'Ambro',
        description: 'Cascate alte 30 metri circondate da una vegetazione rigogliosa. Punto fotografico imperdibile.',
        distance: 'km 12'
      },
      {
        name: 'Ponte del Diavolo',
        description: 'Antico ponte in pietra con leggende locali. Vista sulla gola sottostante.',
        distance: 'km 15'
      },
      {
        name: 'Santuario della Madonna dell\'Ambro',
        description: 'Importante santuario mariano del XV secolo, meta di pellegrinaggi da secoli. Custodisce un\'antica immagine della Madonna considerata miracolosa.',
        distance: 'km 18'
      }
    ],
    accommodation: [
      {
        name: 'Foresteria del Santuario',
        type: 'Rifugio',
        description: 'Accoglienza semplice ed essenziale presso il santuario. Atmosfera di pace e spiritualità. Cucina con prodotti locali.',
        contact: 'santuario.ambro@diocesi.it',
        phone: '+39 0737 987654',
        website: 'www.santuarioambro.it'
      },
      {
        name: 'Rifugio Monti Sibillini',
        type: 'Rifugio',
        description: 'Rifugio di montagna con atmosfera autentica. Gestione familiare, cucina tipica marchigiana.',
        contact: 'info@rifugiosibillini.it',
        phone: '+39 0737 876543'
      },
      {
        name: 'Casa del Pastore',
        type: 'Rifugio',
        description: 'Piccolo rifugio rustico con posti limitati. Prenotazione obbligatoria. Esperienza autentica di montagna.',
        contact: 'casapastore@email.it',
        phone: '+39 333 3456789'
      }
    ]
  },
  {
    id: 4,
    slug: 'ambro-amandola',
    title: 'Dal Santuario dell\'Ambro ad Amandola',
    subtitle: 'Dalla montagna al borgo',
    description: 'Scendiamo dal santuario verso Amandola, caratteristico borgo marchigiano. Un percorso che ci riporta alla civiltà attraversando paesaggi mozzafiato. La discesa offre viste panoramiche eccezionali sulla vallata sottostante e sui monti circostanti. Attraversiamo boschi misti, pascoli e piccoli borghi rurali prima di raggiungere Amandola, centro storico ricco di arte e tradizioni.',
    distance: '16 km',
    duration: '5-6 ore',
    difficulty: 'Intermedio',
    elevation: '+280m / -450m',
    elevationGain: '+280m',
    elevationLoss: '-450m',
    highestPoint: '1020m s.l.m.',
    lowestPoint: '550m s.l.m.',
    highlights: [
      'Centro storico di Amandola',
      'Chiesa di Sant\'Agostino (secolo XIV)',
      'Musei civici e pinacoteca',
      'Teatro La Fenice (secolo XVIII)',
      'Panorami sulla Valle del Tenna',
      'Prodotti tipici marchigiani (salumi, formaggi, tartufi)'
    ],
    coordinates: [42.9764, 13.3568],
    startPoint: 'Madonna Ambro (Montefortino)',
    gpxUrl: '/gpx/tappa-4-ambro-amandola.gpx',
    images: [
      {
        url: '/images/tappa4-panorama-valle.jpg',
        caption: 'Vista panoramica sulla Valle del Tenna',
        alt: 'Panorama della Valle del Tenna'
      },
      {
        url: '/images/tappa4-centro-amandola.jpg',
        caption: 'Il suggestivo centro storico di Amandola',
        alt: 'Centro storico di Amandola'
      },
      {
        url: '/images/tappa4-chiesa-agostino.jpg',
        caption: 'Chiesa di Sant\'Agostino',
        alt: 'Facciata della Chiesa di Sant\'Agostino'
      },
      {
        url: '/images/tappa4-sentiero-discesa.jpg',
        caption: 'Sentiero di discesa tra i boschi',
        alt: 'Sentiero nel bosco'
      },
      {
        url: '/images/tappa4-teatro-fenice.jpg',
        caption: 'Teatro La Fenice, gioiello architettonico',
        alt: 'Teatro La Fenice'
      }
    ],
    technicalInfo: {
      terrain: [
        'Sentieri di montagna in discesa (40%)',
        'Strade sterrate (35%)',
        'Tratti asfaltati (20%)',
        'Mulattiere storiche (5%)'
      ],
      signage: 'Segnavia bianco-rosso CAI n. 147 e indicazioni per Amandola',
      waterPoints: [
        'Santuario dell\'Ambro (km 0)',
        'Fonte del Faggio (km 6)',
        'Borgolane (km 10)',
        'Amandola - centro (km 16)'
      ],
      difficulty: 'Percorso di media difficoltà prevalentemente in discesa. Richiede attenzione ai tratti ripidi che possono affaticare le ginocchia. Scarpe con buon grip consigliate.',
      recommendedPeriod: 'Aprile - Novembre (possibile anche in inverno con neve bassa)',
      warnings: [
        'Discese ripide possono affaticare le articolazioni',
        'Bastoncini da trekking molto consigliati',
        'Prestare attenzione su terreno bagnato',
        'Alcuni tratti possono essere fangosi dopo la pioggia',
        'Controllare orari di apertura musei ad Amandola'
      ]
    },
    pointsOfInterest: [
      {
        name: 'Passo della Fonte',
        description: 'Valico panoramico con vista a 360°. Punto ideale per una sosta fotografica.',
        distance: 'km 4'
      },
      {
        name: 'Bosco del Faggio Secolare',
        description: 'Area boschiva con faggi pluricentenari di dimensioni impressionanti.',
        distance: 'km 7'
      },
      {
        name: 'Borgolane',
        description: 'Piccolo borgo rurale con fontana. Architettura tradizionale marchigiana ben conservata.',
        distance: 'km 10'
      },
      {
        name: 'Porta San Giacomo',
        description: 'Antica porta d\'accesso alle mura medievali di Amandola.',
        distance: 'km 15'
      },
      {
        name: 'Piazza Risorgimento',
        description: 'Cuore del centro storico di Amandola, circondata da palazzi storici.',
        distance: 'km 16'
      },
      {
        name: 'Chiesa di Sant\'Agostino',
        description: 'Chiesa del XIV secolo con affreschi e opere d\'arte di grande valore.',
        distance: 'km 16'
      }
    ],
    accommodation: [
      {
        name: 'Hotel Paradiso',
        type: 'Albergo',
        description: 'Hotel confortevole nel centro di Amandola con camere moderne e ristorante. Ottima base per visitare il borgo.',
        contact: 'info@hotelparadisoamandola.it',
        phone: '+39 0736 847123',
        website: 'www.hotelparadisoamandola.it'
      },
      {
        name: 'B&B Le Terrazze',
        type: 'B&B',
        description: 'B&B con vista panoramica sulle montagne. Gestione familiare e colazione abbondante.',
        contact: 'leterrazze@email.it',
        phone: '+39 0736 847456'
      },
      {
        name: 'Albergo Centrale',
        type: 'Albergo',
        description: 'Albergo storico nel cuore del centro. Camere tradizionali e atmosfera autentica.',
        contact: 'centrale@amandola.it',
        phone: '+39 0736 847789'
      },
      {
        name: 'Agriturismo Valle Verde',
        type: 'Agriturismo',
        description: 'Fuori dal centro, immerso nel verde. Cucina casalinga con prodotti dell\'azienda agricola.',
        contact: 'valleverde@agriturismo.it',
        phone: '+39 333 4567890',
        website: 'www.agriturismoValleverde.it'
      }
    ]
  },
  {
    id: 5,
    slug: 'amandola-san-ruffino',
    title: 'Da Amandola a San Ruffino',
    subtitle: 'Il ritorno alle origini',
    description: 'Chiudiamo il cerchio del nostro cammino tornando a San Ruffino, il punto di partenza. Un percorso conclusivo che porta con sé le esperienze vissute, attraversando ancora una volta le dolci colline marchigiane. È il momento della riflessione finale, del bilancio spirituale di un cammino che ci ha arricchiti interiormente. Il percorso alterna tratti panoramici a passaggi nei boschi, offrendo un ultimo sguardo sui luoghi che abbiamo attraversato.',
    distance: '20 km',
    duration: '6-7 ore',
    difficulty: 'Intermedio',
    elevation: '+380m / -420m',
    elevationGain: '+380m',
    elevationLoss: '-420m',
    highestPoint: '720m s.l.m.',
    lowestPoint: '540m s.l.m.',
    highlights: [
      'Ritorno alla Chiesa di San Ruffino',
      'Panorami conclusivi sul percorso fatto',
      'Vista d\'insieme sui Monti Sibillini',
      'Borghi storici e tradizioni locali',
      'Momento di celebrazione finale',
      'Riflessione sul cammino percorso'
    ],
    coordinates: [43.0719, 13.2186],
    startPoint: 'Amandola',
    gpxUrl: '/gpx/tappa-5-amandola-san-ruffino.gpx',
    images: [
      {
        url: '/images/tappa5-partenza-amandola.jpg',
        caption: 'Partenza da Amandola all\'alba',
        alt: 'Amandola al mattino'
      },
      {
        url: '/images/tappa5-colline-panorama.jpg',
        caption: 'Vista panoramica sulle colline del percorso',
        alt: 'Panorama sulle colline marchigiane'
      },
      {
        url: '/images/tappa5-sentiero-finale.jpg',
        caption: 'L\'ultimo tratto del sentiero',
        alt: 'Sentiero tra i campi'
      },
      {
        url: '/images/tappa5-borgo-storico.jpg',
        caption: 'Borgo storico lungo il percorso',
        alt: 'Borgo medievale'
      },
      {
        url: '/images/tappa5-arrivo-san-ruffino.jpg',
        caption: 'L\'arrivo finale a San Ruffino',
        alt: 'Chiesa di San Ruffino vista dall\'arrivo'
      }
    ],
    technicalInfo: {
      terrain: [
        'Strade sterrate (40%)',
        'Sentieri collinari (35%)',
        'Tratti asfaltati secondari (20%)',
        'Mulattiere (5%)'
      ],
      signage: 'Segnavia bianco-rosso CAI n. 148 e indicazioni per San Ruffino',
      waterPoints: [
        'Fontana ad Amandola (km 0)',
        'Fonte delle Fate (km 8)',
        'Bar a Monteleone (km 12)',
        'Fontana a Casale (km 16)',
        'San Ruffino (km 20)'
      ],
      difficulty: 'Percorso di media difficoltà con alternanza di salite e discese. Richiede resistenza per la lunghezza complessiva. Adatto a chi ha completato le tappe precedenti.',
      recommendedPeriod: 'Aprile - Ottobre (evitare i mesi più caldi per la lunghezza della tappa)',
      warnings: [
        'Tappa più lunga del percorso - partire molto presto',
        'Portare scorta d\'acqua abbondante (almeno 2L)',
        'Prevedere snack energetici per il pranzo al sacco',
        'Alcuni tratti esposti al sole',
        'Bastoncini consigliati per gestire salite e discese',
        'Possibile passaggio di greggi su alcuni tratti',
        'Verificare orari di apertura Chiesa di San Ruffino per celebrazione finale'
      ]
    },
    pointsOfInterest: [
      {
        name: 'Colle della Memoria',
        description: 'Punto panoramico dove fermarsi a riflettere sul cammino percorso. Vista sui luoghi attraversati.',
        distance: 'km 5'
      },
      {
        name: 'Fonte delle Fate',
        description: 'Antica fonte con leggende locali legate a storie di fate e folletti. Acqua fresca e pura.',
        distance: 'km 8'
      },
      {
        name: 'Monteleone',
        description: 'Borgo medievale arroccato su una collina. Possibile pausa pranzo con trattorie tipiche.',
        distance: 'km 12'
      },
      {
        name: 'Cappella di Santa Maria',
        description: 'Piccola cappella campestre del XVI secolo. Luogo di sosta e preghiera.',
        distance: 'km 14'
      },
      {
        name: 'Belvedere del Ritorno',
        description: 'Punto panoramico da cui si scorge San Ruffino in lontananza. L\'emozione del ritorno.',
        distance: 'km 17'
      },
      {
        name: 'Chiesa di San Ruffino',
        description: 'Ritorno al punto di partenza. Momento di celebrazione e condivisione dell\'esperienza vissuta.',
        distance: 'km 20'
      }
    ],
    accommodation: [
      {
        name: 'Hotel San Ruffino',
        type: 'Albergo',
        description: 'Hotel tradizionale per concludere il cammino. Offre un menù speciale per i pellegrini con prodotti locali.',
        contact: 'info@hotelsanruffino.it',
        phone: '+39 0733 456789',
        website: 'www.hotelsanruffino.it'
      },
      {
        name: 'Casa del Pellegrino',
        type: 'Rifugio',
        description: 'Struttura religiosa per l\'accoglienza finale. Atmosfera di condivisione e spiritualità. Cena comunitaria.',
        contact: 'casapellegrino@parrocchia.it',
        phone: '+39 0733 456123'
      },
      {
        name: 'B&B Il Ritorno',
        type: 'B&B',
        description: 'B&B accogliente gestito da ex-pellegrini. Perfetto per celebrare la fine del cammino.',
        contact: 'ilritorno@email.it',
        phone: '+39 333 5678901'
      },
      {
        name: 'Agriturismo Terre Felici',
        type: 'Agriturismo',
        description: 'Immerso nella campagna marchigiana. Cucina tradizionale con prodotti dell\'azienda.',
        contact: 'terrefelici@agri.it',
        phone: '+39 0733 456456',
        website: 'www.agriturismoterrefelici.it'
      }
    ]
  }
];

export function getTrailStageBySlug(slug: string): TrailStage | undefined {
  return trailStages.find(stage => stage.slug === slug);
}

// Get unique starting points with their coordinates for the overview map
export interface StartPoint {
  name: string;
  coordinates: [number, number];
}

export function getUniqueStartPoints(): StartPoint[] {
  const pointsMap = new Map<string, [number, number]>();
  
  trailStages.forEach(stage => {
    if (stage.startPoint && !pointsMap.has(stage.startPoint)) {
      pointsMap.set(stage.startPoint, stage.coordinates);
    }
  });
  
  return Array.from(pointsMap.entries()).map(([name, coordinates]) => ({
    name,
    coordinates
  }));
}

export function getAllTrailSlugs(): string[] {
  return trailStages.map(stage => stage.slug);
}