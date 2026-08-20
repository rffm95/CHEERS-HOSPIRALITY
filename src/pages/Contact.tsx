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
    // const mailtoUrl = `mailto:sucessomacico@gmail.com?subject=Pedido de Orçamento - Cheers Experiences&body=Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AEvento: ${formData.eventType}`;
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
    <div className="pt-20 bg-[#FCFCFA] text-[#111111] font-sans">
      <section className="relative py-24 md:py-40 border-b border-[#111111]/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(197,160,89,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Contact Info */}
            <div className="will-change-transform">
              <span className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8 block font-sans">{t.contactPage.hero.eyebrow}</span>
              <h1 className="text-5xl md:text-8xl font-serif text-[#111111] mt-6 mb-16 tracking-tight leading-[0.95]">
                {t.contactPage.hero.title} <br /><span className="italic text-[#c5a059]">{t.contactPage.hero.titleAccent}</span>
              </h1>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center group-hover:bg-[#c5a059] transition-all duration-500">
                    <Phone className="w-6 h-6 text-[#c5a059] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[#111111] font-bold mb-2 uppercase tracking-[0.2em] text-[10px] font-sans">{t.contactPage.info.phoneTitle}</h4>
                    <p className="text-[#c5a059] text-[9px] font-bold uppercase tracking-widest bg-[#c5a059]/10 px-4 py-2 rounded-full inline-block mt-2 font-sans animate-pulse">{t.contactPage.info.phoneStatus}</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center group-hover:bg-[#c5a059] transition-all duration-500">
                    <Mail className="w-6 h-6 text-[#c5a059] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[#111111] font-bold mb-2 uppercase tracking-[0.2em] text-[10px] font-sans">{t.contactPage.info.emailTitle}</h4>
                    <p className="text-[#111111]/60 text-base font-light">sucessomacico@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center group-hover:bg-[#c5a059] transition-all duration-500">
                    <Instagram className="w-6 h-6 text-[#c5a059] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[#111111] font-bold mb-2 uppercase tracking-[0.2em] text-[10px] font-sans">{t.contactPage.info.instaTitle}</h4>
                    <p className="text-[#111111]/60 text-base font-light">@cheers_hospitality_pt</p>
                  </div>
                </div>
              </div>

              <div className="mt-24 p-12 bg-white rounded-[2.5rem] border border-[#111111]/5 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 blur-3xl rounded-full" />
                <h4 className="text-[#c5a059] font-serif text-xl mb-6 tracking-tight">{t.contactPage.info.areaTitle}</h4>
                <p className="text-[#111111]/40 text-sm leading-relaxed font-light">
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
                    className="p-10 md:p-16 bg-white rounded-[3rem] border border-[#111111]/5 space-y-10 shadow-[0_40px_80px_rgba(0,0,0,0.03)]"
                  >
                    <div className="flex gap-2 p-1.5 bg-[#F5F5F3] rounded-2xl mb-10 border border-[#111111]/5">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'event' })}
                        className={`flex-1 py-4 text-[9px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all font-sans ${
                          formData.type === 'event' ? 'bg-white text-[#111111] shadow-sm' : 'text-[#111111]/30 hover:text-[#111111]/60'
                        }`}
                      >
                        {t.contactPage.form.event}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'business' })}
                        className={`flex-1 py-4 text-[9px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all font-sans ${
                          formData.type === 'business' ? 'bg-white text-[#111111] shadow-sm' : 'text-[#111111]/30 hover:text-[#111111]/60'
                        }`}
                      >
                        {t.contactPage.form.business}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#111111]/40 ml-4 font-sans">{t.quote.form.name}</label>
                        <input
                          required
                          className="w-full bg-[#F5F5F3] border border-transparent rounded-2xl px-6 py-4 text-sm text-[#111111] focus:bg-white focus:border-[#c5a059]/30 outline-none transition-all placeholder:text-[#111111]/20 font-sans"
                          placeholder={t.contactPage.form.placeholderName}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#111111]/40 ml-4 font-sans">{t.quote.form.email}</label>
                        <input
                          required
                          type="email"
                          className="w-full bg-[#F5F5F3] border border-transparent rounded-2xl px-6 py-4 text-sm text-[#111111] focus:bg-white focus:border-[#c5a059]/30 outline-none transition-all placeholder:text-[#111111]/20 font-sans"
                          placeholder={t.contactPage.form.placeholderEmail}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#111111]/40 ml-4 font-sans">{t.quote.form.phone}</label>
                        <input
                          required
                          className="w-full bg-[#F5F5F3] border border-transparent rounded-2xl px-6 py-4 text-sm text-[#111111] focus:bg-white focus:border-[#c5a059]/30 outline-none transition-all placeholder:text-[#111111]/20 font-sans"
                          placeholder={t.contactPage.form.placeholderPhone}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#111111]/40 ml-4 font-sans">
                          {formData.type === 'event' ? t.quote.form.eventType : t.contactPage.form.businessType}
                        </label>
                        <select className="w-full bg-[#F5F5F3] border border-transparent rounded-2xl px-6 py-4 text-sm text-[#111111] focus:bg-white focus:border-[#c5a059]/30 outline-none transition-all appearance-none cursor-pointer font-sans">
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
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#111111]/40 ml-4 font-sans">{t.quote.form.eventDate}</label>
                          <input
                            type="date"
                            className="w-full bg-[#F5F5F3] border border-transparent rounded-2xl px-6 py-4 text-sm text-[#111111] focus:bg-white focus:border-[#c5a059]/30 outline-none transition-all font-sans"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#111111]/40 ml-4 font-sans">{t.quote.form.guests}</label>
                          <input
                            className="w-full bg-[#F5F5F3] border border-transparent rounded-2xl px-6 py-4 text-sm text-[#111111] focus:bg-white focus:border-[#c5a059]/30 outline-none transition-all placeholder:text-[#111111]/20 font-sans"
                            placeholder="Ex: 150"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#111111]/40 ml-4 font-sans">{t.quote.form.message}</label>
                      <textarea
                        className="w-full bg-[#F5F5F3] border border-transparent rounded-2xl px-6 py-4 text-sm text-[#111111] focus:bg-white focus:border-[#c5a059]/30 outline-none transition-all min-h-[140px] placeholder:text-[#111111]/20 font-sans resize-none"
                        placeholder={t.contactPage.form.placeholderMessage}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-6 bg-[#111111] text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-[#c5a059] transition-all flex items-center justify-center gap-4 shadow-xl font-sans"
                    >
                      {t.quote.form.submit}
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-16 md:p-24 bg-white rounded-[3rem] border border-[#c5a059]/20 text-center space-y-10 shadow-2xl"
                  >
                    <div className="w-20 h-20 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-10">
                      <CheckCircle className="w-10 h-10 text-[#c5a059]" />
                    </div>
                    <h3 className="text-3xl font-serif text-[#111111] tracking-tight">{t.quote.form.success}</h3>
                    <p className="text-[#111111]/50 text-lg font-light">{t.contactPage.form.successDetail}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#c5a059] text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#c5a059] pb-1 hover:text-[#111111] hover:border-[#111111] transition-all font-sans"
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
