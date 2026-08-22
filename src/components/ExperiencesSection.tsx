import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioItems, CATEGORY_LABELS, type PortfolioItem } from '../data/portfolio';

const ALL_CATEGORIES = ['ALL', ...Object.keys(CATEGORY_LABELS)] as const;
type FilterCategory = typeof ALL_CATEGORIES[number];

const CATEGORY_FILTER_LABEL: Record<FilterCategory, string> = {
  ALL: 'Todos',
  EVENTS: 'Eventos',
  COCKTAILS: 'Cocktails',
  HOSPITALITY: 'Hospitality',
  BRAND: 'Marca',
  DIGITAL: 'Digital',
  AMBIENT: 'Ambientes',
};

function GridItem({ item, delay = 0 }: { item: PortfolioItem; delay?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden group cursor-pointer"
      style={{ minHeight: item.size === 'featured' ? '460px' : item.size === 'tall' ? '480px' : '240px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? 'scale(1.07)' : 'scale(1)' }}
      />

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A08]/92 via-[#0A0A08]/15 to-transparent" />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 bg-[#C9A84C]/10 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Top-right external icon on hover */}
      <div
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1)' : 'scale(0.7)' }}
      >
        <ExternalLink className="w-3.5 h-3.5 text-white" />
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        {/* Category pill */}
        <span
          className="inline-block text-[0.5rem] font-bold uppercase tracking-[0.28em] text-[#C9A84C] mb-2 px-2 py-1"
          style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}
        >
          {CATEGORY_LABELS[item.category]}
        </span>
        <p className="text-white font-semibold text-sm md:text-base leading-snug mb-1">{item.title}</p>
        {/* Description slides in on hover */}
        <p
          className="text-white/55 text-xs leading-relaxed transition-all duration-400 overflow-hidden"
          style={{
            maxHeight: hovered ? '60px' : '0',
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? '4px' : '0',
          }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ExperiencesSection() {
  const [active, setActive] = useState<FilterCategory>('ALL');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = active === 'ALL'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === active);

  // First item is "featured" (full width), rest go into the grid
  const featured = filtered.find(i => i.size === 'featured') ?? filtered[0];
  const rest = filtered.filter(i => i.id !== featured?.id);

  return (
    <section
      ref={ref}
      className="section-pad"
      id="experiences"
      style={{ background: 'linear-gradient(180deg, #0A0A08 0%, #0D0C0A 100%)' }}
    >
      <div className="container">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <span
              className="block text-[0.6rem] font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: '#C9A84C' }}
            >
              Portfolio
            </span>
            <h2
              className="font-display leading-[0.96] text-white"
              style={{ fontSize: 'clamp(2rem, 1.2rem + 2.5vw, 3.5rem)', fontStyle: 'italic', fontWeight: 600 }}
            >
              Experiences{' '}
              <em style={{ color: '#C9A84C', fontStyle: 'normal' }}>we&apos;ve created.</em>
            </h2>
            <p className="text-white/40 text-sm mt-4 max-w-sm leading-relaxed">
              Do cocktail à experiência completa — uma amostra do que construímos em hospitality, eventos, marca e digital.
            </p>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-col items-end gap-4">
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-white/70 font-semibold text-sm">200+</p>
                <p className="text-white/30 text-xs">eventos entregues</p>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.07)' }} />
              <div className="text-right">
                <p className="text-white/70 font-semibold text-sm">98%</p>
                <p className="text-white/30 text-xs">satisfação</p>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.07)' }} />
              <div className="text-right">
                <p className="text-white/70 font-semibold text-sm">8+</p>
                <p className="text-white/30 text-xs">anos</p>
              </div>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest transition-colors duration-200"
              style={{ fontSize: '0.65rem', color: '#C9A84C' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#C9A84C')}
            >
              Ver portfolio completo <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center gap-1.5 mb-8 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="shrink-0 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.22em] rounded-sm transition-all duration-250"
              style={{
                background: active === cat ? '#C9A84C' : 'rgba(255,255,255,0.04)',
                color: active === cat ? '#0A0A08' : 'rgba(255,255,255,0.38)',
                border: active === cat ? '1px solid #C9A84C' : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {CATEGORY_FILTER_LABEL[cat]}
            </button>
          ))}
        </motion.div>

        {/* ── Featured item (full width) ── */}
        <AnimatePresence mode="wait">
          {featured && (
            <motion.div
              key={`featured-${featured.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden group cursor-pointer mb-2"
              style={{ minHeight: '420px' }}
            >
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                width={1200}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Cinematic gradient */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,8,0.93) 0%, rgba(10,10,8,0.3) 50%, rgba(10,10,8,0.1) 100%)' }} />
              {/* Subtle side vignette */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,8,0.4) 0%, transparent 40%, transparent 60%, rgba(10,10,8,0.4) 100%)' }} />

              {/* Featured label */}
              <div
                className="absolute top-6 left-6 px-3 py-1.5 text-[0.5rem] font-bold uppercase tracking-[0.3em]"
                style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', color: '#C9A84C' }}
              >
                Destaque
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-end justify-between gap-6">
                <div>
                  <span
                    className="inline-block text-[0.52rem] font-bold uppercase tracking-[0.3em] mb-3 px-2.5 py-1"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', color: '#C9A84C' }}
                  >
                    {CATEGORY_LABELS[featured.category]}
                  </span>
                  <p className="text-white font-semibold text-xl md:text-2xl leading-snug mb-2">{featured.title}</p>
                  <p className="text-white/50 text-sm max-w-md leading-relaxed">{featured.description}</p>
                </div>
                <div
                  className="shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Masonry-style grid (rest of items) ── */}
        <AnimatePresence>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {rest.map((item, i) => (
              <div
                key={item.id}
                className={
                  item.size === 'tall'
                    ? 'row-span-2'
                    : item.size === 'wide'
                    ? 'col-span-2'
                    : ''
                }
              >
                <GridItem item={item} delay={i * 0.07} />
              </div>
            ))}
          </div>
        </AnimatePresence>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5"
          style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#0D0C0A' }}
        >
          {/* Thumbnails + text */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {portfolioItems.slice(0, 4).map(item => (
                <div
                  key={item.id}
                  className="w-9 h-9 rounded-full overflow-hidden"
                  style={{ border: '2px solid #0D0C0A' }}
                >
                  <img src={item.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-white/45 text-sm">
              <span className="text-white/70 font-semibold">200+ projetos</span> entregues em hospitality, eventos e branding
            </p>
          </div>
          {/* CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.62rem] font-bold uppercase tracking-widest transition-all duration-200"
              style={{
                border: '1px solid rgba(201,168,76,0.3)',
                color: '#C9A84C',
                background: 'rgba(201,168,76,0.06)',
              }}
            >
              Ver Portfolio <ArrowRight className="w-3 h-3" />
            </Link>
            <a
              href="https://wa.me/351938543783?text=Ol%C3%A1%21+Vim+pelo+site+da+Cheers+Experiences+e+gostava+de+marcar+uma+conversa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.62rem] font-bold uppercase tracking-widest text-[#0A0A08] transition-all duration-200"
              style={{ background: '#C9A84C' }}
            >
              Start a Project <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Mobile CTA */}
        <div className="flex md:hidden justify-center mt-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest transition-colors"
            style={{ color: '#C9A84C' }}
          >
            Ver portfolio completo <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  );
}
