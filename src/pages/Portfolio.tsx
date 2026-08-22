import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, MessageCircle, Mail, Star, TrendingUp } from 'lucide-react';
import { portfolioItems } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

const WA_HREF = 'https://wa.me/351938543783?text=' + encodeURIComponent('Olá! Vim pelo site da Cheers Experiences e gostava de marcar uma conversa.');
const EMAIL = 'hello@cheersexperiences.com';

export const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-20 bg-[#FCFCFA] min-h-screen text-[#111111] font-sans">

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-40 border-b border-[#111111]/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-center mx-auto"
          >
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8 block font-sans">
              {t.portfolioPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-[#111111] mt-6 mb-12 tracking-tight leading-[0.95]">
              {t.portfolioPage.hero.title} <br />
              <span className="italic text-[#c5a059]">{t.portfolioPage.hero.titleAccent}</span>
            </h1>
            <p className="text-[#111111]/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              {t.portfolioPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── GRID ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#F5F5F3] border border-[#111111]/5 mb-10 shadow-[0_30px_60px_rgba(0,0,0,0.02)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-[#111111] text-white text-[9px] font-bold uppercase tracking-[0.3em] px-8 py-4 rounded-full shadow-2xl">
                      {t.common.viewMore}
                    </span>
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#111111] tracking-tight group-hover:text-[#c5a059] transition-colors leading-none">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#c5a059]/20 mt-6 group-hover:w-24 group-hover:bg-[#c5a059] transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — DARK, STRONG ─────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A0A08] py-32 md:py-48">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C9A84C]/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#C9A84C] block mb-8">
                Start a Project
              </span>

              {/* Headline */}
              <h2 className="display-lg text-white mb-8 leading-tight">
                Viste o trabalho.<br />
                <em className="text-[#C9A84C]">Agora fala connosco.</em>
              </h2>

              {/* Sub */}
              <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-14 font-light">
                Cada projeto começa com uma conversa. Conta-nos o teu desafio
                — em menos de 2 horas tens uma resposta com os próximos passos.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
            >
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shadow-lg shadow-[#C9A84C]/20"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Let&apos;s Talk
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="btn-ghost"
              >
                <Mail className="w-3.5 h-3.5" />
                Enviar Email
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-white/[0.06]"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, n) => (
                    <Star key={n} className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>
                <span className="text-white/35 text-xs">5-star rated</span>
              </div>
              <span className="w-px h-4 bg-white/10" />
              <span className="text-white/35 text-xs">
                <strong className="text-white/60 font-semibold">200+</strong> projetos entregues
              </span>
              <span className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-1.5 text-white/35 text-xs">
                <TrendingUp className="w-3.5 h-3.5 text-[#C9A84C]/50" />
                <span><strong className="text-white/60 font-semibold">+23%</strong> margem F&amp;B média</span>
              </div>
              <span className="w-px h-4 bg-white/10 hidden sm:block" />
              <Link
                to="/contact"
                className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors"
              >
                Ver página de contacto <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ───────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-white/98 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-10 right-10 p-6 text-[#111111] hover:text-[#c5a059] transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-10 h-10" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Portfolio Large"
                className="max-w-full max-h-full object-contain rounded-[2rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
