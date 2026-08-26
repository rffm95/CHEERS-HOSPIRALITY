import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight, ArrowDown, TrendingUp, Users, Zap, Globe,
  Star, Quote, ChevronRight, MessageCircle, Phone, Mail,
  Hotel, UtensilsCrossed, CalendarCheck, GraduationCap,
  BarChart3, Sparkles, CheckCircle2, Coffee, ExternalLink,
  Clock, Shield, Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WA_HREF = 'https://wa.me/351927653087?text=' + encodeURIComponent('Olá! Vim pelo site da Cheers Experiences e gostava de marcar uma conversa.');
const EMAIL = 'hello@cheersexperiences.com';
const LOGO_URL = 'https://i.imgur.com/Ddsk56J.jpeg';

function useCounter(target: number, duration = 1800, trigger: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let s = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      s += step;
      if (s >= target) { setV(target); clearInterval(t); }
      else setV(Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [target, duration, trigger]);
  return v;
}

const Stat = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const c = useCounter(value, 1800, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="font-display text-5xl md:text-7xl font-semibold italic text-[#C9A84C] tabular-nums">
        {c}{suffix}
      </div>
      <div className="mt-3 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/35">{label}</div>
    </motion.div>
  );
};

const TESTIMONIALS = [
  {
    name: 'Sofia Rodrigues',
    role: 'Wedding Planner',
    company: 'Viseu Events',
    text: 'A equipa da Cheers Experiences transformou completamente a experiência do bar no nosso casamento. Os convidados ainda falam dos cocktails meses depois. Serviço verdadeiramente premium.',
    rating: 5,
    result: '+40% satisfação dos convidados'
  },
  {
    name: 'Pedro Almeida',
    role: 'Hotel Director',
    company: 'Alto Douro Boutique Hotel',
    text: 'A consultoria da Cheers aumentou a nossa margem F&B em 23% em apenas 3 meses. Metodologia clara, resultados reais. Vale cada cêntimo investido.',
    rating: 5,
    result: '+23% margem F&B em 3 meses'
  },
  {
    name: 'Mariana Costa',
    role: 'Events Manager',
    company: 'Corporate Porto',
    text: 'Utilizámos a Cheers Experiences em 4 eventos corporativos. Zero falhas, sempre acima das expectativas. O nosso benchmark para parceiros de hospitality.',
    rating: 5,
    result: '4 eventos · 100% sem falhas'
  },
];

