import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#FCFCFA] text-[#111111] font-sans">
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(197,160,89,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8 block font-sans">{t.aboutPage.hero.eyebrow}</span>
              <h1 className="text-5xl md:text-8xl font-serif text-[#111111] mt-6 mb-16 tracking-tight leading-[0.95]">
                {t.aboutPage.hero.title} <br /><span className="italic text-[#c5a059]">{t.aboutPage.hero.titleAccent}</span>
              </h1>
              <div className="space-y-10 text-[#111111]/60 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  {t.aboutPage.hero.p1}
                </p>
                <p>
                  {t.aboutPage.hero.p2}
                </p>
                <div className="relative pt-12">
                  <div className="absolute top-0 left-0 w-16 h-0.5 bg-[#c5a059]" />
                  <p className="text-[#c5a059] font-serif text-2xl md:text-4xl tracking-tight italic leading-tight">
                    "{t.aboutPage.hero.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[#111111]/5 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1200"
                  alt="Founder / Story"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#111111] text-[#c5a059] rounded-full flex items-center justify-center p-8 text-center shadow-2xl hidden md:flex border-4 border-[#FCFCFA]">
                <span className="font-bold text-[9px] uppercase tracking-widest leading-tight font-sans">Standards de Elite Desde o Primeiro Dia</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="py-24 md:py-40 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.aboutPage.values.items.map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 rounded-3xl bg-white border border-[#111111]/5 hover:border-[#c5a059]/20 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
              >
                <div className="text-[#c5a059] text-5xl font-serif mb-10 tracking-tight italic opacity-20">0{i + 1}</div>
                <h3 className="text-xl font-bold text-[#111111] uppercase tracking-tight mb-6 group-hover:text-[#c5a059] transition-colors font-sans">{v.title}</h3>
                <p className="text-[#111111]/50 text-sm leading-relaxed font-light">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
