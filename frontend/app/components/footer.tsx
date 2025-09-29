import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { socials } from '@/lib/data';

const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    youtube: Youtube,
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer footer-center bg-(--accent-gray) text-(--primary-green) rounded-none p-10 flex flex-col">
            {/* Social Icons */}
            <nav>
                <div className="flex space-x-4">
                    {socials.map((social) => {
                        const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                        return (
                            <Link
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-(--primary-green) hover:text-(--secondary-green) transition-all duration-300 hover:scale-110 bg-white rounded-full p-3 hover:shadow-lg border border-gray-200"
                                aria-label={social.name}
                            >
                                <IconComponent size={24} />
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Copyright */}
            <aside>
                <p className="text-(--third-green)">
                    Copyright © {currentYear} - Tutti i diritti riservati da Alberi di Vita OdV
                </p>
            </aside>
        </footer>
    );
}