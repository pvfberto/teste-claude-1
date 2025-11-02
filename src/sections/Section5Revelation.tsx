import { motion } from 'framer-motion';

const Section5Revelation = () => {
  const badges = [
    { emoji: '📊', number: '+10 ANOS', label: 'Marketing Digital' },
    { emoji: '💰', number: '+R$45 MI', label: 'Gerenciados' },
    { emoji: '🎓', number: 'UNICAMP', label: 'Físico' }
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
          className="text-3xl md:text-5xl font-black tracking-wider-xl text-center mb-16 leading-tight"
        >
          Depois De 10 Anos Gerenciando R$45 Milhões Em Tráfego...
          <br />
          <span className="text-[#B8860B]">
            Eu Descobri O Método Dos Anúncios Inteligentes.
          </span>
        </motion.h2>

        {/* Foto Paulo Berto */}
        <motion.img
          src="/assets/sessao_5.png"
          alt="Paulo Berto - Especialista em Tráfego Pago"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full mx-auto mb-16 border-2 border-[#B8860B] shadow-[0_0_30px_rgba(184,134,11,0.3)] object-cover"
          loading="lazy"
        />

        {/* Badges de credenciais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-[#191919] border border-[rgba(184,134,11,0.3)] rounded-lg p-8 text-center hover:border-[#B8860B] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{badge.emoji}</div>
              <div className="text-3xl font-black text-[#B8860B] mb-2">
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

          <p className="italic text-[#B8860B] font-semibold text-2xl text-center py-6">
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

          <p className="font-bold text-2xl text-center text-[#B8860B]">
            Eu cheguei em uma resposta.
          </p>
        </motion.div>

        {/* Box de revelação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[rgba(184,134,11,0.1)] border-l-4 border-[#B8860B] rounded p-10 max-w-3xl mx-auto my-16"
        >
          <p className="text-2xl font-semibold leading-relaxed mb-6">
            Não, você não consegue criar UM anúncio que conversa com todo mundo.
          </p>
          <p className="text-2xl font-semibold leading-relaxed">
            Mas você consegue criar um <span className="text-[#B8860B] font-black">CONJUNTO</span> de anúncios que,
            trabalhando juntos, conversam com o <span className="text-[#B8860B] font-black">MAIOR NÚMERO DE PESSOAS POSSÍVEL</span>.
          </p>
          <p className="text-xl mt-8">E em 2021, eu estruturei esse método.</p>
          <p className="text-3xl font-black text-[#B8860B] mt-4">
            Eu chamo ele de Framework EM-SA.
          </p>
        </motion.div>

        {/* Revelação sobre Andromeda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl max-w-3xl mx-auto space-y-6 mb-16"
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
          className="bg-[#191919] border-2 border-[#B8860B] rounded-lg p-16 max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-4xl font-black">
            👉 <span className="text-[#F3EFE0]">Algoritmos mudam.</span>{' '}
            <span className="text-[#B8860B]">Pessoas não.</span>
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
            começou a funcionar <span className="text-[#B8860B] font-black text-2xl">AINDA MELHOR</span>.
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
            <p className="text-3xl font-black text-[#B8860B]">
              Esse é o Método dos Anúncios Inteligentes.
            </p>
            <p className="text-3xl font-black text-[#B8860B] mt-2">
              O Framework EM-SA.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section5Revelation;
