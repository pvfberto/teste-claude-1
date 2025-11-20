import { motion } from 'framer-motion';

const Section2Validation = () => {
  const painPoints = [
    "Suas campanhas que antes entregavam 3x, 5x, 10x de ROAS... hoje mal chegam a 1.5x (e olha lá)",
    "Você testa dezenas de criativos por semana, mas parece que nenhum 'pega' como antigamente",
    "Você já tentou copiar anúncios que deram certo para outras pessoas, mas quando você faz, não funciona",
    "Você sente aquele aperto no peito toda vez que abre o Gerenciador de Anúncios e vê vermelho",
    "Você começa a duvidar de si mesmo: 'Será que eu não sirvo pra isso? Será que todo mundo está mentindo sobre os resultados?'"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="bg-[#191919] px-6 md:px-20 py-12 md:py-24 grain-effect">
      <div className="max-w-content mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black tracking-wider-xl text-center mb-8 md:mb-12 leading-tight"
        >
          Se você está lendo isso, é porque algo mudou.
          <br />
          <span className="text-[#FF5C00]">Talvez você tenha notado que:</span>
        </motion.h2>

        {/* Lista de dores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 backdrop-blur-md bg-white/5 p-6 rounded border-l-4 border-[#FF5C00] shadow-[inset_1px_1px_4px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-3xl opacity-60 flex-shrink-0">
                {index % 2 === 0 ? '❌' : '⚠️'}
              </span>
              <p className="text-lg leading-relaxed text-[#F3EFE0]">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA suave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xl font-semibold text-[#FF5C00] cursor-pointer hover:scale-105 transition-transform inline-block">
            Se você se identificou com 3+ pontos, continue lendo →
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2Validation;
