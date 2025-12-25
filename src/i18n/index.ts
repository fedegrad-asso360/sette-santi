// i18n Configuration and utilities for multi-language support

export const languages = {
  it: 'Italiano',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'it';

// Get the language from the URL path
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

// Helper to use translations
export function useTranslations(lang: Language) {
  return function t(key: string): string {
    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    // Fallback to default language
    return translations[defaultLang][key] || key;
  };
}

// Translation strings
export const translations: Record<Language, Record<string, string>> = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.trails': 'Percorsi',
    'nav.saints': 'I Santi',
    'nav.blog': 'Blog',
    'nav.community': 'Community',
    'nav.booking': 'Prenota',
    
    // Homepage
    'hero.title': 'Sentiero dei Sette Santi',
    'hero.subtitle': 'Un cammino spirituale attraverso l\'Italia che unisce fede, natura e cultura, seguendo le orme di sette grandi santi della tradizione cristiana.',
    'hero.cta.discover': 'Scopri le Tappe',
    'hero.cta.book': 'Prenota il Viaggio',
    
    'intro.title': 'Un Cammino di Fede e Bellezza',
    'intro.description1': 'Il Sentiero dei Sette Santi è più di un semplice percorso escursionistico: è un\'esperienza che tocca l\'anima, attraversando i luoghi più significativi della spiritualità marchigiana.',
    'intro.description2': 'Da San Ruffino attraverso i Monti Sibillini fino al Santuario dell\'Ambro, un cammino circolare che unisce fede, natura e tradizioni locali, offrendo momenti di riflessione e meraviglia.',
    
    'stats.stages': 'Tappe',
    'stats.totalKm': 'km Totali',
    'stats.days': 'Giorni',
    
    'trails.title': 'Le Cinque Tappe',
    'trails.subtitle': 'Un percorso circolare attraverso i luoghi sacri delle Marche, tra spiritualità, natura e cultura locale.',
    
    'saints.title': 'I Sette Santi',
    'saints.subtitle': 'Sette figure spirituali che accompagnano il pellegrino lungo il cammino, custodi della fede e della tradizione marchigiana.',
    'saints.cta': 'Scopri tutti i Santi',
    
    'booking.title': 'Prenota la Tua Esperienza',
    'booking.subtitle': 'Inizia il tuo cammino spirituale e naturalistico. Scegli la modalità che preferisci per vivere questa esperienza unica.',
    'booking.individual.title': 'Cammino Individuale',
    'booking.individual.description': 'Percorri il sentiero al tuo ritmo, con supporto logistico e mappe dettagliate.',
    'booking.group.title': 'Gruppo Guidato',
    'booking.group.description': 'Unisciti a un gruppo di pellegrini con guida esperta e supporto completo.',
    'booking.premium.title': 'Esperienza Premium',
    'booking.premium.description': 'Vivi il cammino con tutti i comfort, alloggi di lusso e servizi esclusivi.',
    'booking.badge.popular': 'PIÙ RICHIESTO',
    'booking.from': 'Da',
    'booking.contact': 'Hai domande? Contattaci per una consulenza personalizzata.',
    
    // Trail details
    'trail.difficulty': 'Difficoltà',
    'trail.distance': 'Distanza',
    'trail.duration': 'Durata',
    'trail.elevation': 'Dislivello',
    'trail.highlights': 'Punti di Interesse',
    'trail.description': 'Descrizione',
    'trail.accommodation': 'Alloggi',
    'trail.download.gpx': 'Scarica traccia GPX',
    'trail.previous': 'Tappa Precedente',
    'trail.next': 'Tappa Successiva',
    
    // Common
    'common.readMore': 'Leggi di più',
    'common.backToList': 'Torna all\'elenco',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.trails': 'Trails',
    'nav.saints': 'Saints',
    'nav.blog': 'Blog',
    'nav.community': 'Community',
    'nav.booking': 'Book',
    
    // Homepage
    'hero.title': 'Path of the Seven Saints',
    'hero.subtitle': 'A spiritual journey through Italy that unites faith, nature and culture, following in the footsteps of seven great saints of Christian tradition.',
    'hero.cta.discover': 'Discover the Stages',
    'hero.cta.book': 'Book the Journey',
    
    'intro.title': 'A Journey of Faith and Beauty',
    'intro.description1': 'The Path of the Seven Saints is more than just a hiking trail: it is an experience that touches the soul, crossing the most significant places of Marche spirituality.',
    'intro.description2': 'From San Ruffino through the Sibillini Mountains to the Sanctuary of Ambro, a circular path that combines faith, nature and local traditions, offering moments of reflection and wonder.',
    
    'stats.stages': 'Stages',
    'stats.totalKm': 'Total km',
    'stats.days': 'Days',
    
    'trails.title': 'The Five Stages',
    'trails.subtitle': 'A circular route through the sacred places of Marche, between spirituality, nature and local culture.',
    
    'saints.title': 'The Seven Saints',
    'saints.subtitle': 'Seven spiritual figures who accompany the pilgrim along the way, guardians of faith and Marche tradition.',
    'saints.cta': 'Discover all Saints',
    
    'booking.title': 'Book Your Experience',
    'booking.subtitle': 'Begin your spiritual and naturalistic journey. Choose the mode you prefer to live this unique experience.',
    'booking.individual.title': 'Individual Journey',
    'booking.individual.description': 'Walk the trail at your own pace, with logistical support and detailed maps.',
    'booking.group.title': 'Guided Group',
    'booking.group.description': 'Join a group of pilgrims with expert guide and full support.',
    'booking.premium.title': 'Premium Experience',
    'booking.premium.description': 'Live the journey with all comforts, luxury accommodations and exclusive services.',
    'booking.badge.popular': 'MOST REQUESTED',
    'booking.from': 'From',
    'booking.contact': 'Have questions? Contact us for personalized consultation.',
    
    // Trail details
    'trail.difficulty': 'Difficulty',
    'trail.distance': 'Distance',
    'trail.duration': 'Duration',
    'trail.elevation': 'Elevation',
    'trail.highlights': 'Points of Interest',
    'trail.description': 'Description',
    'trail.accommodation': 'Accommodation',
    'trail.download.gpx': 'Download GPX track',
    'trail.previous': 'Previous Stage',
    'trail.next': 'Next Stage',
    
    // Common
    'common.readMore': 'Read more',
    'common.backToList': 'Back to list',
  },
  
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.trails': 'Wege',
    'nav.saints': 'Heilige',
    'nav.blog': 'Blog',
    'nav.community': 'Community',
    'nav.booking': 'Buchen',
    
    // Homepage
    'hero.title': 'Weg der Sieben Heiligen',
    'hero.subtitle': 'Eine spirituelle Reise durch Italien, die Glaube, Natur und Kultur vereint und den Spuren von sieben großen Heiligen der christlichen Tradition folgt.',
    'hero.cta.discover': 'Entdecken Sie die Etappen',
    'hero.cta.book': 'Reise buchen',
    
    'intro.title': 'Eine Reise des Glaubens und der Schönheit',
    'intro.description1': 'Der Weg der Sieben Heiligen ist mehr als nur ein Wanderweg: Es ist eine Erfahrung, die die Seele berührt und die bedeutendsten Orte der Spiritualität der Marken durchquert.',
    'intro.description2': 'Von San Ruffino durch die Sibillini-Berge bis zum Heiligtum von Ambro, ein kreisförmiger Weg, der Glaube, Natur und lokale Traditionen verbindet und Momente der Reflexion und des Staunens bietet.',
    
    'stats.stages': 'Etappen',
    'stats.totalKm': 'Gesamt km',
    'stats.days': 'Tage',
    
    'trails.title': 'Die Fünf Etappen',
    'trails.subtitle': 'Eine Rundstrecke durch die heiligen Orte der Marken, zwischen Spiritualität, Natur und lokaler Kultur.',
    
    'saints.title': 'Die Sieben Heiligen',
    'saints.subtitle': 'Sieben spirituelle Figuren, die den Pilger auf dem Weg begleiten, Hüter des Glaubens und der Tradition der Marken.',
    'saints.cta': 'Entdecken Sie alle Heiligen',
    
    'booking.title': 'Buchen Sie Ihre Erfahrung',
    'booking.subtitle': 'Beginnen Sie Ihre spirituelle und naturalistische Reise. Wählen Sie die Art, die Sie bevorzugen, um diese einzigartige Erfahrung zu leben.',
    'booking.individual.title': 'Individuelle Reise',
    'booking.individual.description': 'Wandern Sie den Weg in Ihrem eigenen Tempo, mit logistischer Unterstützung und detaillierten Karten.',
    'booking.group.title': 'Geführte Gruppe',
    'booking.group.description': 'Schließen Sie sich einer Gruppe von Pilgern mit erfahrenem Führer und voller Unterstützung an.',
    'booking.premium.title': 'Premium-Erlebnis',
    'booking.premium.description': 'Erleben Sie die Reise mit allem Komfort, luxuriösen Unterkünften und exklusiven Dienstleistungen.',
    'booking.badge.popular': 'AM MEISTEN ANGEFORDERT',
    'booking.from': 'Ab',
    'booking.contact': 'Haben Sie Fragen? Kontaktieren Sie uns für eine persönliche Beratung.',
    
    // Trail details
    'trail.difficulty': 'Schwierigkeit',
    'trail.distance': 'Entfernung',
    'trail.duration': 'Dauer',
    'trail.elevation': 'Höhenunterschied',
    'trail.highlights': 'Sehenswürdigkeiten',
    'trail.description': 'Beschreibung',
    'trail.accommodation': 'Unterkunft',
    'trail.download.gpx': 'GPX-Track herunterladen',
    'trail.previous': 'Vorherige Etappe',
    'trail.next': 'Nächste Etappe',
    
    // Common
    'common.readMore': 'Mehr lesen',
    'common.backToList': 'Zurück zur Liste',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.trails': 'Parcours',
    'nav.saints': 'Saints',
    'nav.blog': 'Blog',
    'nav.community': 'Communauté',
    'nav.booking': 'Réserver',
    
    // Homepage
    'hero.title': 'Chemin des Sept Saints',
    'hero.subtitle': 'Un voyage spirituel à travers l\'Italie qui unit foi, nature et culture, suivant les traces de sept grands saints de la tradition chrétienne.',
    'hero.cta.discover': 'Découvrir les Étapes',
    'hero.cta.book': 'Réserver le Voyage',
    
    'intro.title': 'Un Voyage de Foi et de Beauté',
    'intro.description1': 'Le Chemin des Sept Saints est plus qu\'un simple sentier de randonnée : c\'est une expérience qui touche l\'âme, traversant les lieux les plus significatifs de la spiritualité des Marches.',
    'intro.description2': 'De San Ruffino à travers les Monts Sibillins jusqu\'au Sanctuaire de l\'Ambro, un chemin circulaire qui unit foi, nature et traditions locales, offrant des moments de réflexion et d\'émerveillement.',
    
    'stats.stages': 'Étapes',
    'stats.totalKm': 'km Totaux',
    'stats.days': 'Jours',
    
    'trails.title': 'Les Cinq Étapes',
    'trails.subtitle': 'Un parcours circulaire à travers les lieux sacrés des Marches, entre spiritualité, nature et culture locale.',
    
    'saints.title': 'Les Sept Saints',
    'saints.subtitle': 'Sept figures spirituelles qui accompagnent le pèlerin le long du chemin, gardiens de la foi et de la tradition des Marches.',
    'saints.cta': 'Découvrir tous les Saints',
    
    'booking.title': 'Réservez Votre Expérience',
    'booking.subtitle': 'Commencez votre voyage spirituel et naturaliste. Choisissez le mode que vous préférez pour vivre cette expérience unique.',
    'booking.individual.title': 'Voyage Individuel',
    'booking.individual.description': 'Parcourez le sentier à votre rythme, avec un soutien logistique et des cartes détaillées.',
    'booking.group.title': 'Groupe Guidé',
    'booking.group.description': 'Rejoignez un groupe de pèlerins avec un guide expert et un soutien complet.',
    'booking.premium.title': 'Expérience Premium',
    'booking.premium.description': 'Vivez le voyage avec tout le confort, des hébergements de luxe et des services exclusifs.',
    'booking.badge.popular': 'LE PLUS DEMANDÉ',
    'booking.from': 'À partir de',
    'booking.contact': 'Vous avez des questions ? Contactez-nous pour une consultation personnalisée.',
    
    // Trail details
    'trail.difficulty': 'Difficulté',
    'trail.distance': 'Distance',
    'trail.duration': 'Durée',
    'trail.elevation': 'Dénivelé',
    'trail.highlights': 'Points d\'Intérêt',
    'trail.description': 'Description',
    'trail.accommodation': 'Hébergement',
    'trail.download.gpx': 'Télécharger trace GPX',
    'trail.previous': 'Étape Précédente',
    'trail.next': 'Étape Suivante',
    
    // Common
    'common.readMore': 'Lire la suite',
    'common.backToList': 'Retour à la liste',
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.trails': 'Rutas',
    'nav.saints': 'Santos',
    'nav.blog': 'Blog',
    'nav.community': 'Comunidad',
    'nav.booking': 'Reservar',
    
    // Homepage
    'hero.title': 'Camino de los Siete Santos',
    'hero.subtitle': 'Un viaje espiritual a través de Italia que une fe, naturaleza y cultura, siguiendo las huellas de siete grandes santos de la tradición cristiana.',
    'hero.cta.discover': 'Descubre las Etapas',
    'hero.cta.book': 'Reservar el Viaje',
    
    'intro.title': 'Un Camino de Fe y Belleza',
    'intro.description1': 'El Camino de los Siete Santos es más que una simple ruta de senderismo: es una experiencia que toca el alma, cruzando los lugares más significativos de la espiritualidad de las Marcas.',
    'intro.description2': 'Desde San Ruffino a través de las Montañas Sibillini hasta el Santuario del Ambro, un camino circular que une fe, naturaleza y tradiciones locales, ofreciendo momentos de reflexión y maravilla.',
    
    'stats.stages': 'Etapas',
    'stats.totalKm': 'km Totales',
    'stats.days': 'Días',
    
    'trails.title': 'Las Cinco Etapas',
    'trails.subtitle': 'Una ruta circular a través de los lugares sagrados de las Marcas, entre espiritualidad, naturaleza y cultura local.',
    
    'saints.title': 'Los Siete Santos',
    'saints.subtitle': 'Siete figuras espirituales que acompañan al peregrino a lo largo del camino, guardianes de la fe y la tradición de las Marcas.',
    'saints.cta': 'Descubre todos los Santos',
    
    'booking.title': 'Reserve su Experiencia',
    'booking.subtitle': 'Comience su viaje espiritual y naturalista. Elija el modo que prefiere para vivir esta experiencia única.',
    'booking.individual.title': 'Viaje Individual',
    'booking.individual.description': 'Recorra el sendero a su propio ritmo, con apoyo logístico y mapas detallados.',
    'booking.group.title': 'Grupo Guiado',
    'booking.group.description': 'Únase a un grupo de peregrinos con guía experto y apoyo completo.',
    'booking.premium.title': 'Experiencia Premium',
    'booking.premium.description': 'Viva el viaje con todas las comodidades, alojamientos de lujo y servicios exclusivos.',
    'booking.badge.popular': 'MÁS SOLICITADO',
    'booking.from': 'Desde',
    'booking.contact': '¿Tiene preguntas? Contáctenos para una consulta personalizada.',
    
    // Trail details
    'trail.difficulty': 'Dificultad',
    'trail.distance': 'Distancia',
    'trail.duration': 'Duración',
    'trail.elevation': 'Desnivel',
    'trail.highlights': 'Puntos de Interés',
    'trail.description': 'Descripción',
    'trail.accommodation': 'Alojamiento',
    'trail.download.gpx': 'Descargar track GPX',
    'trail.previous': 'Etapa Anterior',
    'trail.next': 'Etapa Siguiente',
    
    // Common
    'common.readMore': 'Leer más',
    'common.backToList': 'Volver a la lista',
  },
};
