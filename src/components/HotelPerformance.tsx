import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HotelPerformance: React.FC = () => {
  const { t } = useLanguage();
  const content = t.hotelPerformance;

  return (
    <section className="section-padding bg-[#111111] text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[150px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[150px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Executive Summary */}
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c5a059] text-[10px] uppercase tracking-[0.8em] font-black mb-8 block italic"
          >
            Hotel Performance Partner
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter leading-[0.85] italic"
          >
            {content.summary.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-xl md:text-2xl leading-relaxed italic max-w-3xl"
          >
            {content.summary.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-red-500/10 rounded-full">
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase italic text-red-500/80">
                {content.problems.title}
              </h3>
            </div>
            
            <div className="space-y-10">
              {content.problems.items.map((item, i) => (
                <div key={i} className="group border-l border-white/5 pl-8 py-2 hover:border-red-500/30 transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-500/40 shrink-0 mt-1" />
                    <h4 className="text-xl font-bold tracking-tight text-white/90">{item.title}</h4>
                  </div>
                  <p className="text-white/40 leading-relaxed text-lg italic">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-[#c5a059]/10 rounded-full">
                <TrendingUp className="w-6 h-6 text-[#c5a059]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase italic text-[#c5a059]">
                {content.solutions.title}
              </h3>
            </div>
            
            <div className="space-y-10">
              {content.solutions.items.map((item, i) => (
                <div key={i} className="group border-l border-[#c5a059]/20 pl-8 py-2 hover:border-[#c5a059] transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <CheckCircle className="w-5 h-5 text-[#c5a059]/60 shrink-0 mt-1" />
                    <h4 className="text-xl font-bold tracking-tight text-white/90">{item.title}</h4>
                  </div>
                  <p className="text-white/40 leading-relaxed text-lg italic group-hover:text-white/60 transition-colors">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* The Pitch / Final Argument */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-40 bg-white/5 border border-white/10 p-12 md:p-20 rounded-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-[#c5a059]" />
          <div className="max-w-4xl relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold mb-8 tracking-tighter italic uppercase text-[#c5a059]">
              {content.pitch.title}
            </h3>
            <p className="text-2xl md:text-5xl font-bold leading-[1.1] tracking-tighter italic mb-12 text-white">
              "{content.pitch.text}"
            </p>
            <Link
              to="/contact"
              className="luxury-button inline-flex bg-[#c5a059] text-black border-transparent hover:bg-white"
            >
              Agendar Diagnóstico de Performance <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HotelPerformance;
