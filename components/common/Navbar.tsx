"use client";

import { Link, usePathname } from '@/navigation';
import { useState } from "react";
import { useTranslations } from 'next-intl';
import Container from '@/components/common/Container';

export default function Navbar() {
    const t = useTranslations("Navbar");
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
            <Container className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-accent hover:text-extra1 transition-colors">
                    {t('logo')}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link href="/" className="hover:text-accent transition-colors">
                        {t('home')}
                    </Link>
                    <Link href="/request-service" className="hover:text-accent transition-colors">
                        {t('requestService')}
                    </Link>
                    <Link href="/contact" className="hover:text-accent transition-colors">
                        {t('contact')}
                    </Link>
                    {/* Language Switcher */}
                    <div className="flex space-x-2 items-center">
                        <Link href={pathname} locale="en" className="hover:text-accent transition-colors font-medium">EN</Link>
                        <span className="text-gray-400">|</span>
                        <Link href={pathname} locale="ar" className="hover:text-accent transition-colors font-medium">AR</Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary border-t border-accent/20">
                    <Container>

                        <Link
                            href="/"
                            className="block py-2 rounded-md hover:bg-accent/10 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('home')}
                        </Link>
                        <Link
                            href="/request-service"
                            className="block py-2 rounded-md hover:bg-accent/10 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('requestService')}
                        </Link>
                        <Link
                            href="/contact"
                            className="block py-2 rounded-md hover:bg-accent/10 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('contact')}
                        </Link>
                        {/* Mobile Language Switcher */}
                        <div className="flex space-x-4 py-2 border-t border-gray-700 mt-2 pt-2">
                            <Link href={pathname} locale="en" className="hover:text-accent transition-colors">English</Link>
                            <Link href={pathname} locale="ar" className="hover:text-accent transition-colors">العربية</Link>
                        </div>
                    </Container>
                </div>
            )}
        </nav>
    );
}
