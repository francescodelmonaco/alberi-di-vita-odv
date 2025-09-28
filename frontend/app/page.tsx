import Link from 'next/link';
import { ArrowRight, Heart, Users, Handshake } from 'lucide-react';
import { friends } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-gray to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-green mb-6 leading-tight">
              Alberi di Vita OdV
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              Un'associazione di volontariato nata nel cuore di Brescia per rispondere
              all'appello di Papa Francesco. Ci dedichiamo al sostegno della comunità locale,
              con particolare attenzione agli anziani e alle famiglie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/progetti"
                className="bg-primary-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center group"
              >
                Scopri i nostri progetti
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/dona"
                className="border-2 border-primary-green text-primary-green px-8 py-4 rounded-lg font-semibold hover:bg-primary-green hover:text-white transition-all duration-200"
              >
                Sostienici
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Attività Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-green mb-4">
              Le nostre attività
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ogni giorno lavoriamo per creare connessioni significative e supportare
              la nostra comunità attraverso iniziative concrete e innovative.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-secondary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-primary-green mb-4">
                Sostegno agli anziani
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Programmi di accompagnamento e supporto per la terza età,
                con attività ricreative e servizi di assistenza personalizzati.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-secondary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-primary-green mb-4">
                Iniziative familiari
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eventi e attività per coinvolgere tutta la famiglia,
                creando momenti di condivisione e crescita comunitaria.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-secondary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-primary-green mb-4">
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

      {/* Partners Section */}
      <section className="py-20 bg-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-green mb-4">
              I nostri partner
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Insieme alle realtà che condividono i nostri valori, costruiamo
              una rete di supporto solida e duratura per la comunità bresciana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friends.map((friend, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <Link
                  href={friend.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h3 className="font-semibold text-primary-green mb-3 group-hover:text-secondary-green transition-colors">
                    {friend.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {friend.description}
                  </p>
                  <div className="flex items-center text-primary-green group-hover:text-secondary-green transition-colors">
                    <span className="text-sm font-medium">Visita il sito</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Unisciti a noi
          </h2>
          <p className="text-lg text-brand-white mb-8 leading-relaxed">
            La nostra forza siamo le persone. Diventa volontario o sostieni
            i nostri progetti per fare la differenza nella comunità.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="bg-secondary-green text-primary-green px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Diventa volontario
            </Link>
            <Link
              href="/dona"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-green transition-all duration-200"
            >
              Dona ora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
