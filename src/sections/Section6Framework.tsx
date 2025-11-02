import { motion } from 'framer-motion';

const Section6Framework = () => {
  const pillars = [
    {
      icon: '🎯',
      title: 'ESTÍMULO',
      subtitle: 'O que faz parar de scrollar',
      description: `É o "GANCHO" do anúncio.

É o que faz a pessoa PARAR de scrollar e prestar atenção.

O Estímulo pode ser visual (uma imagem forte, um vídeo impactante) ou textual (uma frase que corta a respiração).`,
      example: `Exemplo: Um gestor de tráfego vê um anúncio que diz: "Seus anúncios estavam funcionando... até que pararam de funcionar."

➡️ Ele para. Porque é EXATAMENTE o que ele está sentindo.`
    },
    {
      icon: '💬',
      title: 'MENSAGEM',
      subtitle: 'O conteúdo que ressoa',
      description: `É o CONTEÚDO do anúncio.

É onde você articula a dor, revela a solução, faz promessas, mostra provas.

Mas aqui está o segredo: a Mensagem precisa variar.`,
      list: [
        'Algumas pessoas precisam de dados e lógica',
        'Outras precisam de emoção e histórias',
        'Outras precisam de prova social e urgência'
      ],
      footer: 'Um anúncio só não dá conta de tudo isso. Por isso você cria VARIAÇÕES de mensagens dentro do mesmo framework.'
    },
    {
      icon: '🚀',
      title: 'SA',
      subtitle: 'O empurrãozinho final',
      description: `É o gatilho emocional ou psicológico que faz a pessoa CLICAR AGORA.

Pode ser urgência, escassez, medo de perder, desejo de pertencimento, prova social, garantia...

O SA é o que transforma "interesse" em "ação".`,
      triggers: ['Urgência', 'Escassez', 'Medo de perder', 'Prova social', 'Garantia']
    }
  ];

  return (
    <section className="bg-[#191919] px-6 md:px-20 py-20 md:py-32">
      <div className="max-w-content mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black uppercase tracking-wider-2xl text-center mb-10"
        >
          O FRAMEWORK EM-SA
        </motion.h2>

        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-2xl font-semibold mb-8">EM-SA significa:</p>
          <div className="text-3xl font-bold text-[#B8860B] space-y-4">
            <p>E = Estímulo</p>
            <p>M = Mensagem</p>
            <p>SA = Sentimento que Acelera a Ação</p>
          </div>
        </motion.div>

        {/* Diagrama */}
        <motion.img
          src="/assets/sessao_6.png"
          alt="Framework EM-SA - Estímulo, Mensagem, Sentimento que Acelera"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto my-20 rounded-lg shadow-2xl"
          loading="lazy"
        />

        {/* 3 Pilares */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-[#111111] border border-[rgba(184,134,11,0.3)] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(184,134,11,0.2)] transition-all duration-500"
            >
              <div className="text-6xl mb-6">{pillar.icon}</div>
              <h3 className="text-3xl font-black uppercase text-[#B8860B] mb-4">
                {pillar.title}
              </h3>
              <p className="text-xl font-semibold mb-6">{pillar.subtitle}</p>
              <p className="text-lg leading-relaxed text-[#F3EFE0] whitespace-pre-line mb-6">
                {pillar.description}
              </p>

              {pillar.list && (
                <div className="space-y-3 text-lg leading-relaxed mb-6">
                  <p className="font-semibold">
                    Porque o Andromeda vai mostrar seus anúncios para pessoas DIFERENTES.
                  </p>
                  <ul className="space-y-2">
                    {pillar.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#B8860B] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {pillar.footer && (
                    <p className="mt-4">{pillar.footer}</p>
                  )}
                </div>
              )}

              {pillar.triggers && (
                <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6 mt-6">
                  <p className="font-semibold mb-3">Gatilhos de SA:</p>
                  <div className="space-y-2">
                    {pillar.triggers.map((trigger, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[#B8860B]">✓</span>
                        <span>{trigger}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {pillar.example && (
                <div className="bg-[rgba(0,0,0,0.3)] border-l-4 border-[#B8860B] rounded p-6 mt-6 italic text-base text-[rgba(243,239,224,0.9)]">
                  {pillar.example}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Conclusão */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[rgba(184,134,11,0.1)] to-[rgba(184,134,11,0.05)] border-2 border-[#B8860B] rounded-xl p-16 max-w-4xl mx-auto mt-20 text-center"
        >
          <p className="text-2xl font-semibold text-[#F3EFE0] mb-4">
            Quando você combina os 3 pilares...
          </p>
          <p className="text-4xl font-black text-[#B8860B]">
            Você cria anúncios que o Andromeda AMA distribuir.
          </p>
        </motion.div>

        {/* Parágrafo final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl max-w-3xl mx-auto mt-16 space-y-4"
        >
          <p>Mas aqui está o problema:</p>
          <p>Saber o framework não é o suficiente.</p>
          <p className="font-bold">Você precisa saber COMO aplicar na prática.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section6Framework;
