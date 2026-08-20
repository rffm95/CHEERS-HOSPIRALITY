import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

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
    { name: t.nav.about, path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
          Cheers <span className="text-stroke-accent md:text-white">Hospitality</span><span className="text-[#c5a059]">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors hover:text-white ${
                location.pathname === link.path ? 'text-white' : 'text-white/40'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Selector Desktop */}
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-full transition-all flex items-center gap-1.5 ${
                  language === lang.code ? 'bg-[#c5a059] text-black shadow-lg' : 'text-white/40 hover:text-white'
                }`}
              >
                <span>{lang.flag}</span>
                {lang.code.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            className="px-6 py-2.5 bg-[#c5a059] text-black text-[10px] font-black uppercase tracking-[0.1em] rounded-sm hover:brightness-110 transition-all"
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-10 py-16 flex flex-col gap-10 relative h-full">
              {/* Ambient Glow for Mobile */}
              <div className="absolute top-0 left-0 w-[80%] h-[40%] bg-[#c5a059]/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[80%] h-[40%] bg-[#c5a059]/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
              
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-black uppercase tracking-tighter transition-colors ${
                    location.pathname === link.path ? 'text-white' : 'text-white/40'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Idioma</p>
                <div className="grid grid-cols-1 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-3 py-2 text-zinc-300"
                    >
                      <span>{lang.flag}</span>
                      <span className={language === lang.code ? 'text-[#c5a059]' : ''}>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full py-4 bg-[#c5a059] text-black font-bold text-center rounded-xl"
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
