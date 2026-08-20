import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.2em] font-black text-white/40">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
            <span className="flex items-center gap-2">
              <span className="text-[#c5a059]">📍</span> Viseu, Coimbra, Porto, Alto Douro
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#c5a059]">✓</span> {t.common.premiumService}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#c5a059]">✓</span> {t.common.multiLanguage}
            </span>
          </div>
          
          <div className="flex gap-8">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/10 select-none">|</span>
            <span className="text-white/20 whitespace-nowrap">© 2024 Cheers Hospitality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const WhatsAppButton = () => {
  return null;
};
