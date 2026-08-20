import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Users, Target, ShieldCheck, BarChart3, Lightbulb } from 'lucide-react';
import cocktailImg from '../assets/images/luxurious_cocktail_premium_1787247308587.jpg';

export const Consulting = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#FCFCFA] text-[#111111] font-sans">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-[#111111]/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-6 block font-sans">
              {t.consultingPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-[#111111] mt-6 mb-10 tracking-tight leading-[0.95]">
              {t.consultingPage.hero.title} <br />
              <span className="italic text-[#c5a059]">{t.consultingPage.hero.titleAccent}</span>
            </h1>
            <p className="text-[#111111]/60 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              {t.consultingPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Banner - Editorial Style */}
      <section className="bg-[#111111] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-[#c5a059]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#c5a059]" />
            </div>
            <p className="text-white font-serif text-lg md:text-xl tracking-tight">
              {t.consultingAppointment?.text}
            </p>
          </div>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white transition-all shadow-xl"
          >
            {t.consultingAppointment?.cta}
          </motion.a>
        </div>
      </section>

      {/* Strategic Insights Section */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col items-start mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-px h-8 bg-[#c5a059]" />
              <span className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.4em] font-sans">
                {t.curiosityHook?.label}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#111111] tracking-tight">Realidades da <span className="italic">Operação.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {t.curiosityHook?.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group pt-16 border-t border-[#111111]/10"
              >
                <span className="absolute top-8 left-0 text-6xl font-serif text-[#111111]/5 pointer-events-none select-none group-hover:text-[#c5a059]/10 transition-colors">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#111111] mb-6 uppercase tracking-tight leading-tight group-hover:text-[#c5a059] transition-colors font-sans">
                    {card.title}
                  </h3>
                  <p className="text-[#111111]/50 leading-relaxed text-sm group-hover:text-[#111111]/70 transition-colors font-light">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 pt-16 border-t border-[#111111]/5">
            <p className="text-[#111111]/30 text-[10px] font-bold uppercase tracking-[0.3em] max-w-3xl leading-loose italic font-sans">
              {t.curiosityHook?.footer}
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Framework */}
      <section className="py-24 md:py-40 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-16 tracking-tight leading-[1.1]">
                {t.consultingPage.transformation.title} <br />
                <span className="italic text-[#c5a059]">{t.consultingPage.transformation.titleAccent}</span>
              </h2>
              <div className="space-y-12">
                {[
                  { icon: BarChart3, ...t.consultingPage.transformation.features[0] },
                  { icon: Users, ...t.consultingPage.transformation.features[1] },
                  { icon: ShieldCheck, ...t.consultingPage.transformation.features[2] },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5a059] transition-all duration-500">
                      <item.icon className="w-6 h-6 text-[#c5a059] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-[11px] tracking-[0.2em] mb-3 group-hover:text-[#c5a059] transition-colors font-sans">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed max-w-md group-hover:text-white/60 transition-colors font-light">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200"
                  alt="B2B Strategy"
                  className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#c5a059] text-black px-8 py-10 rounded-2xl font-bold uppercase tracking-tight text-xl italic shadow-2xl hidden md:block font-serif">
                ROI Focused
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concessão Section - Strategic Partnership */}
      <section className="py-24 md:py-40 px-6 md:px-10 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-24 bg-white border border-[#111111]/5 rounded-[40px] flex flex-col lg:flex-row items-center gap-20 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.02)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a059]/[0.03] blur-[150px] rounded-full pointer-events-none -mr-64 -mt-64" />
            
            <div className="lg:w-1/2 relative z-10">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block font-sans">Revenue Partnership</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#111111] tracking-tight mb-10 leading-[1.1]">
                {t.consultingPage.partnership.title}
              </h2>
              <p className="text-[#111111]/50 text-lg md:text-xl leading-relaxed mb-12 font-light">
                {t.consultingPage.partnership.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-4 px-8 py-5 md:px-12 md:py-6 w-full sm:w-auto bg-[#111111] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#c5a059] transition-all rounded-full"
              >
                {t.consultingPage.partnership.cta}
              </Link>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
              <div className="aspect-[4/5] bg-[#F5F5F3] rounded-2xl overflow-hidden group">
                <img src={cocktailImg} alt="Luxurious Cocktail" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] bg-[#F5F5F3] rounded-2xl overflow-hidden group mt-12">
                <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=600" alt="Staff Elite" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Audit */}
      <section className="py-24 md:py-40 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-24">
            <span className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block font-sans">Profit Leaks Audit</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#111111] tracking-tight max-w-4xl mx-auto leading-[1.1]">
              {t.consultingPage.painPoints.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.consultingPage.painPoints.items.map((text, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-10 rounded-2xl bg-white border border-[#111111]/5 flex gap-6 group hover:border-[#c5a059]/20 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]/30 group-hover:bg-[#c5a059] transition-colors mt-2 shrink-0" />
                <p className="text-[#111111]/40 text-sm font-medium group-hover:text-[#111111]/70 transition-colors leading-relaxed font-sans">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic CTA */}
      <section className="py-24 md:py-40 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="bg-[#111111] rounded-[40px] p-16 md:p-32 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#c5a059]/[0.03] pointer-events-none" />
            <h2 className="text-3xl md:text-6xl font-serif text-white mb-12 max-w-4xl mx-auto tracking-tight leading-[1.2]">
              {t.consultingPage.cta}
            </h2>
            <Link to="/contact" className="inline-block px-12 py-6 bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white transition-all shadow-xl font-sans">
              AGENDAR DIAGNÓSTICO ESTRATÉGICO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
