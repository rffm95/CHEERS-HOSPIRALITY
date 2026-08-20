import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Monitor, Smartphone, QrCode, Tv, RefreshCw, Languages } from 'lucide-react';

export const Digital = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-[#050505]">
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">Inovação Digital</span>
            <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-8 tracking-tighter uppercase">
              Hospitality <span className="text-stroke-accent">Digital</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Ferramentas tecnológicas desenhadas para aumentar o consumo médio e melhorar a comunicação com o cliente no ponto de venda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TV Strategy Section */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900 rounded-[48px] p-8 md:p-20 border border-white/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/10 blur-[120px] rounded-full -mr-48 -mt-48" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Perda de Receita Detectada
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                  As suas TVs estão a <span className="text-red-500">perder dinheiro?</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Muitos espaços têm ecrãs ligados em canais aleatórios ou conteúdos estáticos. As nossas soluções transformam esses ecrãs em vendedores silenciosos que promovem cocktails, sobremesas e happy hours nos momentos certos.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Promoção dinâmica de produtos lucrativos',
                    'Aumento imediato do ticket médio',
                    'Comunicação visual profissional e elegante',
                    'Gestão centralizada de conteúdos',
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                      <Tv className="w-5 h-5 text-[#c5a059]" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-3xl bg-black border border-white/10 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-[#c5a059] text-xs uppercase font-bold tracking-[0.3em] mb-4">Live Preview</p>
                    <h3 className="text-2xl font-display text-white mb-2">HAPPY HOUR</h3>
                    <p className="text-zinc-500 text-sm">Gin & Tonic 2x1 • 17:00 - 19:00</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/5 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: QrCode, title: 'Menus QR Premium', text: 'Menus digitais elegantes, multilingues e fáceis de atualizar. Esqueça as folhas de papel desgastadas.' },
              { icon: Languages, title: 'Multi-idioma Real', text: 'Traduções profissionais que respeitam a terminologia da hospitalidade para atrair turistas.' },
              { icon: Smartphone, title: 'Websites Focados', text: 'Sites mobile-first otimizados para reservas e apresentação de serviços de hotelaria.' },
              { icon: RefreshCw, title: 'Suporte & Updates', text: 'Cuidamos de todas as atualizações mensais para que o seu foco seja o cliente.' },
              { icon: Monitor, title: 'Digital Signage', text: 'Sistemas de ecrãs para lobbies de hotéis, quintas de eventos e bares de alta rotação.' },
              { icon: RefreshCw, title: 'Revenue Focus', text: 'Estratégias digitais desenhadas para aumentar as vendas de cocktails e upsells.' },
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#c5a059]/10 transition-colors">
                  <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-[#c5a059]" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-12">Digitalize o seu sucesso.</h2>
          <button className="px-10 py-5 bg-[#c5a059] text-black font-black uppercase tracking-widest text-sm rounded-full">
            Pedir Demonstração Digital
          </button>
        </div>
      </section>
    </div>
  );
};
