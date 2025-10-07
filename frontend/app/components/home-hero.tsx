import Link from 'next/link';

// icons
import { ArrowRight } from 'lucide-react';

export default function HomeHero() {
    return (
        <section className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/landing-img.jpg)' }}>
            {/* black img overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        Alberi di Vita OdV
                    </h1>
                    <p className="text-xl lg:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
                        Siamo chiamati ad essere "Alberi di Vita" che assorbono l’inquinamento dell’indifferenza e restituiscono al mondo l’ossigeno dell’amore
                    </p>
                    <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
                        Papa Francesco – Assisi 20/09/2016
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/progetti"
                            className="bg-(--primary-green) text-white px-8 py-4 rounded-lg font-semibold hover:bg-(--dark-primary-green) transition-all duration-200 flex items-center justify-center group"
                        >
                            Scopri i nostri progetti
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/dona"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-(--primary-green) transition-all duration-200"
                        >
                            Sostienici
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}