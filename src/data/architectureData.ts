export type PageId =
  | 'home'
  | 'projects'
  | 'studio'
  | 'services'
  | 'process'
  | 'testimonials'
  | 'contact';

export interface ArchitecturalProject {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  city: string;
  region: string;
  typology: 'Courtyard Villa' | 'Urban Residence' | 'Hillside Pavilion' | 'Interior Architecture';
  image: string;
  imageAlt: string;
  editorialParagraphs: string[];
  specs: {
    location: string;
    design: string;
    year: string;
    construction: string;
  };
  builtArea: string;
  plotArea: string;
  materials: string[];
  climateStrategy: string;
  coordinates: string;
  thoughtLines: [string, string, string];
  thoughtCaption: string;
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  projectId: string;
  projectTitle: string;
  location: string;
  completionYear: string;
  builtArea: string;
  typology: ArchitecturalProject['typology'];
  quote: string;
  outcomeMetric: string;
  beforeAfterSummary: string;
  image: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  label: string;
  address: string;
  coordinates: string;
  phone: string;
  email: string;
  status: string;
  activeCommissions: string;
  mapX: number; // percentage on architectural SVG map
  mapY: number;
  isHQ?: boolean;
}

export interface ServiceDiscipline {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  typicalTimeline: string;
  idealFor: string;
}

export interface ProcessPhase {
  number: string;
  title: string;
  duration: string;
  summary: string;
  keyOutputs: string[];
  siteInvolvement: string;
}

export interface MaterialSpec {
  code: string;
  name: string;
  origin: string;
  finish: string;
  thermalRole: string;
  swatchHex: string;
}

export const STUDIO_CONTACT = {
  businessName: 'ABC Architecture',
  addressLine1: 'Plot 42, Khandagiri Vihar, Phase II',
  addressLine2: 'Near Khandagiri Square, Bhubaneswar',
  statePin: 'Odisha 751030, India',
  shortLocation: 'Khandagiri, Bhubaneswar',
  coordinates: '20.2569° N, 85.7792° E',
  phone: '+91 674 238 4920',
  mobile: '+91 94370 84920',
  email: 'studio@abcarchitecture.in',
  pressEmail: 'monographs@abcarchitecture.in',
  hours: 'Mon – Sat, 09:30 – 18:30 IST',
  coaReg: 'COA / OR / 2014 / 64812',
};

