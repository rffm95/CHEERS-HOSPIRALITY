import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white uppercase mb-8 block">
              Cheers <span className="text-stroke-accent italic">Hospitality</span><span className="text-[#c5a059]">.</span>
            </Link>
            <p className="text-white/20 text-sm leading-relaxed mb-10 max-w-xs font-medium italic">
              Elevamos os padrões da hospitalidade através de uma visão 360º que une eventos, consultoria estratégica e inovação tecnológica.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#c5a059] hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#c5a059] hover:text-black transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Business Units */}
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.5em] mb-10 italic">Business Units</h4>
            <ul className="space-y-4">
              <li><Link to="/events" className="text-white/30 hover:text-[#c5a059] transition-colors text-xs font-black uppercase tracking-[0.2em]">{t.nav.events}</Link></li>
              <li><Link to="/consulting" className="text-white/30 hover:text-[#c5a059] transition-colors text-xs font-black uppercase tracking-[0.2em]">{t.nav.consulting}</Link></li>
              <li><Link to="/digital" className="text-white/30 hover:text-[#c5a059] transition-colors text-xs font-black uppercase tracking-[0.2em]">{t.nav.digital}</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.5em] mb-10 italic">Explorar</h4>
            <ul className="space-y-4">
              <li><Link to="/portfolio" className="text-white/30 hover:text-[#c5a059] transition-colors text-xs font-black uppercase tracking-[0.2em]">{t.nav.portfolio}</Link></li>
              <li><Link to="/about" className="text-white/30 hover:text-[#c5a059] transition-colors text-xs font-black uppercase tracking-[0.2em]">{t.nav.about}</Link></li>
              <li><Link to="/contact" className="text-white/30 hover:text-[#c5a059] transition-colors text-xs font-black uppercase tracking-[0.2em]">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.5em] mb-10 italic">Contactos</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#c5a059] shrink-0" />
                <p className="text-white/30 text-xs leading-relaxed font-black uppercase tracking-[0.2em] italic">Centro & Norte de Portugal <br />(Viseu, Porto, Douro)</p>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#c5a059] shrink-0" />
                <p className="text-white/30 text-sm font-medium italic">sucessomacico@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] font-black text-white/10">
          <p>© 2024 Cheers Hospitality. Standards de Elite.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[#c5a059] transition-colors italic">Privacy Policy</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors italic">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const WhatsAppButton = () => {
  return null;
};
