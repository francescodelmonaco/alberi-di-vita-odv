import Timeline from "../components/timeline"

export default function About() {
    return (
        <div className="pb-20 bg-white">
            {/* Hero Section */}
            <section className="py-10 mb-40 lg:py-16 bg-(--primary-green)">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                            La nostra storia
                        </h1>
                        <p className="text-lg text-(--third-white) leading-relaxed">
                            Dal 2016 Alberi di Vita OdV cresce e si evolve grazie all’impegno di volontari e amici, diventando un punto di riferimento per la comunità bresciana.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Timeline />
            </div>
        </div>
    )
}