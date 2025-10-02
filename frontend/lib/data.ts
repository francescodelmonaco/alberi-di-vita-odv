import { title } from 'process';
import { Social, Contact, Location, Partner, NavItem, Event, ProjectCardProps } from './types';
import { Users, Heart, Handshake, Star, HousePlus, Hospital } from 'lucide-react';

export const navItems: NavItem[] = [
    { name: 'Chi siamo', href: '/chi-siamo' },
    { name: 'Progetti', href: '/progetti' },
    { name: 'Eventi', href: '/eventi' },
    { name: 'Contatti', href: '/contatti' },
    { name: 'Dona', href: '/dona' },
];

export const socials: Social[] = [
    {
        name: "Instagram",
        link: "https://www.instagram.com/alberidivita",
        icon: "instagram"
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/alberidivita",
        icon: "facebook"
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com/channel/UCPg16_-rDuVVGMZCgpvXUzA",
        icon: "youtube"
    },
];

export const contacts: Contact[] = [
    {
        name: "Segreteria sociale:",
        contact: "+39 392 9169439"
    },
    {
        name: "Segreteria/prenotazioni:",
        contact: "+39 350 0097205"
    },
    {
        name: "Email info associazione:",
        contact: "info@alberidivita.it"
    },
    {
        name: "Email contabilità:",
        contact: "contabilita@alberidivita.it"
    },
    {
        name: "Email presidente:",
        contact: "presidente@alberidivita.it"
    },
    {
        name: "Email coordinamento:",
        contact: "coordinamento@alberidivita.it"
    },
    {
        name: "Email educatrice:",
        contact: "educativa@alberidivita.it"
    },
];

export const locations: Location[] = [
    {
        type: "Sede Legale",
        name: "c/o R.S.A. Luzzago",
        address: "Via della Lama, 67",
        cap: "25133 Brescia"
    },
    {
        type: "Sede Operativa",
        name: "Centro Aperto Sandro Marelli",
        address: "Piazzetta Santi Francesco e Chiara, 1",
        cap: "25133 Brescia"
    }
];

export const friends: Partner[] = [
    {
        name: "Fondazione Casa di Dio",
        link: "http://casadidio.eu/",
        image: "/partners/fondazione-casa-di-dio.jpg",
        description: "Fondazione impegnata nel supporto alla comunità locale"
    },
    {
        name: "Parrocchia di San Gaudenzio",
        link: "http://www.parrocchiasangaudenzio.org/",
        image: "/partners/parrocchia-san-gaudenzio.png",
        description: "Partner ecclesiastico nella zona di Brescia"
    },
    {
        name: "Fondazione ASM – Gruppo A2A",
        link: "http://www.fondasm.it/",
        image: "/partners/fondazione-asm.webp",
        description: "Fondazione per il sostegno di progetti sociali"
    },
    {
        name: "CSV Brescia",
        link: "https://www.csvlombardia.it/brescia/",
        image: "/partners/csv-brescia.gif",
        description: "Centro Servizi per il Volontariato di Brescia"
    },
    {
        name: "Parrocchia SS. Francesco e Chiara",
        link: "https://www.diocesi.brescia.it/wd-annuario-enti/29-zona-urbana-brescia-nord-2076/santi-francesco-e-chiara-parrocchia-dei-santi-francesco-e-chiara-62/",
        image: "/partners/parrocchia-santi-francesco-e-chiara.png",
        description: "Parrocchia di riferimento per la sede operativa"
    },
    {
        name: "Fondazione Comunità Bresciana – Fondo Bruno Marisa Marniga",
        link: "http://www.fondazionebresciana.org/",
        image: "/partners/fondazione-della-comunità-bresciana.webp",
        description: "Fondo dedicato al supporto di iniziative sociali"
    },
    {
        name: "Gruppo Bossoni",
        link: "https://www.gruppobossoni.it/",
        image: "/partners/gruppo-bossoni.png",
        description: "Partner aziendale per progetti di sostegno"
    },
    {
        name: "Rotary Club Valtrompia",
        link: "https://www.rotaryclub.it/",
        image: "/partners/rotary-club-valtrompia.png",
        description: "Club service per il territorio"
    },
    {
        name: "Pro Loco Mompiano",
        link: "https://prolocomompiano.weebly.com/",
        image: "/partners/pro-loco-mompiano.png",
        description: "Associazione per la promozione del territorio"
    },
    {
        name: "Lasercom",
        link: "https://lasercom.it/",
        image: "/partners/lasercom.svg",
        description: "Partner tecnologico e di comunicazione"
    },
    {
        name: "Club Don Abele Rodella Stocchetta",
        link: "https://google.it/",
        image: "",
        description: ""
    },
    {
        name: "Fondo per il sostegno all’infanzia Vincenzo e Itala Visenzi",
        link: "https://google.it/",
        image: "",
        description: ""
    }
];

