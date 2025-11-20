import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';
import { CountdownTimer } from '../components/CountdownTimer';

const Section13Offer = () => {
  // Set target date to 7 days from now for Black Friday countdown
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <section id="oferta" className="bg-[#191919] px-6 md:px-20 py-12 md:py-24 grain-effect">
      <div className="max-w-content mx-auto">
        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-4xl font-black text-[#FF5C00] mb-10">
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
          className="text-4xl md:text-5xl font-black text-[#FF5C00] text-center mb-10 md:mb-16 animate-pulse-subtle"
        >
          🔥 Oferta Especial Black Friday
        </motion.h2>

        {/* Box de Preço */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-gradient-to-br from-[#FF5C00]/15 to-[#FF5C00]/5 border-4 border-[#FF5C00]/40 rounded-2xl p-8 md:p-12 lg:p-16 max-w-2xl mx-auto text-center shadow-[inset_-4px_-4px_12px_rgba(255,255,255,0.1),inset_4px_4px_12px_rgba(0,0,0,0.2),0_12px_50px_rgba(184,134,11,0.25)] mb-10 md:mb-16"
        >
          {/* Preço riscado */}
          <p className="text-3xl text-[rgba(243,239,224,0.5)] line-through mb-8 font-bold">
            De: R$639
          </p>

          {/* Preço parcelado */}
          <p className="text-4xl font-semibold mb-4">12x de R$36,19</p>

          {/* Preço à vista */}
          <p className="text-5xl md:text-6xl font-black text-[#FF5C00] mb-10 animate-pulse-subtle">
            ou R$352,00 à vista
          </p>

          {/* Contador */}
          <div className="backdrop-blur-md bg-[#00C853]/10 border-2 border-[#00C853]/40 rounded-xl p-4 md:p-6 lg:p-10 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.2),0_6px_24px_rgba(0,200,83,0.15)]">
            <p className="text-xl md:text-2xl font-bold mb-4 md:mb-6">⏰ ESSA OFERTA TERMINA EM:</p>
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
          <CTAButton large onClick={() => window.location.href = 'https://payfast.greenn.com.br/146308/offer/ZFDBoM'}>
            🚀 QUERO DOMINAR O MÉTODO EM-SA® AGORA
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
