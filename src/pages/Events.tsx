import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Check, Info, ArrowRight } from 'lucide-react';

export const Events = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.6em] font-black mb-8 block">{t.eventsPage.hero.eyebrow}</span>
            <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-10 tracking-tighter uppercase leading-[0.9]">
              {t.eventsPage.hero.title} <br />
              <span className="text-stroke-accent italic">{t.eventsPage.hero.titleAccent}</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl">
              {t.eventsPage.hero.description}
            </p>
            <div className="mt-12 flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-black text-[#c5a059] italic">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059] animate-pulse" />
              {t.eventsPage.hero.note}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Packages */}
      <section className="py-40 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.packages.items.map((pkg, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-12 md:p-16 bg-[#0A0A0A] border border-white/5 rounded-[40px] overflow-hidden transition-all duration-700 hover:border-[#c5a059]/40 hover:scale-[1.02] shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter group-hover:text-[#c5a059] transition-colors leading-none italic">{pkg.name}</h3>
                  <div className="flex items-baseline gap-3 mb-10">
                    <span className="text-white/20 text-[10px] uppercase font-black tracking-widest">{t.packages.from}</span>
                    <span className="text-5xl font-black text-[#c5a059] tracking-tighter">{pkg.price}€</span>
                  </div>
                  <p className="text-white/30 text-base mb-12 leading-relaxed group-hover:text-white/50 transition-colors">
                    {pkg.description}
                  </p>
                  <ul className="space-y-5 mb-16 flex-grow">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[10px] uppercase tracking-[0.2em] font-black text-white/20 group-hover:text-white/40 transition-colors">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full py-6 bg-white text-black text-xs font-black uppercase tracking-[0.3em] text-center hover:bg-[#c5a059] transition-all rounded-full shadow-2xl"
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
      <section className="py-40 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#c5a059]/[0.02] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="mb-24 text-center">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.5em] font-black mb-6 block italic">Tailored Excellence</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-10 leading-[0.85]">Ocasiões Únicas</h2>
            <p className="text-white/30 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed italic">Cada evento é uma assinatura. Desenhamos a experiência de bar para se fundir com a estética e o propósito da sua celebração.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="relative h-[600px] rounded-[50px] overflow-hidden group border border-white/5 shadow-2xl"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-12 w-full transform group-hover:-translate-y-4 transition-transform duration-700">
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none group-hover:text-[#c5a059] transition-colors italic">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-medium">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-40 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] rounded-[60px] p-20 md:p-32 text-center relative border border-white/5 overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[#c5a059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase leading-[0.85] relative z-10 italic">
              {t.eventsPage.quote.title} <br />
              <span className="text-stroke-accent">{t.eventsPage.quote.titleAccent}</span>
            </h2>
            <p className="text-white/30 text-xl md:text-2xl mb-20 max-w-3xl mx-auto font-medium relative z-10 leading-relaxed italic">
              {t.eventsPage.quote.description}
            </p>
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-8 px-16 py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-[#c5a059] transition-all relative z-10 shadow-2xl rounded-full"
            >
              {t.eventsPage.quote.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