export const events: Event[] = [
    {
        anno: '2016',
        titolo: 'Fondazione Alberi di Vita OdV',
        descrizione:
            'Un gruppo di amici con esperienze di volontariato decide di dedicarsi alla terza e quarta età, nasce Alberi di Vita OdV nel quartiere Mompiano a Brescia.',
        icona: HousePlus,
    },
    {
        anno: '2017',
        titolo: 'Crescita e nuovi volontari',
        descrizione:
            'La famiglia di Alberi di Vita si allarga: nuovi amici e volontari si uniscono, l’associazione diventa ente capofila del Punto Comunità Mompiano.',
        icona: Users,
    },
    {
        anno: '2018',
        titolo: 'Primo Grest estivo per anziani',
        descrizione:
            'Viene organizzato il primo Grest estivo per anziani: sei settimane di attività pomeridiane, dal lunedì al venerdì, con grande successo e partecipazione.',
        icona: Star,
    },
    {
        anno: '2019',
        titolo: 'Progetto Buon Vicinato',
        descrizione:
            'Nasce il progetto “Buon Vicinato”: compagnia agli anziani soli, ausili per la deambulazione, accompagnamento per visite mediche e commissioni quotidiane.',
        icona: Handshake,
    },
    {
        anno: '2020',
        titolo: 'Supporto durante la pandemia',
        descrizione:
            'L’associazione si attiva per sostenere la comunità durante l’emergenza Covid-19, offrendo servizi di spesa, farmaci e supporto telefonico.',
        icona: Hospital,
    },
    {
        anno: '2021',
        titolo: 'Nuove collaborazioni e progetti',
        descrizione:
            'Professionisti donano le loro competenze, nascono nuove collaborazioni e progetti per ampliare l’impatto sociale dell’associazione.',
        icona: Handshake,
    },
    {
        anno: '2022',
        titolo: 'Oltre 480 associati',
        descrizione:
            'L’associazione raggiunge oltre 480 associati di tutte le età, diventando un punto di riferimento per la comunità bresciana.',
        icona: Users,
    },
    {
        anno: '2023',
        titolo: 'Centro Aperto Sandro Marelli',
        descrizione:
            'Apre il Centro Aperto Sandro Marelli, nuova sede operativa per attività e servizi rivolti agli anziani e alle famiglie.',
        icona: Star,
    },
    {
        anno: '2024',
        titolo: 'Innovazione e nuovi progetti',
        descrizione:
            'L’associazione continua a innovare, promuovendo nuovi progetti e iniziative per il benessere della comunità.',
        icona: Heart,
    },
];

// Funzione per creare slug dai titoli dei progetti
function slugify(title: string) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export const projects: ProjectCardProps[] = [
    {
        title: "Adotta un Albero",
        description: "Un progetto per promuovere la cura dell'ambiente attraverso l'adozione simbolica di alberi.",
        slug: slugify("Adotta un Albero"),
    },
    {
        title: "Alberi per le Famiglie",
        description: "Sostegno alle famiglie con iniziative di aggregazione e supporto sociale.",
        slug: slugify("Alberi per le Famiglie"),
    },
    {
        title: "Alberincanto",
        description: "Eventi e attività per bambini e famiglie all'insegna della natura e della creatività.",
        slug: slugify("Alberincanto"),
    },
    {
        title: "Nonno in affido",
        description: "Un progetto di affido sociale per favorire relazioni intergenerazionali.",
        slug: slugify("Nonno in affido"),
    },
    {
        title: "Magazzino alimentare e Spesa sospesa",
        description: "Distribuzione di generi alimentari e raccolta solidale per chi è in difficoltà.",
        slug: slugify("Magazzino alimentare e Spesa sospesa"),
    },
    {
        title: "Magazzino ausili",
        description: "Supporto con ausili sanitari e assistenziali per persone fragili.",
        slug: slugify("Magazzino ausili"),
    },
    {
        title: "Pronto Alberi di Vita",
        description: "Servizio di ascolto e supporto telefonico per chi ha bisogno di aiuto.",
        slug: slugify("Pronto Alberi di Vita"),
    },
    {
        title: "Relazione d’aiuto telefonica",
        description: "Un servizio di relazione d'aiuto per chi vive momenti di solitudine o difficoltà.",
        slug: slugify("Relazione d’aiuto telefonica"),
    },
    {
        title: "Servizio spesa a domicilio",
        description: "Consegna della spesa a domicilio per anziani e persone in difficoltà.",
        slug: slugify("Servizio spesa a domicilio"),
    },
    {
        title: "Sportello di Aiuto Psicologico",
        description: "Supporto psicologico gratuito per chi ne ha bisogno.",
        slug: slugify("Sportello di Aiuto Psicologico"),
    },
    {
        title: "Sportello di ASCOLTO Counselling",
        description: "Counselling e ascolto per affrontare momenti di difficoltà personale.",
        slug: slugify("Sportello di ASCOLTO Counselling"),
    },
    {
        title: "Sportello di ASCOLTO Psicologico",
        description: "Uno spazio di ascolto psicologico per la comunità.",
        slug: slugify("Sportello di ASCOLTO Psicologico"),
    },
    {
        title: "Trasporto e accompagnamento visite ospedale",
        description: "Servizio di trasporto e accompagnamento per visite mediche e ospedaliere.",
        slug: slugify("Trasporto e accompagnamento visite ospedale"),
    },
    {
        title: "Un’estate diversa",
        description: "Attività estive per bambini e ragazzi, all'insegna della socialità e del divertimento.",
        slug: slugify("Un’estate diversa"),
    },
    {
        title: "Volontari a domicilio",
        description: "Volontari che offrono supporto diretto a domicilio per chi ne ha bisogno.",
        slug: slugify("Volontari a domicilio"),
    },
    {
        title: "Volontari volentieri",
        description: "Promozione del volontariato e coinvolgimento attivo nella comunità.",
        slug: slugify("Volontari volentieri"),
    },
];