export const RESIDENTIAL_PROJECTS: ArchitecturalProject[] = [
  {
    id: 'khandagiri-pavilion',
    index: '01',
    title: 'KHANDAGIRI PAVILION HOUSE',
    shortTitle: 'Khandagiri Pavilion',
    city: 'BHUBANESWAR',
    region: 'Khandagiri, Odisha',
    typology: 'Hillside Pavilion',
    image: '/src/assets/images/hero_khandagiri_residence_1795112862369.jpg',
    imageAlt: 'Cantilevered concrete and glass private residence with reflection pool at twilight in Khandagiri, Bhubaneswar',
    editorialParagraphs: [
      'SET ALONG THE ELEVATED LATERITE CONTOURS BORDERING KHANDAGIRI HILLS, THIS 7,800 SQ.FT. PRIVATE RESIDENCE BALANCES MONUMENTAL EXPOSED BOARD-FORMED CONCRETE CANTILEVERS WITH QUIET TRANSPARENCY.',
      'A 14-METER REFLECTING BASIN ANCHORS THE SOUTHERN APPROACH, DRAWING COOLING BREEZES ACROSS FLOOR-TO-CEILING LOW-IRON GLAZING WHILE SHIELDING PRIVATE LIVING GALLERIES WITH DEEP 3.6-METER STRUCTURAL OVERHANGS AND WARM BRUSHED BRASS DETAILING.'
    ],
    specs: {
      location: 'KHANDAGIRI HILLS, BHUBANESWAR, ODISHA',
      design: 'ABC ARCHITECTURE — PRINCIPAL STUDIO',
      year: '2025',
      construction: 'POST-TENSIONED EXPOSED CONCRETE, BLACK BASALT, BRUSHED BRASS'
    },
    builtArea: '7,800 sq.ft.',
    plotArea: '11,400 sq.ft.',
    materials: ['Board-Formed Concrete', 'Honed Black Basalt', 'Anodized Bronze Glazing', 'Brushed Brass Hardware'],
    climateStrategy: 'Deep 3.6m cantilevers reduce peak summer solar heat gain by 42% while maintaining unobstructed horizon views.',
    coordinates: '20.2574° N, 85.7785° E',
    thoughtLines: ['Gravity', 'Meets Silence', 'In Concrete'],
    thoughtCaption: 'Cantilevered shelter calibrated to twilight, still water, and Khandagiri stone.'
  },
  {
    id: 'chandaka-courtyard-villa',
    index: '02',
    title: 'CHANDAKA COURTYARD VILLA',
    shortTitle: 'Chandaka Courtyard',
    city: 'BHUBANESWAR',
    region: 'Chandaka Reserve Edge, Odisha',
    typology: 'Courtyard Villa',
    image: '/src/assets/images/res_courtyard_villa_1795112799341.jpg',
    imageAlt: 'Minimalist concrete courtyard villa with vertical teak timber louvers and central reflection water court',
    editorialParagraphs: [
      'ORGANIZED AROUND A STILL CENTRAL WATER COURT, THE CHANDAKA RESIDENCE REINTERPRETS TRADITIONAL ODISHA CHOWK-PLANNING THROUGH A RIGID SWISS STRUCTURAL GRID.',
      'VERTICAL BURMA TEAK LOUVERS FILTER HARSH EASTERN SUNLIGHT INTO MEASURED ARCHITECTURAL SHADOWS ACROSS RAW CONCRETE WALKWAYS, CREATING A SELF-COOLING MICROCLIMATE FOR THREE GENERATIONS.'
    ],
    specs: {
      location: 'CHANDAKA ROAD, BHUBANESWAR, ODISHA',
      design: 'ABC ARCHITECTURE — RESIDENTIAL ATELIER',
      year: '2025',
      construction: 'EXPOSED RCC FRAME, SOLID TEAK LOUVERS, GRANITE WATER COURT'
    },
    builtArea: '6,450 sq.ft.',
    plotArea: '9,200 sq.ft.',
    materials: ['Board-Formed RCC', 'Seasoned Burma Teak', 'Flamed River Granite', 'Lime-Wash Plaster'],
    climateStrategy: 'Evaporative courtyard pond paired with operable timber louvers lowers interior ambient temperature by 4.5°C.',
    coordinates: '20.3412° N, 85.7640° E',
    thoughtLines: ['Sunlight', 'Softened By', 'Still Water'],
    thoughtCaption: 'An inward sky-court cooling three generations through teak louvers and shade.'
  },
  {
    id: 'patia-basalt-monolith',
    index: '03',
    title: 'PATIA BASALT MONOLITH',
    shortTitle: 'Patia Monolith',
    city: 'BHUBANESWAR',
    region: 'Patia, Odisha',
    typology: 'Urban Residence',
    image: '/src/assets/images/res_monolith_house_1795112865025.jpg',
    imageAlt: 'Two-story dark basalt stone and crisp white architectural plaster residence with cantilevered upper terrace',
    editorialParagraphs: [
      'DESIGNED FOR A CORNER URBAN PARCEL IN PATIA, THIS TWO-LEVEL RESIDENCE JUXTAPOSES HAND-SPLIT CHARCOAL BASALT MASONRY WITH A FLOATING PURE WHITE CANTILEVERED TERRACE VOLUME.',
      'INTERIOR CIRCULATION PIVOTS AROUND A SKYLIT DOUBLE-HEIGHT FOYER, SEPARATING FORMAL RECEPTION SPACES ON THE GROUND PLANE FROM QUIET FAMILY SUITES ABOVE.'
    ],
    specs: {
      location: 'PATIA ENCLAVE, BHUBANESWAR, ODISHA',
      design: 'ABC ARCHITECTURE — URBAN HOUSING TEAM',
      year: '2024',
      construction: 'HAND-DRESSED BASALT CLADDING, MINERAL STUCCO, LAMINATED GLASS'
    },
    builtArea: '5,200 sq.ft.',
    plotArea: '6,800 sq.ft.',
    materials: ['Hand-Split Dark Basalt', 'Pure White Mineral Plaster', 'Clear Low-Iron Balustrades', 'Natural Sandstone Pavers'],
    climateStrategy: 'Double-skin thermal cavity walls and north-facing clerestories optimize daylighting without glare.',
    coordinates: '20.3533° N, 85.8266° E',
    thoughtLines: ['Shadow', 'Carved Into', 'Dark Basalt'],
    thoughtCaption: 'Hand-split charcoal stone plinths balanced beneath a weightless white terrace.'
  },
  {
    id: 'dhauli-ridge-pavilion',
    index: '04',
    title: 'DHAULI RIDGE PAVILION',
    shortTitle: 'Dhauli Ridge',
    city: 'BHUBANESWAR',
    region: 'Dhauli Foothills, Odisha',
    typology: 'Hillside Pavilion',
    image: '/src/assets/images/res_terrace_pavilion_1795112801414.jpg',
    imageAlt: 'Hillside concrete, natural sandstone, and bronze-framed glass residential pavilion overlooking forested hills',
    editorialParagraphs: [
      'STEPPING GENTLY ALONG A SLOPING SANDSTONE ESCARPMENT NEAR DHAULI, THE RESIDENCE ANCHORS ITSELF INTO THE TERRAIN WITH DRY-LAID LOCAL STONE CORES AND SLENDER BRONZE-FRAMED GLASS PAVILIONS.',
      'AN EXPANSIVE LIMESTONE TERRACE EXTENDS THE LIVING AND DINING AXIS DIRECTLY INTO THE TREE CANOPY, FRAMING UNINTERRUPTED VALLEY SUNRISES.'
    ],
    specs: {
      location: 'DHAULI RIDGE, BHUBANESWAR, ODISHA',
      design: 'ABC ARCHITECTURE — LANDSCAPE & FORM',
      year: '2024',
      construction: 'LOCAL SANDSTONE CORES, RAW CONCRETE SLABS, BRONZE GLAZING'
    },
    builtArea: '8,100 sq.ft.',
    plotArea: '18,500 sq.ft.',
    materials: ['Odisha Buff Sandstone', 'Architectural Raw Concrete', 'Bronze Structural Frames', 'Honed Kota Stone'],
    climateStrategy: 'Rainwater catchment terraces feed a 45,000-liter subterranean cistern supporting native hillside landscaping.',
    coordinates: '20.1923° N, 85.8395° E',
    thoughtLines: ['Anchored', 'In Sandstone', 'Open To Sky'],
    thoughtCaption: 'Stepping quietly along the ridge so the forested horizon completes every room.'
  },
  {
    id: 'jaydev-vihar-timber-house',
    index: '05',
    title: 'JAYDEV VIHAR TIMBER HOUSE',
    shortTitle: 'Jaydev Vihar House',
    city: 'BHUBANESWAR',
    region: 'Jaydev Vihar, Odisha',
    typology: 'Urban Residence',
    image: '/src/assets/images/res_timber_facade_1795113175635.jpg',
    imageAlt: 'Upscale three-story urban townhouse with vertical timber screens over charcoal stone facade and planted balconies',
    editorialParagraphs: [
      'ON A TIGHT 2,800 SQ.FT. INFILL PLOT IN CENTRAL JAYDEV VIHAR, THIS THREE-STORY TOWNHOUSE TRANSFORMS URBAN DENSITY INTO A LAYERED VERTICAL GARDEN.',
      'PRECISION VERTICAL TIMBER SCREENS SHIELD THE WEST FACADE OVER A TEXTURED CHARCOAL STONE PLINTH, WHILE DEEP PLANTED LOGGIAS PROVIDE PRIVACY AND ACOUSTIC CALM FROM THE AVENUE.'
    ],
    specs: {
      location: 'JAYDEV VIHAR, BHUBANESWAR, ODISHA',
      design: 'ABC ARCHITECTURE — PRINCIPAL STUDIO',
      year: '2024',
      construction: 'CHARCOAL STONE PLINTH, STRUCTURAL STEEL, VERTICAL TIMBER FIN SCREEN'
    },
    builtArea: '4,650 sq.ft.',
    plotArea: '2,800 sq.ft.',
    materials: ['Split Charcoal Granite', 'Thermo-Treated Ash Louvers', 'Black Powder-Coated Steel', 'Recessed Planter Troughs'],
    climateStrategy: 'Stacked skylight atrium acts as a passive solar chimney drawing warm air vertically out of the compact footprint.',
    coordinates: '20.2996° N, 85.8174° E',
    thoughtLines: ['Rhythm', 'Of Timber', 'And Sanctuary'],
    thoughtCaption: 'Transforming compact urban density into layered vertical daylight and calm.'
  },
  {
    id: 'infocity-colonnade-residence',
    index: '06',
    title: 'INFOCITY COLONNADE RESIDENCE',
    shortTitle: 'Infocity Colonnade',
    city: 'BHUBANESWAR',
    region: 'Infocity Avenue, Odisha',
    typology: 'Courtyard Villa',
    image: '/src/assets/images/res_pool_courtyard_1795112804779.jpg',
    imageAlt: 'Minimalist private residence with linear lap pool framed by dark granite colonnades and pure white stucco walls',
    editorialParagraphs: [
      'DEFINED BY A 22-METER MONOLITHIC DARK GRANITE COLONNADE, THIS PRIVATE VILLA ESTABLISHES A CALM ARCHITECTURAL PROCESSIONS ALONG A MIRROR-STILL LAP POOL.',
      'PURE WHITE LIME-PLASTER PAVILIONS OPEN COMPLETELY ONTO TIMBER DECKS, PAIRING CLASSICAL PROPORTIONAL ORDER WITH CONTEMPORARY TROPICAL LIVABILITY.'
    ],
    specs: {
      location: 'INFOCITY AVENUE, BHUBANESWAR, ODISHA',
      design: 'ABC ARCHITECTURE — RESIDENTIAL ATELIER',
      year: '2023',
      construction: 'HONED BLACK GRANITE COLONNADE, WHITE LIME STUCCO, TEAK DECKING'
    },
    builtArea: '7,100 sq.ft.',
    plotArea: '12,000 sq.ft.',
    materials: ['Honed Black Granite', 'Pure White Lime Stucco', 'Oiled Teak Decking', 'Minimalist Slim-Line Aluminum'],
    climateStrategy: 'East-west colonnade shades the primary pool court throughout afternoon hours, reducing glare across interior galleries.',
    coordinates: '20.3471° N, 85.8078° E',
    thoughtLines: ['Honest', 'Proportion', 'In Reflection'],
    thoughtCaption: 'A 22-meter granite colonnade turning daily movement into serene ritual.'
  },
  {
    id: 'sailashree-penthouse-gallery',
    index: '07',
    title: 'SAILASHREE PENTHOUSE GALLERY',
    shortTitle: 'Sailashree Penthouse',
    city: 'BHUBANESWAR',
    region: 'Sailashree Vihar, Odisha',
    typology: 'Interior Architecture',
    image: '/src/assets/images/res_penthouse_gallery_1795112861941.jpg',
    imageAlt: 'Minimalist luxury dining gallery with monolithic honed black marble table and slender brushed gold linear pendant light',
    editorialParagraphs: [
      'A COMPLETE SPATIAL RECONFIGURATION OF A 4,200 SQ.FT. SKYLINE PENTHOUSE, STRIPPED BACK TO PURE GEOMETRIC PLANES OF HAND-TROWELED LIME PLASTER AND HONED NERO MARQUINA MARBLE.',
      'CUSTOM BRUSHED GOLD LINEAR LUMINAIRES AND FLOOR-TO-CEILING BLACKENED STEEL GLAZING CREATE A GALLERY-GRADE ATMOSPHERE FOR ART COLLECTION AND INTIMATE ENTERTAINING.'
    ],
    specs: {
      location: 'SAILASHREE VIHAR, BHUBANESWAR, ODISHA',
      design: 'ABC ARCHITECTURE — INTERIOR DIVISION',
      year: '2025',
      construction: 'NERO MARQUINA MONOLITH, LIME PLASTER, CUSTOM BRUSHED BRASS LIGHTING'
    },
    builtArea: '4,200 sq.ft.',
    plotArea: 'Penthouse Floorplate',
    materials: ['Nero Marquina Marble', 'Hand-Troweled Lime Plaster', 'Brushed Architectural Brass', 'Smoked White Oak'],
    climateStrategy: 'Acoustic lime plaster and solar-control triple glazing deliver whisper-quiet interior comfort 12 stories above grade.',
    coordinates: '20.3264° N, 85.8105° E',
    thoughtLines: ['Quietude', 'Of Plaster', 'And Brass'],
    thoughtCaption: 'Stripped back to pure geometric planes, honed black marble, and warm gold light.'
  },
  {
    id: 'nandankanan-laterite-retreat',
    index: '08',
    title: 'NANDANKANAN LATERITE RETREAT',
    shortTitle: 'Nandankanan Retreat',
    city: 'BHUBANESWAR',
    region: 'Nandankanan Belt, Odisha',
    typology: 'Hillside Pavilion',
    image: '/src/assets/images/res_garden_retreat_1795112938648.jpg',
    imageAlt: 'Stone, concrete, and timber residential sanctuary nestled in tropical foliage with laterite stepping stones at dusk',
    editorialParagraphs: [
      'TUCKED AMONG MATURE TROPICAL CANOPY NEAR NANDANKANAN, THIS SINGLE-LEVEL SANCTUARY CELEBRATES ODISHA’S INDIGENOUS HAND-CUT LATERITE AND BASALT MASONRY BENEATH A FLOATING TIMBER-LINED ROOF.',
      'CORNER SLIDING GLASS WALLS RETRACT COMPLETELY INTO STONE POCKETS, DISSOLVING THE THRESHOLD BETWEEN THE WARM INTERIOR SALON AND THE MONSOON GARDEN.'
    ],
    specs: {
      location: 'NANDANKANAN ROAD, BHUBANESWAR, ODISHA',
      design: 'ABC ARCHITECTURE — PRINCIPAL STUDIO',
      year: '2023',
      construction: 'HAND-CUT LATERITE, EXPOSED CONCRETE FASCIA, BURMA TEAK SOFFITS'
    },
    builtArea: '3,950 sq.ft.',
    plotArea: '14,200 sq.ft.',
    materials: ['Khandagiri Laterite Stone', 'Exposed Concrete', 'Teak Ceiling Soffits', 'Rough-Cut Basalt Paving'],
    climateStrategy: 'Elevated plinth and 2.4m overhanging eaves protect stonework from heavy coastal monsoons while inviting cross-ventilation.',
    coordinates: '20.3958° N, 85.8260° E',
    thoughtLines: ['Rooted', 'In Odisha’s', 'Living Earth'],
    thoughtCaption: 'Hand-cut laterite masonry and deep teak eaves crafted for monsoon permanence.'
  }
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'test-01',
    clientName: 'Dr. Siddharth Mohanty & Ananya Mohanty',
    role: 'Cardiothoracic Surgeon & Art Patron',
    organization: 'Private Residence Commission',
    projectId: 'khandagiri-pavilion',
    projectTitle: 'Khandagiri Pavilion House',
    location: 'Khandagiri, Bhubaneswar',
    completionYear: '2025',
    builtArea: '7,800 sq.ft.',
    typology: 'Hillside Pavilion',
    quote: 'ABC Architecture approached our sloped Khandagiri site with the discipline of structural engineers and the sensibility of museum curators. Every millimeter of concrete alignment, brass reveal, and solar overhang was drawn before excavation began.',
    outcomeMetric: '38% lower summer cooling load vs. previous villa; delivered within 2.4% of initial budget over 18 months.',
    beforeAfterSummary: 'Transformed an uneven 11,400 sq.ft. laterite hillside plot into a serene cantilevered two-level home with zero structural compromises.',
    image: '/src/assets/images/hero_khandagiri_residence_1795112862369.jpg'
  },
  {
    id: 'test-02',
    clientName: 'Rajeshwar Patnaik',
    role: 'Managing Director',
    organization: 'Kalinga Precision Alloys Pvt. Ltd.',
    projectId: 'chandaka-courtyard-villa',
    projectTitle: 'Chandaka Courtyard Villa',
    location: 'Chandaka, Bhubaneswar',
    completionYear: '2025',
    builtArea: '6,450 sq.ft.',
    typology: 'Courtyard Villa',
    quote: 'We wanted a multigenerational home that felt unmistakably modern yet stayed cool during 44°C Bhubaneswar summers. The central water court and teak louver system ABC designed completely transformed how our family inhabits the house from morning to evening.',
    outcomeMetric: '4.5°C measured drop in courtyard ambient heat; completed 3 weeks ahead of handover schedule.',
    beforeAfterSummary: 'Replaced a conventional closed-box villa brief with an inward-looking courtyard sanctuary balancing complete privacy and cross-ventilation.',
    image: '/src/assets/images/res_courtyard_villa_1795112799341.jpg'
  },
  {
    id: 'test-03',
    clientName: 'Meenakshi & Vikramaditya Das',
    role: 'Founding Partners',
    organization: 'Eastern Maritime Logistics',
    projectId: 'patia-basalt-monolith',
    projectTitle: 'Patia Basalt Monolith',
    location: 'Patia, Bhubaneswar',
    completionYear: '2024',
    builtArea: '5,200 sq.ft.',
    typology: 'Urban Residence',
    quote: 'Their blueprint documentation is extraordinary. Our structural contractors repeatedly remarked that ABC Architecture produced the clearest working drawings they had executed in twenty years. The basalt and white plaster facade still stops neighbors every week.',
    outcomeMetric: 'Zero structural rework orders across 16 months of construction; 100% Vastu-aligned room zoning.',
    beforeAfterSummary: 'Elevated a standard urban corner plot into a sculptural two-story landmark with acoustic calm and effortless maintenance.',
    image: '/src/assets/images/res_monolith_house_1795112865025.jpg'
  },
  {
    id: 'test-04',
    clientName: 'Prof. Debashis Tripathy',
    role: 'Chair of Economics & Author',
    organization: 'Private Library & Residence',
    projectId: 'jaydev-vihar-timber-house',
    projectTitle: 'Jaydev Vihar Timber House',
    location: 'Jaydev Vihar, Bhubaneswar',
    completionYear: '2024',
    builtArea: '4,650 sq.ft.',
    typology: 'Urban Residence',
    quote: 'Building on a tight 2,800 sq.ft. central Bhubaneswar plot felt daunting until ABC Architecture proposed the vertical timber louver screen and skylight atrium. Our home feels twice its footprint, bathed in diffused daylight without harsh afternoon heat.',
    outcomeMetric: 'Natural daylight autonomy across 86% of daytime hours; 3 recessed sky-gardens integrated.',
    beforeAfterSummary: 'Reimagined an older narrow family parcel into a light-filled three-story urban townhouse housing a 4,000-volume library.',
    image: '/src/assets/images/res_timber_facade_1795113175635.jpg'
  },
  {
    id: 'test-05',
    clientName: 'Sandeep & Ritika Sahoo',
    role: 'Chief Executive Officer',
    organization: 'Utkal Bio-Med Ventures',
    projectId: 'infocity-colonnade-residence',
    projectTitle: 'Infocity Colonnade Residence',
    location: 'Infocity Avenue, Bhubaneswar',
    completionYear: '2023',
    builtArea: '7,100 sq.ft.',
    typology: 'Courtyard Villa',
    quote: 'From the first charcoal-and-brass material board at their Khandagiri studio to final landscape lighting calibration, ABC Architecture upheld relentless restraint. Nothing feels ostentatious, yet every proportion feels timeless.',
    outcomeMetric: 'Featured in Indian Architectural Monograph 2024; 100% turnkey architectural & interior delivery.',
    beforeAfterSummary: 'Unified a 12,000 sq.ft. flat parcel around a 22-meter dark granite colonnade and reflection lap pool.',
    image: '/src/assets/images/res_pool_courtyard_1795112804779.jpg'
  },
  {
    id: 'test-06',
    clientName: 'Niharika & Subrat Senapati',
    role: 'Director of Operations',
    organization: 'Bayshore Hospitality Group',
    projectId: 'sailashree-penthouse-gallery',
    projectTitle: 'Sailashree Penthouse Gallery',
    location: 'Sailashree Vihar, Bhubaneswar',
    completionYear: '2025',
    builtArea: '4,200 sq.ft.',
    typology: 'Interior Architecture',
    quote: 'We commissioned ABC Architecture to completely gut and re-architect our top-floor residence. The bespoke Nero Marquina dining monolith and brushed gold lighting channels brought museum-level quietude to our daily living.',
    outcomeMetric: 'Completed in 7 months from demolition to art installation; 28% acoustic reduction measured indoors.',
    beforeAfterSummary: 'Converted a fragmented 5-bedroom builder shell into a cohesive, gallery-grade charcoal, stone, and brass penthouse.',
    image: '/src/assets/images/res_penthouse_gallery_1795112861941.jpg'
  }
];

