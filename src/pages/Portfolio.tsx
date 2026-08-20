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
    <div className="pt-20 bg-[#FCFCFA] min-h-screen text-[#111111] font-sans">
      {/* Header */}
      <section className="relative py-24 md:py-40 border-b border-[#111111]/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl text-center mx-auto"
          >
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8 block font-sans">
              {t.portfolioPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-[#111111] mt-6 mb-12 tracking-tight leading-[0.95]">
              {t.portfolioPage.hero.title} <br />
              <span className="italic text-[#c5a059]">{t.portfolioPage.hero.titleAccent}</span>
            </h1>
            <p className="text-[#111111]/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              {t.portfolioPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 md:py-40 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#F5F5F3] border border-[#111111]/5 mb-10 shadow-[0_30px_60px_rgba(0,0,0,0.02)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-[#111111] text-white text-[9px] font-bold uppercase tracking-[0.3em] px-8 py-4 rounded-full shadow-2xl">
                      {t.common.viewMore}
                    </span>
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#111111] tracking-tight group-hover:text-[#c5a059] transition-colors leading-none">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#c5a059]/20 mt-6 group-hover:w-24 group-hover:bg-[#c5a059] transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic CTA */}
      <section className="py-24 md:py-40 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c5a059]/[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
          <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block font-sans">Project Partnership</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-16 tracking-tight leading-[1.2]">
            {t.portfolioPage.cta.title}
          </h2>
          <Link 
            to="/contact" 
            className="px-12 py-6 bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all inline-block rounded-full shadow-2xl font-sans"
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-white/98 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-10 right-10 p-6 text-[#111111] hover:text-[#c5a059] transition-colors z-[110]"
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
                className="max-w-full max-h-full object-contain rounded-[2rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
