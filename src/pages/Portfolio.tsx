import React from 'react';
import { motion } from 'motion/react';
import { portfolioItems } from '../data/portfolio';

export const Portfolio = () => {
  return (
    <div className="pt-20 bg-[#050505] min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-3xl text-center mx-auto"
          >
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">Nosso Portfólio</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-6 mb-8 tracking-tighter uppercase leading-none">
              Exemplos de <span className="text-stroke-accent">Trabalhos</span>
            </h1>
            <p className="text-white/40 text-lg leading-relaxed max-w-xl mx-auto">
              Uma seleção de projetos que demonstram o nosso compromisso com a excelência na hospitalidade e inovação digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-zinc-900 border border-white/5 mb-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="px-4">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#c5a059] transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#c5a059]/20 mt-4 group-hover:w-24 group-hover:bg-[#c5a059] transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified footer/CTA for portfolio */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">Quer ver o seu projeto aqui?</h2>
          <a 
            href="/contact" 
            className="px-10 py-5 bg-[#c5a059] text-black font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all inline-block rounded-full"
          >
            Vamos Conversar
          </a>
        </div>
      </section>
    </div>
  );
};
