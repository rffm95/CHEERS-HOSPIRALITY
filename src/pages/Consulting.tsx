import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Users, Target, ShieldCheck, BarChart3, Lightbulb } from 'lucide-react';

export const Consulting = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#FAFAFA]">
      <section className="py-24 border-b border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">
              {t.consultingPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] mt-6 mb-8 tracking-tighter uppercase">
              {t.consultingPage.hero.title} <span className="text-stroke-accent">{t.consultingPage.hero.titleAccent}</span>
            </h1>
            <p className="text-[#1A1A1A]/60 text-lg leading-relaxed max-w-xl">
              {t.consultingPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Banner */}
      <section className="bg-[#c5a059] py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-black" />
            </div>
            <p className="text-black font-black uppercase tracking-tight text-sm md:text-base">
              {t.consultingAppointment?.text}
            </p>
          </div>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-[#1A1A1A] text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-black transition-colors"
          >
            {t.consultingAppointment?.cta}
          </motion.a>
        </div>
      </section>

      {/* Sabia que Section */}
      <section className="py-32 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(197, 160, 89, 0.03) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-5 h-5 text-[#c5a059]" />
              <span className="text-[#c5a059] text-xs font-black uppercase tracking-[0.4em]">
                {t.curiosityHook?.label}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-20">
            {t.curiosityHook?.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative pt-12 group"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#c5a059]/30" />
                <span className="absolute top-8 left-0 text-8xl font-black text-black/5 pointer-events-none select-none">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-black text-[#1A1A1A] mb-6 uppercase tracking-tight leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 leading-relaxed text-sm md:text-base">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-[#1A1A1A]/30 text-xs font-bold uppercase tracking-widest max-w-2xl mx-auto leading-relaxed border-t border-black/5 pt-12">
              {t.curiosityHook?.footer}
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] mb-12 tracking-tighter uppercase leading-[0.9]">
                {t.consultingPage.transformation.title} <br />
                <span className="text-[#c5a059]">{t.consultingPage.transformation.titleAccent}</span>
              </h2>
              <div className="space-y-12">
                {[
                  { icon: BarChart3, ...t.consultingPage.transformation.features[0] },
                  { icon: Users, ...t.consultingPage.transformation.features[1] },
                  { icon: ShieldCheck, ...t.consultingPage.transformation.features[2] },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center shrink-0 group-hover:bg-[#c5a059]/20 transition-all">
                      <item.icon className="w-7 h-7 text-[#c5a059]" />
                    </div>
                    <div>
                      <h4 className="text-[#1A1A1A] font-black uppercase text-sm tracking-widest mb-3">{item.title}</h4>
                      <p className="text-[#1A1A1A]/40 text-sm leading-relaxed max-w-md">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#c5a059]/5 blur-[100px] rounded-full" />
              <div className="relative p-1 bg-white rounded-[60px] border border-black/5 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200"
                  alt="Consulting Context"
                  className="rounded-[58px] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-32 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative p-12 md:p-24 bg-white border border-black/5 rounded-[60px] flex flex-col lg:flex-row items-center gap-16 shadow-2xl shadow-black/5">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c5a059]/5 blur-[100px] rounded-full pointer-events-none -mr-48 -mt-48" />
            
            <div className="lg:w-1/2 relative z-10">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black mb-6 block">B2B Partnership</span>
              <h2 className="text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-8 leading-tight">
                {t.consultingPage.partnership.title}
              </h2>
              <p className="text-[#1A1A1A]/40 text-lg leading-relaxed mb-10 font-medium">
                {t.consultingPage.partnership.description}
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-5 bg-[#1A1A1A] text-white font-black uppercase tracking-widest text-[10px] hover:bg-[#c5a059] transition-all shadow-2xl"
              >
                {t.consultingPage.partnership.cta}
              </motion.a>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
              <div className="aspect-square bg-[#F0F0F0] rounded-3xl overflow-hidden border border-black/5 mt-12">
                <img src="https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=600" alt="Bar Detail" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
              <div className="aspect-square bg-[#F0F0F0] rounded-3xl overflow-hidden border border-black/5">
                <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=600" alt="Bar Service" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter">
              {t.consultingPage.painPoints.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.consultingPage.painPoints.items.map((text, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#FAFAFA] border border-black/5 flex gap-4">
                <ShieldCheck className="w-5 h-5 text-red-500/50 shrink-0 mt-1" />
                <p className="text-[#1A1A1A]/60 text-sm font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#c5a059] to-[#b68f44] rounded-[40px] p-12 md:p-24 text-center shadow-xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 max-w-2xl mx-auto uppercase tracking-tighter leading-tight">
              {t.consultingPage.cta}
            </h2>
            <Link to="/contact" className="inline-block px-12 py-5 bg-[#1A1A1A] text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:scale-105 transition-all">
              Book Diagnosis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
