import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Heart, Zap, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = 'https://i.imgur.com/Ddsk56J.jpeg';
const WA_HREF = 'https://wa.me/351938543783?text=' + encodeURIComponent('Olá! Gostaria de saber mais sobre a Cheers Guru.');

const VALUES = [
  { icon: TrendingUp, title: 'Commercial First', desc: "Beautiful ideas that don't generate revenue are just decoration. Every recommendation we make must improve the bottom line." },
  { icon: CheckCircle2, title: 'Operational Rigour', desc: "We don't just create concepts. We build systems that work when the team changes, when it's busy, and when you're not watching." },
  { icon: Zap, title: 'Creative Excellence', desc: "We push for concepts that surprise, menus that are remembered and experiences that people talk about long after they end." },
  { icon: Globe, title: 'International Standards', desc: "Shaped by exposure to global hospitality markets — applied locally, with a deep understanding of the Portuguese context." },
  { icon: Heart, title: 'Genuine Partnership', desc: "We don't disappear after delivery. We're invested in the success of every project because our reputation depends on yours." },
];

export const About = () => (
  <div className="w-full">

    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A08] via-[#0D0C0A] to-[#0A0A08]">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[#C9A84C]/6 blur-[100px] rounded-full" />
      </div>
      <div className="container relative z-10 pt-32">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <span className="eyebrow block mb-6">About Cheers</span>
          <h1 className="display-xl text-white mb-6">
            Hospitality isn&apos;t a service.<br />
            <em className="text-[#C9A84C]">It&apos;s a craft.</em>
          </h1>
          <p className="body-lg text-white/50 max-w-2xl">
            We exist to help hospitality businesses reach their full potential — through better operations, stronger teams, more memorable experiences and greater profitability.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="section-pad bg-[#0D0C0A]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="eyebrow block mb-6">Our Story</span>
            <h2 className="display-md text-white mb-8">Born from<br /><em className="text-[#C9A84C]">real hospitality.</em></h2>
            <div className="space-y-5 text-white/55 body-md">
              <p>Cheers didn&apos;t start in a boardroom. It started behind a bar. With years of hands-on experience running high-volume venues — Cheers O Bar, Cheers Pool Bar, Maria Xica Rooftop Bar — we learned what actually works, and what costs money, time and reputation.</p>
              <p>We built our consultancy from that lived experience. Every framework we use, every menu we develop, every training programme we deliver comes from having done it ourselves — under pressure, with real guests, real stakes and real consequences.</p>
              <p>Today we work with hotels, restaurants, event spaces and brands across Portugal. Our mission stays the same: make hospitality better — more profitable, more consistent, more human.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#C9A84C]/10 blur-[60px] scale-150" />
              <img src={LOGO_URL} alt="Cheers Guru" width={320} height={320} className="relative z-10 rounded-full object-cover ring-1 ring-[#C9A84C]/20 shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-pad">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <span className="eyebrow block mb-4">What We Stand For</span>
          <h2 className="display-md text-white">Five principles.<br /><em className="text-[#C9A84C]">Every project.</em></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="card-dark p-8">
                <div className="w-10 h-10 rounded-md bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h4 className="text-white font-semibold mb-3">{v.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Own venues */}
    <section className="section-pad bg-[#0D0C0A]">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <span className="eyebrow block mb-4">Our Own Venues</span>
          <h2 className="display-md text-white">We practice<br /><em className="text-[#C9A84C]">what we preach.</em></h2>
          <p className="text-white/45 body-md mt-6 max-w-xl">Beyond client work, we operate and have operated our own venues — giving us a perspective few consultancies have.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Cheers O Bar', type: 'Cocktail & Sports Bar', location: 'Viseu' },
            { name: 'Cheers Pool Bar', type: 'Bar & Pool Experience', location: 'Penedono' },
            { name: 'Maria Xica Rooftop', type: 'Rooftop Cocktail Bar', location: 'Viseu' },
          ].map((venue, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="card-dark p-8">
              <span className="eyebrow block mb-4">{venue.location}</span>
              <h4 className="font-display text-2xl italic text-white mb-2">{venue.name}</h4>
              <p className="text-white/40 text-sm">{venue.type}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-pad">
      <div className="container text-center">
        <h2 className="display-md text-white mb-6">Ready to work<br /><em className="text-[#C9A84C]">together?</em></h2>
        <p className="text-white/45 max-w-md mx-auto mb-10 body-md">Let&apos;s have an honest conversation about your business and how we can help it grow.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">Let&apos;s Talk <ArrowRight className="w-3.5 h-3.5" /></a>
          <Link to="/contact" className="btn-ghost">Book a Consultation</Link>
        </div>
      </div>
    </section>

  </div>
);
