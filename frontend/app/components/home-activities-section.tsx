// icons
import { Heart, Users, Handshake } from 'lucide-react';

export default function HomeActivitiesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-(--primary-green) mb-4">
                        Le nostre attività
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Ogni giorno lavoriamo per creare connessioni significative e supportare
                        la nostra comunità attraverso iniziative concrete e innovative.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="w-16 h-16 bg-(--secondary-green)/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="w-8 h-8 text-(--primary-green)" />
                        </div>
                        <h3 className="text-xl font-semibold text-(--primary-green) mb-4">
                            Sostegno agli anziani
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Programmi di accompagnamento e supporto per la terza età,
                            con attività ricreative e servizi di assistenza personalizzati.
                        </p>
                    </div>

                    <div className="text-center p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="w-16 h-16 bg-(--secondary-green)/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="w-8 h-8 text-(--primary-green)" />
                        </div>
                        <h3 className="text-xl font-semibold text-(--primary-green) mb-4">
                            Iniziative familiari
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Eventi e attività per coinvolgere tutta la famiglia,
                            creando momenti di condivisione e crescita comunitaria.
                        </p>
                    </div>

                    <div className="text-center p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="w-16 h-16 bg-(--secondary-green)/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Handshake className="w-8 h-8 text-(--primary-green)" />
                        </div>
                        <h3 className="text-xl font-semibold text-(--primary-green) mb-4">
                            Collaborazioni
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Partnership con enti locali e altre associazioni
                            per massimizzare l'impatto delle nostre iniziative.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}