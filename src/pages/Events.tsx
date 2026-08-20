import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Check, Info } from 'lucide-react';

export const Events = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#050505]">
      {/* Header */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">{t.eventsPage.hero.eyebrow}</span>
            <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-8 tracking-tighter uppercase">
              {t.eventsPage.hero.title} <span className="text-stroke-accent">{t.eventsPage.hero.titleAccent}</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
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
      <section className="py-32 will-change-transform">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {t.packages.items.map((pkg, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 md:p-12 premium-card overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute top-0 left-0 w-full h-full luxury-glow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-luxury transition-colors">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-white/40 text-[9px] uppercase font-black tracking-widest">{t.packages.from}</span>
                    <span className="text-4xl font-black text-[#c5a059]">{pkg.price}€</span>
                  </div>
                  <p className="text-white/50 text-xs mb-10 leading-relaxed group-hover:text-white/80 transition-colors">
                    {pkg.description}
                  </p>
                  <ul className="space-y-4 mb-12 flex-grow">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[10px] uppercase tracking-widest font-black text-white/30 group-hover:text-white/50 transition-colors">
                        <span className="text-[#c5a059]">/</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full py-4 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-center hover:bg-[#c5a059] hover:text-black transition-all"
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
      <section className="py-32 bg-zinc-900/20 will-change-transform">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.eventsPage.categories.weddings, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800' },
              { title: t.eventsPage.categories.corporate, img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800' },
              { title: t.eventsPage.categories.private, img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800' },
              { title: t.eventsPage.categories.baptisms, img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800' },
            ].map((item, idx) => (
              <div key={idx} className="relative h-80 rounded-3xl overflow-hidden group">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-xl font-display font-bold text-white uppercase tracking-tighter">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-32 bg-[#0a0a0a] will-change-transform">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-16 rounded-[40px] bg-gradient-to-br from-zinc-900 to-black border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 luxury-glow opacity-20 pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 relative z-10">
              {t.eventsPage.quote.title} <span className="text-[#c5a059]">{t.eventsPage.quote.titleAccent}</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-12 relative z-10">
              {t.eventsPage.quote.description}
            </p>
            <Link 
              to="/contact"
              className="px-10 py-5 bg-[#c5a059] text-black font-black uppercase tracking-widest text-sm rounded-full inline-block relative z-10 hover:bg-white transition-all transform hover:-translate-y-1"
            >
              {t.eventsPage.quote.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
