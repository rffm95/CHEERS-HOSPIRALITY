import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Monitor, Smartphone, QrCode, Tv, RefreshCw, Languages, 
  Instagram, BarChart2, Package, CheckCircle2,
  ChevronRight, MonitorPlay
} from 'lucide-react';

export const Digital = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#FCFCFA] text-[#111111] font-sans">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-[#111111]/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-6 block font-sans">
              {t.digitalPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-[#111111] mt-6 mb-10 tracking-tight leading-[0.95]">
              {t.digitalPage.hero.title} <br />
              <span className="italic text-[#c5a059]">{t.digitalPage.hero.titleAccent}</span>
            </h1>
            <p className="text-[#111111]/60 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              {t.digitalPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* TV Strategy Section - High Impact */}
      <section className="py-24 md:py-40 px-6 md:px-10 relative overflow-hidden bg-[#111111]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#c5a059]/[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-12 shadow-[0_0_20px_rgba(197,160,89,0.1)]"
              >
                <RefreshCw className="w-3 h-3 animate-spin" />
                {t.digitalPage.tvStrategy.badge}
              </motion.div>
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 tracking-tight leading-[1.1]">
                {t.digitalPage.tvStrategy.title} <br />
                <span className="italic text-[#c5a059]">{t.digitalPage.tvStrategy.titleAccent}</span>
              </h2>
              <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-16 font-light">
                {t.digitalPage.tvStrategy.description}
              </p>
              <div className="space-y-12">
                {t.digitalPage.tvStrategy.features.map((feat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c5a059] transition-all duration-500">
                      <MonitorPlay className="w-6 h-6 text-[#c5a059] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-[11px] tracking-[0.2em] mb-3 group-hover:text-[#c5a059] transition-colors font-sans">{feat.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors font-light">{feat.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-20 bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative aspect-video rounded-[32px] bg-[#050505] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center text-center p-12">
                <div className="relative z-10">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-1 bg-[#c5a059] mx-auto mb-12 rounded-full"
                  />
                  <p className="text-[#c5a059] text-[10px] uppercase font-bold tracking-[0.4em] mb-8 font-sans">
                    {t.digitalPage.tvStrategy.preview.eyebrow}
                  </p>
                  <h3 className="text-4xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-none italic">
                    {t.digitalPage.tvStrategy.preview.title}
                  </h3>
                  <p className="text-white/30 text-lg md:text-2xl font-bold uppercase tracking-[0.3em] font-sans">
                    {t.digitalPage.tvStrategy.preview.subtitle}
                  </p>
                </div>
                <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/[0.03] backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10">
                  <QrCode className="w-10 h-10 text-[#c5a059]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Content Engine - Social Presence */}
      <section className="py-24 md:py-40 bg-[#FCFCFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block font-sans">AI Content Engine</span>
                <h2 className="text-4xl md:text-7xl font-serif text-[#111111] mt-6 mb-12 tracking-tight leading-[1.1]">
                  {t.socialMediaIA?.headline}
                </h2>
                
                <div className="flex items-center gap-6 mb-16 p-8 rounded-3xl bg-white border border-[#111111]/5 w-fit shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                  <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/10 flex items-center justify-center">
                    <BarChart2 className="w-6 h-6 text-[#c5a059]" />
                  </div>
                  <p className="text-[#111111] font-serif text-xl md:text-2xl tracking-tight">
                    {t.socialMediaIA?.engagementStat}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  {t.socialMediaIA?.packages.map((pkg, i) => (
                    <div 
                      key={i} 
                      className={`p-10 rounded-[2rem] border transition-all duration-500 ${
                        pkg.popular 
                        ? 'bg-white border-[#c5a059]/30 relative shadow-[0_30px_60px_rgba(0,0,0,0.04)] ring-1 ring-[#c5a059]/10' 
                        : 'bg-white border-[#111111]/5 hover:border-[#c5a059]/20'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c5a059] text-black text-[9px] font-bold uppercase px-4 py-1.5 rounded-full shadow-lg">
                          {t.digitalPage.aiSocial.popularTag}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-[#111111] mb-8 uppercase tracking-tight font-sans">{pkg.name}</h3>
                      <ul className="space-y-4">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[10px] uppercase tracking-wider font-bold text-[#111111]/40">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="px-12 py-6 bg-[#111111] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#c5a059] transition-all inline-block rounded-full shadow-xl"
                >
                  {t.digitalPage.aiSocial.cta}
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#c5a059]/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="w-[320px] mx-auto aspect-[9/19.5] bg-white rounded-[3.5rem] border-[10px] border-[#111111] shadow-2xl relative overflow-hidden group">
                  <div className="p-5 flex items-center justify-between border-b border-[#111111]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#c5a059]/30 p-[2.5px]">
                        <div className="w-full h-full rounded-full bg-white border-2 border-white" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-20 h-2 bg-[#111111]/10 rounded-full" />
                        <div className="w-12 h-1.5 bg-[#111111]/5 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex gap-4 overflow-hidden">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="shrink-0 w-12 h-12 rounded-full border-2 border-[#c5a059]/10 p-[2px]">
                        <div className="w-full h-full rounded-full bg-[#111111]/5" />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-[2px] bg-[#111111]/5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="aspect-square bg-white flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#c5a059]/5 opacity-0 hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-16 border-t border-[#111111]/5 flex items-center justify-around px-6 bg-white/80 backdrop-blur-md">
                    <div className="w-5 h-5 rounded-md border-2 border-[#111111]/10" />
                    <div className="w-5 h-5 rounded-md border-2 border-[#111111]/10" />
                    <div className="w-5 h-5 rounded-full border-2 border-[#111111]/10" />
                  </div>
                </div>

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 p-6 rounded-2xl bg-white border border-[#111111]/10 shadow-2xl z-20 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20">
                      <ChevronRight className="w-4 h-4 text-green-500 rotate-[-90deg]" />
                    </div>
                    <div>
                      <p className="text-[9px] text-[#111111]/40 uppercase font-bold tracking-widest mb-1 font-sans">Growth Reach</p>
                      <p className="text-[#111111] font-bold text-xl tracking-tight">+12.4k</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Detailed Capabilities */}
      <section className="py-24 md:py-40 bg-[#FCFCFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-[#111111] tracking-tight">Capacidades <span className="italic text-[#c5a059]">Digitais.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.digitalPage.services.items.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-12 bg-white border border-[#111111]/5 rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 flex items-center justify-center mb-8 group-hover:bg-[#c5a059] transition-all duration-500">
                  <Monitor className="w-6 h-6 text-[#c5a059] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-6 uppercase tracking-tight font-sans group-hover:text-[#c5a059] transition-colors">{item.title}</h3>
                <p className="text-[#111111]/50 text-sm leading-relaxed group-hover:text-[#111111]/70 transition-colors font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Focused CTA */}
      <section className="py-24 md:py-40 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c5a059]/[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-16 tracking-tight max-w-5xl mx-auto leading-[1.2]">
              {t.digitalPage.cta.title}
            </h2>
            <Link 
              to="/contact"
              className="px-16 py-8 bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white transition-all shadow-2xl inline-block font-sans"
            >
              {t.digitalPage.cta.button}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
