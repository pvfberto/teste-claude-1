import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';

const Section15FinalChoice = () => {
  return (
    <section className="bg-[#191919] px-6 md:px-20 py-12 md:py-24 grain-effect">
      <div className="max-w-content mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black tracking-wider-xl text-center mb-10 md:mb-16"
        >
          Duas Escolhas:
        </motion.h2>

        {/* 2 Cards lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto mb-10 md:mb-16">
          {/* Escolha 1 - Negativa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-lg bg-black/20 border-2 border-[#8B0000]/40 rounded-xl p-8 md:p-12 relative shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.05),inset_2px_2px_8px_rgba(0,0,0,0.3),0_8px_32px_rgba(139,0,0,0.2)]"
          >
            <div className="text-6xl mb-6 text-[#8B0000]">❌</div>
            <h3 className="text-2xl font-bold text-[#8B0000] mb-6">ESCOLHA 1</h3>
            <div className="text-lg leading-relaxed text-[rgba(243,239,224,0.8)] space-y-4">
              <p>Continuar criando anúncios do jeito que está criando.</p>
              <p>Ver seus custos aumentarem.</p>
              <p>Ver seus resultados caírem.</p>
              <p>
                Sentir aquele aperto no peito toda vez que abre
                o Gerenciador de Anúncios.
              </p>
            </div>
          </motion.div>

          {/* Escolha 2 - Positiva */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-lg bg-gradient-to-br from-[#B8860B]/15 to-[#B8860B]/5 border-4 border-[#B8860B]/40 rounded-xl p-8 md:p-12 relative lg:scale-105 shadow-[inset_-3px_-3px_10px_rgba(255,255,255,0.1),inset_3px_3px_10px_rgba(0,0,0,0.2),0_12px_50px_rgba(184,134,11,0.3)]"
          >
            <div className="text-6xl mb-6 text-[#B8860B]">✅</div>
            <h3 className="text-2xl font-bold text-[#B8860B] mb-6">ESCOLHA 2</h3>
            <div className="text-lg leading-relaxed text-[#F3EFE0] space-y-4">
              <p>Aprender o Método EM-SA®.</p>
              <p>Criar anúncios inteligentes que falam com diferentes perfis.</p>
              <p>Ver melhorias de pelo menos 30-60% nos próximos 30 dias.</p>
              <p>Fazer o Andromeda trabalhar a seu favor.</p>
            </div>
          </motion.div>
        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-semibold max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed space-y-4"
        >
          <p>A escolha é sua.</p>
          <p>Mas se você continuar fazendo do jeito que está fazendo...</p>
          <p>...você vai continuar tendo os resultados que está tendo.</p>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-10 md:mb-16"
        >
          <CTAButton large onClick={() => window.location.href = 'https://payfast.greenn.com.br/146308/offer/ZFDBoM'}>
            🚀 QUERO DOMINAR O MÉTODO EM-SA® AGORA
          </CTAButton>
          <p className="text-base italic text-[rgba(243,239,224,0.7)] mt-4">
            (Oferta de Black Friday - Por tempo limitado)
          </p>
        </motion.div>

        {/* P.S. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-[#B8860B]/5 border-l-4 border-[#B8860B] rounded p-6 md:p-10 max-w-3xl mx-auto shadow-[inset_1px_1px_4px_rgba(0,0,0,0.2),0_6px_24px_rgba(0,0,0,0.2)]"
        >
          <div className="text-base italic leading-relaxed text-[rgba(243,239,224,0.9)] space-y-4">
            <p>
              <strong>P.S.:</strong> Por R$269,99 (menos do que você perde em 2 dias de anúncios ruins),
              você tem acesso ao método testado com R$45 milhões.
              Garantia de 15 dias. Zero risco. Clique agora e transforme seus anúncios.
            </p>
            <p>
              <strong>P.P.S.:</strong> Esta oferta de Black Friday não volta depois. Quando a promoção acabar,
              o preço volta para R$639. E você vai se arrepender de não ter aproveitado
              quando teve a chance. Não deixe para depois. Clique no botão agora.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section15FinalChoice;