const SERVICES = [
  {
    num: '01',
    tag: 'BAR & BEVERAGE',
    icon: Coffee,
    headline: 'Transforma o teu bar num motor de receita.',
    intro: 'A maioria dos bares deixa dinheiro em cima do balcão. Menus desatualizados, custos mal controlados e experiências que não surpreendem — corriges isso com a estratégia certa.',
    description: 'Desenvolvemos programas completos de cocktails e bebidas — do conceito ao copo — com foco em aumentar o ticket médio, reduzir desperdício e criar momentos que os clientes realmente recordam e partilham.',
    benefits: [
      'Desenvolvimento de Menus de Cocktails & Bebidas',
      'Análise e Otimização de Custos (Cost of Goods)',
      'Conceito, Posicionamento e Estratégia de Bar',
      'Seleção de Fornecedores e Carta de Vinhos',
    ],
    outcome: '+23% margem média nos projetos de beverage',
    cta: 'Falar sobre o meu bar',
    to: '/consulting',
  },
  {
    num: '02',
    tag: 'HOSPITALITY CONSULTING',
    icon: BarChart3,
    headline: 'Corrige o que não funciona. Amplifica o que funciona.',
    intro: 'Antes de investir em mais staff ou reformulações, é preciso perceber exatamente onde a operação está a falhar — e onde está a deixar revenue por aproveitar.',
    description: 'Auditamos a tua operação de forma cirúrgica, identificamos as fugas de receita e construímos sistemas que melhoram a consistência do serviço, a satisfação dos hóspedes e a rentabilidade — sem reconstruir o que já funciona.',
    benefits: [
      'Auditoria Operacional e Diagnóstico F&B',
      'Standard Operating Procedures (SOPs)',
      'Estratégia de Revenue e Melhoria de Margens',
      'Reestruturação de Oferta e Pricing',
    ],
    outcome: 'Resultado médio: +18% a +30% margem operacional',
    cta: 'Agendar diagnóstico gratuito',
    to: '/consulting',
  },
  {
    num: '03',
    tag: 'EVENTS & EXPERIENCES',
    icon: CalendarCheck,
    headline: 'Experiências que as pessoas realmente recordam.',
    intro: 'Num mercado onde todos oferecem "serviço premium", o que diferencia um evento inesquecível é a execução de cada detalhe — da logística ao copo que chega à mão dos convidados.',
    description: 'De eventos privados íntimos a grandes ativações corporativas e de marca — desenhamos, coordenamos e executamos experiências de bar e hospitality com precisão logística e apresentação de nível internacional.',
    benefits: [
      'Mobile Bar Premium para Eventos e Marcas',
      'Gestão Completa de Bar em Eventos Privados',
      'Ativações de Marca e Experiências Imersivas',
      'Cocktails Personalizados e Temáticos',
    ],
    outcome: '200+ eventos entregues · 98% satisfação',
    cta: 'Planear o meu evento',
    to: '/events',
  },
  {
    num: '04',
    tag: 'TRAINING & TEAM DEV',
    icon: GraduationCap,
    headline: 'Um serviço excecional começa por pessoas excecionais.',
    intro: 'Podes ter o melhor menu e o espaço mais bonito — mas se a equipa não entrega com consistência e atitude, o cliente não volta. A formação certa muda isso.',
    description: 'Treinamos equipas de bar e hospitality para entregar um serviço consistente, elevado e comercialmente inteligente. Da técnica de cocktails à mentalidade de serviço — porque a tua equipa é a experiência que o cliente leva para casa.',
    benefits: [
      'Formação de Bartenders e Front-of-House',
      'Cultura de Serviço, Atitude e Standards',
      'Técnicas de Upselling e Revenue por Mesa',
      'Coaching de Performance e Liderança de Equipa',
    ],
    outcome: 'Equipas formadas em 40+ estabelecimentos',
    cta: 'Falar sobre formação',
    to: '/consulting',
  },
];

const GRID_ITEMS = [
  { id: '1', img: 'https://i.imgur.com/aUNb0uK.png', tag: 'COCKTAILS', label: 'Beverage Program', size: 'tall' },
  { id: '2', img: 'https://i.imgur.com/CnaTvqH.png', tag: 'BRAND', label: 'Brand Identity', size: 'normal' },
  { id: '3', img: 'https://i.imgur.com/JzfPypn.png', tag: 'DIGITAL', label: 'Digital Experience', size: 'normal' },
  { id: '4', img: 'https://i.imgur.com/VrbFY65.png', tag: 'EVENTS', label: 'Event Production', size: 'wide' },
  { id: '5', img: 'https://i.imgur.com/VEnpjnY.png', tag: 'HOSPITALITY', label: 'Hospitality Design', size: 'normal' },
  { id: '6', img: 'https://i.imgur.com/n993YwC.png', tag: 'BAR', label: 'Bar Concept', size: 'normal' },
  { id: '7', img: 'https://i.imgur.com/gLkKjHL.png', tag: 'BRAND', label: 'Visual Identity', size: 'tall' },
  { id: '8', img: 'https://i.imgur.com/BFUQH2t.png', tag: 'DIGITAL', label: 'Menu Design', size: 'normal' },
  { id: '9', img: 'https://i.imgur.com/sC49CxI.png', tag: 'EVENTS', label: 'Event Experience', size: 'normal' },
];

