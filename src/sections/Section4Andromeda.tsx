import { motion } from 'framer-motion';

const Section4Andromeda = () => {
  const features = [
    'Quem vai ver seu anúncio',
    'Quando vai ver',
    'Em qual plataforma vai ver',
    'Quantas vezes vai ver'
  ];

  return (
    <section className="bg-[#191919] px-6 md:px-20 py-12 md:py-24 grain-effect">
      <div className="max-w-content mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black tracking-wider-xl text-center mb-10 md:mb-16 leading-tight"
        >
          A Meta Mudou As Regras Do Jogo...
          <br />
          <span className="text-[#FF5C00]">E Você Não Foi Avisado.</span>
        </motion.h2>

        {/* Parágrafos introdutórios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-xl text-[#F3EFE0] max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed space-y-4"
        >
          <p>Você acha que o problema é você.</p>
          <p>Que você não é bom o suficiente.</p>
          <p>Que você não tem "talento" para criar anúncios.</p>
          <p className="mt-8">
            Mas deixa eu te contar algo que vai mudar completamente
            <br />a forma como você vê isso:
          </p>
        </motion.div>

        {/* Box de destaque Andromeda */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-gradient-to-br from-[#FF5C00]/15 to-[#FF5C00]/5 border-2 border-[#FF5C00]/40 rounded-xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto mb-10 md:mb-16 shadow-[inset_-3px_-3px_10px_rgba(255,255,255,0.1),inset_3px_3px_10px_rgba(0,0,0,0.2),0_10px_40px_rgba(184,134,11,0.2)]"
        >
          <p className="text-3xl md:text-4xl font-black text-[#FF5C00] mb-6">
            🤖 Em Novembro De 2024, A Meta Lançou O Andromeda.
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-10">
            E com ele, Tudo mudou.
          </p>

          <div className="space-y-6 text-xl leading-relaxed mb-8">
            <p>
              O Andromeda é a nova Inteligência Artificial que controla
              100% da distribuição dos seus anúncios na Meta.
            </p>
            <p>E sabe qual é a grande sacada?</p>
            <p className="font-semibold">O algoritmo agora decide Sozinho:</p>
          </div>

          {/* Lista com checkmarks */}
          <div className="space-y-4 pl-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <span className="text-2xl text-[#FF5C00]">✓</span>
                <span className="text-xl font-semibold">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Infográfico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mx-auto my-10 md:my-16 image-glass-container"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/assets/sessao_4_mobile.png"
            />
            <source
              media="(min-width: 769px)"
              srcSet="/assets/sessao_4.png"
            />
            <img
              src="/assets/sessao_4.png"
              alt="Como o Andromeda mudou as regras dos anúncios na Meta"
              className="w-full rounded-lg"
              loading="lazy"
              width="1000"
              height="600"
            />
          </picture>
        </motion.div>

        {/* Parágrafo de transição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl text-[#F3EFE0] max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          <p>E sabe o que isso significa na prática?</p>
          <p className="mt-6">
            Significa que 80% do resultado das suas campanhas
            <br />agora vem de Uma Coisa:
          </p>
        </motion.div>

        {/* Statement impactante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <p className="text-5xl md:text-6xl font-black text-[#FF5C00] mb-8">
            👉 Dos Seus Anúncios.
          </p>
          <div className="space-y-3 text-2xl text-[#F3EFE0]">
            <p>Não da segmentação.</p>
            <p>Não do orçamento.</p>
            <p>Não da estrutura de campanha.</p>
            <p className="mt-8 font-bold text-3xl">
              Do Criativo. Do Anúncio. Da Mensagem.
            </p>
          </div>
        </motion.div>

        {/* Parágrafo final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl text-[#F3EFE0] max-w-3xl mx-auto mb-10 md:mb-16 space-y-4"
        >
          <p>E aqui está o problema:</p>
          <p>A maioria das pessoas ainda está criando anúncios do jeito "antigo".</p>
          <p className="font-bold">Mas isso não funciona mais.</p>
        </motion.div>

        {/* Transição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-[#FF5C00] max-w-2xl mx-auto leading-relaxed"
        >
          <p>Mas tem uma boa notícia:</p>
          <p className="mt-4">Eu descobri o código.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4Andromeda;
