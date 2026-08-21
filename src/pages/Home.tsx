import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, ChevronRight, BarChart3, Users2, Cpu, Award, Target, Star, Phone, MessageCircle, TrendingUp, Calendar, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LOGO_URL = 'https://i.imgur.com/Ddsk56J.jpeg';
const WHATSAPP_NUMBER = '351938543783';

// ─── Animated Counter Hook ───────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

// ─── Stats Counter Component ──────────────────────────────────────────────────
const StatCard = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, 2000, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="text-5xl md:text-7xl font-black text-[#111111] tracking-tighter mb-3 italic">
        {count}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] font-black">{label}</div>
    </motion.div>
  );
};

// ─── Testimonials Data ────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Sofia Rodrigues',
    role: 'Organizadora de Casamentos · Viseu',
    text: 'O bar móvel da Cheers foi o highlight do casamento. Os convidados ainda falam dos cocktails. Profissionalismo de nível totalmente diferente do que encontramos normalmente.',
    rating: 5,
    event: 'Casamento · 180 convidados',
  },
  {
    name: 'Pedro Almeida',
    role: 'Diretor de Hotel · Alto Douro',
    text: 'A consultoria da Cheers transformou completamente a nossa operação de bar. Margem de lucro aumentou 23% nos primeiros 3 meses. Investimento de retorno imediato.',
    rating: 5,
    event: 'Consultoria B2B · Hotel 4★',
  },
  {
    name: 'Mariana Costa',
    role: 'Gestora de Eventos · Porto',
    text: 'Já usámos a Cheers Experiences em 4 eventos corporativos. Nunca uma falha, sempre acima das expectativas. São o parceiro de referência para qualquer empresa séria.',
    rating: 5,
    event: 'Evento Corporativo · 300+ pax',
  },
];

