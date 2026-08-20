import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Check, Info, ArrowRight } from 'lucide-react';

export const Events = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#FCFCFA] text-[#111111] font-sans">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-[#111111]/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-6 block font-sans">
              {t.eventsPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-[#111111] mt-6 mb-10 tracking-tight leading-[0.95]">
              {t.eventsPage.hero.title} <br />
              <span className="italic text-[#c5a059]">{t.eventsPage.hero.titleAccent}</span>
            </h1>
            <p className="text-[#111111]/60 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              {t.eventsPage.hero.description}
            </p>
            <div className="mt-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#c5a059]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              {t.eventsPage.hero.note}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Packages */}
      <section className="py-24 md:py-40 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-[#111111] tracking-tight mb-6">
              {t.packages.title}
            </h2>
            <p className="text-[#111111]/50 text-lg max-w-2xl font-light">
              {t.packages.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.packages.items.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 bg-white border border-[#111111]/5 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#111111] mb-2 font-sans">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-[#111111]/30 text-[10px] uppercase font-bold tracking-wider">{t.packages.from}</span>
                    <span className="text-3xl font-bold text-[#c5a059] tracking-tight">{pkg.price}€</span>
                  </div>
                  <p className="text-[#111111]/50 text-sm mb-8 leading-relaxed font-light">
                    {pkg.description}
                  </p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[11px] text-[#111111]/70 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full py-4 border border-[#111111] text-[#111111] text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:bg-[#111111] hover:text-white transition-all rounded-full"
                  >
                    {t.eventsPage.quote.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Occasions */}
      <section className="py-24 md:py-40 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#c5a059]/[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="mb-24">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block font-sans">
              Tailored Excellence
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tight mb-10 leading-[1.1]">
              Ocasiões <span className="italic">Únicas.</span>
            </h2>
            <p className="text-white/40 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
              Cada evento é uma assinatura. Desenhamos a experiência de bar para se fundir com a estética e o propósito estratégico da sua celebração.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.eventsPage.categories.weddings, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', description: 'O brinde perfeito para o dia mais importante.' },
              { title: t.eventsPage.categories.corporate, img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800', description: 'Reforce a sua marca com networking de elite.' },
              { title: t.eventsPage.categories.private, img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800', description: 'Exclusividade e diversão no conforto do seu espaço.' },
              { title: t.eventsPage.categories.baptisms, img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800', description: 'Momentos familiares com um toque de sofisticação.' },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-3xl overflow-hidden group shadow-2xl"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-2 font-sans group-hover:text-[#c5a059] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/40 text-[11px] leading-relaxed font-medium uppercase tracking-wider">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-24 md:py-40 bg-[#FCFCFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-12 md:p-24 text-center relative border border-[#111111]/5 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.03)]"
          >
            <div className="absolute inset-0 bg-[#c5a059]/[0.02] pointer-events-none" />
            <h2 className="text-4xl md:text-7xl font-serif text-[#111111] mb-8 tracking-tight leading-tight relative z-10">
              {t.eventsPage.quote.title} <br />
              <span className="italic text-[#c5a059]">{t.eventsPage.quote.titleAccent}</span>
            </h2>
            <p className="text-[#111111]/50 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              {t.eventsPage.quote.description}
            </p>
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-6 px-12 py-6 bg-[#111111] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#c5a059] transition-all relative z-10 rounded-full"
            >
              {t.eventsPage.quote.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
