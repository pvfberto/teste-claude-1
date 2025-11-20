import { motion } from 'framer-motion';

const Section11Results = () => {
  const examples = [
    {
      scenario: 'Se você investe R$10.000/mês e tem ROAS de 2x',
      result: 'Com melhoria de 30% você passa para 2.6x',
      impact: 'R$6.000 A Mais Por Mês ou R$72.000 A Mais Por Ano'
    },
    {
      scenario: 'Se seu CPL está R$17',
      result: 'Com redução de 60% cai para R$6,80',
      impact: '60% Mais Leads com o mesmo budget'
    },
    {
      scenario: 'Se você fatura R$50.000/mês com anúncios',
      result: 'Com melhoria de 30% salta para R$65.000/mês',
      impact: 'R$15.000 A Mais Por Mês ou R$180.000 A Mais por Ano'
    }
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
          className="text-4xl md:text-5xl font-black uppercase tracking-wider-xl text-center mb-10 md:mb-16 leading-tight"
        >
          RESULTADOS REAIS
          <br />
          <span className="text-[#FF5C00]">(SEM PROMESSAS MALUCAS)</span>
        </motion.h2>

        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-xl text-[#F3EFE0] max-w-4xl mx-auto mb-10 md:mb-16 leading-relaxed space-y-4"
        >
          <p>
            Em 10 anos analisando R$45 milhões em campanhas, identifiquei que
            aplicar o Método EM-SA® melhora ROAS em, no mínimo, 30% e reduz CPL
            na mesma proporção.
          </p>
          <p>
            É muito comum nas ofertas ser prometido o resultado do melhor case de sucesso.
          </p>
          <p>
            Eu prefiro trabalhar com a média alcançada por meus alunos que relatam
            melhorias consistentes de 30-60% nos resultados.
          </p>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#FF5C00] text-center mb-10"
        >
          Isso significa:
        </motion.p>

        {/* 3 Exemplos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10 md:mb-16">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="backdrop-blur-lg bg-white/5 border-l-4 border-[#FF5C00] rounded-lg p-6 md:p-8 space-y-4 shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <p className="text-lg text-[#F3EFE0] leading-relaxed">
                {example.scenario}
              </p>
              <p className="text-xl text-[#FF5C00] flex items-start gap-2">
                <span>→</span>
                <span>{example.result}</span>
              </p>
              <p className="text-2xl font-black text-[#FF5C00] pt-2">
                = {example.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section11Results;