export const OFFICE_DIRECTORY: OfficeLocation[] = [
  {
    id: 'bbsr-hq',
    city: 'BHUBANESWAR',
    label: 'HEADQUARTERS — KHANDAGIRI',
    address: 'Plot 42, Khandagiri Vihar, Near Khandagiri Square, Bhubaneswar, Odisha 751030',
    coordinates: '20.2569° N, 85.7792° E',
    phone: '+91 674 238 4920',
    email: 'studio@abcarchitecture.in',
    status: 'PRINCIPAL STUDIO & MATERIAL LIBRARY',
    activeCommissions: '14 ACTIVE RESIDENCES',
    mapX: 62,
    mapY: 54,
    isHQ: true
  },
  {
    id: 'kolkata',
    city: 'KOLKATA',
    label: 'EASTERN REGIONAL DESK',
    address: 'Suite 6B, Loudon Street, Park Street Precinct, Kolkata 700017',
    coordinates: '22.5489° N, 88.3563° E',
    phone: '+91 33 4062 8190',
    email: 'kolkata@abcarchitecture.in',
    status: 'PRIVATE VILLAS & HERITAGE RETROFITS',
    activeCommissions: '5 ACTIVE RESIDENCES',
    mapX: 67,
    mapY: 48
  },
  {
    id: 'bengaluru',
    city: 'BENGALURU',
    label: 'SOUTHERN PROJECT OFFICE',
    address: 'Level 3, Lavelle Road, Shanthala Nagar, Bengaluru 560001',
    coordinates: '12.9716° N, 77.5946° E',
    phone: '+91 80 4128 3340',
    email: 'bengaluru@abcarchitecture.in',
    status: 'COURTYARD HOMES & PAVILIONS',
    activeCommissions: '4 ACTIVE RESIDENCES',
    mapX: 52,
    mapY: 73
  },
  {
    id: 'mumbai',
    city: 'MUMBAI',
    label: 'WESTERN CLIENT LIAISON',
    address: 'Kala Ghoda Chambers, Fort, Mumbai 400001',
    coordinates: '18.9281° N, 72.8321° E',
    phone: '+91 22 4971 2080',
    email: 'mumbai@abcarchitecture.in',
    status: 'PENTHOUSE INTERIORS & COASTAL VILLAS',
    activeCommissions: '3 ACTIVE COMMISSIONS',
    mapX: 43,
    mapY: 59
  },
  {
    id: 'singapore',
    city: 'SINGAPORE',
    label: 'INTERNATIONAL ADVISORY',
    address: '80 Robinson Road, #14-02, Singapore 068898',
    coordinates: '1.2789° N, 103.8502° E',
    phone: '+65 6814 2905',
    email: 'global@abcarchitecture.in',
    status: 'TROPICAL RESIDENTIAL COLLABORATIONS',
    activeCommissions: '2 ADVISORY PROJECTS',
    mapX: 83,
    mapY: 82
  }
];

