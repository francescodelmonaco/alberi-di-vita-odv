'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/data';
import Image from 'next/image';

// img
import Logo from '../../public/logo-150x150.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <figure className="w-10 h-10 rounded-full flex items-center justify-center">
                            <Image src={Logo} alt="Logo Alberi di Vita OdV" className='border border-(--primary-green) rounded-full shadow' />
                        </figure>
                        <div className="hidden sm:block">
                            <h1 className="text-(--primary-green) font-bold text-lg tracking-wide">
                                Alberi di Vita OdV
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (pathname === '/' && item.href === '/');
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-4 py-2 font-medium rounded-md transition-colors ${isActive
                                        ? 'text-white bg-[var(--primary-green)] shadow-sm'
                                        : 'text-gray-700 hover:text-[var(--primary-green)] hover:bg-gray-100'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-700 hover:text-(--primary-green)"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || (pathname === '/' && item.href === '/');
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${isActive
                                            ? 'text-white bg-[var(--primary-green)] shadow-sm'
                                            : 'text-gray-700 hover:text-[var(--primary-green)] hover:bg-gray-50'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}