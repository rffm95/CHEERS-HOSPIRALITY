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
    <div className="pt-20 bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.6em] font-black mb-8 block">
              {t.digitalPage.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-10 tracking-tighter uppercase leading-[0.9]">
              {t.digitalPage.hero.title} <br />
              <span className="text-stroke-accent italic">{t.digitalPage.hero.titleAccent}</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl">
              {t.digitalPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* TV Strategy Section - High Impact */}
      <section className="py-40 px-6 md:px-10 relative overflow-hidden bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
              >
                <RefreshCw className="w-3 h-3 animate-spin" />
                {t.digitalPage.tvStrategy.badge}
              </motion.div>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                {t.digitalPage.tvStrategy.title} <br />
                <span className="text-red-500 italic">{t.digitalPage.tvStrategy.titleAccent}</span>
              </h2>
              <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-16 font-medium">
                {t.digitalPage.tvStrategy.description}
              </p>
              <div className="space-y-10">
                {t.digitalPage.tvStrategy.features.map((feat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group/item"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-[#c5a059] group-hover/item:border-transparent transition-all duration-500">
                      <MonitorPlay className="w-7 h-7 text-[#c5a059] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase text-base tracking-widest mb-3 group-hover:text-[#c5a059] transition-colors">{feat.title}</h4>
                      <p className="text-white/30 text-base leading-relaxed group-hover:text-white/50 transition-colors">{feat.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-20 bg-[#c5a059]/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative aspect-video rounded-[40px] bg-[#050505] border-[1px] border-white/10 overflow-hidden shadow-2xl flex items-center justify-center text-center p-12">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
                <div className="relative z-10">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-1.5 bg-[#c5a059] mx-auto mb-12 rounded-full"
                  />
                  <p className="text-[#c5a059] text-[10px] md:text-xs uppercase font-black tracking-[0.5em] mb-8">
                    {t.digitalPage.tvStrategy.preview.eyebrow}
                  </p>
                  <h3 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-none italic">
                    {t.digitalPage.tvStrategy.preview.title}
                  </h3>
                  <p className="text-white/30 text-lg md:text-2xl font-bold uppercase tracking-[0.3em] group-hover:text-white/60 transition-colors">
                    {t.digitalPage.tvStrategy.preview.subtitle}
                  </p>
                </div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/[0.03] backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/10 group-hover:border-[#c5a059]/40 transition-colors">
                  <QrCode className="w-12 h-12 text-[#c5a059]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Content Engine - Social Presence */}
      <section className="py-40 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black mb-8 block">AI Content Engine</span>
                <h2 className="text-4xl md:text-7xl font-black text-white mt-6 mb-12 tracking-tighter uppercase leading-[0.9]">
                  {t.socialMediaIA?.headline}
                </h2>
                
                <div className="flex items-center gap-6 mb-16 p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 w-fit group hover:border-[#c5a059]/20 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 flex items-center justify-center group-hover:bg-[#c5a059] transition-colors duration-500">
                    <BarChart2 className="w-7 h-7 text-[#c5a059] group-hover:text-black transition-colors" />
                  </div>
                  <p className="text-white font-black text-xl md:text-2xl italic tracking-tighter">
                    {t.socialMediaIA?.engagementStat}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  {t.socialMediaIA?.packages.map((pkg, i) => (
                    <div 
                      key={i} 
                      className={`p-10 rounded-[32px] border transition-all duration-700 ${
                        pkg.popular 
                        ? 'bg-[#c5a059]/10 border-[#c5a059]/30 relative scale-105' 
                        : 'bg-[#0A0A0A] border-white/5 hover:bg-[#111]'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c5a059] text-black text-[10px] font-black uppercase px-5 py-1.5 rounded-full shadow-2xl">
                          {t.digitalPage.aiSocial.popularTag}
                        </span>
                      )}
                      <h3 className="text-xl font-black text-white mb-8 uppercase tracking-tighter group-hover:text-[#c5a059] transition-colors">{pkg.name}</h3>
                      <ul className="space-y-5">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[10px] uppercase tracking-widest font-black text-white/30 group-hover:text-white/60 transition-colors">
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
                  className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-[#c5a059] transition-all inline-block rounded-full shadow-2xl"
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
                <div className="absolute inset-0 bg-[#c5a059]/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="w-[320px] mx-auto aspect-[9/19.5] bg-[#0A0A0A] rounded-[3.5rem] border-[10px] border-[#1A1A1A] shadow-2xl relative overflow-hidden group">
                  <div className="p-5 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 p-[2.5px] group-hover:animate-spin-slow transition-all">
                        <div className="w-full h-full rounded-full bg-[#0A0A0A] border-2 border-[#0A0A0A]" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-20 h-2.5 bg-white/10 rounded-full" />
                        <div className="w-12 h-2 bg-white/5 rounded-full" />
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div>
                  </div>

                  <div className="p-5 flex gap-5 overflow-hidden">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="shrink-0 w-14 h-14 rounded-full border-2 border-[#c5a059]/20 p-[3px] group-hover:border-[#c5a059]/60 transition-colors">
                        <div className="w-full h-full rounded-full bg-white/5" />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-[2px] bg-white/5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="aspect-square bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden group/post">
                        <div className="absolute inset-0 bg-[#c5a059]/10 opacity-0 group-hover/post:opacity-100 transition-opacity" />
                        {i === 0 && <Instagram className="w-7 h-7 text-white/5 group-hover/post:text-[#c5a059]/30 transition-colors" />}
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-16 border-t border-white/5 flex items-center justify-around px-6 bg-[#0A0A0A]/80 backdrop-blur-md">
                    <div className="w-6 h-6 rounded-lg border-2 border-white/10" />
                    <div className="w-6 h-6 rounded-lg border-2 border-white/10" />
                    <div className="w-6 h-6 rounded-full border-2 border-white/10" />
                  </div>
                </div>

                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-12 p-8 rounded-[32px] bg-[#111] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-20 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-3 rounded-2xl bg-green-500/10 border border-green-500/20">
                      <ChevronRight className="w-5 h-5 text-green-500 rotate-[-90deg]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/30 uppercase font-black tracking-[0.4em] mb-1">Growth Reach</p>
                      <p className="text-white font-black text-2xl tracking-tighter">+12.4k</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section - Digital Signage */}
      <section className="py-40 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5a059]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-24">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black mb-6 block">Strategic Infrastructure</span>
            <h2 className="text-4xl md:text-7xl font-black text-white mt-6 mb-10 tracking-tighter uppercase leading-[0.9]">
              {t.digitalSignage?.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {t.digitalSignage?.timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <span className="text-[#c5a059] text-3xl font-black opacity-10 group-hover:opacity-50 transition-opacity">0{i + 1}</span>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-base mb-3 group-hover:text-[#c5a059] transition-colors">{item.title}</h4>
                      <div className="w-10 h-[2px] bg-[#c5a059]/30 group-hover:w-full transition-all duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.digitalSignage?.packages.map((pkg, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 rounded-[40px] bg-[#050505] border border-white/5 hover:border-[#c5a059]/40 transition-all group shadow-2xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-10 group-hover:bg-[#c5a059] transition-colors duration-500">
                      <Package className="w-8 h-8 text-[#c5a059] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter group-hover:text-[#c5a059] transition-colors">{pkg.name}</h3>
                    <ul className="space-y-4">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 flex items-center gap-3 group-hover:text-white/60 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]/40" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className="px-12 py-6 bg-[#c5a059] text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-all inline-block rounded-full shadow-[0_20px_50px_rgba(197,160,89,0.2)]"
              >
                {t.digitalSignage?.cta}
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-10 bg-[#c5a059]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#c5a059]/20 transition-colors duration-1000" />
              <div className="aspect-video bg-[#050505] rounded-[40px] p-1.5 border-[1px] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                
                <div className="relative h-full flex flex-col items-center justify-center p-16 text-center">
                  <motion.div
                    animate={{ scaleX: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-1 bg-[#c5a059]/50 mb-12 rounded-full"
                  />
                  <h3 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none italic">
                    {t.digitalPage.tvStrategy.preview.title}
                  </h3>
                  <p className="text-[#c5a059] text-2xl md:text-3xl font-black uppercase tracking-[0.4em] mb-10 shadow-glow">
                    {t.digitalPage.tvStrategy.preview.subtitle}
                  </p>
                  <div className="flex gap-4">
                    <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white/40">17:00</span>
                    <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white/40">19:00</span>
                  </div>

                  <div className="absolute bottom-12 right-12 w-24 h-24 bg-white/[0.03] backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/10 group-hover:border-[#c5a059]/40 transition-colors group-hover:scale-105 transition-transform">
                    <QrCode className="w-12 h-12 text-[#c5a059]" />
                  </div>
                </div>
              </div>
              
              <div className="w-1/3 h-2.5 bg-white/5 mx-auto rounded-b-2xl border-x border-b border-white/10" />
              <div className="w-1/4 h-1.5 bg-[#c5a059]/5 mx-auto rounded-b-3xl blur-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Detailed Capabilities */}
      <section className="py-40 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {t.digitalPage.services.items.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-12 md:p-16 bg-[#050505] hover:bg-[#0A0A0A] transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-10 group-hover:bg-[#c5a059] transition-all duration-500">
                  <Monitor className="w-7 h-7 text-[#c5a059] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-[#c5a059] transition-colors">{item.title}</h3>
                <p className="text-white/30 text-base leading-relaxed group-hover:text-white/50 transition-colors">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Focused CTA */}
      <section className="py-40 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-8xl font-black text-white mb-16 uppercase tracking-tighter max-w-5xl mx-auto leading-[0.85] italic">
              {t.digitalPage.cta.title}
            </h2>
            <Link 
              to="/contact"
              className="px-16 py-8 bg-[#c5a059] text-black font-black uppercase tracking-[0.3em] text-sm rounded-full hover:bg-white transition-all shadow-[0_30px_100px_rgba(197,160,89,0.3)] inline-block"
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