export const SERVICE_DISCIPLINES: ServiceDiscipline[] = [
  {
    number: '01',
    title: 'Private Residential Architecture',
    subtitle: 'Ground-Up Villas, Courtyard Homes & Estate Residences',
    description:
      'Complete architectural conception and structural coordination for bespoke single-family and multigenerational residences across Bhubaneswar, coastal Odisha, and select Indian cities. Every residence is calibrated to solar orientation, monsoon resilience, and Vastu-harmonious spatial order.',
    deliverables: [
      'Site topography, solar path & microclimate analysis',
      'Architectural concept models & 3D spatial daylight studies',
      'BDA / BMC statutory approval drawings & structural coordination',
      'Full 1:20 construction working drawings & site supervision'
    ],
    typicalTimeline: '14 – 22 Months (Design to Handover)',
    idealFor: 'Private plots from 2,400 sq.ft. to 25,000+ sq.ft.'
  },
  {
    number: '02',
    title: 'Interior Architecture & Spatial Joinery',
    subtitle: 'Monolithic Stonework, Custom Brass Millwork & Lighting',
    description:
      'Architecture-led interiors that reject superficial decoration in favor of enduring material honesty. We detail every ceiling cove, concealed pivot door, stone slab joint, and brushed brass fixture as an inseparable extension of the building grid.',
    deliverables: [
      'Complete interior spatial re-planning & reflected ceiling grids',
      'Bespoke furniture, stone monolith & architectural millwork drawings',
      'Layered architectural & art-gallery lighting specification',
      'Curated material procurement & on-site craft quality audits'
    ],
    typicalTimeline: '6 – 10 Months',
    idealFor: 'New residences, luxury penthouses & architectural renovations'
  },
  {
    number: '03',
    title: 'Landscape & Water Court Architecture',
    subtitle: 'Reflection Basins, Laterite Terraces & Native Tropical Canopies',
    description:
      'Outdoor rooms designed with the same precision as interior salons. Our studio integrates reflection pools, basalt colonnades, native Odisha flora, and passive rainwater harvesting into seamless indoor-outdoor residential thresholds.',
    deliverables: [
      'Hardscape grading, natural stone paving & boundary architecture',
      'Linear lap pools, reflection courts & acoustic water features',
      'Climate-resilient native planting schedules & monsoon drainage',
      'Low-glare exterior architectural & garden illumination plans'
    ],
    typicalTimeline: 'Integrated with Building Schedule (4 – 8 Months)',
    idealFor: 'Courtyard villas, hillside estates & farm sanctuaries'
  },
  {
    number: '04',
    title: 'Turnkey Structural & Acoustic Advisory',
    subtitle: 'Pre-Purchase Plot Feasibility, Engineering & Cost Governance',
    description:
      'Strategic technical guidance for discerning homeowners acquiring complex urban or sloped parcels in Khandagiri, Chandaka, or coastal corridors. We align structural engineers, MEP consultants, and master contractors under a single disciplined specification.',
    deliverables: [
      'Pre-acquisition plot feasibility & FAR/setback modeling',
      'Bill of Quantities (BOQ), tender evaluation & contractor vetting',
      'Bi-weekly Khandagiri studio site inspections & concrete pours audit',
      'Post-occupancy thermal comfort & maintenance dossier'
    ],
    typicalTimeline: 'Retained Across Project Lifecycle',
    idealFor: 'NRI homeowners & high-complexity architectural builds'
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    number: '01',
    title: 'Site Study & Spatial Brief',
    duration: 'Weeks 01 – 04',
    summary:
      'Every commission begins on the physical site—mapping sun angles, prevailing Bay of Bengal breeze vectors, soil contours, neighborhood sightlines, and family rituals into a precise architectural program.',
    keyOutputs: [
      'Measured Topographic & Solar Orientation Dossier',
      'Vastu & Functional Zoning Matrix',
      'Preliminary Built-Up Area & Budget Framework'
    ],
    siteInvolvement: 'On-site survey in Bhubaneswar / site region + 2 principal studio workshops at Khandagiri.'
  },
  {
    number: '02',
    title: 'Schematic Massing & Swiss Grid',
    duration: 'Weeks 05 – 10',
    summary:
      'We establish the structural grid, proportion ratios, courtyard voids, and primary facade volumes using physical scale models, monochrome elevation studies, and photorealistic light simulations.',
    keyOutputs: [
      '1:100 Architectural Floor Plans, Sections & Elevations',
      'Daylight, Shadow & Cross-Ventilation Simulation',
      'Primary Material Palette Board (Stone, Concrete, Timber, Brass)'
    ],
    siteInvolvement: 'Material library review at Khandagiri HQ with physical stone and metal samples.'
  },
  {
    number: '03',
    title: 'Design Development & Engineering',
    duration: 'Weeks 11 – 18',
    summary:
      'Architectural intent is locked into structural steel/concrete geometry, concealed HVAC ducting, plumbing shafts, and electrical automation grids—eliminating costly on-site improvisation.',
    keyOutputs: [
      'BDA / Municipal Statutory Submission Drawings',
      'Integrated Structural, MEP & Rainwater Engineering Set',
      'Detailed Bill of Quantities (BOQ) for Transparent Tendering'
    ],
    siteInvolvement: 'Consultant coordination & contractor pre-qualification interviews.'
  },
  {
    number: '04',
    title: 'Construction Blueprints & Detailing',
    duration: 'Weeks 19 – 24',
    summary:
      'Our studio issues exhaustive Good-for-Construction (GFC) blueprint sets detailing every window mullion, staircase nosing, tile alignment, and brass reveal at 1:20 and 1:5 scale.',
    keyOutputs: [
      'Complete GFC Architectural & Interior Working Drawings',
      'Custom Joinery, Glazing & Stone-Cutting Schedules',
      'Lighting Fixture & Architectural Hardware Specification'
    ],
    siteInvolvement: 'Full-scale concrete formwork & stone cladding mockups approved on site.'
  },
  {
    number: '05',
    title: 'Site Supervision & Monograph Handover',
    duration: 'Construction Duration',
    summary:
      'Principal architects conduct scheduled milestone inspections—from foundation layout and exposed concrete pours to final lighting calibration—ensuring built reality honors every line on the blueprint.',
    keyOutputs: [
      'Milestone Quality & Alignment Audit Reports',
      'Final Snagging, Lighting Aiming & Acoustic Testing',
      'As-Built Architectural Dossier & Care Manual'
    ],
    siteInvolvement: 'Bi-weekly principal architect site visits & dedicated Khandagiri project lead.'
  }
];

