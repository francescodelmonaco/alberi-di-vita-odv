'use client';

import Image from 'next/image';
import { Copy } from 'lucide-react';
import Logo from '../../public/logo-150x150.png';

function copyToClipboard(text: string) {
    if (typeof window !== 'undefined' && window.navigator) {
        window.navigator.clipboard.writeText(text);
    }
}

export default function Dona() {
    return (
        <div className="bg-(--accent-gray) flex flex-col items-center justify-center py-12">
            <div className="w-full max-w-xl space-y-8">
                {/* Logo e titolo */}
                <div className="flex flex-col items-center mb-12">
                    <Image src={Logo} alt="Logo Alberi di Vita OdV" width={64} height={64} className="rounded-full border-2 border-(--primary-green) shadow mb-2" />
                    <h2 className="text-(--primary-green) font-bold text-2xl tracking-wide leading-tight mb-1">Alberi di Vita</h2>
                    <p className="text-(--secondary-green) text-base font-medium">Organizzazione di Volontariato</p>
                </div>

                {/* Card 5x1000 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center relative">
                    <h1 className="text-2xl lg:text-3xl font-bold text-red-600 mb-2 tracking-wide">
                        DONA IL TUO 5X1000
                    </h1>
                    <div className="w-12 h-1 bg-(--secondary-green) rounded-full mb-4" />
                    <p className="text-sm font-semibold text-gray-700 mb-2 tracking-widest">
                        CODICE FISCALE
                    </p>
                    <div className="flex items-center justify-center gap-2 text-3xl font-extrabold text-gray-900 mb-0">
                        <span>98192330177</span>
                        <button
                            type="button"
                            aria-label="Copia Codice Fiscale"
                            className="ml-2 p-2 rounded hover:bg-(--accent-gray) transition cursor-pointer"
                            onClick={() => copyToClipboard('98192330177')}
                        >
                            <Copy className="w-5 h-5 text-(--primary-green)" />
                        </button>
                    </div>
                </div>

                {/* Card Donazione Bancaria */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center relative">
                    <p className="text-base text-gray-700 mb-2">
                        Puoi aiutarci anche facendo una donazione alle seguenti coordinate bancarie:
                    </p>

                    <div className="bg-(--secondary-green) rounded-lg px-4 py-3 w-full mt-2">
                        <p className="text-base text-gray-800 font-semibold mb-1">
                            BENEFICIARIO: Organizzazione Volontariato Alberi di Vita Odv
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-base text-gray-800 font-semibold">IBAN: IT90N0869211201012000124288</span>
                            <button
                                type="button"
                                aria-label="Copia IBAN"
                                className="ml-2 p-2 rounded hover:bg-(--accent-gray)/50 transition cursor-pointer"
                                onClick={() => copyToClipboard('IT90N0869211201012000124288')}
                            >
                                <Copy className="w-5 h-5 text-(--primary-green)" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}