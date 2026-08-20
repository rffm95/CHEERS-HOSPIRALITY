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
    <div className="w-full bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-white">
        {/* Ambient Luxury Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#c5a059]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c5a059]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute top-0 right-0 w-full h-full opacity-10 grayscale pointer-events-none">
             <img
              src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2000&auto=format&fit=crop"
              alt="Cinematic Bar"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 pt-20 grid grid-cols-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-8"
          >
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block">
              {t.homePage.hero.eyebrow}
            </span>
            <h1 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter leading-[0.85] text-[#1A1A1A] mb-8">
              {t.homePage.hero.title} <br />
              <span className="text-stroke-accent">{t.homePage.hero.titleAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#1A1A1A]/60 font-medium mb-12 leading-relaxed max-w-xl">
              {t.homePage.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="group relative px-12 py-6 bg-[#1A1A1A] text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#c5a059] transition-all flex items-center justify-center gap-3 rounded-full"
              >
                {t.hero.ctaQuote}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-12 py-6 border border-black/10 text-[#1A1A1A] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#1A1A1A] hover:text-white transition-all text-center rounded-full"
              >
                {t.nav.portfolio}
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-10 flex items-center gap-4 text-black/20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-[#c5a059] to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.4em] font-black">Scroll</span>
        </motion.div>
      </section>

      {/* Pillars of Excellence */}
      <section className="bg-white border-y border-black/5 relative z-10">
        <div className="max-w-7xl mx-auto px-0 grid grid-cols-1 lg:grid-cols-3">
          {['events', 'consulting', 'digital'].map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`group relative p-16 border-black/5 hover:bg-black/[0.01] transition-all duration-700 ${
                i !== 2 ? 'lg:border-r' : ''
              } border-b lg:border-b-0 overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-full luxury-glow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <span className="text-[10px] text-[#c5a059] font-black tracking-widest bg-[#c5a059]/10 px-4 py-1.5 rounded-full">0{i + 1}</span>
                  <Link to={`/${key}`} className="text-black/10 group-hover:text-[#c5a059] transition-all transform group-hover:translate-x-2">
                    <ChevronRight className="w-6 h-6" />
                  </Link>
                </div>
                
                <h3 className="text-4xl font-black text-[#1A1A1A] mb-6 tracking-tight uppercase group-hover:text-[#c5a059] transition-colors leading-tight">
                  {t.businessAreas[key as keyof typeof t.businessAreas].title}
                </h3>
                <p className="text-[#1A1A1A]/40 text-base leading-relaxed mb-12 min-h-[4.5rem]">
                  {t.businessAreas[key as keyof typeof t.businessAreas].description}
                </p>
                
                <div className="pt-10 border-t border-black/5 space-y-4">
                  {t.businessAreas[key as keyof typeof t.businessAreas].features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                      <Zap className="w-3 h-3 text-[#c5a059]" />
                      <span className="text-[10px] uppercase tracking-widest font-black text-[#1A1A1A]/80">
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

      {/* Why Cheers - Bento Grid */}
      <section className="py-32 px-10 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black mb-4 block">Trust & Expertise</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-6">{t.homePage.whyCheers.title}</h2>
            <p className="text-[#1A1A1A]/40 max-w-2xl mx-auto text-lg leading-relaxed">{t.homePage.whyCheers.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.homePage.whyCheers.items.map((item, i) => {
              const Icon = iconMap[item.title] || Target;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-3xl border border-black/5 group hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-[#c5a059]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-[#c5a059]" />
                  </div>
                  <h4 className="text-[#1A1A1A] font-black uppercase text-sm tracking-widest mb-4">{item.title}</h4>
                  <p className="text-[#1A1A1A]/40 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-12">
                {t.homePage.methodology.title}
              </h2>
              <div className="space-y-2">
                {t.homePage.methodology.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="group flex gap-8 p-8 rounded-3xl hover:bg-black/[0.02] transition-all cursor-default"
                  >
                    <span className="text-4xl font-black text-black/5 group-hover:text-[#c5a059] transition-colors">{step.number}</span>
                    <div>
                      <h4 className="text-[#1A1A1A] font-black uppercase text-sm tracking-widest mb-2">{step.title}</h4>
                      <p className="text-[#1A1A1A]/40 text-sm leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#c5a059]/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative aspect-square bg-[#FAFAFA] rounded-[60px] border border-black/5 overflow-hidden flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(197,160,89,0.2)]">
                    <Zap className="w-16 h-16 text-white fill-white" />
                  </div>
                  <h3 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">Focus on Success</h3>
                  <p className="text-[#1A1A1A]/40 text-sm tracking-[0.2em] uppercase font-black">Guaranteed Transformation</p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-40 h-px bg-gradient-to-l from-[#c5a059]/20 to-transparent" />
                <div className="absolute bottom-10 left-10 w-40 h-px bg-gradient-to-r from-[#c5a059]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white rounded-[60px] p-16 md:p-24 relative border border-black/5 overflow-hidden group shadow-2xl shadow-black/5"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a059]/5 blur-[120px] rounded-full -mr-64 -mt-64 group-hover:bg-[#c5a059]/10 transition-colors duration-700" />
            <div className="relative z-10 lg:max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] mb-8 tracking-tighter uppercase leading-[0.9]">
                {t.homePage.ctaSection.title} <br />
                <span className="text-[#c5a059]">{t.homePage.ctaSection.titleAccent}</span>
              </h2>
              <p className="text-[#1A1A1A]/40 text-xl mb-0 leading-relaxed font-medium">
                {t.homePage.ctaSection.description}
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 px-12 py-7 bg-[#1A1A1A] text-white font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-2xl"
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
