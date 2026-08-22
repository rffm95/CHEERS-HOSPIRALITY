import React from 'react';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const WA_HREF = 'https://wa.me/351938543783?text=' + encodeURIComponent('Olá! Vim pelo site da Cheers Experiences e gostaria de saber mais.');

const SERVICES_LINKS = [
  ['/events', 'Events & Bar Services'],
  ['/consulting', 'Hospitality Consulting'],
  ['/digital', 'Digital Solutions'],
  ['/consulting', 'Team Training'],
];

const NAV_LINKS = [
  ['/', 'Home'],
  ['/portfolio', 'Our Work'],
  ['/about', 'About Us'],
  ['/contact', 'Contact'],
];

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
    <Navbar />
    <main className="flex-1 pt-0">{children}</main>

    <footer className="bg-[#050504] border-t border-white/[0.05]">

      {/* ── Pre-footer CTA strip ── */}
      <div className="bg-gradient-to-br from-[#0D0C0A] to-[#060504] border-b border-white/[0.05]">
        <div className="container-wide py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <p className="eyebrow mb-4">Pronto para começar?</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold italic text-white leading-[1.05]">
              Vamos criar algo<br />
              <em className="text-[#C9A84C] not-italic">verdadeiramente excepcional.</em>
            </h2>
            <p className="text-white/40 mt-4 max-w-md text-sm leading-relaxed">
              Conta-nos o que tens em mente. Respondemos em menos de 2 horas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shadow-lg shadow-[#C9A84C]/15"
            >
              Let&apos;s Talk <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link to="/contact" className="btn-ghost">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* ── Footer grid ── */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://i.imgur.com/Ddsk56J.jpeg"
                alt="Cheers Experiences"
                width={36}
                height={36}
                className="rounded-full ring-1 ring-white/10"
              />
              <div className="leading-none">
                <span className="font-display text-lg font-semibold text-white">Cheers</span>
                <span className="block text-[8px] uppercase tracking-[0.22em] text-[#C9A84C] font-bold mt-[2px]">Experiences</span>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-[280px] mb-6">
              Transformamos operações de hospitality em experiências memoráveis e negócios mais rentáveis.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/cheers.guru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Cheers Experiences"
                className="w-9 h-9 rounded-sm bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Cheers Experiences"
                className="w-9 h-9 rounded-sm bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Cheers Experiences"
                className="w-9 h-9 rounded-sm bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#25D366] hover:border-[#25D366]/30 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-6">Services</p>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(([to, label]) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-white/38 hover:text-[#C9A84C] transition-colors text-xs font-medium tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#C9A84C] transition-all duration-300 overflow-hidden" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate column */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-6">Navigate</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/38 hover:text-[#C9A84C] transition-colors text-xs font-medium tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#C9A84C] transition-all duration-300 overflow-hidden" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-6">Contact</p>
            <ul className="space-y-4">
              <li>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/38 hover:text-[#C9A84C] transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0 mt-0.5 group-hover:text-[#C9A84C]" />
                  <span className="text-xs leading-relaxed">+351 938 543 783<br /><span className="text-white/25">WhatsApp disponível</span></span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:cheersexperiences@gmail.com"
                  className="flex items-start gap-3 text-white/38 hover:text-[#C9A84C] transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span className="text-xs">cheersexperiences@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/38">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">Viseu · Porto · Coimbra<br /><span className="text-[#C9A84C]/70">Operamos a nível nacional</span></span>
                </div>
              </li>
            </ul>

            {/* Response time badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 bg-white/[0.04] border border-white/[0.06] rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[0.6rem] uppercase tracking-widest text-white/40 font-bold">Resposta &lt; 2h</span>
            </div>
          </div>

        </div>

        {/* Divider & bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[0.62rem] uppercase tracking-widest">
            © {new Date().getFullYear()} Cheers Experiences. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-[0.62rem]">cheers.guru</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/20 text-[0.62rem]">Viseu, Portugal</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
