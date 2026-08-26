import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Mail, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const WA_HREF = 'https://wa.me/351927653087?text=' + encodeURIComponent('Olá! Vim pelo site da Cheers Experiences e gostava de marcar uma conversa.');
const EMAIL = 'hello@cheersexperiences.com';

interface ContactCTAProps {
  eyebrow?: string;
  headline?: React.ReactNode;
  sub?: string;
  /** 'dark' (default) = dark bg, 'gold' = gold accent bg */
  variant?: 'dark' | 'gold';
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  eyebrow = 'Vamos Trabalhar Juntos',
  headline = (
    <>
      Pronto para elevar<br />
      <em className="text-[#C9A84C]">a tua experiência?</em>
    </>
  ),
  sub = 'Fala connosco hoje — resposta garantida em menos de 2 horas.',
  variant = 'dark',
}) => {
  const isGold = variant === 'gold';

  return (
    <section
      className={`section-pad relative overflow-hidden ${
        isGold ? 'bg-[#C9A84C]' : 'bg-[#0A0A08]'
      }`}
    >
      {/* Subtle grid */}
      {!isGold && (
        <div
          className="absolute inset-0 opacity-[0.022] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      )}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] blur-[120px] rounded-full pointer-events-none ${
          isGold ? 'bg-white/10' : 'bg-[#C9A84C]/5'
        }`}
      />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span
              className={`text-[0.6rem] font-bold uppercase tracking-[0.28em] block mb-5 ${
                isGold ? 'text-[#0A0A08]/60' : 'text-[#C9A84C]'
              }`}
            >
              {eyebrow}
            </span>
            <h2
              className={`display-md mb-5 leading-tight ${
                isGold ? 'text-[#0A0A08]' : 'text-white'
              }`}
            >
              {headline}
            </h2>
            <p
              className={`body-md leading-relaxed ${
                isGold ? 'text-[#0A0A08]/60' : 'text-white/40'
              }`}
            >
              {sub}
            </p>
          </motion.div>
        </div>

        {/* Two CTA channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary shadow-lg ${
              isGold
                ? 'bg-[#0A0A08] text-white hover:bg-white hover:text-[#0A0A08] shadow-[#0A0A08]/20'
                : 'shadow-[#C9A84C]/20'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Let&apos;s Talk
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className={`btn-ghost ${
              isGold ? 'border-[#0A0A08]/25 text-[#0A0A08] hover:border-[#0A0A08] hover:bg-[#0A0A08]/8' : ''
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            Enviar Email
          </a>
        </motion.div>

        {/* Trust micro-signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className={`flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t ${
            isGold ? 'border-[#0A0A08]/12' : 'border-white/[0.06]'
          }`}
        >
          <span
            className={`flex items-center gap-2 text-[0.68rem] ${
              isGold ? 'text-[#0A0A08]/50' : 'text-white/30'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            Resposta em &lt; 2 horas
          </span>
          <span
            className={`flex items-center gap-2 text-[0.68rem] ${
              isGold ? 'text-[#0A0A08]/50' : 'text-white/30'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            Sem compromisso
          </span>
          <Link
            to="/contact"
            className={`flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-widest transition-colors ${
              isGold
                ? 'text-[#0A0A08]/60 hover:text-[#0A0A08]'
                : 'text-[#C9A84C]/60 hover:text-[#C9A84C]'
            }`}
          >
            Ver página de contacto <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
