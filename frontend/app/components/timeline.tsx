"use client";

import { useEffect, useState } from "react";
import { Event } from "@/lib/types";

// icons
import { Users, Heart, Handshake, Star, HousePlus, Hospital } from 'lucide-react';

const iconMap = {
    Users,
    Heart,
    Handshake,
    Star,
    HousePlus,
    Hospital,
};

export default function Timeline() {
    // fetch eventi
    const [events, setEvents] = useState<Event[]>([]);
    useEffect(() => {
        async function fetchEvents() {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/events');
                if (!res.ok) throw new Error('Errore nel fetch');
                const data = await res.json();
                setEvents(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEvents();
    }, []);
    return (
        <div className="relative mb-20">
            {/* Linea centrale timeline continua */}
            <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-(--primary-green) -translate-x-1/2 z-0" />
            <ul className="space-y-24">
                {events.map((event, index) => {
                    const Icon = iconMap[event.icon as keyof typeof iconMap];
                    const isLeft = index % 2 === 0;
                    return (
                        <li key={index} className="relative flex flex-col md:flex-row items-center justify-center min-h-[120px]">
                            {/* Icona centrale sopra la linea */}
                            <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-20">
                                <span className="w-16 h-16 bg-(--primary-green) rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                    <Icon className="w-8 h-8 text-white" />
                                </span>
                            </div>
                            {/* Card alternata */}
                            <div className={`w-full z-10 ${isLeft ? 'md:pr-8 md:justify-end md:flex' : 'md:pl-8 md:justify-start md:flex'} -mt-23`}>
                                <div className={`bg-white p-6 rounded-xl shadow border border-gray-100 max-w-md mx-auto md:mx-0 ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                    <h3 className="text-xl text-center font-bold text-(--primary-green) mb-5">{event.name}</h3>
                                    <time className={`block text-xl text-center text-(--secondary-green) font-bold mb-5`}>{event.year}</time>
                                    <p className="text-gray-700 leading-relaxed text-justify">{event.description}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {/* Linea tratteggiata dopo l'ultimo evento */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-0 w-1 h-16 border-l-2 border-2 border-dashed border-(--primary-green)" />
        </div>
    );
}