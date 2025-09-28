import { Social, Contact, Location, Friend, NavItem } from './types';

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
        name: "Segreteria Sociale:",
        contact: "+39 392 9169439"
    },
    {
        name: "Segreteria/Prenotazioni:",
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
        name: "Email Coordinamento:",
        contact: "coordinamento@alberidivita.it"
    },
    {
        name: "Email Educatrice:",
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

export const friends: Friend[] = [
    {
        name: "Fondazione Casa di Dio",
        link: "http://casadidio.eu/",
        description: "Fondazione impegnata nel supporto alla comunità locale"
    },
    {
        name: "Parrocchia di San Gaudenzio",
        link: "http://www.parrocchiasangaudenzio.org/",
        description: "Partner ecclesiastico nella zona di Brescia"
    },
    {
        name: "Fondazione ASM – Gruppo A2A",
        link: "http://www.fondasm.it/",
        description: "Fondazione per il sostegno di progetti sociali"
    },
    {
        name: "CSV Brescia",
        link: "https://www.csvlombardia.it/brescia/",
        description: "Centro Servizi per il Volontariato di Brescia"
    },
    {
        name: "Parrocchia SS. Francesco e Chiara",
        link: "https://www.diocesi.brescia.it/wd-annuario-enti/29-zona-urbana-brescia-nord-2076/santi-francesco-e-chiara-parrocchia-dei-santi-francesco-e-chiara-62/",
        description: "Parrocchia di riferimento per la sede operativa"
    },
    {
        name: "Fondazione Comunità Bresciana – Fondo Bruno Marisa Marniga",
        link: "http://www.fondazionebresciana.org/",
        description: "Fondo dedicato al supporto di iniziative sociali"
    },
    {
        name: "Gruppo Bossoni",
        link: "https://www.gruppobossoni.it/",
        description: "Partner aziendale per progetti di sostegno"
    },
    {
        name: "Rotary Club Valtrompia",
        link: "https://www.rotaryclub.it/",
        description: "Club service per il territorio"
    },
    {
        name: "Pro Loco Mompiano",
        link: "https://prolocomompiano.weebly.com/",
        description: "Associazione per la promozione del territorio"
    }
];