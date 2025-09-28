import Link from 'next/link';
import { Instagram, Facebook, Youtube, Mail, MapPin } from 'lucide-react';
import { contacts, locations, socials } from '@/lib/data';
import Image from 'next/image';

// img
import Logo from '../../public/logo-150x150.png'

const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    youtube: Youtube,
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-third-green">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Logo e Social */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <figure className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                                <Image
                                    src={Logo}
                                    alt="Logo Alberi di Vita OdV"
                                    className='border-2 border-primary-green rounded-full shadow-lg w-14 h-14 object-cover'
                                />
                            </figure>
                            <div>
                                <h2 className="text-primary-green font-bold text-2xl tracking-wide leading-tight">
                                    Alberi di Vita
                                </h2>
                                <p className="text-secondary-green text-sm font-medium mt-1">
                                    Organizzazione di Volontariato
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex space-x-5">
                                {socials.map((social) => {
                                    const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                                    return (
                                        <Link
                                            key={social.name}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-green hover:text-secondary-green transition-all duration-300 hover:scale-110 bg-white/10 rounded-full p-3 hover:bg-white/20 backdrop-blur-sm"
                                            aria-label={social.name}
                                        >
                                            <IconComponent size={24} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Contatti */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <Mail className="text-secondary-green" size={24} />
                            <h3 className="text-secondary-green font-semibold text-xl">Contatti</h3>
                        </div>
                        <div className="space-y-4">
                            {contacts.map((contact, index) => (
                                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <p className="text-brand-white font-semibold text-base mb-2">{contact.name}</p>
                                    <p className="text-brand-white/90 text-sm font-mono bg-white/10 px-3 py-2 rounded-md inline-block">
                                        {contact.contact}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sedi */}
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-3 mb-6">
                            <MapPin className="text-secondary-green" size={24} />
                            <h3 className="text-secondary-green font-semibold text-xl">Sedi</h3>
                        </div>
                        <div className="space-y-4 mb-8">
                            {locations.map((location, index) => (
                                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <p className="text-secondary-green font-semibold text-base mb-2">{location.type}</p>
                                    <p className="text-brand-white font-medium text-sm mb-1">{location.name}</p>
                                    <p className="text-brand-white/80 text-sm">{location.address} - {location.cap}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mappa */}
                        <div className="flex-1 min-h-0">
                            <div className="relative overflow-hidden rounded-xl border-2 border-white/20 shadow-lg h-full min-h-[300px]">
                                <iframe
                                    title="Mappa Sedi Alberi di Vita"
                                    src="https://www.google.com/maps/d/embed?mid=1XR0grVB-icnP9tG7Mm-4mVJdWZ37URA&ehbc=2E312F&noprof=1"
                                    className="w-full h-full border-none"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-third-green/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t-2 border-secondary-green/30 mt-16 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-brand-white font-medium text-base mb-1">
                                Copyright © {currentYear} Alberi di Vita OdV
                            </p>
                            <p className="text-brand-white/70 text-sm">
                                Tutti i diritti riservati
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-brand-white/80 text-sm leading-relaxed">
                                <span className="font-semibold">Codice Fiscale:</span> 98192330177
                            </p>
                            <p className="text-brand-white/80 text-sm leading-relaxed">
                                <span className="font-semibold">RUNTS:</span> 85899
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}