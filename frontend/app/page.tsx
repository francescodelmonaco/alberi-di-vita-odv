import Link from 'next/link';

// components
import HomeActivitiesSection from './components/home-activities-section';
import HomeHero from './components/home-hero';
import PartnersCarousel from './components/partners-carousel';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <HomeActivitiesSection />
      <PartnersCarousel />

      {/* CTA Section */}
      <section className="py-20 bg-(--primary-green)">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Unisciti a noi
          </h2>
          <p className="text-lg text-(--third-white) mb-8 leading-relaxed">
            La nostra forza siamo le persone. Diventa volontario o sostieni
            i nostri progetti per fare la differenza nella comunità.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="bg-(--secondary-green) text-(--primary-green) px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
            >
              Diventa volontario
            </Link>
            <Link
              href="/dona"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-(--primary-green) transition-all duration-200"
            >
              Dona ora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