export const MATERIAL_LIBRARY: MaterialSpec[] = [
  {
    code: 'MAT-01',
    name: 'Board-Formed Architectural Concrete',
    origin: 'Cast In-Situ, Odisha',
    finish: 'Raw Matte Timber-Grain Impression',
    thermalRole: 'High thermal mass stabilizes interior diurnal temperature swings.',
    swatchHex: '#7A7975'
  },
  {
    code: 'MAT-02',
    name: 'Hand-Dressed Charcoal Basalt',
    origin: 'Eastern Ghats Quarries',
    finish: 'Honed Interior / Split-Face Plinth',
    thermalRole: 'Dense monsoon-impervious stone envelope with timeless dark patina.',
    swatchHex: '#232325'
  },
  {
    code: 'MAT-03',
    name: 'Brushed Architectural Brass',
    origin: 'Custom Architectural Foundry',
    finish: 'Satin Unlacquered Living Gold Patina',
    thermalRole: 'Precision shadow-gap reveals, handrails, and custom luminaire accents.',
    swatchHex: '#C5A059'
  },
  {
    code: 'MAT-04',
    name: 'Khandagiri Cut Laterite',
    origin: 'Khordha & Khandagiri Belt',
    finish: 'Wire-Brushed Natural Pore Texture',
    thermalRole: 'Breathable regional stone ideal for garden walls and shaded porticoes.',
    swatchHex: '#6E473B'
  },
  {
    code: 'MAT-05',
    name: 'Pure Mineral Lime Plaster',
    origin: 'Artisanal Slaked Lime Mix',
    finish: 'Hand-Troweled Eggshell White',
    thermalRole: 'Vapor-permeable matte finish preventing coastal humidity blistering.',
    swatchHex: '#EAE8E3'
  }
];

