import { motion } from 'framer-motion';

const Section3Consequences = () => {
  const consequences = [
    {
      emoji: '📉',
      title: 'Seus resultados vão continuar caindo',
      description: 'A cada semana que passa, o custo por lead/venda aumenta. O que custava R$5 agora custa R$15. O que custava R$50 agora custa R$150. E você começa a perder dinheiro toda vez que roda campanha.'
    },
    {
      emoji: '💸',
      title: 'Você vai jogar dinheiro fora testando coisas que não funcionam',
      description: 'Sem um método claro, você fica no "teste cego". Testa criativo, testa copy, testa público, testa posicionamento... mas nunca sabe EXATAMENTE o que está funcionando ou por quê. Resultado? Você queima orçamento sem aprender nada.'
    },
    {
      emoji: '😰',
      title: 'O medo de abrir o Gerenciador de Anúncios se torna rotina',
      description: 'Toda vez que você abre a plataforma, é aquele aperto: "Será que piorou hoje?" Você começa a adiar decisões, fica paralisado, e o negócio para de crescer.'
    },
    {
      emoji: '😡',
      title: 'Você sente inveja (e raiva) das pessoas que "conseguem"',
      description: 'Você vê prints de resultados por aí. Pessoas mostrando campanhas no azul, escalando, celebrando. E você pensa: "Por que comigo não funciona?" A frustração vira ressentimento. E o ressentimento vira desistência.'
    },
    {
      emoji: '🚪',
      title: 'Você considera desistir (ou voltar pro emprego)',
      description: 'Se você é empreendedor, começa a pensar: "Será que vale a pena?" Se você é gestor de tráfego, começa a pensar: "Será que eu sirvo pra isso?" O sonho começa a morrer.'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="bg-[#111111] px-6 md:px-20 py-20 md:py-32">
      <div className="max-w-content mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black tracking-wider-xl text-center mb-10"
        >
          O Que Acontece Se Você Continuar
          <br />
          <span className="text-[#B8860B]">Fazendo Do Jeito Que Está Fazendo?</span>
        </motion.h2>

        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-xl text-[#F3EFE0] max-w-4xl mx-auto mb-20 leading-relaxed"
        >
          <p>Deixa eu ser direto com você.</p>
          <p className="mt-4">
            Se você continuar criando anúncios da forma que está criando hoje,
            aqui está o que vai acontecer nos próximos 30, 60, 90 dias:
          </p>
        </motion.div>

        {/* Cards de consequências */}
        <div className="max-w-4xl mx-auto space-y-10 mb-20">
          {consequences.map((consequence, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-lg p-10 shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.15),inset_2px_2px_8px_rgba(0,0,0,0.25),0_0_30px_rgba(184,134,11,0.2)] transition-all duration-500"
            >
              <div className="text-5xl mb-5">{consequence.emoji}</div>
              <h3 className="text-2xl font-bold mb-4">{consequence.title}</h3>
              <p className="text-lg leading-relaxed text-[#F3EFE0]">
                {consequence.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statement final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-[#B8860B]/10 border-2 border-[#B8860B]/30 rounded-lg p-12 md:p-16 max-w-3xl mx-auto text-center shadow-[inset_-3px_-3px_10px_rgba(255,255,255,0.1),inset_3px_3px_10px_rgba(0,0,0,0.2),0_10px_40px_rgba(184,134,11,0.15)]"
        >
          <p className="text-2xl md:text-3xl font-bold mb-6">
            Mas Aqui Está A Verdade Que Ninguém Está Te Contando:
          </p>
          <p className="text-3xl md:text-4xl font-black text-[#B8860B]">
            👉 A culpa não é sua.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3Consequences;
