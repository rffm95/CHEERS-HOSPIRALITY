import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle, Phone, Mail, Instagram } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: 'event',
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // In a real production environment, this would call an API route.
    // For now, we simulate the success state and direct the user's intent to the target email.
    console.log(`Quote request received for: sucessomacico@gmail.com`);
    
    // Optional: open mailto for direct client feedback
    // const mailtoUrl = `mailto:sucessomacico@gmail.com?subject=Pedido de Orçamento - Cheers Hospitality&body=Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AEvento: ${formData.eventType}`;
    // window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormData({
        type: 'event',
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guests: '',
        budget: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <div className="pt-20 bg-[#050505] text-white">
      <section className="relative py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(197,160,89,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Contact Info */}
            <div className="will-change-transform">
              <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.6em] font-black mb-10 block">{t.contactPage.hero.eyebrow}</span>
              <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-16 tracking-tighter uppercase leading-[0.85]">
                {t.contactPage.hero.title} <br /><span className="text-stroke-accent italic">{t.contactPage.hero.titleAccent}</span>
              </h1>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-[#c5a059] transition-all">
                    <Phone className="w-6 h-6 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-white font-black mb-2 uppercase tracking-[0.2em] text-xs italic">{t.contactPage.info.phoneTitle}</h4>
                    <p className="text-[#c5a059] text-[10px] font-black uppercase tracking-widest bg-[#c5a059]/10 px-4 py-2 rounded-full inline-block mt-2 italic animate-pulse">{t.contactPage.info.phoneStatus}</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-[#c5a059] transition-all">
                    <Mail className="w-6 h-6 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-white font-black mb-2 uppercase tracking-[0.2em] text-xs italic">{t.contactPage.info.emailTitle}</h4>
                    <p className="text-white/40 text-base font-medium">sucessomacico@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-[#c5a059] transition-all">
                    <Instagram className="w-6 h-6 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-white font-black mb-2 uppercase tracking-[0.2em] text-xs italic">{t.contactPage.info.instaTitle}</h4>
                    <p className="text-white/40 text-base font-medium">@cheers_hospitality_pt</p>
                  </div>
                </div>
              </div>

              <div className="mt-24 p-12 bg-[#0A0A0A] rounded-[40px] border border-white/5 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 blur-3xl rounded-full" />
                <h4 className="text-[#c5a059] font-black mb-6 text-xl uppercase tracking-tighter italic">{t.contactPage.info.areaTitle}</h4>
                <p className="text-white/30 text-base leading-relaxed italic font-medium">
                  {t.contactPage.info.areaText}
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="p-12 md:p-16 bg-[#0A0A0A] rounded-[60px] border border-white/5 space-y-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex gap-4 p-2 bg-[#050505] rounded-2xl mb-10 border border-white/5">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'event' })}
                        className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.3em] rounded-xl transition-all ${
                          formData.type === 'event' ? 'bg-[#c5a059] text-black' : 'text-white/20 hover:text-white/40'
                        }`}
                      >
                        {t.contactPage.form.event}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'business' })}
                        className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.3em] rounded-xl transition-all ${
                          formData.type === 'business' ? 'bg-[#c5a059] text-black' : 'text-white/20 hover:text-white/40'
                        }`}
                      >
                        {t.contactPage.form.business}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 ml-4 italic">{t.quote.form.name}</label>
                        <input
                          required
                          className="w-full bg-[#050505] border border-white/5 rounded-3xl px-8 py-5 text-sm text-white focus:border-[#c5a059] outline-none transition-all placeholder:text-white/10"
                          placeholder={t.contactPage.form.placeholderName}
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 ml-4 italic">{t.quote.form.email}</label>
                        <input
                          required
                          type="email"
                          className="w-full bg-[#050505] border border-white/5 rounded-3xl px-8 py-5 text-sm text-white focus:border-[#c5a059] outline-none transition-all placeholder:text-white/10"
                          placeholder={t.contactPage.form.placeholderEmail}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 ml-4 italic">{t.quote.form.phone}</label>
                        <input
                          required
                          className="w-full bg-[#050505] border border-white/5 rounded-3xl px-8 py-5 text-sm text-white focus:border-[#c5a059] outline-none transition-all placeholder:text-white/10"
                          placeholder={t.contactPage.form.placeholderPhone}
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 ml-4 italic">
                          {formData.type === 'event' ? t.quote.form.eventType : t.contactPage.form.businessType}
                        </label>
                        <select className="w-full bg-[#050505] border border-white/5 rounded-3xl px-8 py-5 text-sm text-white focus:border-[#c5a059] outline-none transition-all appearance-none cursor-pointer italic">
                          {formData.type === 'event' ? (
                            <>
                              <option>{t.contactPage.form.categories.wedding}</option>
                              <option>{t.contactPage.form.categories.birthday}</option>
                              <option>{t.contactPage.form.categories.baptism}</option>
                              <option>{t.contactPage.form.categories.corporate}</option>
                              <option>{t.contactPage.form.categories.other}</option>
                            </>
                          ) : (
                            <>
                              <option>{t.contactPage.form.businessCategories.bar}</option>
                              <option>{t.contactPage.form.businessCategories.restaurant}</option>
                              <option>{t.contactPage.form.businessCategories.hotel}</option>
                              <option>{t.contactPage.form.businessCategories.catering}</option>
                            </>
                          )}
                        </select>
                      </div>
                    </div>

                    {formData.type === 'event' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 ml-4 italic">{t.quote.form.eventDate}</label>
                          <input
                            type="date"
                            className="w-full bg-[#050505] border border-white/5 rounded-3xl px-8 py-5 text-sm text-white focus:border-[#c5a059] outline-none transition-all [color-scheme:dark]"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 ml-4 italic">{t.quote.form.guests}</label>
                          <input
                            className="w-full bg-[#050505] border border-white/5 rounded-3xl px-8 py-5 text-sm text-white focus:border-[#c5a059] outline-none transition-all placeholder:text-white/10"
                            placeholder="Ex: 150"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 ml-4 italic">{t.quote.form.message}</label>
                      <textarea
                        className="w-full bg-[#050505] border border-white/5 rounded-3xl px-8 py-5 text-sm text-white focus:border-[#c5a059] outline-none transition-all min-h-[160px] placeholder:text-white/10"
                        placeholder={t.contactPage.form.placeholderMessage}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-7 bg-white text-black font-black uppercase tracking-[0.4em] text-xs rounded-full hover:bg-[#c5a059] transition-all flex items-center justify-center gap-6 shadow-2xl"
                    >
                      {t.quote.form.submit}
                      <Send className="w-5 h-5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-24 bg-[#0A0A0A] rounded-[60px] border border-[#c5a059]/20 text-center space-y-10 shadow-2xl"
                  >
                    <div className="w-24 h-24 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-10">
                      <CheckCircle className="w-12 h-12 text-[#c5a059]" />
                    </div>
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic">{t.quote.form.success}</h3>
                    <p className="text-white/30 text-lg md:text-xl italic font-medium">{t.contactPage.form.successDetail}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.4em] border-b border-[#c5a059] pb-1 hover:text-white hover:border-white transition-all"
                    >
                      {t.contactPage.form.sendAnother}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
