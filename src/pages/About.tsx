import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#050505]">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">{t.aboutPage.hero.eyebrow}</span>
              <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-12 tracking-tighter uppercase leading-[0.9]">
                {t.aboutPage.hero.title} <br /><span className="text-stroke-accent">{t.aboutPage.hero.titleAccent}</span>
              </h1>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  {t.aboutPage.hero.p1}
                </p>
                <p>
                  {t.aboutPage.hero.p2}
                </p>
                <p className="text-white font-display text-2xl italic border-l-2 border-[#c5a059] pl-8 py-4">
                  "{t.aboutPage.hero.quote}"
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1200"
                  alt="Founder / Story"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
              {/* 100+ events badge removed per user request */}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-zinc-900/20 will-change-transform">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.aboutPage.values.items.map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-[#c5a059] text-4xl font-display">0{i + 1}</div>
                <h3 className="text-2xl font-display font-bold text-white">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
