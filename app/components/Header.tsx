'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import Logo from './Logo';

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/projects', label: t.nav.projects },
    { href: '/partners', label: t.nav.partners || 'Partenaires' },
    { href: '/contact', label: t.nav.contact },
  ];

  const languages = [
    { code: 'fr' as const, flag: '🇫🇷', label: 'FR' },
    { code: 'en' as const, flag: '🇬🇧', label: 'EN' },
    { code: 'sw' as const, flag: '🇹🇿', label: 'SW' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 neo-soft backdrop-blur-sm bg-opacity-90">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="h-16 w-auto" animated={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Language Selector */}
            <div className="flex gap-2">
              {languages.map(({ code, flag, label }) => (
                <button
                  key={code}
                  onClick={() => setLocale(code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    locale === code
                      ? 'neo-pressed text-primary'
                      : 'neo-soft hover:text-primary'
                  }`}
                >
                  {flag}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden neo-soft p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block neo-soft px-4 py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 px-4">
              {languages.map(({ code, flag }) => (
                <button
                  key={code}
                  onClick={() => {
                    setLocale(code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg font-medium transition-all flex-1 ${
                    locale === code
                      ? 'neo-pressed text-primary'
                      : 'neo-soft hover:text-primary'
                  }`}
                >
                  {flag}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
