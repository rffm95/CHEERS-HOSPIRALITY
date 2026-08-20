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
    <div className="pt-20 bg-[#FAFAFA]">
      <section className="py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="will-change-transform">
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-black">{t.contactPage.hero.eyebrow}</span>
              <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] mt-6 mb-12 tracking-tighter uppercase leading-[0.9]">
                {t.contactPage.hero.title} <br /><span className="text-stroke-accent">{t.contactPage.hero.titleAccent}</span>
              </h1>
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center group-hover:border-[#c5a059] transition-all">
                    <Phone className="w-6 h-6 text-[#1A1A1A]/40 group-hover:text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] font-bold mb-1 uppercase tracking-widest text-sm">{t.contactPage.info.phoneTitle}</h4>
                    <p className="text-[#c5a059] text-[10px] font-black uppercase tracking-widest bg-[#c5a059]/10 px-3 py-1 rounded-full inline-block mt-1">{t.contactPage.info.phoneStatus}</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center group-hover:border-[#c5a059] transition-all">
                    <Mail className="w-6 h-6 text-[#1A1A1A]/40 group-hover:text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] font-bold mb-1 uppercase tracking-widest text-sm">{t.contactPage.info.emailTitle}</h4>
                    <p className="text-[#1A1A1A]/40 text-sm">sucessomacico@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center group-hover:border-[#c5a059] transition-all">
                    <Instagram className="w-6 h-6 text-[#1A1A1A]/40 group-hover:text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] font-bold mb-1 uppercase tracking-widest text-sm">{t.contactPage.info.instaTitle}</h4>
                    <p className="text-[#1A1A1A]/40 text-sm">@cheers_hospitality_pt</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-10 bg-[#FAFAFA] rounded-3xl border border-black/5 relative overflow-hidden group hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 blur-3xl rounded-full" />
                <h4 className="text-[#1A1A1A] font-display font-bold mb-4 text-xl uppercase tracking-tighter">{t.contactPage.info.areaTitle}</h4>
                <p className="text-[#1A1A1A]/40 text-sm leading-relaxed">
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onSubmit={handleSubmit}
                    className="p-10 md:p-14 bg-white rounded-[48px] border border-black/5 space-y-8 shadow-2xl shadow-black/5"
                  >
                    <div className="flex gap-4 p-1 bg-[#FAFAFA] rounded-xl mb-8">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'event' })}
                        className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${
                          formData.type === 'event' ? 'bg-[#c5a059] text-black shadow-lg shadow-[#c5a059]/20' : 'text-[#1A1A1A]/40'
                        }`}
                      >
                        {t.contactPage.form.event}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'business' })}
                        className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${
                          formData.type === 'business' ? 'bg-[#c5a059] text-black shadow-lg shadow-[#c5a059]/20' : 'text-[#1A1A1A]/40'
                        }`}
                      >
                        {t.contactPage.form.business}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-[#1A1A1A]/40 ml-4">{t.quote.form.name}</label>
                        <input
                          required
                          className="w-full bg-[#FAFAFA] border border-black/5 rounded-2xl px-6 py-4 text-sm text-[#1A1A1A] focus:border-[#c5a059] focus:bg-white outline-none transition-all"
                          placeholder={t.contactPage.form.placeholderName}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-[#1A1A1A]/40 ml-4">{t.quote.form.email}</label>
                        <input
                          required
                          type="email"
                          className="w-full bg-[#FAFAFA] border border-black/5 rounded-2xl px-6 py-4 text-sm text-[#1A1A1A] focus:border-[#c5a059] focus:bg-white outline-none transition-all"
                          placeholder={t.contactPage.form.placeholderEmail}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-[#1A1A1A]/40 ml-4">{t.quote.form.phone}</label>
                        <input
                          required
                          className="w-full bg-[#FAFAFA] border border-black/5 rounded-2xl px-6 py-4 text-sm text-[#1A1A1A] focus:border-[#c5a059] focus:bg-white outline-none transition-all"
                          placeholder={t.contactPage.form.placeholderPhone}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-[#1A1A1A]/40 ml-4">
                          {formData.type === 'event' ? t.quote.form.eventType : t.contactPage.form.businessType}
                        </label>
                        <select className="w-full bg-[#FAFAFA] border border-black/5 rounded-2xl px-6 py-4 text-sm text-[#1A1A1A] focus:border-[#c5a059] focus:bg-white outline-none transition-all appearance-none">
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-[#1A1A1A]/40 ml-4">{t.quote.form.eventDate}</label>
                          <input
                            type="date"
                            className="w-full bg-[#FAFAFA] border border-black/5 rounded-2xl px-6 py-4 text-sm text-[#1A1A1A] focus:border-[#c5a059] focus:bg-white outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-[#1A1A1A]/40 ml-4">{t.quote.form.guests}</label>
                          <input
                            className="w-full bg-[#FAFAFA] border border-black/5 rounded-2xl px-6 py-4 text-sm text-[#1A1A1A] focus:border-[#c5a059] focus:bg-white outline-none transition-all"
                            placeholder="Ex: 150"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-[#1A1A1A]/40 ml-4">{t.quote.form.message}</label>
                      <textarea
                        className="w-full bg-[#FAFAFA] border border-black/5 rounded-2xl px-6 py-4 text-sm text-[#1A1A1A] focus:border-[#c5a059] focus:bg-white outline-none transition-all min-h-[120px]"
                        placeholder={t.contactPage.form.placeholderMessage}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-[#1A1A1A] text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:bg-[#c5a059] hover:text-black transition-all flex items-center justify-center gap-4 shadow-xl shadow-black/10"
                    >
                      {t.quote.form.submit}
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-20 bg-white rounded-[48px] border border-[#c5a059]/20 text-center space-y-8 shadow-2xl"
                  >
                    <div className="w-20 h-20 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-10 h-10 text-[#c5a059]" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-[#1A1A1A]">{t.quote.form.success}</h3>
                    <p className="text-[#1A1A1A]/40">{t.contactPage.form.successDetail}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#c5a059] text-xs font-bold uppercase tracking-widest"
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
