export interface Social {
    name: string;
    link: string;
    icon: string;
}

export interface Contact {
    name: string;
    contact: string;
}

export interface Location {
    type: string;
    name: string;
    address: string;
    cap: string;
}

export interface Friend {
    name: string;
    link: string;
    image?: string;
    description?: string;
}

export interface NavItem {
    name: string;
    href: string;
}

export interface Activity {
    name: string;
    description: string;
    image?: string;
    link?: string;
}

export interface Event {
    anno: string,
    titolo: string,
    descrizione: string,
    icona: string,
}