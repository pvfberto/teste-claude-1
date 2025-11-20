import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';

const Section6Framework = () => {
  const pillars = [
    {
      icon: '🎯',
      title: 'Estímulo',
      subtitle: 'O que faz parar de scrollar',
      description: `É o "Gancho" do anúncio.

É o que faz a pessoa Parar de scrollar e prestar atenção.

O Estímulo pode ser visual (uma imagem forte, um vídeo impactante) ou textual (uma frase que corta a respiração).`,
      example: `Exemplo: Um gestor de tráfego vê um anúncio que diz: "Seus anúncios estavam funcionando... até que pararam de funcionar."

➡️ Ele para. Porque é Exatamente o que ele está sentindo.`
    },
    {
      icon: '💬',
      title: 'Mensagem',
      subtitle: 'O conteúdo que ressoa',
      description: `É o Conteúdo do anúncio.

É onde você articula a dor, revela a solução, faz promessas, mostra provas.

Mas aqui está o segredo: a Mensagem precisa variar.`,
      list: [
        'Algumas pessoas precisam de dados e lógica',
        'Outras precisam de emoção e histórias',
        'Outras precisam de prova social e urgência'
      ],
      footer: 'Um anúncio só não dá conta de tudo isso. Por isso você cria Variações de mensagens dentro do mesmo framework.'
    },
    {
      icon: '🚀',
      title: 'SA',
      subtitle: 'O empurrãozinho final',
      description: `É o gatilho emocional ou psicológico que faz a pessoa Clicar Agora.

Pode ser urgência, escassez, medo de perder, desejo de pertencimento, prova social, garantia...

O SA é o que transforma "interesse" em "ação".`
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
          className="text-5xl md:text-6xl font-black tracking-wider-2xl text-center mb-8 md:mb-12"
        >
          EM-SA Significa:
        </motion.h2>

        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="text-3xl font-bold text-[#FF5C00] space-y-4">
            <p>E = Estímulo</p>
            <p>M = Mensagem</p>
            <p>SA = Sentimento que Acelera a Ação</p>
          </div>
        </motion.div>

        {/* Diagrama */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto my-10 md:my-16 image-glass-container"
        >
          <img
            src="/assets/sessao_6.png"
            alt="Framework EM-SA - Estímulo, Mensagem, Sentimento que Acelera"
            className="w-full rounded-lg"
            loading="lazy"
            width="1200"
            height="700"
          />
        </motion.div>

        {/* 3 Pilares */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-10 md:mt-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl p-6 md:p-8 shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[inset_-2px_-2px_10px_rgba(255,255,255,0.15),inset_2px_2px_10px_rgba(0,0,0,0.25),0_12px_40px_rgba(184,134,11,0.25)] transition-all duration-500"
            >
              <div className="text-6xl mb-6">{pillar.icon}</div>
              <h3 className="text-3xl font-black text-[#FF5C00] mb-4">
                {pillar.title}
              </h3>
              <p className="text-xl font-semibold mb-6">{pillar.subtitle}</p>
              <p className="text-lg leading-relaxed text-[#F3EFE0] whitespace-pre-line mb-6">
                {pillar.description}
              </p>

              {pillar.list && (
                <div className="space-y-3 text-lg leading-relaxed mb-6">
                  <p className="font-semibold">
                    Porque o Andromeda vai mostrar seus anúncios para pessoas Diferentes.
                  </p>
                  <ul className="space-y-2">
                    {pillar.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#FF5C00] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {pillar.footer && (
                    <p className="mt-4">{pillar.footer}</p>
                  )}
                </div>
              )}

              {pillar.example && (
                <div className="backdrop-blur-md bg-black/20 border-l-4 border-[#FF5C00] rounded p-6 mt-6 italic text-base text-[rgba(243,239,224,0.9)] shadow-[inset_1px_1px_4px_rgba(0,0,0,0.3)]">
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
          className="backdrop-blur-lg bg-gradient-to-br from-[#FF5C00]/15 to-[#FF5C00]/5 border-2 border-[#FF5C00]/30 rounded-xl p-10 md:p-16 max-w-4xl mx-auto mt-10 md:mt-16 text-center shadow-[inset_-3px_-3px_10px_rgba(255,255,255,0.1),inset_3px_3px_10px_rgba(0,0,0,0.2),0_10px_40px_rgba(184,134,11,0.2)]"
        >
          <p className="text-2xl font-semibold text-[#F3EFE0] mb-4">
            Quando você combina os 3 pilares...
          </p>
          <p className="text-4xl font-black text-[#FF5C00]">
            Você cria anúncios que o Andromeda AMA distribuir.
          </p>
        </motion.div>

        {/* Parágrafo final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl max-w-3xl mx-auto mt-8 md:mt-16 space-y-4"
        >
          <p>Mas aqui está o problema:</p>
          <p>Saber o framework não é o suficiente.</p>
          <p className="font-bold">Você precisa saber COMO aplicar na prática.</p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-8 md:mt-16"
        >
          <CTAButton onClick={() => window.location.href = '#oferta'}>
            🚀 QUERO FAZER ANÚNCIOS QUE O ANDROMEDA AMA!
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Section6Framework;
