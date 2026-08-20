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
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-3xl text-center mx-auto"
          >
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">
              {t.portfolioPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] mt-6 mb-8 tracking-tighter uppercase leading-none">
              {t.portfolioPage.hero.title} <span className="text-stroke-accent">{t.portfolioPage.hero.titleAccent}</span>
            </h1>
            <p className="text-[#1A1A1A]/40 text-lg leading-relaxed max-w-xl mx-auto">
              {t.portfolioPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
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
                <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-white border border-black/5 mb-8 shadow-xl shadow-black/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full shadow-2xl">
                      {t.common.viewMore}
                    </span>
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight group-hover:text-[#c5a059] transition-colors leading-none">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#c5a059]/20 mt-4 group-hover:w-24 group-hover:bg-[#c5a059] transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified footer/CTA for portfolio */}
      <section className="py-32 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#1A1A1A] mb-8 uppercase tracking-tighter">
            {t.portfolioPage.cta.title}
          </h2>
          <Link 
            to="/contact" 
            className="px-10 py-5 bg-[#1A1A1A] text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#c5a059] transition-all inline-block rounded-full shadow-lg shadow-black/10"
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 p-4 text-white hover:text-[#c5a059] transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-8 h-8" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Portfolio Large"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
