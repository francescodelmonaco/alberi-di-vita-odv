import { projects } from "../../../lib/data";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return <div>Progetto non trovato</div>;
    }

    return (
        <main className="max-w-2xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-4 text-(--primary-green) text-center">{project.title}</h1>
            <p className="text-gray-700 text-lg mb-8 text-justify">{project.description}</p>
        </main>
    );
}