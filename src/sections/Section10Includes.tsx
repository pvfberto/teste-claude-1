import { motion } from 'framer-motion';

const Section10Includes = () => {
  const includes = [
    {
      title: 'O Framework EM-SA Completo',
      description: 'Todo o método explicado em detalhes, com exemplos reais de anúncios que geraram milhões.'
    },
    {
      title: 'Técnicas Práticas de Aplicação',
      description: 'Como aplicar cada pilar (E-M-SA) no seu negócio específico, seja você gestor de tráfego ou empreendedor.'
    },
    {
      title: 'Estratégias de Conjuntos de Anúncios',
      description: 'Como criar variações que trabalham juntas para falar com diferentes perfis psicológicos.'
    },
    {
      title: 'Como Trabalhar COM o Andromeda',
      description: 'As estratégias para fazer o algoritmo distribuir seus anúncios da melhor forma possível.'
    },
    {
      title: 'Acesso Vitalício',
      description: 'Assista quando quiser, quantas vezes quiser, no seu ritmo.'
    },
    {
      title: 'Atualizações Gratuitas',
      description: 'À medida que o mercado evolui, você recebe as atualizações sem pagar nada a mais.'
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
          className="text-4xl md:text-5xl font-black tracking-wider-xl text-center mb-10 md:mb-16"
        >
          O Que Está Incluído:
        </motion.h2>

        {/* Lista em grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {includes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start gap-6"
            >
              <div className="text-4xl text-[#FF5C00] flex-shrink-0">✅</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg leading-relaxed text-[#F3EFE0]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section10Includes;
