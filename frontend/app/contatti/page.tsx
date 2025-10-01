import { Mail, MapPin, Phone } from 'lucide-react';
import { contacts, locations } from '@/lib/data';
import Image from 'next/image';

// img
import Logo from '../../public/logo-150x150.png'

export default function Contatti() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-10 lg:py-16 bg-(--primary-green)">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                            Contatti
                        </h1>
                        <p className="text-lg text-(--third-white) leading-relaxed">
                            Siamo qui per te. Contattaci per informazioni sui nostri progetti,
                            per diventare volontario o per qualsiasi altra necessità.
                        </p>
                    </div>
                </div>
            </section>

            {/* Numeri di telefono */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center space-x-3 mb-8">
                        <div className="w-12 h-12 bg-(--secondary-green)/10 rounded-full flex items-center justify-center">
                            <Phone className="text-(--primary-green)" size={24} />
                        </div>
                        <h3 className="text-(--primary-green) font-bold text-2xl">Numeri di telefono</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {contacts
                            .filter(contact => contact.contact.startsWith('+39'))
                            .map((contact, index) => (
                                <div key={index} className="bg-(--accent-gray) p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <h4 className="text-(--primary-green) font-semibold text-lg mb-3">{contact.name}</h4>
                                    <p className="text-gray-700 font-mono bg-white px-4 py-3 rounded-lg inline-block border border-gray-200">
                                        {contact.contact}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Email */}
            <section className="py-20 bg-(--accent-gray)">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center space-x-3 mb-8">
                        <div className="w-12 h-12 bg-(--secondary-green)/10 rounded-full flex items-center justify-center">
                            <Mail className="text-(--primary-green)" size={24} />
                        </div>
                        <h3 className="text-(--primary-green) font-bold text-2xl">Email</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {contacts
                            .filter(contact => contact.contact.includes('@'))
                            .map((contact, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <h4 className="text-(--primary-green) font-semibold text-lg mb-3">{contact.name}</h4>
                                    <p className="text-gray-700 font-mono bg-(--accent-gray) px-4 py-3 rounded-lg inline-block border border-gray-200">
                                        {contact.contact}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Sedi */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="flex justify-center items-center space-x-3 mb-8">
                            <div className="w-12 h-12 bg-(--secondary-green)/10 rounded-full flex items-center justify-center">
                                <MapPin className="text-(--primary-green)" size={24} />
                            </div>
                            <h3 className="text-(--primary-green) font-bold text-2xl">Le nostre sedi</h3>
                        </div>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Le nostre sedi sono strategicamente posizionate per servire al meglio
                            la comunità bresciana. Vieni a trovarci!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                        {locations.map((location, index) => (
                            <div key={index} className="bg-(--accent-gray) p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <h4 className="text-(--primary-green) font-semibold text-lg mb-3">{location.type}</h4>
                                <p className="text-gray-700 font-medium text-base mb-2">{location.name}</p>
                                <p className="text-gray-600 text-sm">{location.address}</p>
                                <p className="text-gray-600 text-sm">{location.cap}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border-2 border-(--primary-green)/20 shadow-xl bg-white max-w-4xl mx-auto">
                        <iframe
                            title="Mappa Sedi Alberi di Vita"
                            src="https://www.google.com/maps/d/embed?mid=1XR0grVB-icnP9tG7Mm-4mVJdWZ37URA&ehbc=2E312F&noprof=1"
                            className="w-full h-96 lg:h-[500px] border-none"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-(--accent-gray)">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center space-x-6 mb-8">
                        <figure className="w-20 h-20 rounded-full flex items-center justify-center bg-(--accent-gray)">
                            <Image
                                src={Logo}
                                alt="Logo Alberi di Vita OdV"
                                className='border-2 border-(--primary-green) rounded-full shadow-lg w-16 h-16 object-cover'
                            />
                        </figure>
                        <div className="text-left">
                            <h2 className="text-(--primary-green) font-bold text-3xl tracking-wide leading-tight">
                                Alberi di Vita
                            </h2>
                            <p className="text-(--secondary-green) text-lg font-medium mt-1">
                                Organizzazione di Volontariato
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-(--primary-green) font-semibold text-lg mb-3">Codice Fiscale</h3>
                            <p className="text-gray-700 font-mono text-xl">98192330177</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-(--primary-green) font-semibold text-lg mb-3">R.U.N.T.S.</h3>
                            <p className="text-gray-700 font-mono text-xl">85899</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section
            <section className="py-20 bg-(--primary-green)">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Hai domande?
                    </h2>
                    <p className="text-lg text-(--third-white) mb-8 leading-relaxed">
                        Non esitare a contattarci. Siamo qui per aiutarti e rispondere
                        a tutte le tue domande sui nostri progetti e attività.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="mailto:info@alberidivita.it"
                            className="bg-(--secondary-green) text-(--primary-green) px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center"
                        >
                            <Mail className="mr-2 w-5 h-5" />
                            Scrivici una email
                        </Link>
                        <Link
                            href="tel:+393929169439"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-(--primary-green) transition-all duration-200 flex items-center justify-center"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Chiamaci
                        </Link>
                    </div>
                </div>
            </section> */}
        </div>
    );
}