import { motion } from 'framer-motion';

const Section14Guarantee = () => {
  return (
    <section className="bg-[#111111] px-6 md:px-20 py-12 md:py-24 grain-effect">
      <div className="max-w-content mx-auto">
        {/* Selo de Garantia */}
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.8 }}
          className="w-[200px] h-[200px] mx-auto mb-10 md:mb-16 image-glass-container"
        >
          <img
            src="/assets/sessao_14.png"
            alt="Selo de Garantia Incondicional 15 Dias"
            className="w-full h-full rounded-lg object-contain"
            loading="lazy"
            width="200"
            height="200"
          />
        </motion.div>

        {/* Texto da Garantia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-4xl font-black text-[#FF5C00] mb-8 md:mb-12 tracking-wider">
            ✅ Garantia Incondicional De 15 Dias
          </h3>

          <div className="text-2xl text-[#F3EFE0] leading-relaxed space-y-6">
            <p>Compre agora. Acesse o curso completo.</p>
            <p>Aplique o Método EM-SA®.</p>
            <p className="pt-4">
              Se em 15 dias você não ver que valeu cada centavo,
              <br />
              eu devolvo 100% do seu dinheiro.
            </p>
            <p className="pt-4 font-bold">
              Sem perguntas. Sem burocracia.
              <br />
              Todo o risco é meu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section14Guarantee;
