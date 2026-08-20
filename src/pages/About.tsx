import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#050505]">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">A Nossa História</span>
              <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-12 tracking-tighter uppercase leading-[0.9]">
                Paixão pela <br /><span className="text-stroke-accent">Hospitalidade</span>
              </h1>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  A Cheers Hospitality nasceu em Viseu com um propósito claro: elevar os padrões do serviço de bar e da hospitalidade em Portugal. Não somos apenas uma empresa de eventos; somos parceiros estratégicos dos nossos clientes.
                </p>
                <p>
                  Com anos de experiência real no terreno, desde a gestão de bares de alta rotação à consultoria estratégica para hotéis de luxo, compreendemos que o sucesso está no detalhe, na eficiência operacional e na emoção que cada cocktail transmite.
                </p>
                <p className="text-white font-display text-2xl italic border-l-2 border-[#c5a059] pl-8 py-4">
                  "Onde outros veem apenas uma bebida, nós vemos uma oportunidade de criar uma memória inesquecível e um negócio rentável."
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1200"
                  alt="Founder / Story"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              {/* 100+ events badge removed per user request */}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Excelência Operacional', text: 'Não deixamos nada ao acaso. Da logística impecável ao serviço de topo.' },
              { title: 'Visão Comercial', text: 'Hospitalidade é negócio. Focamos sempre na rentabilidade e no crescimento.' },
              { title: 'Inovação Constante', text: 'Dos novos cocktails às soluções digitais de ponta, estamos sempre à frente.' },
            ].map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-[#c5a059] text-4xl font-display">0{i + 1}</div>
                <h3 className="text-2xl font-display font-bold text-white">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
