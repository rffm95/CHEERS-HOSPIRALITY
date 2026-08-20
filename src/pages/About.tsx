import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#FAFAFA]">
      <section className="py-32 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">{t.aboutPage.hero.eyebrow}</span>
              <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] mt-6 mb-12 tracking-tighter uppercase leading-[0.9]">
                {t.aboutPage.hero.title} <br /><span className="text-stroke-accent">{t.aboutPage.hero.titleAccent}</span>
              </h1>
              <div className="space-y-6 text-[#1A1A1A]/60 text-lg leading-relaxed">
                <p>
                  {t.aboutPage.hero.p1}
                </p>
                <p>
                  {t.aboutPage.hero.p2}
                </p>
                <p className="text-[#1A1A1A] font-display text-2xl italic border-l-2 border-[#c5a059] pl-8 py-4">
                  "{t.aboutPage.hero.quote}"
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-black/5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1200"
                  alt="Founder / Story"
                  className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.aboutPage.values.items.map((v, i) => (
              <div key={i} className="text-center space-y-4 p-10 rounded-3xl bg-white border border-black/5 shadow-xl shadow-black/5 hover:scale-105 transition-all duration-500">
                <div className="text-[#c5a059] text-4xl font-display">0{i + 1}</div>
                <h3 className="text-2xl font-display font-bold text-[#1A1A1A] uppercase tracking-tight">{v.title}</h3>
                <p className="text-[#1A1A1A]/40 text-sm leading-relaxed max-w-xs mx-auto">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
