import { motion } from 'framer-motion';

const Section9Differentials = () => {
  const differentials = [
    {
      title: 'Prompts de IA para Implementação Rápida',
      description: 'Prompts otimizados para ChatGPT, Claude e outras IAs que ajudam você a criar variações de anúncios seguindo o Método EM-SA em minutos (não horas).'
    },
    {
      title: 'Implementação Guiada Passo a Passo',
      description: 'Cada pilar do método vem com checklist de implementação. Você sabe EXATAMENTE o que fazer, na ordem certa.'
    },
    {
      title: 'Exemplos Reais Comentados',
      description: 'Anúncios de R$45 milhões em campanhas destrinchados linha por linha. Você vê o "porquê" de cada decisão.'
    }
  ];

  return (
    <section className="bg-[#111111] px-6 md:px-20 py-20 md:py-32">
      <div className="max-w-content mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-center mb-8"
        >
          🎯 DIFERENCIAL PEDAGÓGICO
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl text-center text-[#F3EFE0] max-w-4xl mx-auto mb-20 leading-relaxed"
        >
          Ao contrário de outros cursos que te deixam "sozinho" depois das aulas,
          <br />
          aqui você tem:
        </motion.p>

        {/* Grid de diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
        >
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-[#191919] border border-[rgba(184,134,11,0.2)] rounded-xl p-10 hover:border-[#B8860B] hover:shadow-[0_4px_20px_rgba(184,134,11,0.15)] transition-all duration-400"
            >
              <div className="text-6xl mb-6 text-[#B8860B]">✅</div>
              <h3 className="text-2xl font-bold mb-4">{diff.title}</h3>
              <p className="text-lg leading-relaxed text-[#F3EFE0]">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statement final */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#B8860B] text-center max-w-3xl mx-auto leading-tight"
        >
          Você não fica perdido.
          <br />
          Você tem as FERRAMENTAS para implementar IMEDIATAMENTE.
        </motion.p>
      </div>
    </section>
  );
};

export default Section9Differentials;
