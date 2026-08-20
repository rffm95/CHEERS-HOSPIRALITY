import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Users, Target, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export const Consulting = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#050505]">
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">Consultoria Estratégica</span>
            <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-8 tracking-tighter uppercase">
              Negócios <span className="text-stroke-accent">Inteligentes</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Ajudamos bares, restaurantes e hotéis a maximizar a rentabilidade através de processos otimizados e engenharia de menus focada no lucro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                De um bar comum para uma <span className="text-[#c5a059]">operação de elite.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { icon: BarChart3, title: 'Engenharia de Menu', text: 'Analisamos a rentabilidade de cada ingrediente para criar menus que vendem mais os produtos mais lucrativos.' },
                  { icon: Users, title: 'Formação de Equipa', text: 'Standards de serviço que elevam a experiência do cliente e aumentam o ticket médio por mesa.' },
                  { icon: Target, title: 'Estratégia de Preços', text: 'Modelos dinâmicos baseados no mercado real e custos operacionais precisos.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#c5a059]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#c5a059]/5 blur-[100px] rounded-full" />
              <div className="relative p-1 bg-zinc-800 rounded-[40px] border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200"
                  alt="Consulting Context"
                  className="rounded-[36px] grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-32 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Sente estes problemas?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Volume operacional elevado com margens de lucro reduzidas',
              'Inconsistência nos padrões de serviço e hospitalidade',
              'Menus estáticos com baixa rotatividade de produtos premium',
              'Desperdício de stock (Waste) impactando o Food & Beverage Cost',
              'Falta de uma identidade visual e digital integrada na unidade',
              'Dificuldade na formação contínua e retenção de talentos de bar',
            ].map((text, i) => (
              <div key={i} className="p-8 rounded-2xl bg-black border border-white/5 flex gap-4">
                <ShieldCheck className="w-5 h-5 text-red-500/50 shrink-0 mt-1" />
                <p className="text-zinc-400 text-sm font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#c5a059] to-[#927439] rounded-[40px] p-12 md:p-24 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-8 max-w-2xl mx-auto">
              Leve o seu negócio para o próximo patamar.
            </h2>
            {/* Button removed per user request */}
          </div>
        </div>
      </section>
    </div>
  );
};
