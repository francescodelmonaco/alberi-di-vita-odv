import { Social, Location, NavItem, ProjectCardProps } from './types';

export const navItems: NavItem[] = [
    { name: 'Chi siamo', href: '/chi-siamo' },
    { name: 'Progetti', href: '/progetti' },
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

// Funzione per creare slug dai titoli dei progetti
function slugify(title: string) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
};

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