import Link from 'next/link';
import { ProjectCardProps } from '../../lib/types';

export default function ProjectCard({ title, description, slug }: ProjectCardProps) {
    return (
        <div className="text-center p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white flex flex-col items-center">
            <h3 className="text-xl font-semibold text-(--primary-green) mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            <Link href={slug} className="bg-(--primary-green) text-white px-6 py-2 rounded-lg font-semibold hover:bg-(--dark-primary-green) transition-all duration-200">
                Scopri di più
            </Link>
        </div>
    );
}