const WHO = [
  { Icon: Hotel, title: 'Hotels', desc: 'Boutique a luxo. Estratégia F&B, conceitos de bar e formação de equipas.' },
  { Icon: UtensilsCrossed, title: 'Restaurants', desc: 'Programas de bebidas que complementam a comida e aumentam a receita.' },
  { Icon: CalendarCheck, title: 'Events', desc: 'Casamentos, corporate e privados. Serviço completo de bar e experiências.' },
  { Icon: Coffee, title: 'Bars', desc: 'Bares independentes e cocktail lounges. Operações, menus e marca.' },
  { Icon: Sparkles, title: 'Brands', desc: 'Lançamentos de produto, ativações e experiências de bebidas para marcas.' },
  { Icon: Globe, title: 'Private', desc: 'Experiências privadas exclusivas. Tasting sessions, masterclasses, bespoke.' },
];

const WHY = [
  { icon: TrendingUp, title: 'Pensamento Comercial', desc: 'Cada ideia tem de funcionar comercialmente. Conceitos bonitos que não geram receita são apenas decoração.' },
  { icon: Users, title: 'Experiência Real', desc: 'Não é teoria. Gerimos bares, trainámos equipas e entregámos centenas de eventos. Sabemos o que funciona.' },
  { icon: Zap, title: 'End-to-End', desc: 'Do conceito à execução. Podemos ser o teu parceiro estratégico, a tua equipa operacional — ou ambos.' },
  { icon: CheckCircle2, title: 'Standards Internacionais', desc: 'Trazemos padrões globais de hospitality a cada projeto — independentemente do tamanho, localização ou budget.' },
];

const PROCESS = [
  { n: '01', title: 'Discover', desc: 'Aprendemos o teu negócio, objetivos e desafios — em profundidade, não superficialmente.' },
  { n: '02', title: 'Design', desc: 'Construímos a estratégia, conceito ou solução adaptada ao teu contexto específico.' },
  { n: '03', title: 'Develop', desc: 'Criamos menus, experiências, programas de formação ou sistemas operacionais.' },
  { n: '04', title: 'Deliver', desc: 'Implementamos, formamos e acompanhamos até que os resultados sejam reais e sustentáveis.' },
];

