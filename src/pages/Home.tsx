import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, BarChart3, Users2, Cpu, Award, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import HotelPerformance from '../components/HotelPerformance';

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
    <div className="w-full bg-[#FCFCFA] text-[#111111]">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#FCFCFA]">
        {/* Background Elements */}
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
              className="col-span-12 lg:col-span-8"
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
                <Link
                  to="/contact"
                  className="luxury-button"
                >
                  {t.hero.ctaQuote}
                </Link>
                <Link
                  to="/portfolio"
                  className="px-10 py-5 border-b-2 border-black/10 text-black font-black uppercase tracking-[0.3em] text-[10px] hover:border-[#c5a059] transition-all flex items-center gap-4"
                >
                  {t.nav.portfolio}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hotel Performance - Strategic Value Proposition */}
      <HotelPerformance />

      {/* Strategic Value Proposition - Editorial Grid */}
      <section className="section-padding bg-white border-y border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {['events', 'consulting', 'digital'].map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#c5a059] italic">0{i + 1} / Strategy</span>
                  <div className="w-12 h-px bg-black/10 group-hover:w-24 group-hover:bg-[#c5a059] transition-all duration-500" />
                </div>
                <h3 className="text-4xl font-bold mb-6 tracking-tight leading-tight italic group-hover:translate-x-2 transition-transform duration-500">
                  {t.businessAreas[key as keyof typeof t.businessAreas].title}
                </h3>
                <p className="text-[#111111]/50 text-lg leading-relaxed mb-10 group-hover:text-[#111111]/80 transition-colors duration-500">
                  {t.businessAreas[key as keyof typeof t.businessAreas].description}
                </p>
                <Link to={`/${key}`} className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#111111] group-hover:text-[#c5a059] transition-all duration-300">
                  <span className="border-b border-transparent group-hover:border-[#c5a059] pb-1">Explore Strategy</span>
                  <ArrowRight className="w-3 h-3 translate-y-[-1px] group-hover:translate-x-2 transition-transform" />
                </Link>
                
                {/* Decorative depth element */}
                <div className="absolute -inset-4 bg-black/[0.02] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 scale-95 group-hover:scale-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cheers - Strategic Authority */}
      <section className="section-padding px-6 md:px-10 relative overflow-hidden bg-[#FCFCFA]">
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
                  <div className="w-16 h-16 bg-[#c5a059]/5 rounded-full flex items-center justify-center mb-10 mx-auto group-hover:bg-[#c5a059] transition-colors duration-500">
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

      {/* Methodology Section - Performance Focused */}
      <section className="section-padding bg-white">
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
                  <div className="w-24 h-24 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
                    <Zap className="w-10 h-10 text-[#c5a059] fill-[#c5a059]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#111111] mb-4 italic">Performance.</h3>
                  <p className="text-[#c5a059] text-[10px] tracking-[0.6em] uppercase font-black">Elite Methodology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Professional Invitation */}
      <section className="section-padding px-6 md:px-10 overflow-hidden bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-16 bg-white p-12 md:p-32 relative border border-black/5 overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[150px] rounded-full -mr-64 -mt-64" />
            <div className="relative z-10 lg:max-w-3xl text-center lg:text-left">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.8em] font-black mb-8 block italic">Get a Strategic Audit</span>
              <h2 className="text-4xl md:text-8xl font-bold text-[#111111] mb-12 tracking-tighter leading-[0.85] italic">
                {t.homePage.ctaSection.title} <br />
                <span className="text-stroke-accent italic font-normal">{t.homePage.ctaSection.titleAccent}</span>
              </h2>
              <p className="text-[#111111]/50 text-xl md:text-2xl mb-0 leading-relaxed italic font-medium">
                {t.homePage.ctaSection.description}
              </p>
            </div>
            <div className="relative z-10 shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
              <Link
                to="/contact"
                className="luxury-button"
              >
                {t.homePage.ctaSection.button}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
