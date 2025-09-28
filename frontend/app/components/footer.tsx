import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { contacts, locations, socials } from '@/lib/data';

const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    youtube: Youtube,
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-third-green border-t border-secondary-green">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo e Social */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-primary-green">
                                <span className="text-primary-green font-bold text-xl">A</span>
                            </div>
                            <h2 className="text-primary-green font-bold text-xl tracking-wide">
                                Alberi di Vita OdV
                            </h2>
                        </div>

                        <div className="flex space-x-4">
                            {socials.map((social) => {
                                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-green hover:text-secondary-green transition-colors text-2xl"
                                        aria-label={social.name}
                                    >
                                        <IconComponent size={28} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contatti */}
                    <div className="space-y-4">
                        <h3 className="text-secondary-green font-semibold text-lg mb-4">Contatti</h3>
                        {contacts.map((contact, index) => (
                            <div key={index} className="space-y-1">
                                <p className="text-brand-white font-medium text-sm">{contact.name}</p>
                                <p className="text-brand-white text-sm">{contact.contact}</p>
                            </div>
                        ))}
                    </div>

                    {/* Sedi */}
                    <div className="space-y-4">
                        <h3 className="text-secondary-green font-semibold text-lg mb-4">Sedi</h3>
                        {locations.map((location, index) => (
                            <div key={index} className="space-y-1">
                                <p className="text-brand-white font-medium text-sm">{location.type}</p>
                                <p className="text-brand-white text-sm">{location.name}</p>
                                <p className="text-brand-white text-sm">{location.address} - {location.cap}</p>
                            </div>
                        ))}

                        {/* Mappa */}
                        <div className="mt-6">
                            <iframe
                                title="Mappa Sedi Alberi di Vita"
                                src="https://www.google.com/maps/d/embed?mid=1XR0grVB-icnP9tG7Mm-4mVJdWZ37URA&ehbc=2E312F&noprof=1"
                                className="w-full h-48 border-none rounded-lg"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t-2 border-secondary-green mt-8 pt-6 text-center space-y-2">
                    <p className="text-white text-sm">
                        Copyright © {currentYear} | Tutti i diritti riservati.
                    </p>
                    <p className="text-white text-xs">
                        Codice Fiscale: 98192330177 | Registro Unico Nazionale del Terzo Settore – numero di Repertorio: 85899
                    </p>
                </div>
            </div>
        </footer>
    );
}