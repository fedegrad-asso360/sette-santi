export interface Saint {
  id: number;
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  history: string;
  church: {
    name: string;
    location: string;
    description: string;
    architecture?: string;
    period?: string;
  };
  coordinates: [number, number];
  festivity?: string;
  images: string[];
}

export const saints: Saint[] = [
  {
    id: 1,
    slug: 'san-ruffino',
    name: 'San Ruffino',
    title: 'San Ruffino',
    subtitle: 'Il Vescovo Martire',
    description: 'San Ruffino, vescovo e martire, è il patrono di Amandola. La sua figura rappresenta l\'inizio del cammino spirituale lungo il Sentiero dei Sette Santi.',
    history: `San Ruffino fu vescovo e martire cristiano del IV secolo. Secondo la tradizione, giunse nelle Marche per diffondere il Vangelo durante le persecuzioni romane. La sua predicazione fu accolta con fervore dalle popolazioni locali, ma attirò anche l'ira delle autorità imperiali.

Ruffino fu catturato e sottoposto a torture per indurlo a rinunciare alla fede cristiana. Rimase però saldo nelle sue convinzioni e venne martirizzato. Il suo corpo fu custodito con venerazione dai primi cristiani della zona.

La sua figura divenne centrale per le comunità cristiane delle Marche, simbolo di coraggio e fede incrollabile. Nel corso dei secoli, numerose chiese e santuari furono dedicati al suo nome, testimoniando la profonda devozione popolare.`,
    church: {
      name: 'Chiesa di San Ruffino',
      location: 'Amandola (FM)',
      description: 'La Chiesa di San Ruffino ad Amandola è un edificio di grande valore storico e spirituale, punto di partenza del nostro cammino. Conserva al suo interno preziose testimonianze artistiche e devozionali legate al santo.',
      architecture: 'La chiesa presenta una struttura romanica con successive modifiche rinascimentali. La facciata sobria introduce a un interno raccolto e suggestivo.',
      period: 'Epoca medievale con rimaneggiamenti successivi'
    },
    coordinates: [43.0719, 13.2186],
    festivity: '18 agosto',
    images: ['https://placehold.co/1200x600/5e3b20/ffffff?text=San+Ruffino']
  },
  {
    id: 2,
    slug: 'san-giacomo',
    name: 'San Giacomo',
    title: 'San Giacomo',
    subtitle: 'Il Pellegrino Apostolo',
    description: 'San Giacomo Maggiore, apostolo di Cristo e patrono dei pellegrini, rappresenta il cammino e la ricerca spirituale che ogni pellegrino intraprende.',
    history: `San Giacomo, detto il Maggiore per distinguerlo dall'altro apostolo omonimo, fu uno dei dodici apostoli di Gesù. Figlio di Zebedeo e fratello di Giovanni Evangelista, fu tra i discepoli più vicini al Maestro, presente in momenti cruciali come la Trasfigurazione.

Dopo la morte e resurrezione di Cristo, Giacomo si dedicò alla predicazione del Vangelo. Secondo la tradizione, giunse fino in Spagna, dove avrebbe evangelizzato vaste regioni prima di tornare in Giudea.

Fu il primo apostolo a subire il martirio, decapitato per ordine di Erode Agrippa intorno al 44 d.C. Le sue reliquie, secondo la tradizione, furono portate in Spagna e oggi riposano a Santiago de Compostela, meta del celebre cammino di pellegrinaggio.

La sua figura è strettamente legata al tema del pellegrinaggio e del cammino spirituale, rendendo la sua presenza particolarmente significativa nel nostro percorso.`,
    church: {
      name: 'Chiesa di San Giacomo',
      location: 'Lungo il percorso',
      description: 'Una piccola chiesa dedicata all\'apostolo pellegrino, luogo di sosta e preghiera per i camminatori. L\'edificio conserva l\'atmosfera intima e raccolta tipica dei santuari di pellegrinaggio.',
      architecture: 'Architettura rurale con elementi gotici, caratterizzata da semplicità e funzionalità.',
      period: 'XV secolo'
    },
    coordinates: [42.9950, 13.2400],
    festivity: '25 luglio',
    images: ['https://placehold.co/1200x600/5e3b20/ffffff?text=San+Giacomo']
  },
  {
    id: 3,
    slug: 'santa-maria-di-marte',
    name: 'Santa Maria di Marte',
    title: 'Santa Maria di Marte',
    subtitle: 'La Madonna della Montagna',
    description: 'Il Santuario di Santa Maria di Marte è un luogo di particolare devozione mariana, immerso nella natura dei Monti Sibillini.',
    history: `Il culto di Santa Maria di Marte affonda le sue radici in tempi antichi, quando le popolazioni montane cercavano protezione e conforto nella figura della Vergine Maria. Il nome "di Marte" potrebbe derivare dalla trasformazione cristiana di un antico luogo di culto pagano.

Secondo le tradizioni locali, la Madonna apparve a un pastore o a un eremita in questi luoghi impervi, chiedendo che le fosse dedicato un luogo di preghiera. Da allora, il santuario divenne meta di pellegrinaggi, specialmente per le popolazioni delle montagne circostanti.

Durante i secoli, il santuario ha rappresentato un punto di riferimento spirituale per le comunità montane, un luogo dove portare preoccupazioni, ringraziamenti e suppliche. Molti ex voto testimoniano la profonda devozione e le grazie ricevute.

Il santuario è stato anche luogo di rifugio nei momenti difficili della storia locale, un punto dove la fede si faceva più forte proprio nelle difficoltà.`,
    church: {
      name: 'Santuario di Santa Maria di Marte',
      location: 'Monti Sibillini',
      description: 'Il santuario si trova in una posizione panoramica e isolata, circondato dalla natura incontaminata dei Sibillini. L\'edificio conserva un\'atmosfera di profonda spiritualità e pace.',
      architecture: 'Architettura montana semplice, con elementi che richiamano lo stile romanico rurale.',
      period: 'XIII-XIV secolo'
    },
    coordinates: [42.9800, 13.2600],
    festivity: '8 settembre (Natività della Beata Vergine Maria)',
    images: ['https://placehold.co/1200x600/5e3b20/ffffff?text=Santa+Maria+di+Marte']
  },
  {
    id: 4,
    slug: 'san-giovanni',
    name: 'San Giovanni',
    title: 'San Giovanni',
    subtitle: 'Il Battista del Deserto',
    description: 'San Giovanni Battista, il precursore di Cristo, rappresenta la preparazione spirituale e la penitenza che caratterizzano il cammino del pellegrino.',
    history: `San Giovanni Battista, cugino di Gesù, fu il precursore del Messia, colui che preparò la strada al Signore predicando conversione e amministrando il battesimo di penitenza nel fiume Giordano.

Nato da Zaccaria ed Elisabetta in età avanzata, come narrato nei Vangeli, Giovanni trascorse parte della sua vita nel deserto, conducendo una vita ascetica e di preghiera. La sua predicazione richiamava alla conversione e alla preparazione per l\'arrivo del Regno di Dio.

Fu Giovanni a battezzare Gesù nel Giordano, riconoscendone la natura divina. La sua testimonianza a Cristo fu totale e coraggiosa, tanto da costargli la vita: fu decapitato per ordine di Erode Antipa.

La figura del Battista è fondamentale nel cristianesimo, rappresentando la transizione tra Antico e Nuovo Testamento, tra attesa e compimento. Per i pellegrini, Giovanni incarna la preparazione spirituale, l\'ascolto della Parola e la conversione del cuore.`,
    church: {
      name: 'Chiesa di San Giovanni',
      location: 'Lungo il percorso',
      description: 'Un edificio sacro che invita alla riflessione e alla conversione del cuore. Il luogo ispira al silenzio e alla meditazione, richiamando l\'esperienza del Battista nel deserto.',
      architecture: 'Stile romanico con affreschi medievali che raffigurano scene della vita del santo.',
      period: 'XII secolo'
    },
    coordinates: [42.9700, 13.2750],
    festivity: '24 giugno (Natività di San Giovanni Battista)',
    images: ['https://placehold.co/1200x600/5e3b20/ffffff?text=San+Giovanni']
  },
  {
    id: 5,
    slug: 'santo-marco',
    name: 'Santo Marco',
    title: 'Santo Marco',
    subtitle: 'L\'Evangelista',
    description: 'San Marco Evangelista, autore del secondo Vangelo, rappresenta la testimonianza scritta della Parola di Dio e la diffusione del messaggio cristiano.',
    history: `San Marco, chiamato anche Giovanni Marco, fu discepolo degli apostoli e compagno di viaggio di San Paolo e San Pietro. La tradizione lo identifica come l\'autore del secondo Vangelo, considerato il più antico tra i Vangeli canonici.

Marco fu testimone della prima comunità cristiana di Gerusalemme. Accompagnò Paolo e Barnaba nel primo viaggio missionario, pur separandosene in seguito. Più tardi divenne stretto collaboratore di Pietro a Roma, fungendo da interprete e trascrittore della predicazione dell\'apostolo.

Il Vangelo secondo Marco è caratterizzato da un stile diretto e vivace, che presenta Gesù come il Messia sofferente e il Figlio di Dio. Marco pose particolare attenzione agli atti e ai miracoli di Cristo, dipingendo un ritratto dinamico e potente del Salvatore.

Secondo la tradizione, Marco fondò la Chiesa di Alessandria d\'Egitto e vi subì il martirio. Le sue reliquie furono poi traslate a Venezia, dove divenne il santo patrono della città.`,
    church: {
      name: 'Chiesa di Santo Marco',
      location: 'Lungo il percorso',
      description: 'Un luogo dedicato all\'evangelista, dove la Parola di Dio risuona attraverso i secoli. La chiesa custodisce antichi codici e testimonianze della tradizione evangelica.',
      architecture: 'Elementi bizantini mescolati a forme romaniche, con un suggestivo campanile.',
      period: 'XIV secolo'
    },
    coordinates: [42.9650, 13.2850],
    festivity: '25 aprile',
    images: ['https://placehold.co/1200x600/5e3b20/ffffff?text=Santo+Marco']
  },
  {
    id: 6,
    slug: 'san-chiodo',
    name: 'San Chiodo',
    title: 'San Chiodo',
    subtitle: 'Il Santo del Chiodo Sacro',
    description: 'San Chiodo rappresenta una devozione particolare legata a una reliquia della Passione di Cristo, simbolo del sacrificio supremo.',
    history: `La devozione a San Chiodo è legata al culto delle reliquie della Passione di Cristo, in particolare ai chiodi della crocifissione. Questa forma di venerazione si diffuse nel Medioevo quando, secondo la tradizione, Sant\'Elena, madre dell\'imperatore Costantino, ritrovò la vera Croce e i chiodi della crocifissione a Gerusalemme.

I chiodi divennero oggetto di particolare venerazione in quanto strumenti del sacrificio di Cristo. Numerose chiese e santuari in Europa conservano reliquie identificate come chiodi sacri, ognuna con la propria storia e tradizione locale.

Nel territorio marchigiano, il culto del Chiodo Sacro si intrecciò con la spiritualità locale, diventando simbolo della partecipazione alla Passione di Cristo. La devozione invitava i fedeli a meditare sul dolore e l\'amore di Cristo crocifisso.

Il santuario dedicato a San Chiodo lungo il nostro percorso divenne luogo di pellegrinaggio per coloro che cercavano conforto nella sofferenza, trovando nel sacrificio di Cristo la forza per affrontare le prove della vita.`,
    church: {
      name: 'Santuario di San Chiodo',
      location: 'Lungo il percorso',
      description: 'Un luogo di particolare intensità spirituale, dove i pellegrini si soffermano a meditare sulla Passione di Cristo. Il santuario conserva ex voto e testimonianze di fede.',
      architecture: 'Architettura tardo-medievale con elementi gotici, caratterizzata da un\'atmosfera raccolta e penitenziale.',
      period: 'XV secolo'
    },
    coordinates: [42.9600, 13.2950],
    festivity: '3 maggio (Festa della Santa Croce)',
    images: ['https://placehold.co/1200x600/5e3b20/ffffff?text=San+Chiodo']
  },
  {
    id: 7,
    slug: 'san-leonardo',
    name: 'San Leonardo',
    title: 'San Leonardo',
    subtitle: 'Il Liberatore',
    description: 'San Leonardo, protettore dei prigionieri e degli afflitti, conclude il nostro percorso spirituale come simbolo di liberazione e redenzione.',
    history: `San Leonardo di Noblac fu un monaco franco del VI secolo, nato da una famiglia nobile presso la corte di Clodoveo I. Convertito al cristianesimo da San Remigio, vescovo di Reims, rinunciò alla carriera militare per dedicarsi alla vita religiosa.

Leonardo ottenne dal re il privilegio di liberare i prigionieri che avesse incontrato, diventando così il protettore dei carcerati e degli schiavi. Si ritirò poi in un eremo vicino a Limoges, dove condusse vita ascetica e di preghiera.

La sua fama di taumaturgo e liberatore si diffuse rapidamente. Secondo le leggende, molti prigionieri che invocavano il suo nome venivano miracolosamente liberati. Catene spezzate e ceppi furono portati come ex voto al suo santuario.

Il culto di San Leonardo si diffuse in tutta Europa durante il Medioevo, particolarmente lungo le vie di pellegrinaggio. La sua figura rappresenta la liberazione non solo fisica ma anche spirituale, il passaggio dalle catene del peccato alla libertà dei figli di Dio.

Il Santuario di San Leonardo lungo il nostro percorso segna la conclusione del cammino spirituale, invitando il pellegrino a riflettere sulla liberazione interiore ottenuta attraverso il percorso di fede.`,
    church: {
      name: 'Santuario di San Leonardo',
      location: 'Fine del percorso',
      description: 'Il santuario rappresenta la meta finale del cammino spirituale. Immerso nella natura dei Sibillini, offre un luogo di pace e riflessione conclusiva. Numerosi ex voto testimoniano le grazie ricevute.',
      architecture: 'Complesso monastico con chiesa romanica, chiostro e celle monastiche. L\'architettura riflette la spiritualità benedettina.',
      period: 'XI-XII secolo con ampliamenti successivi'
    },
    coordinates: [42.9864, 13.2700],
    festivity: '6 novembre',
    images: ['https://placehold.co/1200x600/5e3b20/ffffff?text=San+Leonardo']
  }
];

/**
 * Helper function per recuperare un santo tramite slug
 */
export function getSaintBySlug(slug: string): Saint | undefined {
  return saints.find(saint => saint.slug === slug);
}

/**
 * Helper function per recuperare tutti i santi
 */
export function getAllSaints(): Saint[] {
  return saints;
}
