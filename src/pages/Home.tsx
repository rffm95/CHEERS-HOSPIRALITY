import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, ArrowDown, TrendingUp, Users, Zap, Globe, Star, Quote, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const WA_HREF = 'https://wa.me/351938543783?text=' + encodeURIComponent('Olá! Vim pelo site cheers.guru e gostava de marcar uma consulta.');
const LOGO_URL = 'https://i.imgur.com/Ddsk56J.jpeg';

/* ── Animated counter ──────────────────────────────────────────── */
function useCounter(target: number, duration = 1800, trigger: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let s = 0; const step = target / (duration / 16);
    const t = setInterval(() => { s += step; if (s >= target) { setV(target); clearInterval(t); } else setV(Math.floor(s)); }, 16);
    return () => clearInterval(t);
  }, [target, duration, trigger]);
  return v;
}

const Stat = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const c = useCounter(value, 1800, inView);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay }} viewport={{ once: true }} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-semibold italic text-[#C9A84C]">{c}{suffix}</div>
      <div className="eyebrow mt-2" style={{ color: 'rgba(237,235,228,0.4)' }}>{label}</div>
    </motion.div>
  );
};

/* ── Testimonials ──────────────────────────────────────────────── */
const TESTIMONIALS = [
  { name: 'Sofia Rodrigues', role: 'Wedding Planner', company: 'Viseu Events', text: 'The Cheers team transformed our wedding bar experience. Guests are still talking about the cocktails months later. Truly premium service.', rating: 5 },
  { name: 'Pedro Almeida', role: 'Hotel Director', company: 'Alto Douro Boutique Hotel', text: 'Their bar consulting increased our F&B margin by 23% in 3 months. Clear methodology, real results. Worth every cent.', rating: 5 },
  { name: 'Mariana Costa', role: 'Events Manager', company: 'Corporate Porto', text: 'We've used Cheers for 4 corporate events. Zero failures, always above expectations. Our benchmark for hospitality partners.', rating: 5 },
];

/* ── Services ──────────────────────────────────────────────────── */
const SERVICES = [
  {
    num: '01',
    tag: 'BAR & BEVERAGE',
    headline: 'Turn your bar into a revenue engine.',
    description: 'We develop cocktail menus, beverage strategies and bar operations designed to increase ticket size, reduce waste and create experiences guests remember.',
    benefits: ['Cocktail Menu Development', 'Beverage Cost Optimisation', 'Bar Concept & Design Strategy'],
    to: '/consulting',
  },
  {
    num: '02',
    tag: 'HOSPITALITY CONSULTING',
    headline: 'Fix what's broken. Amplify what works.',
    description: 'We audit your operation, identify leaks and build systems that improve service consistency, guest satisfaction and profitability — without rebuilding from scratch.',
    benefits: ['Operational Audit', 'SOPs & Service Standards', 'Revenue & Margin Strategy'],
    to: '/consulting',
  },
  {
    num: '03',
    tag: 'EVENTS & EXPERIENCES',
    headline: 'Experiences people actually remember.',
    description: 'From intimate private events to large-scale corporate activations — we design and deliver bar experiences with precision logistics and premium execution.',
    benefits: ['Premium Mobile Bar', 'Event Bar Management', 'Brand Activations'],
    to: '/events',
  },
  {
    num: '04',
    tag: 'TRAINING & TEAM DEV',
    headline: 'Great service starts with great people.',
    description: 'We train bar and hospitality teams to deliver consistent, elevated service. From technique to mindset — because your team is your brand.',
    benefits: ['Bartender & Staff Training', 'Service Culture & Standards', 'Team Performance Coaching'],
    to: '/consulting',
  },
];

/* ── Who we work with ──────────────────────────────────────────── */
const WHO = [
  { icon: '🏨', title: 'Hotels', desc: 'Boutique to luxury. F&B strategy, bar concepts and team training.' },
  { icon: '🍸', title: 'Bars', desc: 'Independent bars and cocktail lounges. Operations, menus and brand.' },
  { icon: '🍽️', title: 'Restaurants', desc: 'Beverage programs that complement food and increase revenue.' },
  { icon: '🎉', title: 'Events', desc: 'Weddings, corporate and private. Full bar service and experiences.' },
  { icon: '🏢', title: 'Brands', desc: 'Product launches, activations and beverage experiences for brands.' },
  { icon: '✨', title: 'Private', desc: 'Exclusive private experiences. Tasting sessions, masterclasses, bespoke.' },
];

/* ── Why Cheers ────────────────────────────────────────────────── */
const WHY = [
  { icon: TrendingUp, title: 'Commercial Thinking', desc: 'Every idea must work commercially. Beautiful concepts that don't generate revenue are just decoration.' },
  { icon: Users, title: 'Real Experience', desc: 'Not theory. We've run bars, trained teams and delivered hundreds of events. We know what works.' },
  { icon: Zap, title: 'End-to-End', desc: 'From concept to execution. We can be your strategic partner or your operational team — or both.' },
  { icon: Globe, title: 'International Standards', desc: 'We bring global hospitality standards to every project — regardless of size, location or budget.' },
];

/* ── Process ───────────────────────────────────────────────────── */
const PROCESS = [
  { n: '01', title: 'Discover', desc: 'We learn your business, goals and challenges — deeply, not superficially.' },
  { n: '02', title: 'Design', desc: 'We build the strategy, concept or solution tailored to your specific context.' },
  { n: '03', title: 'Develop', desc: 'We create menus, experiences, training programs or operational systems.' },
  { n: '04', title: 'Deliver', desc: 'We implement, train and follow up until results are real and sustainable.' },
];

export const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full">

      {/* ── FLOATING WA ──────────────────────────────────────────── */}
      <a href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
        style={{ boxShadow: '0 8px 32px rgba(37,211,102,0.45)' }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      </a>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A08] via-[#0D0C0A] to-[#060504]" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#C9A84C]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#C9A84C]/3 blur-[80px] rounded-full pointer-events-none" />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>

        <div className="container-wide relative z-10 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="eyebrow">Hospitality Performance Partner</span>
                <span className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[0.6rem] text-white/30 uppercase tracking-widest">Est. Viseu, PT</span>
              </div>

              <h1 className="display-xl text-white mb-6">
                We turn<br />
                <em className="text-[#C9A84C] not-italic">hospitality</em><br />
                into experience.
              </h1>

              <p className="body-lg text-white/50 max-w-xl mb-10">
                Consulting, beverage programs, events and team training — engineered to make hospitality businesses more profitable, more consistent, and more memorable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Let&apos;s Talk <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/portfolio" className="btn-ghost">
                  Explore Our Work <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust row */}
              <div className="flex items-center gap-6 pt-8 border-t border-white/[0.06]">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className="w-8 h-8 rounded-full border-2 border-[#0A0A08] bg-[#C9A84C]/20 flex items-center justify-center">
                      <Star className="w-3 h-3 text-[#C9A84C] fill-[#C9A84C]" />
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-xs"><span className="text-white font-semibold">200+ events delivered.</span> Trusted by hotels, restaurants &amp; brands.</p>
              </div>
            </motion.div>

            {/* Logo visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="hidden lg:flex lg:col-span-4 items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#C9A84C]/15 blur-[60px] scale-150" />
                <div className="absolute inset-[-28px] rounded-full border border-dashed border-[#C9A84C]/15" style={{ animation: 'spin-slow 40s linear infinite' }} />
                <img src={LOGO_URL} alt="Cheers Guru" width={280} height={280}
                  className="relative z-10 rounded-full object-cover shadow-2xl ring-1 ring-[#C9A84C]/20 hover:ring-[#C9A84C]/50 transition-all duration-700"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#111110] border border-white/10 shadow-xl px-5 py-2.5 flex items-center gap-2.5 whitespace-nowrap z-20 rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest text-white/70">Available for projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        >
          <span className="text-[0.55rem] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-[#0D0C0A] border-y border-white/[0.05] py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value={200} suffix="+" label="Events Delivered" delay={0} />
            <Stat value={23} suffix="%" label="Avg Margin Increase" delay={0.1} />
            <Stat value={8} suffix="+" label="Years Experience" delay={0.2} />
            <Stat value={98} suffix="%" label="Client Satisfaction" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────────── */}
      <section className="section-pad" id="services">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="eyebrow block mb-4">What We Do</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="display-lg text-white">We help hospitality<br /><em className="text-[#C9A84C]">businesses do more.</em></h2>
              <p className="text-white/45 max-w-xs body-md">Four areas of expertise. One goal: measurable improvement in your operation, experience and revenue.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] border border-white/[0.04]">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0A0A08] p-10 group hover:bg-[#111110] transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="eyebrow">{s.tag}</span>
                  <span className="font-display text-5xl font-light italic text-white/[0.06] group-hover:text-[#C9A84C]/20 transition-colors">{s.num}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold italic text-white mb-4 leading-tight">{s.headline}</h3>
                <p className="text-white/45 body-md mb-8">{s.description}</p>
                <ul className="space-y-2 mb-8">
                  {s.benefits.map(b => (
                    <li key={b} className="flex items-center gap-2 text-xs text-white/60">
                      <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={s.to} className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-[#C9A84C] hover:text-white transition-colors group-hover:gap-3">
                  Discover More <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ─────────────────────────────────────── */}
      <section className="section-pad bg-[#0D0C0A]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="eyebrow block mb-4">Who We Work With</span>
            <h2 className="display-md text-white">Trusted by businesses<br /><em className="text-[#C9A84C]">across hospitality.</em></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WHO.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="card-dark p-6 text-center hover:border-[#C9A84C]/30"
              >
                <div className="text-2xl mb-3">{w.icon}</div>
                <p className="text-white font-semibold text-sm mb-1">{w.title}</p>
                <p className="text-white/40 text-xs leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow block mb-4">Client Results</span>
              <h2 className="display-md text-white">What our<br /><em className="text-[#C9A84C]">partners say.</em></h2>
            </div>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${i === activeTestimonial ? 'w-10 bg-[#C9A84C]' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                animate={{ opacity: i === activeTestimonial ? 1 : 0, x: i === activeTestimonial ? 0 : 32, position: i === activeTestimonial ? 'relative' : 'absolute' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full top-0 left-0 grid grid-cols-1 md:grid-cols-3 gap-8 card-dark p-10 md:p-14"
              >
                <div className="md:col-span-2">
                  <Quote className="w-10 h-10 text-[#C9A84C]/25 mb-6" />
                  <p className="font-display text-2xl md:text-3xl italic text-white leading-relaxed mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 flex items-center justify-center font-bold text-[#C9A84C] text-sm">{t.name[0]}</div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-5 md:border-l border-white/[0.06] md:pl-10">
                  <div className="flex gap-1">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />)}</div>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-[#C9A84C] hover:text-white transition-colors">
                    Get similar results <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHEERS ───────────────────────────────────────────── */}
      <section className="section-pad bg-[#0D0C0A]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="eyebrow block mb-4">Why Cheers</span>
            <h2 className="display-md text-white">Not an agency.<br /><em className="text-[#C9A84C]">A partner.</em></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="card-dark p-8 group">
                  <div className="w-10 h-10 rounded-md bg-[#C9A84C]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-3">{w.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="eyebrow block mb-4">How We Work</span>
            <h2 className="display-md text-white">Simple process.<br /><em className="text-[#C9A84C]">Real outcomes.</em></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
            {PROCESS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-[#0A0A08] p-10 group hover:bg-[#111110] transition-colors"
              >
                <span className="font-display text-7xl font-light italic text-white/[0.05] group-hover:text-[#C9A84C]/15 transition-colors block mb-6">{p.n}</span>
                <h4 className="font-display text-2xl italic text-white mb-3">{p.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="section-pad bg-[#C9A84C]">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#0A0A08]/60 text-[0.65rem] uppercase tracking-[0.3em] font-bold mb-4">Ready when you are</p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold italic text-[#0A0A08] mb-6">
              Let&apos;s create something<br />exceptional together.
            </h2>
            <p className="text-[#0A0A08]/60 max-w-md mx-auto mb-10 body-md">
              Tell us what you&apos;re working on. We&apos;ll tell you exactly how we can improve it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0A0A08] text-[#C9A84C] px-8 py-4 font-bold uppercase tracking-[0.18em] text-[0.7rem] rounded-sm hover:bg-[#1a1a18] transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> Let&apos;s Talk
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0A0A08]/30 text-[#0A0A08] px-8 py-4 font-bold uppercase tracking-[0.18em] text-[0.7rem] rounded-sm hover:border-[#0A0A08] hover:bg-[#0A0A08]/10 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
