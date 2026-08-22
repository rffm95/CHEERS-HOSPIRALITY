import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, Instagram, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const WA_HREF = 'https://wa.me/351938543783?text=' + encodeURIComponent('Olá! Vim pelo site cheers.guru.');

const SERVICE_OPTIONS = [
  'Bar Consulting',
  'Cocktail Menu Development',
  'Hospitality Consulting',
  'Event Bar Service',
  'Team Training',
  'Digital Solutions',
  'Brand Activation',
  'Other',
];

const BUSINESS_TYPES = ['Hotel', 'Bar / Cocktail Bar', 'Restaurant', 'Event Space / Quinta', 'Brand / Agency', 'Private Event', 'Other'];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', businessType: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = 'w-full bg-[#111110] border border-white/10 rounded-sm px-4 py-3.5 text-white/90 placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors';
  const labelClass = 'block text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/40 mb-2';

  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A08] to-[#0D0C0A]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C9A84C]/5 blur-[100px] rounded-full" />
        </div>
        <div className="container relative z-10 pt-32">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <span className="eyebrow block mb-6">Let&apos;s Talk</span>
            <h1 className="display-xl text-white mb-4">
              Let&apos;s create<br />
              <em className="text-[#C9A84C]">something great.</em>
            </h1>
            <p className="body-lg text-white/45 max-w-lg">
              Tell us what you&apos;re working on. We&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-pad bg-[#0D0C0A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="card-dark p-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                  <h3 className="font-display text-3xl italic text-white mb-4">Message received.</h3>
                  <p className="text-white/45 mb-8 max-w-sm mx-auto text-sm leading-relaxed">Our team will review your enquiry and get back to you within 24 hours. For urgent matters, WhatsApp is faster.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp Now <ArrowRight className="w-3.5 h-3.5" /></a>
                    <button onClick={() => setSubmitted(false)} className="btn-ghost">Send Another</button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Company</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Hotel / Bar / Restaurant" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+351 9XX XXX XXX" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Business Type</label>
                      <select name="businessType" value={form.businessType} onChange={handleChange} className={inputClass}>
                        <option value="">Select type...</option>
                        {BUSINESS_TYPES.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>What are you looking for? *</label>
                      <select name="service" required value={form.service} onChange={handleChange} className={inputClass}>
                        <option value="">Select service...</option>
                        {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your project, challenges or goals..." className={inputClass + ' resize-none'} />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? 'Sending...' : <>Send Message <Send className="w-3.5 h-3.5" /></>}
                  </button>
                  <p className="text-white/25 text-xs text-center">We respond within 24h. No spam, ever.</p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="space-y-8">
              <div>
                <p className="eyebrow block mb-5">Direct Contact</p>
                <div className="space-y-4">
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 card-dark p-5 hover:border-[#C9A84C]/30 group">
                    <div className="w-9 h-9 rounded-md bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                      <Phone className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">WhatsApp</p>
                      <p className="text-white/40 text-xs">+351 938 543 783</p>
                      <p className="text-[#C9A84C] text-[0.6rem] uppercase tracking-wider font-bold mt-1">Fastest response →</p>
                    </div>
                  </a>
                  <a href="mailto:cheersexperiences@gmail.com" className="flex items-start gap-4 card-dark p-5 hover:border-[#C9A84C]/30 group">
                    <div className="w-9 h-9 rounded-md bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                      <Mail className="w-4 h-4 text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">Email</p>
                      <p className="text-white/40 text-xs">cheersexperiences@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://instagram.com/cheers.guru" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 card-dark p-5 hover:border-[#C9A84C]/30 group">
                    <div className="w-9 h-9 rounded-md bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition-colors">
                      <Instagram className="w-4 h-4 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">Instagram</p>
                      <p className="text-white/40 text-xs">@cheers.guru</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-dark p-6">
                <p className="eyebrow block mb-3">Coverage Area</p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="text-white/45 text-sm leading-relaxed">Based in Viseu. Events and consulting across Porto, Coimbra, Alto Douro, Aveiro and nationwide. Digital services globally.</p>
                </div>
              </div>
              <div className="card-dark p-6 border-[#C9A84C]/20">
                <p className="text-[#C9A84C] text-[0.6rem] uppercase tracking-widest font-bold mb-2">Response time</p>
                <p className="text-white font-semibold">Under 24 hours.</p>
                <p className="text-white/40 text-xs mt-1">WhatsApp for urgent or same-day enquiries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
