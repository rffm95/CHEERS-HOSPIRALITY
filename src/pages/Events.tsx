import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Check, ArrowRight, Phone } from 'lucide-react';

const WA_HREF = 'https://wa.me/351938543783?text=' + encodeURIComponent('Ol\u00e1! Gostaria de pedir or\u00e7amento para um evento.');

export const Events = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#0A0A08]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end pb-16 md:pb-24 overflow-hidden pt-32">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A08] via-[#0D0C0A] to-[#060504]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#C9A84C]/5 blur-[130px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow block mb-6">{t.eventsPage.hero.eyebrow}</span>
            <h1 className="display-xl text-white mb-6 leading-[0.95]">
              {t.eventsPage.hero.title}<br />
              <em className="text-[#C9A84C] not-italic">{t.eventsPage.hero.titleAccent}</em>
            </h1>
            <p className="body-lg text-white/45 max-w-2xl mb-8">
              {t.eventsPage.hero.description}
            </p>
            <div className="inline-flex items-center gap-2.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              {t.eventsPage.hero.note}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────── */}
      <section className="section-pad bg-[#0D0C0A]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <span className="eyebrow block mb-4">{t.packages.title}</span>
            <h2 className="display-md text-white">
              Pacotes exclusivos.<br />
              <em className="text-[#C9A84C]">Para cada ocasião.</em>
            </h2>
            <p className="text-white/40 body-md mt-5 max-w-xl">{t.packages.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.packages.items.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-dark p-7 flex flex-col group"
              >
                {/* Price header */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold text-base mb-3 leading-tight">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-white/30 text-[0.6rem] uppercase font-bold tracking-wider">{t.packages.from}</span>
                    <span className="font-display text-4xl font-semibold italic text-[#C9A84C]">{pkg.price}€</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-6" />

                <p className="text-white/40 text-sm leading-relaxed mb-6 flex-grow">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-white/55">
                      <Check className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="btn-ghost text-xs w-full justify-center"
                >
                  {t.eventsPage.quote.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE OCCASIONS ───────────────────────────────── */}
      <section className="section-pad bg-[#0A0A08]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <span className="eyebrow block mb-4">Tailored Excellence</span>
            <h2 className="display-md text-white">
              Ocasi\u00f5es <em className="text-[#C9A84C]">Únicas.</em>
            </h2>
            <p className="text-white/40 body-md mt-5 max-w-2xl">
              Cada evento \u00e9 uma assinatura. Desenhamos a experi\u00eancia de bar para se fundir com a est\u00e9tica e o prop\u00f3sito estrat\u00e9gico da sua celebra\u00e7\u00e3o.
            </p>
          </motion.div>

          {/* 2-col on mobile, 4-col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: t.eventsPage.categories.weddings,  img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', desc: 'O brinde perfeito para o dia mais importante.' },
              { title: t.eventsPage.categories.corporate, img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800', desc: 'Reforce a sua marca com networking de elite.' },
              { title: t.eventsPage.categories.private,   img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800', desc: 'Exclusividade no conforto do seu espa\u00e7o.' },
              { title: t.eventsPage.categories.baptisms,  img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800', desc: 'Momentos familiares com sofistica\u00e7\u00e3o.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg group"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A08]/90 via-[#0A0A08]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-[#C9A84C] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/40 text-[0.65rem] leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE CTA ─────────────────────────────────────────── */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #b8923e 50%, #a07830 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(#0A0A08 1px, transparent 1px), linear-gradient(90deg, #0A0A08 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="block text-[#0A0A08]/50 text-[0.6rem] uppercase tracking-[0.35em] font-bold mb-5">
              Cheers Experiences · Bar Services
            </span>
            <h2 className="font-display text-3xl md:text-6xl font-semibold italic text-[#0A0A08] mb-5 leading-[1.05]">
              {t.eventsPage.quote.title}<br />
              <em className="not-italic">{t.eventsPage.quote.titleAccent}</em>
            </h2>
            <p className="text-[#0A0A08]/55 max-w-md mx-auto mb-10 body-md">
              {t.eventsPage.quote.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0A0A08] text-[#C9A84C] px-8 py-4 font-bold uppercase tracking-[0.16em] text-[0.68rem] rounded-sm hover:bg-[#1a1a18] transition-all duration-300 shadow-lg min-h-[52px]"
              >
                <Phone className="w-3.5 h-3.5" />
                Pedir Or\u00e7amento
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0A0A08]/30 text-[#0A0A08] px-8 py-4 font-bold uppercase tracking-[0.16em] text-[0.68rem] rounded-sm hover:border-[#0A0A08] hover:bg-[#0A0A08]/10 transition-all duration-300 min-h-[52px]"
              >
                {t.eventsPage.quote.cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
