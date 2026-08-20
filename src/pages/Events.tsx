import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Check, Info, ArrowRight } from 'lucide-react';

export const Events = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#FAFAFA]">
      {/* Header */}
      <section className="py-24 border-b border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">{t.eventsPage.hero.eyebrow}</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] mt-6 mb-8 tracking-tighter uppercase leading-[0.9]">
              {t.eventsPage.hero.title} <span className="text-stroke-accent">{t.eventsPage.hero.titleAccent}</span>
            </h1>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed max-w-xl">
              {t.eventsPage.hero.description}
            </p>
            <div className="mt-8 flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-[#c5a059]">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
              {t.eventsPage.hero.note}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {t.packages.items.map((pkg, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 md:p-12 premium-card overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/5"
              >
                <div className="absolute top-0 left-0 w-full h-full luxury-glow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-black text-[#1A1A1A] mb-2 uppercase tracking-tight group-hover:text-[#c5a059] transition-colors leading-none">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-[#1A1A1A]/40 text-[9px] uppercase font-black tracking-widest">{t.packages.from}</span>
                    <span className="text-4xl font-black text-[#c5a059]">{pkg.price}€</span>
                  </div>
                  <p className="text-[#1A1A1A]/40 text-xs mb-10 leading-relaxed group-hover:text-[#1A1A1A]/60 transition-colors">
                    {pkg.description}
                  </p>
                  <ul className="space-y-4 mb-12 flex-grow">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[10px] uppercase tracking-widest font-black text-[#1A1A1A]/30 group-hover:text-[#1A1A1A]/50 transition-colors">
                        <span className="text-[#c5a059]">/</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full py-4 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-[0.2em] text-center hover:bg-[#c5a059] hover:text-black transition-all rounded-full"
                  >
                    {t.eventsPage.quote.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#c5a059]/3 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="mb-20 text-center">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black mb-4 block">Tailored Excellence</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-6 leading-none">Ocasiões Únicas</h2>
            <p className="text-[#1A1A1A]/40 max-w-2xl mx-auto text-lg leading-relaxed">Cada evento é uma assinatura. Desenhamos a experiência de bar para se fundir com a estética e o propósito da sua celebração.</p>
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
                className="relative h-[500px] rounded-[40px] overflow-hidden group border border-black/5 shadow-xl shadow-black/5"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h4 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-3 leading-none">{item.title}</h4>
                  <p className="text-[#1A1A1A]/40 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-40 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[60px] p-16 md:p-32 text-center relative border border-black/5 overflow-hidden group shadow-2xl shadow-black/5"
          >
            <div className="absolute inset-0 bg-[#c5a059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="text-5xl md:text-8xl font-black text-[#1A1A1A] mb-10 tracking-tighter uppercase leading-[0.9] relative z-10">
              {t.eventsPage.quote.title} <br />
              <span className="text-[#c5a059]">{t.eventsPage.quote.titleAccent}</span>
            </h2>
            <p className="text-[#1A1A1A]/40 text-xl mb-16 max-w-2xl mx-auto font-medium relative z-10 leading-relaxed">
              {t.eventsPage.quote.description}
            </p>
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-6 px-12 py-7 bg-[#1A1A1A] text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-[#c5a059] transition-all relative z-10 shadow-2xl rounded-full"
            >
              {t.eventsPage.quote.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
