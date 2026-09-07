import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, BarChart3, TrendingUp, ShieldAlert, Target, Zap, Clock, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, any> = {
    'Fuga de Receita': ShieldAlert,
    'Revenue Leakage': ShieldAlert,
    'Fuga de Huéspedes': ShieldAlert,
    'Fuite de Revenus': ShieldAlert,
    
    'Menus sem Engenharia': BarChart3,
    'ROI-free Menus': BarChart3,
    'Menús sin Ingeniería': BarChart3,
    'Menus sans Ingénierie': BarChart3,
    
    'Equipas Passivas': Users,
    'Passive Teams': Users,
    'Equipos Pasivos': Users,
    'Équipes Passives': Users,
    
    'Custos Descontrolados': TrendingUp,
    'Uncontrolled Costs': TrendingUp,
    'Costes Descontrolados': TrendingUp,
    'Coûts Incontrôlés': TrendingUp,
  };

  return (
    <div className="w-full bg-[#FCFCFA] text-[#111111]">
      {/* 01. Hero Section */}
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
              className="col-span-12 lg:col-span-10"
            >
              <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.8em] font-black mb-10 block italic">
                {t.homePage.hero.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-[110px] font-bold tracking-tighter leading-[0.85] text-[#111111] mb-12">
                {t.homePage.hero.title} <br />
                <span className="text-stroke-accent italic font-normal">{t.homePage.hero.titleAccent}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-[#111111]/60 font-medium mb-16 leading-relaxed max-w-3xl italic">
                {t.homePage.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8">
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

      {/* 02. Performance Proof (Stats) */}
      <section className="py-24 bg-[#111111] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {t.homePage.impact.scenarios.map((scenario, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`p-12 border ${i === 1 ? 'border-[#c5a059] bg-[#c5a059]/5' : 'border-white/10 bg-white/5'}`}
              >
                <span className={`text-[10px] font-black uppercase tracking-widest mb-10 block ${i === 1 ? 'text-[#c5a059]' : 'text-white/40'}`}>
                  {scenario.label}
                </span>
                <div className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                  {scenario.value}
                </div>
                <p className="text-white/50 text-lg leading-relaxed italic border-t border-white/5 pt-8">
                  {scenario.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Hidden Opportunity Section */}
      <section className="section-padding bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">The Uncaptured Gap</span>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-[#111111] tracking-tighter mb-10 leading-[0.9] italic">
                {t.homePage.opportunity.title} <br />
                <span className="text-stroke-accent italic font-normal">{t.homePage.opportunity.titleAccent}</span>
              </h2>
              <p className="text-[#111111]/50 text-xl leading-relaxed mb-12 italic">
                {t.homePage.opportunity.description}
              </p>
              <div className="p-8 bg-[#FCFCFA] border-l-4 border-[#c5a059] italic text-[#111111] font-medium text-lg">
                {t.homePage.opportunity.concept}
              </div>
            </div>
            <div className="lg:col-span-6 space-y-8">
              {t.homePage.opportunity.items.map((item, i) => (
                <div key={i} className="p-10 bg-[#FCFCFA] border border-black/5 group hover:border-[#c5a059]/30 transition-all duration-500">
                  <h4 className="text-xl font-bold mb-4 italic flex items-center gap-4">
                    <span className="text-[#c5a059]">0{i + 1}</span>
                    {item.title}
                  </h4>
                  <p className="text-[#111111]/40 leading-relaxed italic">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Diagnosis (Problem) Section */}
      <section className="section-padding bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-20">
          <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">{t.common.marketReality}</span>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-[#111111] tracking-tighter mb-10 leading-[0.9] italic">
            {t.homePage.problem.title} <br />
            <span className="text-stroke-accent italic font-normal">{t.homePage.problem.titleAccent}</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.homePage.problem.items.map((item, i) => {
            const Icon = iconMap[item.title] || ShieldAlert;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white border border-black/5 group hover:border-[#c5a059]/30 transition-all duration-500"
              >
                <Icon className="w-8 h-8 text-[#c5a059] mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-4 italic">{item.title}</h4>
                <p className="text-sm text-[#111111]/40 leading-relaxed italic">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 05. Framework (Performance System) */}
      <section className="section-padding bg-[#111111] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16 md:mb-24">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.8em] font-black mb-8 block italic">Proprietary Methodology</span>
            <h2 className="text-3xl sm:text-4xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8 italic">
              {t.homePage.framework.title}
            </h2>
            <p className="text-white/40 max-w-2xl text-lg sm:text-xl italic font-medium">
              {t.homePage.framework.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/10">
            {t.homePage.framework.items.map((item, i) => (
              <div key={i} className="p-12 bg-[#111111] border border-white/5 group hover:bg-[#c5a059]/5 transition-all duration-500">
                <div className="text-[#c5a059] font-black text-xs uppercase tracking-widest mb-10 opacity-30 group-hover:opacity-100">
                  Phase 0{i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-6 italic">{item.title}</h3>
                <p className="text-white/40 text-lg leading-relaxed italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Case Study Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.8em] font-black mb-8 block italic">{t.homePage.caseStudy.subtitle}</span>
              <div className="relative">
                <div className="text-[120px] sm:text-[180px] md:text-[250px] font-black text-[#111111]/5 leading-none tracking-tighter">
                  {t.homePage.caseStudy.stat}
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2">
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter italic">
                    {t.homePage.caseStudy.title}
                  </h2>
                  <p className="text-[#c5a059] text-lg sm:text-xl font-bold uppercase tracking-widest mt-4">
                    {t.homePage.caseStudy.timeframe}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-10 bg-[#FCFCFA] border border-black/5">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#c5a059] mb-6">{t.homePage.caseStudy.challenge}</div>
                  <p className="text-sm text-[#111111]/60 italic leading-relaxed">{t.homePage.caseStudy.challengeText}</p>
                </div>
                <div className="p-10 bg-[#FCFCFA] border border-[#c5a059]/20">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#c5a059] mb-6">{t.homePage.caseStudy.intervention}</div>
                  <p className="text-sm text-[#111111]/60 italic leading-relaxed">{t.homePage.caseStudy.interventionText}</p>
                </div>
                <div className="p-10 bg-[#111111] text-white border border-black/5">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#c5a059] mb-6">{t.homePage.caseStudy.result}</div>
                  <p className="text-sm text-white/60 italic leading-relaxed">{t.homePage.caseStudy.resultText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. Services Section */}
      <section className="section-padding bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16 md:mb-24">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">{t.common.solutionsHospitality}</span>
            <h2 className="text-3xl sm:text-4xl md:text-8xl font-bold text-[#111111] tracking-tighter leading-[0.85] italic">
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

      {/* 08. Process (Journey) Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-24 text-center">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">Transformation Roadmap</span>
            <h2 className="text-4xl md:text-8xl font-bold text-[#111111] tracking-tighter leading-[0.85] italic">
              {t.homePage.process.title}
            </h2>
            <p className="text-[#111111]/40 max-w-2xl mx-auto text-xl italic font-medium mt-8">
              {t.homePage.process.subtitle}
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-px bg-black/5" />
            <div className="space-y-24">
              {t.homePage.process.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-[#c5a059] flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
                  </div>
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                    <div className="text-[#c5a059] font-black text-xs uppercase tracking-widest mb-4 italic">
                      Step {step.number}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 italic">{step.title}</h3>
                    <p className="text-[#111111]/40 text-lg leading-relaxed italic max-w-md mx-auto md:mx-0 ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09. Why Cheers (Simplified & Focused) */}
      <section className="section-padding bg-[#FCFCFA] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] font-black mb-6 block italic">{t.common.theDifference}</span>
              <h2 className="text-4xl md:text-[80px] font-bold text-[#111111] tracking-tighter mb-16 leading-[0.85] italic">
                {t.homePage.whyCheers.title}
              </h2>
              <p className="text-[#111111]/60 text-xl italic leading-relaxed mb-16">
                {t.homePage.whyCheers.subtitle}
              </p>
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
            <div className="relative">
              <div className="p-12 md:p-20 bg-white border border-black/5 relative">
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#c5a059]/20" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#c5a059]/20" />
                
                <h3 className="text-2xl font-black uppercase tracking-widest mb-16 italic text-center">
                  Consulting Authority
                </h3>
                <div className="space-y-12">
                  {t.homePage.testimonials.items.map((item, i) => (
                    <div key={i} className="p-10 bg-[#FCFCFA] border border-black/5 italic">
                      <p className="text-[#111111]/60 text-lg mb-8 leading-relaxed">"{item.quote}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-px bg-[#c5a059]" />
                        <div>
                          <div className="font-bold text-xs uppercase tracking-widest">{item.author}</div>
                          <div className="text-[10px] text-black/30 uppercase tracking-widest mt-1">{item.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Partnership Models Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-24">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.8em] font-black mb-8 block italic">Engagement Structures</span>
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
                    Recommended Performance
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-6 italic">{model.title}</h3>
                <p className="text-[#111111]/50 text-lg mb-10 italic leading-relaxed">
                  {model.description}
                </p>
                <ul className="space-y-4 mb-12">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-sm font-medium text-[#111111]/60 italic">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full py-5 text-center font-black uppercase tracking-[0.3em] text-[10px] transition-all border-2 flex items-center justify-center gap-3 ${
                    model.highlight 
                      ? 'bg-black text-white border-black hover:bg-transparent hover:text-black' 
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {model.cta}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA Section - Strategic Invite */}
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
            <h2 className="text-3xl sm:text-5xl md:text-[100px] font-bold text-[#111111] mb-12 tracking-tighter leading-[0.85] italic">
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

