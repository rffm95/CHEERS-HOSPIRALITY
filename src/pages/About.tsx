import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#050505] text-white">
      <section className="relative py-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(197,160,89,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.6em] font-black mb-10 block">{t.aboutPage.hero.eyebrow}</span>
              <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-16 tracking-tighter uppercase leading-[0.85]">
                {t.aboutPage.hero.title} <br /><span className="text-stroke-accent italic">{t.aboutPage.hero.titleAccent}</span>
              </h1>
              <div className="space-y-10 text-white/30 text-lg md:text-xl leading-relaxed italic">
                <p>
                  {t.aboutPage.hero.p1}
                </p>
                <p>
                  {t.aboutPage.hero.p2}
                </p>
                <div className="relative pt-12">
                  <div className="absolute top-0 left-0 w-16 h-1 bg-[#c5a059]" />
                  <p className="text-[#c5a059] font-black text-2xl md:text-4xl tracking-tighter uppercase leading-tight italic">
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
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] group">
                <img
                  src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1200"
                  alt="Founder / Story"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#c5a059] rounded-full flex items-center justify-center p-8 text-center shadow-2xl hidden md:flex">
                <span className="text-black font-black text-[10px] uppercase tracking-widest leading-tight">Standards de Elite Desde o Primeiro Dia</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="py-40 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.aboutPage.values.items.map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-16 rounded-[40px] bg-[#050505] border border-white/5 hover:border-[#c5a059]/30 transition-all duration-700 shadow-2xl"
              >
                <div className="text-[#c5a059] text-5xl font-black mb-10 tracking-tighter italic">0{i + 1}</div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-[#c5a059] transition-colors italic">{v.title}</h3>
                <p className="text-white/30 text-base leading-relaxed group-hover:text-white/50 transition-colors font-medium">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
