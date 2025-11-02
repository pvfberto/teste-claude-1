import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';
import { CountdownTimer } from '../components/CountdownTimer';

const Section13Offer = () => {
  // Set target date to 7 days from now for Black Friday countdown
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <section id="oferta" className="bg-[#111111] px-6 md:px-20 py-20 md:py-32">
      <div className="max-w-content mx-auto">
        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-4xl font-black text-[#B8860B] mb-10">
            💰 INVESTIMENTO:
          </p>
          <div className="text-xl text-[#F3EFE0] max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>
              Se você fosse me contratar para consultoria, pagaria facilmente R$5.000 - R$10.000.
            </p>
            <p>
              Se fosse aprender na tentativa e erro, queimaria R$30.000 - R$50.000 em budget.
            </p>
            <p className="font-bold">Mas o curso não custa nem 10% disso.</p>
          </div>
        </motion.div>

        {/* Oferta Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black uppercase text-[#B8860B] text-center mb-16 animate-pulse-subtle"
        >
          🔥 OFERTA ESPECIAL BLACK FRIDAY
        </motion.h2>

        {/* Box de Preço */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#191919] to-[#1a1410] border-4 border-[#B8860B] rounded-2xl p-12 md:p-20 max-w-2xl mx-auto text-center glow-gold-strong mb-16"
        >
          {/* Preço riscado */}
          <p className="text-3xl text-[rgba(243,239,224,0.5)] line-through mb-8">
            De: R$639
          </p>

          {/* Preço parcelado */}
          <p className="text-4xl font-semibold mb-4">12x de R$30,12</p>

          {/* Preço à vista */}
          <p className="text-5xl md:text-6xl font-black text-[#B8860B] mb-10 animate-pulse-subtle">
            ou R$299,99 à vista
          </p>

          {/* Desconto PIX */}
          <div className="bg-[rgba(16,185,129,0.15)] border-2 border-[#10B981] rounded-lg p-6 mb-10">
            <p className="text-2xl font-bold text-[#10B981]">
              💎 Economize 10% no PIX: R$269,99
            </p>
          </div>

          {/* Contador */}
          <div className="bg-[rgba(139,0,0,0.1)] border-2 border-[#8B0000] rounded-xl p-10">
            <p className="text-2xl font-bold mb-6">⏰ ESSA OFERTA TERMINA EM:</p>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <CTAButton large onClick={() => alert('Redirecionar para página de checkout')}>
            🚀 QUERO DOMINAR O MÉTODO EM-SA AGORA
          </CTAButton>
          <p className="text-base italic text-[rgba(243,239,224,0.7)] mt-4">
            (Oferta de Black Friday - Por tempo limitado)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section13Offer;