export const STUDIO_LEADERSHIP = [
  {
    name: 'Ar. Abhinav Chakraborty',
    role: 'Founding Principal Architect',
    credentials: 'B.Arch (IIT Kharagpur), M.Arch (ETH Zurich) · COA Registered',
    bio: 'Leads conceptual architecture, Swiss-grid proportioning, and hillside residential masterplans from the Khandagiri headquarters. Over 16 years directing private residences across India and Southeast Asia.'
  },
  {
    name: 'Ar. Bhavna Mohapatra',
    role: 'Partner — Interior Architecture & Materiality',
    credentials: 'B.Arch (CET Bhubaneswar), M.Des (CEPT Ahmedabad)',
    bio: 'Directs bespoke residential interiors, stone monolith detailing, acoustic lime surfaces, and the studio’s curated material and brushed-brass hardware archive.'
  },
  {
    name: 'Er. Chiranjeev Nayak',
    role: 'Director — Structural Integration & Site Execution',
    credentials: 'M.Tech Structural Engineering (NIT Rourkela)',
    bio: 'Oversees post-tensioned cantilevers, exposed board-formed concrete formwork quality, cyclone-grade coastal structural envelopes, and on-site engineering governance.'
  }
];

export const STUDIO_RECOGNITION = [
  { year: '2025', award: 'IIA Eastern Zone Residential Excellence Award', project: 'Khandagiri Pavilion House', category: 'Private Villa' },
  { year: '2025', award: 'Architectural Digest India — Rising Coastal Practices', project: 'Chandaka Courtyard Villa', category: 'Studio Monograph' },
  { year: '2024', award: 'JK Architect of the Year — Commendation', project: 'Patia Basalt Monolith', category: 'Urban Residence' },
  { year: '2024', award: 'Indian Concrete Institute — Best Exposed Concrete Residence', project: 'Dhauli Ridge Pavilion', category: 'Structural Craft' },
  { year: '2023', award: 'Odisha Design Forum — Climate-Responsive Architecture Prize', project: 'Nandankanan Laterite Retreat', category: 'Sustainability' }
];
