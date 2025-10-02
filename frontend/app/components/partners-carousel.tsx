'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { friends } from '@/lib/data';

export default function PartnersCarousel() {
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
                    const itemWidth = 25 / friends.length; // Larghezza di un singolo elemento
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
    const duplicatedFriends = [...friends, ...friends, ...friends, ...friends, ...friends];

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
                                width: `${duplicatedFriends.length * (100 / itemsPerView)}%`,
                                transition: 'transform 0.1s linear' // Transizione molto leggera per fluidità
                            }}
                        >
                            {duplicatedFriends.map((friend, index) => (
                                <div
                                    key={`${friend.name}-${index}`}
                                    className="flex-shrink-0 p-6"
                                    style={{ width: `${100 / duplicatedFriends.length}%` }}
                                >
                                    <div className="group h-full">
                                        <Link
                                            href={friend.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full"
                                        >
                                            <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:border-(--secondary-green) transition-all duration-300 hover:shadow-xl group-hover:shadow-2xl transform group-hover:-translate-y-1">
                                                {/* Container immagine */}
                                                <div className="relative h-24 mb-6 flex items-center justify-center bg-gray-50 rounded-lg p-4 group-hover:bg-green-50 transition-colors duration-300">
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={friend.image || '/friends/default.png'}
                                                            alt={friend.name}
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
                                                        {friend.name}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                                        {friend.description}
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