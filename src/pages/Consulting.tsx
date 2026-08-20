import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Users, Target, ShieldCheck, BarChart3, Lightbulb } from 'lucide-react';

export const Consulting = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.6em] font-black mb-8 block">
              {t.consultingPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-10 tracking-tighter uppercase leading-[0.9]">
              {t.consultingPage.hero.title} <br />
              <span className="text-stroke-accent italic">{t.homePage.hero.titleAccent}</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl">
              {t.consultingPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Banner - Elevated */}
      <section className="bg-[#c5a059] py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-black/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-black" />
            </div>
            <p className="text-black font-black uppercase tracking-tight text-base md:text-xl leading-tight">
              {t.consultingAppointment?.text}
            </p>
          </div>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-black text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white hover:text-black transition-all shadow-xl"
          >
            {t.consultingAppointment?.cta}
          </motion.a>
        </div>
      </section>

      {/* Strategic Insights Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col items-start mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-px h-8 bg-[#c5a059]" />
              <span className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.4em]">
                {t.curiosityHook?.label}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
            {t.curiosityHook?.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative group pt-16"
              >
                <div className="absolute top-0 left-0 w-16 h-px bg-[#c5a059]/40 group-hover:w-full transition-all duration-700" />
                <span className="absolute top-8 left-0 text-8xl font-black text-white/[0.03] pointer-events-none select-none group-hover:text-[#c5a059]/5 transition-colors">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tight leading-tight group-hover:text-[#c5a059] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/30 leading-relaxed text-base group-hover:text-white/50 transition-colors">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 pt-16 border-t border-white/5">
            <p className="text-white/20 text-xs font-black uppercase tracking-[0.3em] max-w-3xl leading-loose italic">
              {t.curiosityHook?.footer}
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Framework */}
      <section className="py-40 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tighter uppercase leading-[0.9]">
                {t.consultingPage.transformation.title} <br />
                <span className="text-stroke-accent">{t.consultingPage.transformation.titleAccent}</span>
              </h2>
              <div className="space-y-10">
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
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5a059] group-hover:border-transparent transition-all duration-500">
                      <item.icon className="w-8 h-8 text-[#c5a059] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase text-base tracking-widest mb-3 group-hover:text-[#c5a059] transition-colors">{item.title}</h4>
                      <p className="text-white/30 text-base leading-relaxed max-w-md group-hover:text-white/50 transition-colors">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#c5a059]/10 blur-[120px] rounded-full group-hover:bg-[#c5a059]/20 transition-colors" />
              <div className="relative p-1 bg-white/5 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200"
                  alt="B2B Strategy"
                  className="rounded-[38px] grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#c5a059] text-black p-10 rounded-3xl font-black uppercase tracking-tighter text-3xl italic shadow-2xl hidden md:block">
                ROI Focused
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concessão Section - Strategic Partnership */}
      <section className="py-40 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-24 bg-[#0A0A0A] border border-white/5 rounded-[60px] flex flex-col lg:flex-row items-center gap-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a059]/10 blur-[150px] rounded-full pointer-events-none -mr-64 -mt-64" />
            
            <div className="lg:w-1/2 relative z-10">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black mb-8 block">Revenue Partnership</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-10 leading-[0.9]">
                {t.consultingPage.partnership.title}
              </h2>
              <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                {t.consultingPage.partnership.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-[#c5a059] transition-all rounded-full shadow-2xl"
              >
                {t.consultingPage.partnership.cta}
              </Link>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative z-10">
              <div className="aspect-[4/5] bg-[#111] rounded-3xl overflow-hidden border border-white/5 mt-16 group">
                <img src="https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=600" alt="Bar Excellence" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="aspect-[4/5] bg-[#111] rounded-3xl overflow-hidden border border-white/5 group">
                <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=600" alt="Staff Elite" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Audit */}
      <section className="py-40 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-24">
            <span className="text-red-500/80 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Profit Leaks Audit</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter max-w-4xl mx-auto leading-[0.9]">
              {t.consultingPage.painPoints.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.consultingPage.painPoints.items.map((text, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-[#050505] border border-white/5 flex gap-6 group hover:border-red-500/20 transition-all duration-500"
              >
                <div className="w-2 h-2 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-colors mt-2 shrink-0" />
                <p className="text-white/40 text-base font-medium group-hover:text-white/70 transition-colors">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic CTA */}
      <section className="py-40 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="bg-[#c5a059] rounded-[60px] p-16 md:p-32 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <h2 className="text-4xl md:text-7xl font-black text-black mb-12 max-w-4xl mx-auto uppercase tracking-tighter leading-[0.85] italic">
              {t.consultingPage.cta}
            </h2>
            <Link to="/contact" className="inline-block px-16 py-7 bg-black text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:scale-110 transition-all shadow-2xl">
              Book Your Diagnostic Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
