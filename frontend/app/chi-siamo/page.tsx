import Hero from "../components/hero"
import Timeline from "../components/timeline"

export default function ChiSiamo() {
    return (
        <div className="pb-20 bg-(--accent-gray)">
            <div className="mb-40">
                <Hero
                    pageName="Chi siamo"
                    pageDescription="Scopri la nostra storia, la missione che ci guida e il team di volontari che rende possibile il nostro lavoro."
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Timeline />
            </div>
        </div>
    )
}