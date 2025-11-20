import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';

const Section5Revelation = () => {
  const badges = [
    { emoji: '📊', number: '+10 ANOS', label: 'Marketing Digital' },
    { emoji: '💰', number: '+R$45 MI', label: 'Gerenciados' },
    { emoji: '🎓', number: 'UNICAMP', label: 'Físico' }
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
          className="text-3xl md:text-5xl font-black tracking-wider-xl text-center mb-10 md:mb-16 leading-tight"
        >
          Depois De 10 Anos Gerenciando R$45 Milhões Em Tráfego...
          <br />
          <span className="text-[#FF5C00]">
            Eu Descobri O Método Dos Anúncios Inteligentes.
          </span>
        </motion.h2>

        {/* Foto Paulo Berto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] mx-auto mb-10 md:mb-16 image-glass-container"
        >
          <img
            src="/assets/sessao_5.png"
            alt="Paulo Berto - Especialista em Tráfego Pago"
            className="w-full h-full rounded-xl object-cover"
            loading="lazy"
            width="400"
            height="400"
          />
        </motion.div>

        {/* Badges de credenciais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 md:mb-16"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-lg p-8 text-center shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.1),inset_2px_2px_6px_rgba(0,0,0,0.2),0_6px_24px_rgba(0,0,0,0.3)] hover:border-[#FF5C00]/40 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{badge.emoji}</div>
              <div className="text-3xl font-black text-[#FF5C00] mb-2">
                {badge.number}
              </div>
              <div className="text-base text-[#F3EFE0]">{badge.label}</div>
            </div>
          ))}
        </motion.div>

        {/* História */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6 text-xl leading-relaxed text-[#F3EFE0]"
        >
          <p>Meu nome é Paulo Berto.</p>
          <p>E eu trabalho com anúncios desde 2014.</p>
          <p>
            Nos últimos 10 anos, eu gerenciei mais de R$45 milhões em tráfego pago
            para centenas de negócios diferentes.
          </p>
          <p>Eu já vi de tudo:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Campanhas que faturaram milhões</li>
            <li>Campanhas que queimaram orçamentos inteiros</li>
            <li>Anúncios que viralizaram</li>
            <li>Anúncios que ninguém clicou</li>
          </ul>

          <p className="pt-6">
            E durante todo esse tempo, eu me fiz uma pergunta que parecia absurda:
          </p>

          <p className="italic text-[#FF5C00] font-semibold text-2xl text-center py-6">
            "Será que existe uma forma de criar anúncios que conversem
            com TODAS as pessoas?"
          </p>

          <p className="opacity-80">
            Eu sei, eu sei... isso vai contra TUDO que o marketing ensina.
          </p>

          <div className="italic opacity-80 text-lg space-y-2 ml-8">
            <p>"Seja específico."</p>
            <p>"Fale com uma pessoa."</p>
            <p>"Quanto mais nichado, melhor."</p>
          </div>

          <p>Mas eu continuei obcecado por essa pergunta.</p>

          <p className="pt-4">
            E ao longo dos anos, estudando copywriting, comportamento humano,
            psicologia das redes sociais, e observando MILHÕES de impressões...
          </p>

          <p className="font-bold text-2xl text-center text-[#FF5C00]">
            Eu cheguei em uma resposta.
          </p>
        </motion.div>

        {/* Box de revelação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-[#FF5C00]/10 border-l-4 border-[#FF5C00] rounded p-6 md:p-10 max-w-3xl mx-auto my-10 md:my-16 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.2),0_6px_24px_rgba(0,0,0,0.2)]"
        >
          <p className="text-2xl font-semibold leading-relaxed mb-6">
            Não, você não consegue criar UM anúncio que conversa com todo mundo.
          </p>
          <p className="text-2xl font-semibold leading-relaxed">
            Mas você consegue criar um <span className="text-[#FF5C00] font-black">CONJUNTO</span> de anúncios que,
            trabalhando juntos, conversam com o <span className="text-[#FF5C00] font-black">MAIOR NÚMERO DE PESSOAS POSSÍVEL</span>.
          </p>
          <p className="text-xl mt-8">E em 2021, eu estruturei esse método.</p>
          <p className="text-3xl font-black text-[#FF5C00] mt-4">
            Eu chamo ele de Método EM-SA®.
          </p>
        </motion.div>

        {/* Revelação sobre Andromeda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl max-w-3xl mx-auto space-y-6 mb-10 md:mb-16"
        >
          <p>E aqui está o mais interessante:</p>
          <p>Eu não criei esse método pensando no Andromeda (ele nem existia ainda).</p>
          <p className="font-bold">Eu criei pensando em PESSOAS.</p>
        </motion.div>

        {/* Statement chave */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/5 border-2 border-[#FF5C00]/40 rounded-lg p-10 md:p-16 max-w-3xl mx-auto text-center mb-10 md:mb-16 shadow-[inset_-3px_-3px_10px_rgba(255,255,255,0.1),inset_3px_3px_10px_rgba(0,0,0,0.2),0_10px_40px_rgba(184,134,11,0.2)]"
        >
          <p className="text-4xl font-black">
            👉 <span className="text-[#F3EFE0]">Algoritmos mudam.</span>{' '}
            <span className="text-[#FF5C00]">Pessoas não.</span>
          </p>
        </motion.div>

        {/* A virada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl max-w-3xl mx-auto space-y-6"
        >
          <p>E então...</p>
          <p>Em novembro de 2024, a Meta lançou o Andromeda.</p>
          <p>E sabe o que aconteceu?</p>
          <p>
            O meu método, que já funcionava bem antes,
            começou a funcionar <span className="text-[#FF5C00] font-black text-2xl">AINDA MELHOR</span>.
          </p>
          <p className="pt-6 font-bold">Por quê?</p>
          <p>
            Porque o Andromeda fez exatamente o que eu já vinha fazendo desde 2021:
          </p>
          <p className="font-semibold">
            Ele começou a distribuir anúncios baseado no comportamento das pessoas.
          </p>
          <p className="pt-6">
            E como eu já estava criando anúncios baseados em
            comportamento humano há 3 anos...
          </p>
          <p className="font-bold">
            ...meus anúncios se encaixaram PERFEITAMENTE com o novo sistema.
          </p>
          <p className="italic">
            Foi como se a Meta tivesse finalmente alcançado o que eu já estava fazendo.
          </p>

          <div className="pt-12">
            <p className="text-3xl font-black text-[#FF5C00]">
              Esse é o Método dos Anúncios Inteligentes.
            </p>
            <p className="text-3xl font-black text-[#FF5C00] mt-2">
              O Método EM-SA®.
            </p>
          </div>
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
            🚀 QUERO APLICAR O MÉTODO EM-SA® NAS MINHAS CAMPANHAS
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Section5Revelation;
