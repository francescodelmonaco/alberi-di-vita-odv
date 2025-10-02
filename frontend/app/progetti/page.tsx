import { projects } from "../../lib/data";

// components
import Hero from "../components/hero";
import ProjectCard from "../components/project-card";

export default function Progetti() {
    return (
        <div className="min-h-screen">
            <Hero
                pageName="Progetti"
                pageDescription="Scopri tutte le iniziative che abbiamo realizzato per la comunità."
            />

            <section className="py-20 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {
                        projects.map((project) => {
                            const { title, description, slug } = project;

                            return (
                                <ProjectCard
                                    key={title}
                                    title={title}
                                    description={description}
                                    slug={`/progetti/${slug}`}
                                />
                            )
                        })
                    }
                </div>
            </section >
        </div >
    );
}