import { motion } from 'framer-motion';

const Section12Authority = () => {
  const credentials = [
    {
      emoji: '📊',
      number: '+10 ANOS',
      title: 'Marketing Digital',
      description: 'Desde 2014 na trincheira, não na teoria.'
    },
    {
      emoji: '💰',
      number: '+R$45 MILHÕES',
      title: 'Gerenciados',
      description: 'Método testado e comprovado com muito dinheiro real em jogo.'
    },
    {
      emoji: '🎓',
      number: 'UNICAMP',
      title: 'Físico',
      description: 'Rigor científico. Dados, não achismos.'
    }
  ];

  return (
    <section className="bg-[#111111] px-6 md:px-20 py-12 md:py-24 grain-effect">
      <div className="max-w-content mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-center mb-10 md:mb-16"
        >
          🎯 POR QUE CONFIAR NO MÉTODO?
        </motion.h2>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-10 md:mb-16">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="backdrop-blur-lg bg-white/5 border-2 border-white/20 rounded-xl p-8 md:p-12 text-center shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.3)] hover:border-[#FF5C00]/40 hover:-translate-y-1 hover:shadow-[inset_-2px_-2px_10px_rgba(255,255,255,0.15),inset_2px_2px_10px_rgba(0,0,0,0.25),0_12px_40px_rgba(184,134,11,0.2)] transition-all duration-400"
            >
              <div className="text-6xl mb-6">{cred.emoji}</div>
              <div className="text-2xl md:text-3xl font-black text-[#FF5C00] mb-3">
                {cred.number}
              </div>
              <div className="text-2xl font-bold mb-4">{cred.title}</div>
              <p className="text-lg text-[#F3EFE0]">{cred.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Parágrafo final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl text-[#F3EFE0] max-w-3xl mx-auto leading-relaxed space-y-4"
        >
          <p>
            Desenvolvi uma metodologia única que combina rigor analítico
            com comportamento humano nas redes sociais.
          </p>
          <p>
            É o resultado de uma década aperfeiçoando a criação de anúncios
            que realmente convertem.
          </p>
          <p className="font-bold">
            E eu ensino coisas que não vi nem nos MasterMinds mais caros
            do Mercado Digital.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section12Authority;
