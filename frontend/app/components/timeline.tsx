import { events } from "../../lib/data";

export default function Timeline() {
    return (
        <div className="relative mb-20">
            {/* Linea centrale timeline continua */}
            <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-(--primary-green) -translate-x-1/2 z-0" />
            <ul className="space-y-24">
                {events.map((event, idx) => {
                    const Icona = event.icona;
                    const isLeft = idx % 2 === 0;
                    return (
                        <li key={idx} className="relative flex flex-col md:flex-row items-center justify-center min-h-[120px]">
                            {/* Icona centrale sopra la linea */}
                            <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-20">
                                <span className="w-16 h-16 bg-(--primary-green) rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                    <Icona className="w-8 h-8 text-white" />
                                </span>
                            </div>
                            {/* Card alternata */}
                            <div className={`w-full z-10 ${isLeft ? 'md:pr-8 md:justify-end md:flex' : 'md:pl-8 md:justify-start md:flex'} -mt-23`}>
                                <div className={`bg-white p-6 rounded-xl shadow border border-gray-100 max-w-md mx-auto md:mx-0 ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                    <h3 className="text-xl text-center font-bold text-(--primary-green) mb-5">{event.titolo}</h3>
                                    <time className={`block text-xl text-center text-(--secondary-green) font-bold mb-5`}>{event.anno}</time>
                                    <p className="text-gray-700 leading-relaxed text-justify">{event.descrizione}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {/* Linea tratteggiata dopo l'ultimo evento */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-0 w-1 h-16 border-l-2 border-2 border-dashed border-(--primary-green)" />
        </div>
    );
}