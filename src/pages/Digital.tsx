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

      {/* AI Social Media Section */}
      <section className="py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">AI Social Management</span>
                <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-8 tracking-tighter uppercase leading-[0.9]">
                  {t.socialMediaIA?.headline}
                </h2>
                
                <div className="flex items-center gap-4 mb-12 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 w-fit">
                  <div className="w-12 h-12 rounded-full bg-[#c5a059]/10 flex items-center justify-center">
                    <BarChart2 className="w-6 h-6 text-[#c5a059]" />
                  </div>
                  <p className="text-white font-bold text-lg">
                    {t.socialMediaIA?.engagementStat}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {t.socialMediaIA?.packages.map((pkg, i) => (
                    <div 
                      key={i} 
                      className={`p-8 rounded-3xl border transition-all duration-500 ${
                        pkg.popular 
                        ? 'bg-[#c5a059]/5 border-[#c5a059]/30 relative scale-105' 
                        : 'bg-zinc-900/30 border-white/5 hover:bg-zinc-900/50'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c5a059] text-black text-[9px] font-black uppercase px-3 py-1 rounded-full">
                          Mais Popular
                        </span>
                      )}
                      <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">{pkg.name}</h3>
                      <ul className="space-y-4">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40">
                            <CheckCircle2 className="w-3 h-3 text-[#c5a059] shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#c5a059] transition-all inline-block"
                >
                  {t.socialMediaIA?.cta}
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
                <div className="w-[320px] mx-auto aspect-[9/19.5] bg-[#0a0a0a] rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl relative overflow-hidden">
                  <div className="p-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                        <div className="w-full h-full rounded-full bg-black border-2 border-black" />
                      </div>
                      <div className="space-y-1">
                        <div className="w-16 h-2 bg-zinc-800 rounded-full" />
                        <div className="w-10 h-1.5 bg-zinc-900 rounded-full" />
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-zinc-700" />
                      <div className="w-1 h-1 rounded-full bg-zinc-700" />
                      <div className="w-1 h-1 rounded-full bg-zinc-700" />
                    </div>
                  </div>

                  <div className="p-4 flex gap-4 overflow-hidden">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="shrink-0 w-12 h-12 rounded-full border-2 border-[#c5a059]/30 p-[2px]">
                        <div className="w-full h-full rounded-full bg-zinc-900" />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-[1px] bg-white/5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="aspect-square bg-zinc-900 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#c5a059]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {i === 0 && <Instagram className="w-6 h-6 text-white/5" />}
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-12 border-t border-white/5 flex items-center justify-around px-4 bg-black">
                    <div className="w-5 h-5 rounded-md border-2 border-zinc-800" />
                    <div className="w-5 h-5 rounded-md border-2 border-zinc-800" />
                    <div className="w-5 h-5 rounded-full border-2 border-zinc-800" />
                  </div>
                </div>

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 p-6 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <ChevronRight className="w-4 h-4 text-green-500 rotate-[-90deg]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase font-black">Reach</p>
                      <p className="text-white font-black">+12.4k</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Signage Section */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">Turnkey Solutions</span>
            <h2 className="text-4xl md:text-7xl font-black text-white mt-6 mb-8 tracking-tighter uppercase leading-[0.9]">
              {t.digitalSignage?.headline}
            </h2>
            <p className="text-[#c5a059] text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" /> {t.digitalSignage?.locationNote}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {t.digitalSignage?.timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <span className="text-[#c5a059] text-xl font-black opacity-30">{item.step}</span>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-tight text-sm mb-2">{item.title}</h4>
                      <div className="w-8 h-[2px] bg-[#c5a059]/20" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.digitalSignage?.packages.map((pkg, i) => (
                  <div key={i} className="p-10 rounded-[32px] bg-zinc-900/50 border border-white/5 hover:border-[#c5a059]/30 transition-all group">
                    <Package className="w-8 h-8 text-[#c5a059] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tighter">{pkg.name}</h3>
                    <ul className="space-y-3">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/30 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#c5a059]" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="px-10 py-5 bg-[#c5a059] text-black font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all inline-block rounded-full"
              >
                {t.digitalSignage?.cta}
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-zinc-900 rounded-3xl p-1 border-[12px] border-zinc-800 shadow-[0_0_100px_rgba(197,160,89,0.1)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black" />
                
                <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-1 bg-[#c5a059] mb-8"
                  />
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase leading-none">
                    HAPPY HOUR
                  </h3>
                  <p className="text-[#c5a059] text-xl font-black uppercase tracking-[0.3em] animate-pulse">
                    Gin & Tonic 2x1
                  </p>
                  <p className="text-white/40 text-sm mt-6 font-bold uppercase tracking-widest">
                    17h — 19h
                  </p>

                  <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <QrCode className="w-12 h-12 text-[#c5a059]" />
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
              </div>
              
              <div className="w-1/3 h-2 bg-zinc-800 mx-auto rounded-b-xl" />
              <div className="w-1/2 h-1 bg-zinc-900 mx-auto rounded-b-2xl blur-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: QrCode, title: 'Menus QR Premium', text: 'Menus digitais elegantes, multilingues e fáceis de atualizar. Esqueça as folhas de papel desgastadas.' },
              { icon: Languages, title: 'Multi-idioma Real', text: 'Traduções profissionais que respeitam a terminologia da hospitalidade para atrair turistas.' },
              { icon: Smartphone, title: 'Websites Focados', text: 'Sites mobile-first otimizados para reservas e apresentação de serviços de hotelaria.' },
              { icon: RefreshCw, title: 'Suporte & Updates', text: 'Cuidamos de todas as atualizações mensais para que o seu foco seja o cliente.' },
              { icon: MonitorPlay, title: 'Digital Signage', text: 'Sistemas de ecrãs para lobbies de hotéis, quintas de eventos e bares de alta rotação.' },
              { icon: RefreshCw, title: 'Revenue Focus', text: 'Estratégias digitais desenhadas para aumentar as vendas de cocktails e upsells.' },
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#c5a059]/10 transition-colors">
                  <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-[#c5a059]" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c5a059]/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter">Digitalize o seu sucesso.</h2>
          <Link 
            to="/contact"
            className="px-12 py-6 bg-[#c5a059] text-black font-black uppercase tracking-[0.2em] text-sm rounded-full hover:scale-105 transition-all shadow-2xl inline-block"
          >
            Pedir Demonstração Digital
          </Link>
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