export const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full">

      {/* FLOATING WHATSAPP */}
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar via WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:scale-105 hover:shadow-[0_8px_40px_rgba(37,211,102,0.5)] transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="text-[0.65rem] font-bold uppercase tracking-widest hidden sm:block">WhatsApp</span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </a>

      {/* ══ HERO — BOLDER, BIGGER, MORE DRAMA ══ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#060504]">
        {/* BG layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(201,168,76,0.04)_0%,transparent_70%)]" />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: 'linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
          {/* Noise texture overlay for depth */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px' }} />
        </div>

        <div className="container-wide relative z-10 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">

            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="inline-flex items-center gap-3 mb-8 self-start px-4 py-2 border border-[#C9A84C]/25 bg-[#C9A84C]/6 rounded-sm backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#C9A84C]">Hospitality Performance Partner</span>
                <span className="text-white/15 hidden sm:inline">·</span>
                <span className="text-[0.58rem] text-white/30 uppercase tracking-widest hidden sm:inline">Est. Viseu, PT</span>
              </motion.div>

              {/* HERO HEADLINE — HUGE */}
              <h1 className="hero-headline text-white mb-6">
                We craft{' '}
                <span className="text-[#C9A84C] italic">hospitality</span>
                {' '}experiences<br className="hidden sm:block" />
                {' '}that{' '}
                <span className="text-[#C9A84C] italic">perform.</span>
              </h1>

              {/* Category tags */}
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-[#C9A84C]/40" />
                {['Hotels', 'Restaurants', 'Brands', 'Events'].map(t => (
                  <span key={t} className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-white/25">{t}</span>
                ))}
              </div>

              {/* Body copy — more readable */}
              <p className="text-white/65 text-lg leading-[1.8] max-w-[520px] mb-10">
                From beverage strategy and bar consulting to premium event services and team training —
                we help hospitality businesses deliver more memorable experiences and stronger results.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-primary"
                >
                  <MessageCircle className="w-4 h-4" />
                  Let’s Talk
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/contact" className="hero-cta-ghost">
                  Start a Project
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Availability */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-2 text-[0.62rem] text-white/30 mb-10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
                Disponíveis para novos projetos · Resposta em &lt; 2 horas
              </motion.p>

              {/* Social proof bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap items-center gap-5 pt-7 border-t border-white/[0.07]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex">
                    {[...Array(5)].map((_, n) => <Star key={n} className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]" />)}
                  </div>
                  <span className="text-white/45 text-xs">5-star rated</span>
                </div>
                <span className="w-px h-4 bg-white/10" />
                <span className="text-white/45 text-xs"><strong className="text-white/80 font-semibold">200+</strong> events delivered</span>
                <span className="w-px h-4 bg-white/10" />
                <span className="text-white/45 text-xs"><strong className="text-white/80 font-semibold">+23%</strong> avg. F&amp;B margin</span>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN — logo orb, elevated */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="hidden lg:flex lg:col-span-5 items-center justify-center"
            >
              <div className="relative flex items-center justify-center">
                {/* Rings */}
                <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-[#C9A84C]/15" style={{ animation: 'spin-slow 60s linear infinite' }} />
                <div className="absolute w-[320px] h-[320px] rounded-full border border-[#C9A84C]/8" style={{ animation: 'spin-slow 40s linear infinite reverse' }} />
                {/* Gold halo */}
                <div className="absolute w-[280px] h-[280px] rounded-full bg-[#C9A84C]/12 blur-[80px]" />
                {/* Logo */}
                <img
                  src={LOGO_URL}
                  alt="Cheers Experiences"
                  width={280}
                  height={280}
                  className="relative z-10 rounded-full object-cover shadow-[0_0_80px_rgba(201,168,76,0.2)] ring-2 ring-[#C9A84C]/20 hover:ring-[#C9A84C]/50 transition-all duration-700"
                />
                {/* Available pill */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#0F0F0D] border border-white/10 shadow-xl px-5 py-2.5 rounded-full whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/60">Available for new projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        >
          <span className="text-[0.5rem] uppercase tracking-[0.4em]">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </motion.div>
      </section>

      {/* ══ STATS BAR — gold-on-dark, high contrast ══ */}
      <section className="relative bg-[#0D0C0A] border-y border-white/[0.06] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(201,168,76,0.04)_0%,transparent_70%)]" />
        <div className="container relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
            <Stat value={200} suffix="+" label="Eventos Entregues" delay={0} />
            <Stat value={23} suffix="%" label="Aumento Médio de Margem" delay={0.1} />
            <Stat value={8} suffix="+" label="Anos de Experiência" delay={0.2} />
            <Stat value={98} suffix="%" label="Satisfação de Clientes" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="section-pad bg-[#080807]" id="services">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="eyebrow block mb-5">O Que Fazemos</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h2 className="display-lg text-white max-w-xl">
                Soluções personalizadas<br />
                <em className="text-[#C9A84C]">para cada negócio.</em>
              </h2>
              <p className="text-white/50 max-w-xs text-base leading-relaxed">
                Quatro áreas de especialização. Um objetivo: melhoria mensurável na tua operação, experiência e receita.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-white/[0.06]">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="service-card group p-10 flex flex-col border-b border-r-0 md:odd:border-r border-white/[0.06] bg-[#080807] hover:bg-[#0F0E0C] transition-colors duration-500"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/22 transition-colors">
                        <Icon className="w-5 h-5 text-[#C9A84C]" />
                      </div>
                      <span className="eyebrow">{s.tag}</span>
                    </div>
                    <span className="font-display text-6xl font-light italic text-white/[0.04] group-hover:text-[#C9A84C]/12 transition-colors select-none">{s.num}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold italic text-white mb-4 leading-snug">{s.headline}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 italic border-l-2 border-[#C9A84C]/35 pl-4">{s.intro}</p>
                  <p className="text-white/40 text-sm leading-relaxed mb-8">{s.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {s.benefits.map(b => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-white/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-2 bg-[#C9A84C]/8 border border-[#C9A84C]/15 rounded-sm">
                    <TrendingUp className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
                    <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#C9A84C]/90">{s.outcome}</span>
                  </div>
                  <div className="mt-auto">
                    <Link to={s.to} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C9A84C] hover:text-white transition-colors group-hover:gap-3">
                      {s.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA strip below services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-0 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8 bg-[#C9A84C]/[0.05] border border-[#C9A84C]/15 border-t-0"
          >
            <div>
              <p className="text-white font-semibold mb-1">Não tens a certeza de qual serviço precisas?</p>
              <p className="text-white/40 text-sm">Conta-nos o teu desafio — encontramos a solução em conjunto. Sem compromisso.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="w-3.5 h-3.5" />
                Start a Project
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-ghost">
                <Mail className="w-3.5 h-3.5" />
                Enviar Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ PORTFOLIO ══ */}
      <section className="section-pad bg-[#0D0C0A]" id="experiences">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="eyebrow block mb-5">Portfolio</span>
              <h2 className="display-lg text-white">
                Experiences<br />
                <em className="text-[#C9A84C]">we&apos;ve created.</em>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <p className="text-white/45 text-base max-w-[280px] text-left md:text-right leading-relaxed">
                Uma amostra do que construímos — de cocktails a experiências completas de marca.
              </p>
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C9A84C] hover:text-white transition-colors">
                Ver portfolio completo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
              className="md:col-span-8 relative overflow-hidden group cursor-pointer rounded-sm" style={{ minHeight: '440px' }}
            >
              <img src={GRID_ITEMS[3].img} alt={GRID_ITEMS[3].label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <div>
                  <span className="inline-block text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[#C9A84C] mb-2 px-2 py-1 bg-[#C9A84C]/15 border border-[#C9A84C]/30">{GRID_ITEMS[3].tag}</span>
                  <p className="text-white font-semibold text-xl">{GRID_ITEMS[3].label}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
              className="md:col-span-4 relative overflow-hidden group cursor-pointer rounded-sm" style={{ minHeight: '440px' }}
            >
              <img src={GRID_ITEMS[0].img} alt={GRID_ITEMS[0].label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[#C9A84C] mb-2 px-2 py-1 bg-[#C9A84C]/15 border border-[#C9A84C]/30">{GRID_ITEMS[0].tag}</span>
                <p className="text-white font-semibold text-lg">{GRID_ITEMS[0].label}</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
            {[GRID_ITEMS[1], GRID_ITEMS[2], GRID_ITEMS[4], GRID_ITEMS[5]].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.08 }} viewport={{ once: true }}
                className="relative overflow-hidden group cursor-pointer rounded-sm" style={{ minHeight: '230px' }}
              >
                <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block text-[0.5rem] font-bold uppercase tracking-[0.28em] text-[#C9A84C] mb-1.5 px-1.5 py-0.5 bg-[#C9A84C]/15 border border-[#C9A84C]/25">{item.tag}</span>
                  <p className="text-white text-sm font-semibold">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {[GRID_ITEMS[6], GRID_ITEMS[7], GRID_ITEMS[8]].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}
                className="relative overflow-hidden group cursor-pointer rounded-sm" style={{ minHeight: '270px' }}
              >
                <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block text-[0.5rem] font-bold uppercase tracking-[0.28em] text-[#C9A84C] mb-1.5 px-1.5 py-0.5 bg-[#C9A84C]/15 border border-[#C9A84C]/25">{item.tag}</span>
                  <p className="text-white text-sm font-semibold">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8 border border-white/[0.07] bg-[#0A0A08] rounded-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[GRID_ITEMS[0], GRID_ITEMS[1], GRID_ITEMS[2]].map(item => (
                  <div key={item.id} className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0A0A08]">
                    <img src={item.img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white/80 font-semibold">Gostaste do que viste?</p>
                <p className="text-white/40 text-sm">O teu projeto pode ser o próximo.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="w-3.5 h-3.5" />
                Let&apos;s Talk
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link to="/portfolio" className="btn-ghost">
                Ver Portfolio <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ WHO WE WORK WITH ══ */}
      <section className="section-pad bg-[#080807]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="eyebrow block mb-5">Com Quem Trabalhamos</span>
            <h2 className="display-md text-white">
              Parceiros de confiança<br />
              <em className="text-[#C9A84C]">em todo o setor hospitality.</em>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WHO.map((w, i) => {
              const Icon = w.Icon;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="card-dark p-7 text-center group hover:border-[#C9A84C]/35 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-md bg-[#C9A84C]/8 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <p className="text-white font-semibold mb-2">{w.title}</p>
                  <p className="text-white/45 text-xs leading-relaxed">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section-pad bg-[#0D0C0A]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow block mb-5">O Que Dizem os Nossos Clientes</span>
              <h2 className="display-md text-white">
                Resultados reais.<br />
                <em className="text-[#C9A84C]">Parceiros satisfeitos.</em>
              </h2>
            </div>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === activeTestimonial ? 'w-12 bg-[#C9A84C]' : 'w-5 bg-white/15 hover:bg-white/35'}`}
                />
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden min-h-[280px]">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                animate={{ opacity: i === activeTestimonial ? 1 : 0, x: i === activeTestimonial ? 0 : 40, position: i === activeTestimonial ? 'relative' : 'absolute' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full top-0 left-0 grid grid-cols-1 md:grid-cols-3 gap-8 card-dark p-10 md:p-14"
              >
                <div className="md:col-span-2">
                  <Quote className="w-10 h-10 text-[#C9A84C]/25 mb-6" />
                  <p className="font-display text-xl md:text-2xl italic text-white leading-relaxed mb-8">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#C9A84C]/15 flex items-center justify-center font-bold text-[#C9A84C] shrink-0">{t.name[0]}</div>
                    <div>
                      <p className="text-white font-semibold">{t.name}</p>
                      <p className="text-white/40 text-sm">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between md:border-l border-white/[0.07] md:pl-10 gap-6">
                  <div>
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-sm">
                      <TrendingUp className="w-3.5 h-3.5 text-[#C9A84C]" />
                      <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#C9A84C]">{t.result}</span>
                    </div>
                  </div>
                  <a
                    href={WA_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C9A84C] hover:text-white transition-colors"
                  >
                    Obter resultados semelhantes <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHEERS ══ */}
      <section className="section-pad bg-[#080807]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="eyebrow block mb-5">Porquê a Cheers Experiences</span>
            <h2 className="display-md text-white">
              Não somos uma agência.<br />
              <em className="text-[#C9A84C]">Somos o teu parceiro.</em>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-dark p-8 group hover:border-[#C9A84C]/30"
                >
                  <div className="w-12 h-12 rounded-md bg-[#C9A84C]/10 flex items-center justify-center mb-7 group-hover:bg-[#C9A84C]/22 transition-colors">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">{w.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="section-pad bg-[#0D0C0A]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="eyebrow block mb-5">Como Trabalhamos</span>
            <h2 className="display-md text-white">
              Processo simples.<br />
              <em className="text-[#C9A84C]">Resultados reais.</em>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.05]">
            {PROCESS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0C0A] p-10 group hover:bg-[#111110] transition-colors"
              >
                <span className="font-display text-8xl font-light italic text-white/[0.04] group-hover:text-[#C9A84C]/12 transition-colors block mb-5 leading-none">{p.n}</span>
                <h4 className="font-display text-2xl italic text-white mb-4">{p.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA — STATEMENT ══ */}
      <section className="relative overflow-hidden" id="contact">
        {/* Gold marquee strip */}
        <div className="bg-[#C9A84C] py-3 overflow-hidden">
          <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'marquee 18s linear infinite' }}>
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-[0.52rem] font-bold uppercase tracking-[0.32em] text-[#0A0A08]/55 px-8">
                Let’s Talk &nbsp;·&nbsp; Start a Project &nbsp;·&nbsp; Contact Us &nbsp;·&nbsp; Let’s Talk &nbsp;·&nbsp; Start a Project &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#060504] relative">
          <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: 'linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#C9A84C]/5 blur-[180px] rounded-full pointer-events-none" />

          <div className="container relative z-10 py-28 md:py-40">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.35em] text-[#C9A84C] block mb-8">
                Vamos Começar
              </span>
              <h2 className="display-lg text-white leading-tight mb-8">
                Pronto para criar algo<br />
                <em className="text-[#C9A84C]">verdadeiramente excecional?</em>
              </h2>
              <p className="text-white/45 max-w-lg mx-auto text-lg leading-relaxed">
                Fala connosco hoje. Em menos de 2 horas tens uma resposta
                com os próximos passos — sem compromisso, sem pressão.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <motion.a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.7 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-start gap-5 p-9 bg-[#C9A84C] hover:bg-[#d4b254] transition-colors duration-300 cursor-pointer rounded-sm"
              >
                <div className="w-12 h-12 rounded-md bg-[#0A0A08]/12 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#0A0A08]" />
                </div>
                <div>
                  <p className="text-[#0A0A08] font-bold text-lg mb-2">WhatsApp</p>
                  <p className="text-[#0A0A08]/60 text-sm leading-relaxed">A forma mais rápida de falar connosco. Resposta em menos de 2 horas.</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0A0A08] mt-auto">
                  Let’s Talk <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute top-4 right-4 px-2 py-1 bg-[#0A0A08]/12 rounded-sm">
                  <span className="text-[0.48rem] font-bold uppercase tracking-widest text-[#0A0A08]/65">Mais Rápido</span>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${EMAIL}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                className="group flex flex-col items-start gap-5 p-9 bg-[#0F0E0C] border border-white/[0.08] hover:border-[#C9A84C]/35 transition-colors duration-300 cursor-pointer rounded-sm"
              >
                <div className="w-12 h-12 rounded-md bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/22 transition-colors">
                  <Mail className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-2">Email</p>
                  <p className="text-white/45 text-sm leading-relaxed">Para projetos mais detalhados ou propostas formais.</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C9A84C] mt-auto group-hover:gap-3 transition-all">
                  {EMAIL} <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="group flex flex-col items-start gap-5 p-9 bg-[#0F0E0C] border border-white/[0.08] hover:border-[#C9A84C]/35 transition-colors duration-300 rounded-sm"
              >
                <div className="w-12 h-12 rounded-md bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/22 transition-colors">
                  <Phone className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-2">Agendar Consulta</p>
                  <p className="text-white/45 text-sm leading-relaxed">Preferes uma conversa estruturada? Marca uma sessão de 30 minutos.</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C9A84C] mt-auto group-hover:gap-3 transition-all"
                >
                  Book a Consultation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-10 pt-10 border-t border-white/[0.07]"
            >
              {[
                { icon: Clock, text: 'Resposta em menos de 2 horas' },
                { icon: Shield, text: 'Sem compromisso inicial' },
                { icon: Send, text: 'Proposta personalizada' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-white/35 text-sm">
                  <Icon className="w-4 h-4 text-[#C9A84C]/50 shrink-0" />
                  {text}
                </div>
              ))}
              <div className="flex items-center gap-2.5 text-white/35 text-sm">
                <div className="flex">{[...Array(5)].map((_, n) => <Star key={n} className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]" />)}</div>
                <span>200+ clientes satisfeitos</span>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </div>
  );
};
