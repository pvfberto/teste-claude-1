import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';

const Section1Hero = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black px-6 md:px-20 py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-content mx-auto flex flex-col items-center text-center"
      >
        {/* Logo/Marca */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-8 left-8 text-[#B8860B] font-black text-xl md:text-2xl tracking-wider-xl"
        >
          TOTAL ADS 360º
        </motion.div>

        {/* Headline principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider-xl leading-tight mb-6"
        >
          SEUS ANÚNCIOS ESTAVAM FUNCIONANDO...
          <br />
          <span className="text-[#B8860B]">ATÉ QUE PARARAM DE FUNCIONAR.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-2xl font-light text-[#F3EFE0] max-w-4xl leading-relaxed mb-8"
        >
          E agora você passa os dias testando criativos, mudando públicos,
          ajustando orçamentos... mas nada parece dar resultado como antes.
        </motion.p>

        {/* Imagem Hero */}
        <motion.img
          src="/assets/sessao_1.png"
          alt="Dashboard de anúncios com métricas em queda"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-full max-w-[800px] mx-auto my-12 rounded-lg shadow-2xl"
          loading="eager"
        />

        {/* CTA primário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10"
        >
          <CTAButton onClick={() => window.location.href = '#oferta'}>
            🚀 DESCOBRIR O MÉTODO AGORA
          </CTAButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <div className="text-[#B8860B] text-4xl animate-bounce">
            ↓
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section1Hero;
