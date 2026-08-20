import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#050505]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Ambient Luxury Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#c5a059]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c5a059]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-0 right-0 w-[60%] h-full opacity-20 grayscale mix-blend-screen">
             <img
              src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2000&auto=format&fit=crop"
              alt="Cinematic Bar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 pt-20 grid grid-cols-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="w-20 h-px bg-[#c5a059]/30 mb-10" />
            <h1 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.9] text-white mb-8">
              {t.hero.headline.split('.').map((line, index, array) => (
                <React.Fragment key={index}>
                  {index === array.length - 1 ? (
                    <span className="text-stroke-accent">{line}</span>
                  ) : (
                    <>{line}.<br /></>
                  )}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-medium mb-12 leading-relaxed max-w-xl">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#c5a059] transition-all"
              >
                {t.hero.ctaQuote}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Areas - Bold Split Grid */}
      <section className="border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-0 grid grid-cols-1 lg:grid-cols-3">
          {['events', 'consulting', 'digital'].map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`group relative p-12 md:p-16 border-white/5 hover:bg-white/[0.04] transition-all duration-700 ${
                i !== 2 ? 'lg:border-r' : ''
              } border-b lg:border-b-0 overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-full luxury-glow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] text-[#c5a059] font-black tracking-widest bg-[#c5a059]/10 px-3 py-1 rounded-full">0{i + 1}</span>
                  <Link to={`/${key}`} className="text-white/20 group-hover:text-[#c5a059] transition-all transform group-hover:translate-x-2">
                    <ChevronRight className="w-6 h-6" />
                  </Link>
                </div>
                
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight uppercase group-hover:text-luxury transition-colors">
                  {t.businessAreas[key as keyof typeof t.businessAreas].title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-10 group-hover:text-white/80 transition-colors">
                  {t.businessAreas[key as keyof typeof t.businessAreas].description}
                </p>
                
                <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4">
                  {t.businessAreas[key as keyof typeof t.businessAreas].features.slice(0, 2).map((f, idx) => (
                    <span key={idx} className="text-[9px] uppercase tracking-widest font-black text-[#c5a059]/50 group-hover:text-[#c5a059] transition-colors">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Mobile Bar Section */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full luxury-glow opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">{t.mobileBar.title}</span>
              <h2 className="text-5xl md:text-7xl font-black text-white mt-6 mb-8 tracking-tighter uppercase leading-[0.9]">
                {t.mobileBar.subtitle.split('.').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}{i < 2 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
                {t.mobileBar.description}
              </p>
              <div className="space-y-4 mb-12">
                {t.mobileBar.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#c5a059] transition-all inline-block"
              >
                {t.hero.ctaQuote}
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src="/bar_movel.png" 
                alt="Mobile Bar Cheers" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 overflow-hidden will-change-transform">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-black rounded-[40px] p-12 md:p-20 relative border border-white/5">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 lg:max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                {t.homePage.ctaSection.title} <span className="text-[#c5a059]">{t.homePage.ctaSection.titleAccent}</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-0 leading-relaxed">
                {t.homePage.ctaSection.description}
              </p>
            </div>
            <div className="relative z-10">
              <Link
                to="/contact"
                className="inline-block px-10 py-5 bg-[#c5a059] text-black font-black uppercase tracking-[0.2em] text-sm rounded-full hover:scale-105 transition-all shadow-2xl"
              >
                {t.homePage.ctaSection.button}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
