import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { portfolioItems } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-20 bg-[#050505] min-h-screen text-white">
      {/* Header */}
      <section className="relative py-40 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl text-center mx-auto"
          >
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.6em] font-black mb-10 block italic">
              {t.portfolioPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-12 tracking-tighter uppercase leading-[0.85]">
              {t.portfolioPage.hero.title} <br />
              <span className="text-stroke-accent italic">{t.portfolioPage.hero.titleAccent}</span>
            </h1>
            <p className="text-white/30 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto italic">
              {t.portfolioPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-40 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[50px] bg-[#0A0A0A] border border-white/5 mb-10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[4px]">
                    <span className="bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] px-10 py-5 rounded-full shadow-2xl">
                      {t.common.viewMore}
                    </span>
                  </div>
                </div>
                <div className="px-6">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-[#c5a059] transition-colors leading-none italic">
                    {item.title}
                  </h3>
                  <div className="w-16 h-1 bg-[#c5a059]/10 mt-6 group-hover:w-32 group-hover:bg-[#c5a059] transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic CTA */}
      <section className="py-40 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.5em] font-black mb-8 block italic">Project Partnership</span>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-16 uppercase tracking-tighter leading-[0.85] italic">
            {t.portfolioPage.cta.title}
          </h2>
          <Link 
            to="/contact" 
            className="px-16 py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-[#c5a059] transition-all inline-block rounded-full shadow-2xl"
          >
            {t.portfolioPage.cta.button}
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/98 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-10 right-10 p-6 text-white hover:text-[#c5a059] transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-10 h-10" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Portfolio Large"
                className="max-w-full max-h-full object-contain rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
