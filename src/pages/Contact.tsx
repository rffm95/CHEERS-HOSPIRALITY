import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, Instagram, MapPin, CheckCircle2, ArrowRight, Zap, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WA_HREF = 'https://wa.me/351934384000?text=' + encodeURIComponent('Olá! Vim pelo site da Cheers Experiences.');

export const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formType, setFormType] = useState<'event' | 'business'>('business');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FCFCFA] text-[#111111]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-24 overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,#c5a059_0%,transparent_60%)] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.8em] font-black mb-10 block italic">
              {t.contactPage.hero.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-[100px] font-bold tracking-tighter leading-[0.85] mb-12">
              {t.contactPage.hero.title} <br />
              <span className="text-stroke-white italic font-normal opacity-50">{t.contactPage.hero.titleAccent}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="flex gap-4 mb-12 border-b border-black/5 pb-8">
                <button 
                  onClick={() => setFormType('business')}
                  className={`text-[10px] font-black uppercase tracking-widest px-8 py-4 transition-all ${formType === 'business' ? 'bg-[#c5a059] text-white shadow-xl shadow-[#c5a059]/20' : 'text-black/40 hover:text-black'}`}
                >
                  {t.contactPage.form.business}
                </button>
                <button 
                  onClick={() => setFormType('event')}
                  className={`text-[10px] font-black uppercase tracking-widest px-8 py-4 transition-all ${formType === 'event' ? 'bg-[#c5a059] text-white shadow-xl shadow-[#c5a059]/20' : 'text-black/40 hover:text-black'}`}
                >
                  {t.contactPage.form.event}
                </button>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-16 bg-white border border-black/5 text-center shadow-2xl"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#c5a059]/10 flex items-center justify-center mx-auto mb-10">
                      <CheckCircle2 className="w-10 h-10 text-[#c5a059]" />
                    </div>
                    <h3 className="text-4xl font-bold mb-6 italic">{t.contactPage.form.successDetail}</h3>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[#c5a059] text-[10px] font-black uppercase tracking-widest hover:tracking-[0.5em] transition-all"
                    >
                      {t.contactPage.form.sendAnother}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">{formType === 'business' ? t.contactPage.form.placeholderName.split('e.g. ')[0] || 'Nome / Cargo' : 'Nome / Cargo'}</label>
                        <input required className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-black/10" placeholder={t.contactPage.form.placeholderName} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">Email Corporativo</label>
                        <input type="email" required className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-black/10" placeholder={t.contactPage.form.placeholderEmail} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">Contacto Direto</label>
                        <input className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-black/10" placeholder={t.contactPage.form.placeholderPhone} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">{formType === 'business' ? t.contactPage.form.propertyName : 'Local do Evento'}</label>
                        <input required className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-black/10" placeholder={formType === 'business' ? 'Ex: Hotel Ritz / Group X' : 'Localização'} />
                      </div>
                    </div>

                    {formType === 'business' && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">{t.contactPage.form.propertyScale}</label>
                            <select required className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors">
                              {Object.entries(t.contactPage.form.scales).map(([key, label]) => (
                                <option key={key} value={key}>{label}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">{t.contactPage.form.intent}</label>
                            <select required className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors">
                              {Object.entries(t.contactPage.form.intents).map(([key, label]) => (
                                <option key={key} value={key}>{label}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">{t.contactPage.form.revenue}</label>
                            <input className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-black/10" placeholder="€ / mês (opcional)" />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">{t.contactPage.form.urgency}</label>
                            <select required className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors">
                              {Object.entries(t.contactPage.form.urgencies).map(([key, label]) => (
                                <option key={key} value={key}>{label}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    {formType === 'event' && (
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">{t.contactPage.form.businessType}</label>
                        <select className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors">
                          {Object.entries(t.contactPage.form.categories).map(([key, label]) => (
                            <option key={key} value={key}>{label}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">Mensagem / Briefing</label>
                      <textarea rows={4} className="w-full bg-[#FCFCFA] border-b-2 border-black/5 px-0 py-4 text-lg focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-black/10 resize-none" placeholder={t.contactPage.form.placeholderMessage} />
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="luxury-button w-full justify-center disabled:opacity-50"
                    >
                      {loading ? 'Processando...' : (formType === 'business' ? 'Solicitar Auditoria Estratégica' : 'Enviar Solicitação')}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-10">
                <div className="group">
                  <span className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block italic">{t.contactPage.info.areaTitle}</span>
                  <p className="text-xl leading-relaxed italic text-[#111111]/60">
                    {t.contactPage.info.areaText}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="p-8 bg-white border border-black/5 flex items-start gap-6 hover:border-[#c5a059]/30 transition-all group">
                    <div className="w-12 h-12 bg-[#c5a059]/5 rounded-full flex items-center justify-center group-hover:bg-[#c5a059]/10 transition-colors">
                      <MessageSquare className="w-5 h-5 text-[#c5a059]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest mb-1 italic text-black/40">{t.contactPage.info.phoneTitle}</h4>
                      <p className="text-lg font-bold">+351 934 384 000</p>
                      <span className="text-[8px] font-black uppercase tracking-widest text-red-500 mt-2 block">{t.contactPage.info.phoneStatus}</span>
                    </div>
                  </a>

                  <a href="mailto:direcao@cheersexperiences.com" className="p-8 bg-white border border-black/5 flex items-start gap-6 hover:border-[#c5a059]/30 transition-all group">
                    <div className="w-12 h-12 bg-[#c5a059]/5 rounded-full flex items-center justify-center group-hover:bg-[#c5a059]/10 transition-colors">
                      <Mail className="w-5 h-5 text-[#c5a059]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest mb-1 italic text-black/40">{t.contactPage.info.emailTitle}</h4>
                      <p className="text-lg font-bold">direcao@cheersexperiences.com</p>
                    </div>
                  </a>

                  <a href="https://instagram.com/cheers.guru" target="_blank" rel="noopener noreferrer" className="p-8 bg-white border border-black/5 flex items-start gap-6 hover:border-[#c5a059]/30 transition-all group">
                    <div className="w-12 h-12 bg-[#c5a059]/5 rounded-full flex items-center justify-center group-hover:bg-[#c5a059]/10 transition-colors">
                      <Instagram className="w-5 h-5 text-[#c5a059]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest mb-1 italic text-black/40">{t.contactPage.info.instaTitle}</h4>
                      <p className="text-lg font-bold">@cheers.guru</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
