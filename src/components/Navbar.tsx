import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Globe, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LOGO_URL = 'https://i.imgur.com/Ddsk56J.jpeg';
const WA_HREF = 'https://wa.me/351938543783?text=' + encodeURIComponent('Olá! Vim pelo site da Cheers Experiences e gostava de saber mais.');

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/consulting', label: 'Consulting' },
  { to: '/digital', label: 'Digital' },
  { to: '/portfolio', label: 'Our Work' },
  { to: '/about', label: 'About' },
];

const LANGS = ['pt', 'en', 'es', 'fr'] as const;

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (to: string) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A08]/96 backdrop-blur-2xl border-b border-white/[0.07] shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60" />

        <div
          className="container-wide flex items-center justify-between"
          style={{ height: scrolled ? '68px' : '84px', transition: 'height 0.4s ease' }}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Cheers Experiences — Home"
          >
            <div className="relative">
              <img
                src={LOGO_URL}
                alt="Cheers Experiences logo"
                width={38}
                height={38}
                className="rounded-full object-cover ring-1 ring-white/10 group-hover:ring-[#C9A84C]/70 transition-all duration-500"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#C9A84C] rounded-full border-2 border-[#0A0A08]" />
            </div>
            <div className="leading-none">
              <span className="font-display text-[1.15rem] font-semibold text-white tracking-tight leading-none">Cheers</span>
              <span className="block text-[8px] uppercase tracking-[0.22em] text-[#C9A84C] font-bold mt-[3px]">Experiences</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-sm relative ${
                  isActive(link.to)
                    ? 'text-[#C9A84C]'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[#C9A84C] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Language picker */}
            <div ref={langRef} className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(v => !v)}
                className="flex items-center gap-1.5 px-3 py-2 text-white/40 hover:text-white/70 transition-colors text-[0.62rem] font-bold uppercase tracking-widest"
                aria-label="Selecionar idioma"
              >
                <Globe className="w-3.5 h-3.5" />
                {language.toUpperCase()}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full mt-2 bg-[#111110] border border-white/10 rounded-md overflow-hidden shadow-2xl min-w-[80px]"
                  >
                    {LANGS.map(lang => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setLangOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-[0.62rem] font-bold uppercase tracking-widest transition-colors ${
                          language === lang
                            ? 'text-[#C9A84C] bg-[#C9A84C]/10'
                            : 'text-white/55 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone quick-link (desktop only) */}
            <a
              href="tel:+351938543783"
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-white/40 hover:text-[#C9A84C] transition-colors text-[0.62rem] font-bold uppercase tracking-widest"
              aria-label="Ligar agora"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            {/* Primary CTA */}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A08] px-5 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-white transition-all duration-300 shadow-lg shadow-[#C9A84C]/20"
            >
              Let&apos;s Talk
              <ArrowRight className="w-3 h-3" />
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A08] flex flex-col pt-24 px-8 pb-10"
          >
            {/* decorative line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

            <nav className="flex flex-col gap-0 flex-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.to}
                    className={`flex items-center justify-between py-5 border-b border-white/[0.06] group transition-colors ${
                      isActive(link.to) ? 'text-[#C9A84C]' : 'text-white/75 hover:text-[#C9A84C]'
                    }`}
                  >
                    <span className="font-display text-3xl font-semibold italic">{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              {/* Lang switcher */}
              <div className="flex gap-2">
                {LANGS.map(lang => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-2 text-[0.62rem] font-bold uppercase tracking-widest border rounded-sm transition-colors ${
                      language === lang
                        ? 'border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/10'
                        : 'border-white/20 text-white/45 hover:border-white/40 hover:text-white/70'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Contact info */}
              <div className="flex items-center gap-4 pt-2">
                <a href="tel:+351938543783" className="text-white/40 hover:text-[#C9A84C] transition-colors text-xs">
                  +351 938 543 783
                </a>
                <span className="text-white/20">·</span>
                <a href="mailto:cheersexperiences@gmail.com" className="text-white/40 hover:text-[#C9A84C] transition-colors text-xs">
                  cheersexperiences@gmail.com
                </a>
              </div>

              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center text-center w-full"
              >
                Let&apos;s Talk <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
