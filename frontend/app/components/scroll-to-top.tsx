"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            aria-label="Torna in cima"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-opacity duration-300 bg-[var(--primary-green)] border-none cursor-pointer ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <ArrowUp size={28} strokeWidth={2.2} className="text-white" />
        </button>
    );
}
