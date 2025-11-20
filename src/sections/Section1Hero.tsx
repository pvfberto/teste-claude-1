import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';
import ShaderBackground from '../components/ui/shader-background';

// WebGL Animated Background - v1.0
const Section1Hero = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="md:min-h-screen flex flex-col items-center justify-start md:justify-center px-6 md:px-20 pt-20 pb-16 md:py-20 relative overflow-hidden">
      {/* Background Animado - WebGL Canvas */}
      <ShaderBackground position="absolute" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-content mx-auto flex flex-col items-center text-center relative z-10"
      >
        {/* Headline principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider-xl leading-tight mb-6"
        >
          Seus anúncios pararam de funcionar?
          <br />
          <span className="text-[#FF5C00]">O problema não é o tráfego, é o que o seu cliente está vendo.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-2xl font-light text-[#F3EFE0] max-w-4xl leading-relaxed mb-8"
        >
          O algoritmo mudou e os criativos amadores de 6 meses atrás agora são ignorados.
          Descubra como produzir os únicos anúncios que o algoritmo prioriza e escala em 2025/2026.
        </motion.p>

        {/* Imagem Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-[800px] mx-auto my-8 md:my-12 image-glass-container"
        >
          <img
            src="/assets/sessao_1.png"
            alt="Dashboard de anúncios com métricas em queda"
            className="w-full rounded-lg"
            loading="eager"
            width="800"
            height="500"
          />
        </motion.div>

        {/* CTA primário */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-6 md:mt-10"
        >
          <CTAButton onClick={scrollToNextSection}>
            🔽 QUERO ENTENDER O QUE ACONTECEU
          </CTAButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-8 md:absolute md:bottom-10 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <div className="text-[#FF5C00] text-4xl animate-bounce">
            ↓
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section1Hero;
