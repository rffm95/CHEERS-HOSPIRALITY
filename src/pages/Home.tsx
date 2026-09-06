import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, BarChart3, TrendingUp, ShieldAlert, Target, Zap, Clock, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, any> = {
    // We can use a consistent index or specific mapping if titles change
    // For now, mapping based on the known problem titles from translations
    'Fuga de Hóspedes': ShieldAlert,
    'Guest Leakage': ShieldAlert,
    'Fuga de Huéspedes': ShieldAlert,
    'Fuite de Clients': ShieldAlert,
    
    'Menus sem Engenharia': BarChart3,
    'Menus without Engineering': BarChart3,
    'Menús sin Ingeniería': BarChart3,
    'Menus sans Ingénierie': BarChart3,
    
    'Equipas Passivas': Users,
    'Passive Teams': Users,
    'Equipos Pasivos': Users,
    'Équipes Passives': Users,
    
    'Custos Descontrolados': TrendingUp,
    'Uncontrolled Costs': TrendingUp,
    'Costos Descontrolados': TrendingUp,
    'Coûts Incontrôlés': TrendingUp,
  };

  return (
    <div className="w-full bg-[#FCFCFA] text-[#111111]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-[#FCFCFA] pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full border-l border-black/10 transform skew-x-12 translate-x-20" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-12 items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-8"
            >
              <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.8em] font-black mb-10 block italic">
                {t.homePage.hero.eyebrow}
              </span>
              <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.85] text-[#111111] mb-12">
                {t.homePage.hero.title} <br />
                <span className="text-stroke-accent italic font-normal">{t.homePage.hero.titleAccent}</span>
              </h1>
              <p className="text-lg md:text-2xl text-[#111111]/60 font-medium mb-16 leading-relaxed max-w-2xl italic">
                {t.homePage.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-8 mb-20">
                <Link to="/contact" className="luxury-button">
                  {t.homePage.hero.ctaAudit}
                </Link>
                <Link
                  to="/portfolio"
                  className="px-10 py-5 border-b-2 border-black/10 text-black font-black uppercase tracking-[0.3em] text-[10px] hover:border-[#c5a059] transition-all flex items-center gap-4"
                >
                  {t.homePage.hero.ctaResults}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">{t.common.marketReality}</span>
              <h2 className="text-4xl md:text-7xl font-bold text-[#111111] tracking-tighter mb-10 leading-[0.9] italic">
                {t.homePage.problem.title} <br />
                <span className="text-stroke-accent italic font-normal">{t.homePage.problem.titleAccent}</span>
              </h2>
              <p className="text-[#111111]/50 text-xl leading-relaxed mb-10 italic">
                {t.homePage.problem.description}
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {t.homePage.problem.items.map((item, i) => {
                const Icon = iconMap[item.title] || ShieldAlert;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-10 bg-[#FCFCFA] border border-black/5 group hover:border-[#c5a059]/30 transition-all duration-500"
                  >
                    <Icon className="w-8 h-8 text-[#c5a059] mb-8 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="text-xl font-bold mb-4 italic">{item.title}</h4>
                    <p className="text-sm text-[#111111]/40 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Impact Section - Revenue Jump */}
      <section className="section-padding bg-[#111111] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#c5a059_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.8em] font-black mb-8 block italic">{t.common.revenueTransformation}</span>
            <h2 className="text-4xl md:text-[90px] font-bold tracking-tighter leading-[0.85] mb-12 italic">
              {t.homePage.impact.title} <br />
              <span className="text-stroke-white italic font-normal opacity-50">{t.homePage.impact.titleAccent}</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-xl italic font-medium">
              {t.homePage.impact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {t.homePage.impact.scenarios.map((scenario, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`p-12 border ${i === 1 ? 'border-[#c5a059] bg-[#c5a059]/5' : 'border-white/10 bg-white/5'} flex flex-col justify-between`}
              >
                <div>
                  <span className={`text-[10px] font-black uppercase tracking-widest mb-10 block ${i === 1 ? 'text-[#c5a059]' : 'text-white/40'}`}>
                    {scenario.label}
                  </span>
                  <div className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                    {scenario.value}
                    <span className="text-2xl font-normal opacity-30 ml-2">/dia</span>
                  </div>
                </div>
                <p className="text-white/50 text-lg leading-relaxed italic border-t border-white/5 pt-8">
                  {scenario.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-white/30 text-xs italic uppercase tracking-[0.2em]">
              {t.common.impactDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Reorganized Services Section */}
      <section className="section-padding bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-24">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">{t.common.solutionsHospitality}</span>
            <h2 className="text-4xl md:text-8xl font-bold text-[#111111] tracking-tighter leading-[0.85] italic">
              {t.homePage.services.title} <br />
              <span className="text-stroke-accent italic font-normal">{t.homePage.services.titleAccent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t.homePage.services.items.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 bg-white border border-black/5 hover:border-[#c5a059]/50 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[#c5a059] font-black text-xs uppercase tracking-widest italic">0{i + 1}</div>
                  <Zap className="w-5 h-5 text-black/10 group-hover:text-[#c5a059] group-hover:scale-125 transition-all duration-500" />
                </div>
                <h3 className="text-3xl font-bold mb-6 italic group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                <p className="text-[#111111]/40 text-lg leading-relaxed mb-12 italic">{service.description}</p>
                <div className="flex items-center gap-4 text-[#c5a059] text-[10px] font-black uppercase tracking-widest pt-8 border-t border-black/5">
                  <span className="bg-[#c5a059] w-2 h-2 rounded-full" />
                  {t.common.impactLabel}: {service.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cheers & Methodology (Simplified & Focused) */}
      <section className="section-padding bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">{t.common.theDifference}</span>
              <h2 className="text-4xl md:text-[80px] font-bold text-[#111111] tracking-tighter mb-16 leading-[0.85] italic">
                {t.homePage.whyCheers.title}
              </h2>
              <div className="space-y-12">
                {t.homePage.whyCheers.items.map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-[#111111] font-black text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                      <span className="w-6 h-px bg-[#c5a059] group-hover:w-12 transition-all duration-500" />
                      {item.title}
                    </h4>
                    <p className="text-[#111111]/50 text-lg italic leading-relaxed pl-10">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#FCFCFA] p-12 md:p-20 border border-black/5 relative">
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#c5a059]/20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#c5a059]/20" />
              
              <h3 className="text-2xl font-black uppercase tracking-widest mb-16 italic text-center">
                {t.homePage.methodology.title}
              </h3>
              <div className="space-y-12">
                {t.homePage.methodology.steps.map((step, i) => (
                  <div key={i} className="flex gap-8">
                    <span className="text-3xl font-black text-[#c5a059]/20">{step.number}</span>
                    <div>
                      <h5 className="font-bold text-lg mb-2 italic">{step.title}</h5>
                      <p className="text-sm text-[#111111]/40">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section className="section-padding bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-24">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.8em] font-black mb-8 block italic">Business Models</span>
            <h2 className="text-4xl md:text-[90px] font-bold tracking-tighter leading-[0.85] mb-12 italic">
              {t.homePage.partnershipModels.title} <br />
              <span className="text-stroke-accent italic font-normal">{t.homePage.partnershipModels.titleAccent}</span>
            </h2>
            <p className="text-[#111111]/50 max-w-2xl mx-auto text-xl italic font-medium">
              {t.homePage.partnershipModels.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t.homePage.partnershipModels.items.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-12 border ${model.highlight ? 'border-[#c5a059] bg-[#c5a059]/5' : 'border-black/5 bg-white'} relative overflow-hidden group`}
              >
                {model.highlight && (
                  <div className="absolute top-0 right-0 bg-[#c5a059] text-black text-[8px] font-black uppercase tracking-widest px-4 py-2">
                    Mais Rentável
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-6 italic">{model.title}</h3>
                <p className="text-[#111111]/50 text-lg mb-10 italic leading-relaxed">
                  {model.description}
                </p>
                <ul className="space-y-4 mb-12">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-sm font-medium text-[#111111]/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full py-5 text-center font-black uppercase tracking-[0.3em] text-[10px] transition-all border-2 ${
                    model.highlight 
                      ? 'bg-black text-white border-black hover:bg-transparent hover:text-black' 
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {model.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Strategic Invite */}
      <section className="section-padding px-6 md:px-10 overflow-hidden bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-32 relative border border-black/5 overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[150px] rounded-full -mr-64 -mt-64" />
            
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.8em] font-black mb-10 block italic">{t.common.decisionMakerInvitation}</span>
            <h2 className="text-4xl md:text-[90px] font-bold text-[#111111] mb-12 tracking-tighter leading-[0.85] italic">
              {t.homePage.ctaSection.title} <br />
              <span className="text-stroke-accent italic font-normal">{t.homePage.ctaSection.titleAccent}</span>
            </h2>
            <p className="text-[#111111]/50 text-xl md:text-2xl mb-16 leading-relaxed italic font-medium max-w-3xl mx-auto">
              {t.homePage.ctaSection.description}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link to="/contact" className="luxury-button">
                {t.homePage.ctaSection.button}
              </Link>
              <a 
                href="https://wa.me/351934384000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 border-2 border-black text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-4"
              >
                {t.common.whatsappCta}
              </a>
            </div>
            
            <div className="mt-12 text-[#111111]/30 text-[9px] uppercase tracking-[0.3em] font-bold">
              {t.common.consultationNote}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

