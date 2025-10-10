export interface Social {
    name: string;
    link: string;
    icon: string;
}

export interface PhoneNumber {
    name: string;
    number: string;
}

export interface Email {
    name: string;
    email: string;
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

export interface Partner {
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
    year: string,
    name: string,
    description: string,
    icon: any,
}

export interface ProjectCardProps {
    title: string;
    description: string;
    slug: string;
}