export const Home = () => {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [availabilityPct, setAvailabilityPct] = useState(30);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fake urgency scarcity: simulates booking pressure
  useEffect(() => {
    const pct = Math.floor(Math.random() * 20) + 20; // 20-40%
    setAvailabilityPct(pct);
  }, []);

  const iconMap: Record<string, any> = {
    'Visão 360º': BarChart3,
    'Obsessão pela Margem': TrendingUp,
    'Rigor Operacional': CheckCircle2,
    'Cultura de Elite': Award,
    'Execução de Elite': Users2,
    'Inovação Digital': Cpu,
    'Foco em ROI': Award,
    '360º Vision': BarChart3,
    'Elite Execution': Users2,
    'Digital Innovation': Cpu,
    'ROI Focus': Award,
    'Margin Obsession': TrendingUp,
    'Operational Rigor': CheckCircle2,
    'Elite Culture': Award,
    'Obsesión por el Margen': TrendingUp,
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os vossos serviços.')}`;  

  return (
    <div className="w-full bg-[#FCFCFA] text-[#111111]">

      {/* ── FLOATING WHATSAPP BUTTON ────────────────────────────────────────── */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-2xl hover:scale-105 hover:shadow-[#25D366]/40 transition-all duration-300 group"
        style={{ boxShadow: '0 8px 32px rgba(37,211,102,0.4)' }}
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="text-xs font-black uppercase tracking-widest hidden sm:block">WhatsApp</span>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      </a>

      {/* ── URGENCY BANNER ──────────────────────────────────────────────────── */}
      <div className="w-full bg-[#111111] text-white py-3 px-6 flex items-center justify-center gap-4 text-center">
        <Calendar className="w-4 h-4 text-[#c5a059] shrink-0" />
        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
          <span className="text-[#c5a059]">{availabilityPct}% disponibilidade</span>
          {' '}restante para {new Date().getFullYear()} —{' '}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#c5a059] transition-colors">
            Garanta a sua data
          </a>
        </p>
      </div>

      {/* ── HERO SECTION ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#FCFCFA]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full border-l border-black/10 transform skew-x-12 translate-x-20" />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 w-full">
          <div className="grid grid-cols-12 items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-7"
            >
              <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.8em] font-black mb-10 block italic">
                {t.homePage.hero.eyebrow}
              </span>
              <h1 className="text-6xl md:text-[110px] font-bold tracking-tighter leading-[0.85] text-[#111111] mb-12">
                {t.homePage.hero.title} <br />
                <span className="text-stroke-accent italic font-normal">{t.homePage.hero.titleAccent}</span>
              </h1>
              <p className="text-lg md:text-2xl text-[#111111]/60 font-medium mb-16 leading-relaxed max-w-2xl italic">
                {t.homePage.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <Link to="/contact" className="luxury-button">
                  {t.hero.ctaQuote}
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#1db954] transition-all flex items-center gap-4 rounded-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direto
                </a>
              </div>
            </motion.div>

            {/* Hero Logo Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="hidden lg:flex col-span-5 items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c5a059]/20 via-[#c5a059]/5 to-transparent blur-[60px] scale-125 pointer-events-none" />
                <div className="absolute inset-[-24px] rounded-full border border-dashed border-[#c5a059]/20" style={{ animation: 'spin 30s linear infinite' }} />
                <div className="absolute inset-[-48px] rounded-full border border-[#c5a059]/8" style={{ animation: 'spin 50s linear infinite reverse' }} />
                <img
                  src={LOGO_URL}
                  alt="Cheers Experiences"
                  width={320}
                  height={320}
                  loading="eager"
                  className="relative z-10 rounded-full object-cover shadow-2xl shadow-[#c5a059]/20 ring-4 ring-[#c5a059]/30 hover:ring-[#c5a059]/60 transition-all duration-700 hover:scale-[1.03] hover:shadow-[#c5a059]/40"
                />
                <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#c5a059] shadow-lg shadow-[#c5a059]/50 z-20" style={{ animation: 'pulse 2.5s ease-in-out infinite' }} />
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-black/10 shadow-xl px-6 py-3 flex items-center gap-3 whitespace-nowrap z-20">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(n => (
                      <div key={n} className="w-7 h-7 rounded-full bg-[#c5a059]/20 border-2 border-white flex items-center justify-center">
                        <Star className="w-3 h-3 text-[#c5a059] fill-[#c5a059]" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">+200 Eventos</span>
                </div>
              </div>
              <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.3); opacity: 0.6; } }
              `}</style>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS COUNTER SECTION ───────────────────────────────────────────── */}
      <section className="bg-[#111111] py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <StatCard value={200} suffix="+" label="Eventos realizados" delay={0} />
            <StatCard value={23} suffix="%" label="Aumento médio de margem" delay={0.1} />
            <StatCard value={8} suffix="+" label="Anos de experiência" delay={0.2} />
            <StatCard value={98} suffix="%" label="Clientes satisfeitos" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── STRATEGIC VALUE PROPOSITION ─────────────────────────────────────── */}
      <section className="section-padding bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {['events', 'consulting', 'digital'].map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#c5a059] italic">0{i + 1} / Strategy</span>
                  <div className="w-12 h-px bg-black/10 group-hover:w-24 group-hover:bg-[#c5a059] transition-all" />
                </div>
                <h3 className="text-4xl font-bold mb-6 tracking-tight leading-tight italic">
                  {t.businessAreas[key as keyof typeof t.businessAreas].title}
                </h3>
                <p className="text-[#111111]/50 text-lg leading-relaxed mb-10">
                  {t.businessAreas[key as keyof typeof t.businessAreas].description}
                </p>
                <Link to={`/${key}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-[#c5a059] transition-colors">
                  Explore Strategy <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / TESTIMONIALS ─────────────────────────────────────── */}
      <section className="section-padding bg-[#FCFCFA] px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-4 block italic">Prova Social</span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#111111] tracking-tighter leading-[0.9] italic">O que dizem<br/>os nossos parceiros.</h2>
            </div>
            <div className="flex gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Testemunho ${i + 1}`}
                  className={`h-1 transition-all duration-500 ${
                    i === activeTestimonial ? 'w-12 bg-[#c5a059]' : 'w-4 bg-black/20'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: i === activeTestimonial ? 1 : 0,
                  x: i === activeTestimonial ? 0 : 40,
                  position: i === activeTestimonial ? 'relative' : 'absolute',
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full top-0 left-0"
              >
                <div className="bg-white border border-black/5 p-12 md:p-16 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                  <div className="md:col-span-2">
                    <Quote className="w-12 h-12 text-[#c5a059]/30 mb-8" />
                    <p className="text-2xl md:text-3xl font-medium text-[#111111] leading-relaxed italic mb-10">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-[#c5a059]/10 flex items-center justify-center font-black text-[#c5a059]">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-black text-[#111111] tracking-wide text-sm">{testimonial.name}</p>
                        <p className="text-[#111111]/40 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 md:border-l border-black/5 md:pl-12">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] font-black mb-2">Projeto</p>
                      <p className="font-bold text-[#111111]">{testimonial.event}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] font-black mb-2">Avaliação</p>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, j) => (
                          <Star key={j} className="w-5 h-5 text-[#c5a059] fill-[#c5a059]" />
                        ))}
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a059] hover:opacity-70 transition-opacity"
                    >
                      Pedir proposta <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHEERS ──────────────────────────────────────────────────────── */}
      <section className="section-padding px-6 md:px-10 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">Elite Partnership</span>
            <h2 className="text-4xl md:text-8xl font-bold text-[#111111] tracking-tighter mb-10 leading-[0.85] italic">{t.homePage.whyCheers.title}</h2>
            <p className="text-[#111111]/40 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed italic">{t.homePage.whyCheers.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {t.homePage.whyCheers.items.map((item, i) => {
              const Icon = iconMap[item.title] || Target;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="premium-card p-12 text-center"
                >
                  <div className="w-16 h-16 bg-[#c5a059]/5 rounded-full flex items-center justify-center mb-10 mx-auto">
                    <Icon className="w-6 h-6 text-[#c5a059]" />
                  </div>
                  <h4 className="text-[#111111] font-black uppercase text-xs tracking-[0.3em] mb-6 italic">{item.title}</h4>
                  <p className="text-[#111111]/40 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY SECTION ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">Operational Framework</span>
              <h2 className="text-4xl md:text-8xl font-bold text-[#111111] tracking-tighter mb-16 leading-[0.85] italic">
                {t.homePage.methodology.title}
              </h2>
              <div className="space-y-4">
                {t.homePage.methodology.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex gap-8 p-10 border-b border-black/5 hover:bg-black/[0.01] transition-all cursor-default"
                  >
                    <span className="text-5xl font-black text-black/5 group-hover:text-[#c5a059] transition-colors">{step.number}</span>
                    <div>
                      <h4 className="text-[#111111] font-bold text-xl mb-3 italic">{step.title}</h4>
                      <p className="text-[#111111]/40 text-lg leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative aspect-[4/5] bg-[#F9F9F7] border border-black/5 overflow-hidden flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="relative inline-block mb-10">
                    <div className="absolute inset-0 rounded-full bg-[#c5a059]/20 blur-[30px] scale-150 pointer-events-none" />
                    <img
                      src={LOGO_URL}
                      alt="Cheers Experiences"
                      width={96}
                      height={96}
                      loading="lazy"
                      className="relative rounded-full object-cover ring-4 ring-[#c5a059]/40 shadow-2xl shadow-[#c5a059]/20"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-[#111111] mb-4 italic">Performance.</h3>
                  <p className="text-[#c5a059] text-[10px] tracking-[0.6em] uppercase font-black">Elite Methodology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ─────────────────────────────────────────────── */}
      <section className="bg-[#c5a059] py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/80 text-xs uppercase tracking-[0.5em] font-black mb-1">Resposta em menos de 2h</p>
            <p className="text-white text-2xl font-bold italic">Pronto para avançar? Fale connosco agora.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-[#111111] px-8 py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-[#111111] hover:text-white transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#c5a059] transition-all"
            >
              <Phone className="w-4 h-4" />
              Orçamento Online
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────────────────── */}
      <section className="section-padding px-6 md:px-10 overflow-hidden bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-16 bg-[#111111] p-12 md:p-32 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/10 blur-[150px] rounded-full -mr-64 -mt-64 pointer-events-none" />
            <div className="relative z-10 lg:max-w-3xl">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.8em] font-black mb-8 block italic">Get a Strategic Audit</span>
              <h2 className="text-4xl md:text-8xl font-bold text-white mb-12 tracking-tighter leading-[0.85] italic">
                {t.homePage.ctaSection.title} <br />
                <span className="text-[#c5a059] italic font-normal">{t.homePage.ctaSection.titleAccent}</span>
              </h2>
              <p className="text-white/50 text-xl md:text-2xl mb-0 leading-relaxed italic font-medium">
                {t.homePage.ctaSection.description}
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link to="/contact" className="luxury-button">
                {t.homePage.ctaSection.button}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
