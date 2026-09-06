import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Target, Zap, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LOGO_URL = 'https://i.imgur.com/Ddsk56J.jpeg';

export const About = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, any> = {
    0: ShieldCheck,
    1: BarChart3,
    2: Zap,
  };

  return (
    <div className="w-full bg-[#FCFCFA] text-[#111111]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-24 overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,#c5a059_0%,transparent_60%)] opacity-10" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#c5a059 1px, transparent 1px), linear-gradient(90deg, #c5a059 1px, transparent 1px)',
              backgroundSize: '100px 100px'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.8em] font-black mb-10 block italic">
              {t.aboutPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.85] mb-12">
              {t.aboutPage.hero.title} <br />
              <span className="text-stroke-white italic font-normal opacity-50">{t.aboutPage.hero.titleAccent}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Genesis Section */}
      <section className="section-padding bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="space-y-10 text-xl md:text-2xl text-[#111111]/70 leading-relaxed font-light italic">
                <p className="text-[#111111] font-medium not-italic">{t.aboutPage.hero.p1}</p>
                <p>{t.aboutPage.hero.p2}</p>
                <div className="pt-10 border-t border-black/5">
                  <blockquote className="text-3xl md:text-5xl font-bold text-[#111111] tracking-tighter leading-tight italic">
                    "{t.aboutPage.hero.quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-[#c5a059]/10 blur-[80px] scale-150 group-hover:scale-175 transition-transform duration-1000" />
                <img 
                  src={LOGO_URL} 
                  alt="Cheers Guru" 
                  className="relative z-10 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full object-cover border-[12px] border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.aboutPage.values.items.map((value, i) => {
              const Icon = iconMap[i] || Target;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }} 
                  viewport={{ once: true }} 
                  className="p-12 bg-white border border-black/5 hover:border-[#c5a059]/30 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FCFCFA] flex items-center justify-center mb-10 group-hover:bg-[#c5a059]/10 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-[#c5a059]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 italic">{value.title}</h3>
                  <p className="text-[#111111]/40 leading-relaxed text-lg italic">{value.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#111111] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
          <h2 className="text-4xl md:text-[80px] font-bold tracking-tighter mb-16 italic leading-none">
            {t.portfolioPage.cta.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/contact" className="luxury-button">
              {t.portfolioPage.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
