import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

const LOGO_URL = 'https://i.imgur.com/Ddsk56J.jpeg';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'pt', name: 'Português (PT)', flag: '🇵🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English (US)', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.events, path: '/events' },
    { name: t.nav.consulting, path: '/consulting' },
    { name: t.nav.digital, path: '/digital' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.about, path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md py-2 border-b border-black/5 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={LOGO_URL}
            alt="Cheers Experiences logo"
            width={scrolled ? 52 : 68}
            height={scrolled ? 52 : 68}
            loading="eager"
            className={`rounded-full object-cover transition-all duration-500 shadow-lg ring-2 ${
              scrolled
                ? 'ring-[#c5a059]/40 shadow-[#c5a059]/10'
                : 'ring-white/20 shadow-black/20'
            } hover:scale-105 hover:ring-[#c5a059] hover:shadow-[#c5a059]/30`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors hover:text-black ${
                location.pathname === link.path ? 'text-[#c5a059]' : 'text-black/40'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Selector Desktop */}
          <div className="flex bg-black/5 rounded-full p-1 border border-black/5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-full transition-all flex items-center gap-1.5 ${
                  language === lang.code ? 'bg-[#c5a059] text-black shadow-lg shadow-[#c5a059]/20' : 'text-black/40 hover:text-black'
                }`}
              >
                <span>{lang.flag}</span>
                {lang.code.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            className="px-8 py-3 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-[#c5a059] transition-all shadow-lg"
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white overflow-hidden fixed top-0 left-0 w-full z-[40]"
          >
            <div className="px-10 pt-32 pb-16 flex flex-col gap-8 relative h-full">
              {/* Ambient Glow for Mobile */}
              <div className="absolute top-0 right-0 w-[80%] h-[40%] bg-[#c5a059]/5 blur-[100px] rounded-full pointer-events-none" />

              {/* Mobile logo */}
              <div className="absolute top-8 left-10">
                <img
                  src={LOGO_URL}
                  alt="Cheers Experiences logo"
                  width={48}
                  height={48}
                  loading="eager"
                  className="rounded-full object-cover ring-2 ring-[#c5a059]/40 shadow-lg"
                />
              </div>
              
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-black uppercase tracking-tighter transition-colors ${
                    location.pathname === link.path ? 'text-[#c5a059]' : 'text-black/20 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-10 border-t border-black/5 mt-4">
                <p className="text-[10px] text-black/20 uppercase font-black tracking-[0.4em] mb-6">{t.common.language}</p>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-xs font-bold uppercase tracking-widest ${
                        language === lang.code ? 'bg-[#c5a059] text-black border-transparent' : 'bg-black/5 text-black/40 border-black/5'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-auto w-full py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs text-center rounded-full shadow-2xl"
              >
                {t.nav.contact}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
