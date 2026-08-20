import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, BarChart3, Users2, Cpu, Award, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, any> = {
    'Visão 360º': BarChart3,
    'Execução de Elite': Users2,
    'Inovação Digital': Cpu,
    'Foco em ROI': Award,
    '360º Vision': BarChart3,
    'Elite Execution': Users2,
    'Digital Innovation': Cpu,
    'ROI Focus': Award,
  };

  return (
    <div className="w-full bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-0 right-0 w-full h-full opacity-20 grayscale brightness-50 pointer-events-none">
             <img
              src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2000&auto=format&fit=crop"
              alt="Cinematic Bar"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 grid grid-cols-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-10"
          >
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.6em] font-black mb-8 block">
              {t.homePage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] text-white mb-10">
              {t.homePage.hero.title} <br />
              <span className="text-stroke-accent">{t.homePage.hero.titleAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-medium mb-16 leading-relaxed max-w-2xl">
              {t.homePage.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-[#c5a059] text-black font-black uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all flex items-center justify-center gap-3 rounded-full"
              >
                {t.hero.ctaQuote}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-10 py-5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-black transition-all text-center rounded-full"
              >
                {t.nav.portfolio}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars of Excellence - B2B Professional Grid */}
      <section className="relative z-10 -mt-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0">
          {['events', 'consulting', 'digital'].map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative p-12 md:p-16 bg-[#0A0A0A] border-white/5 border-l border-t border-r lg:border-r-0 ${i === 2 ? 'lg:border-r' : ''} border-b transition-all duration-500 overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-full luxury-glow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <span className="text-[10px] text-[#c5a059] font-black tracking-widest border border-[#c5a059]/20 px-4 py-1.5 rounded-full">0{i + 1}</span>
                  <Link to={`/${key}`} className="text-white/20 group-hover:text-[#c5a059] transition-all transform group-hover:translate-x-2">
                    <ChevronRight className="w-6 h-6" />
                  </Link>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight uppercase group-hover:text-[#c5a059] transition-colors leading-tight">
                  {t.businessAreas[key as keyof typeof t.businessAreas].title}
                </h3>
                <p className="text-white/40 text-base leading-relaxed mb-12 min-h-[4.5rem]">
                  {t.businessAreas[key as keyof typeof t.businessAreas].description}
                </p>
                
                <div className="pt-10 border-t border-white/5 space-y-4">
                  {t.businessAreas[key as keyof typeof t.businessAreas].features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 opacity-30 group-hover:opacity-100 transition-opacity">
                      <Zap className="w-3 h-3 text-[#c5a059]" />
                      <span className="text-[10px] uppercase tracking-widest font-black text-white">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Cheers - Strategic Authority */}
      <section className="py-40 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black mb-6 block">Strategic Authority</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8 max-w-4xl leading-[0.9]">{t.homePage.whyCheers.title}</h2>
            <p className="text-white/40 max-w-2xl text-lg md:text-xl leading-relaxed">{t.homePage.whyCheers.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-px bg-white/5 border border-white/5">
            {t.homePage.whyCheers.items.map((item, i) => {
              const Icon = iconMap[item.title] || Target;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#050505] p-10 md:p-12 group hover:bg-[#0A0A0A] transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-[#c5a059]/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-[#c5a059] transition-colors duration-500">
                    <Icon className="w-6 h-6 text-[#c5a059] group-hover:text-black transition-colors" />
                  </div>
                  <h4 className="text-white font-black uppercase text-sm tracking-widest mb-6 group-hover:text-[#c5a059] transition-colors">{item.title}</h4>
                  <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section - Performance Focused */}
      <section className="py-40 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black mb-6 block">Operational Framework</span>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-16 leading-[0.9]">
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
                    className="group flex gap-8 p-8 border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all cursor-default rounded-2xl"
                  >
                    <span className="text-4xl font-black text-white/5 group-hover:text-[#c5a059] transition-colors">{step.number}</span>
                    <div>
                      <h4 className="text-white font-black uppercase text-base tracking-widest mb-3">{step.title}</h4>
                      <p className="text-white/30 text-base leading-relaxed max-w-md group-hover:text-white/50 transition-colors">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#c5a059]/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative aspect-square bg-[#050505] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(197,160,89,0.3)]">
                    <Zap className="w-12 h-12 text-black fill-black" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 italic">Unstoppable Growth</h3>
                  <p className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-black">Strategic Execution</p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-full h-full border border-[#c5a059]/10 rounded-3xl scale-95 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Professional Invitation */}
      <section className="py-40 px-6 md:px-10 overflow-hidden bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-16 bg-[#0A0A0A] p-12 md:p-24 relative border border-white/5 overflow-hidden group rounded-[40px]"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/10 blur-[150px] rounded-full -mr-64 -mt-64" />
            <div className="relative z-10 lg:max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                {t.homePage.ctaSection.title} <br />
                <span className="text-[#c5a059] italic">{t.homePage.ctaSection.titleAccent}</span>
              </h2>
              <p className="text-white/40 text-xl mb-0 leading-relaxed font-medium">
                {t.homePage.ctaSection.description}
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 px-12 py-7 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-[#c5a059] transition-all rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              >
                {t.homePage.ctaSection.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
