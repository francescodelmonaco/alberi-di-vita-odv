'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// icons
import { ExternalLink } from 'lucide-react';
import { Partner } from '@/lib/types';

export default function PartnersCarousel() {
    // fetch partners
    const [partners, setPartners] = useState<Partner[]>([]);
    useEffect(() => {
        async function fetchPartners() {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/partners');
                if (!res.ok) throw new Error('Errore nel fetch');
                const data = await res.json();
                setPartners(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPartners();
    }, []);

    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Numero di elementi visibili per viewport
    const getItemsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3; // lg
            if (window.innerWidth >= 768) return 2;  // md
            if (window.innerWidth >= 640) return 1;  // sm
            return 1; // mobile
        }
        return 3;
    };

    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        setIsLoaded(true);
        setItemsPerView(getItemsPerView());

        const handleResize = () => {
            setItemsPerView(getItemsPerView());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Movimento continuo fluido
    useEffect(() => {
        if (!isHovered && isLoaded) {
            const interval = setInterval(() => {
                setCurrentTranslate(prev => {
                    const itemWidth = 25 / partners.length; // Larghezza di un singolo elemento
                    const newTranslate = prev + (itemWidth * 0.01); // Movimento molto più piccolo e graduale

                    // Reset quando raggiunge la fine del primo set
                    if (newTranslate >= 100) {
                        return 0;
                    }

                    return newTranslate;
                });
            }, 50); // Movimento ogni 100ms per maggiore fluidità

            return () => clearInterval(interval);
        }
    }, [isHovered, isLoaded]);

    // array per loop
    const duplicatedPartners = [...partners, ...partners, ...partners, ...partners, ...partners];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--primary-green)' }}>
                        I nostri partner
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Insieme alle realtà che condividono i nostri valori, costruiamo
                        una rete di supporto solida e duratura per la comunità bresciana.
                    </p>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Contenitore del carosello */}
                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                        <div
                            className="flex"
                            style={{
                                transform: `translateX(-${currentTranslate}%)`,
                                width: `${duplicatedPartners.length * (100 / itemsPerView)}%`,
                                transition: 'transform 0.1s linear' // Transizione molto leggera per fluidità
                            }}
                        >
                            {duplicatedPartners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 p-6"
                                    style={{ width: `${100 / duplicatedPartners.length}%` }}
                                >
                                    <div className="group h-full">
                                        <Link
                                            href={partner.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full"
                                        >
                                            <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:border-(--secondary-green) transition-all duration-300 hover:shadow-xl group-hover:shadow-2xl transform group-hover:-translate-y-1">
                                                {/* Container immagine */}
                                                <div className="relative h-24 mb-6 flex items-center justify-center bg-gray-50 rounded-lg p-4 group-hover:bg-green-50 transition-colors duration-300">
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={`http://127.0.0.1:8000/${partner.image}`}
                                                            alt={partner.name}
                                                            fill
                                                            className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Contenuto */}
                                                <div className="text-center">
                                                    <h3 className="font-semibold text-lg mb-3 transition-colors duration-300 group-hover:text-(--secondary-green)"
                                                        style={{ color: 'var(--primary-green)' }}>
                                                        {partner.name}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                                        {partner.description}
                                                    </p>

                                                    {/* Link di visita */}
                                                    <div className="flex items-center justify-center text-(--secondary-green) group-hover:text-(--primary-green) transition-colors duration-300">
                                                        <span className="text-sm font-medium">Visita il sito</span>
                                                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}