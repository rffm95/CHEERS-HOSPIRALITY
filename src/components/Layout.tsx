import React from 'react';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const WA_HREF = 'https://wa.me/351938543783?text=' + encodeURIComponent('Olá! Vim pelo site cheers.guru.');

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
    <Navbar />
    <main className="flex-1 pt-0">{children}</main>
    <footer className="bg-[#060605] border-t border-white/[0.05]">
      {/* CTA strip */}
      <div className="border-b border-white/[0.05]">
        <div className="container-wide py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="eyebrow mb-3">Ready to start?</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold italic text-white">
              Let&apos;s create something<br />
              <span className="text-[#C9A84C]">exceptional.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Let&apos;s Talk <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link to="/contact" className="btn-ghost">Book a Consultation</Link>
          </div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-semibold italic text-white mb-3">Cheers Hospitality</p>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium hospitality consulting, beverage experiences, events and training. Based in Viseu. Operating nationwide.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/events', 'Events'], ['/consulting', 'Consulting'], ['/digital', 'Digital'], ['/portfolio', 'Our Work'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/40 hover:text-[#C9A84C] transition-colors text-xs font-medium uppercase tracking-wider">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-[#C9A84C] transition-colors text-xs">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  +351 938 543 783
                </a>
              </li>
              <li>
                <a href="mailto:cheersexperiences@gmail.com" className="flex items-center gap-2 text-white/40 hover:text-[#C9A84C] transition-colors text-xs">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  cheersexperiences@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/cheers.guru" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 hover:text-[#C9A84C] transition-colors text-xs">
                  <Instagram className="w-3.5 h-3.5 shrink-0" />
                  @cheers.guru
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/40 text-xs">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                Viseu · Porto · Coimbra · Nacional
              </li>
            </ul>
          </div>
        </div>
        <div className="divider mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[0.65rem] uppercase tracking-widest">© {new Date().getFullYear()} Cheers Hospitality. All rights reserved.</p>
          <p className="text-white/25 text-[0.65rem]">cheers.guru</p>
        </div>
      </div>
    </footer>
  </div>
);
