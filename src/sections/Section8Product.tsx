import { motion } from 'framer-motion';

const Section8Product = () => {
  const requirements = [
    'Como identificar os diferentes perfis psicológicos do SEU público específico',
    'Como criar os Estímulos certos para cada perfil',
    'Como estruturar as Mensagens que ressoam',
    'Como escolher o SA (gatilho de ação) mais eficaz para cada situação',
    'Como montar conjuntos de anúncios que trabalham juntos',
    'Como interpretar os resultados e otimizar continuamente'
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
          className="text-4xl md:text-5xl font-black tracking-wider-xl text-center mb-10 md:mb-16 leading-tight"
        >
          Como Você Aprende A Aplicar
          <br />
          <span className="text-[#FF5C00]">O Método Dos Anúncios Inteligentes?</span>
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
            O Framework EM-SA que acabei de te mostrar é o resultado de
            10 anos de trabalho gerenciando mais de R$45 milhões em campanhas.
          </p>
          <p>Ele funciona. Ele é comprovado. Ele entrega resultados.</p>
          <p>Mas tem um problema:</p>
          <p className="font-bold">
            Saber que o método existe não é o mesmo que saber APLICÁ-LO.
          </p>
        </motion.div>

        {/* Lista de requisitos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <p className="text-2xl font-semibold mb-6">Você precisa entender:</p>
          <div className="space-y-4">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <span className="text-2xl text-[#FF5C00] flex-shrink-0">•</span>
                <span className="text-lg leading-relaxed">{req}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transição */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-[#FF5C00] mb-10 md:mb-16"
        >
          E é exatamente isso que eu ensino no Total Ads 360º.
        </motion.p>

        {/* Box de produto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-gradient-to-br from-[#FF5C00]/15 to-[#FF5C00]/5 border-4 border-[#FF5C00]/40 rounded-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto text-center shadow-[inset_-4px_-4px_12px_rgba(255,255,255,0.1),inset_4px_4px_12px_rgba(0,0,0,0.2),0_12px_50px_rgba(184,134,11,0.25)]"
        >
          <h3 className="text-5xl md:text-7xl font-black text-[#FF5C00] tracking-wider-2xl mb-8">
            Total Ads 360º
          </h3>

          <p className="text-2xl md:text-3xl mb-10 leading-relaxed">
            O curso completo onde você domina e aplica
            <br />
            a Metodologia EM-SA na prática.
          </p>

          <div className="text-xl text-[#F3EFE0] leading-relaxed space-y-4">
            <p>Não é teoria. Não é "motivação". Não é enrolação.</p>
            <p>
              É o framework completo, destrinchado, com exemplos reais,
              técnicas práticas e o passo a passo para você criar anúncios
              inteligentes e estratégicos que vendem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section8Product;
