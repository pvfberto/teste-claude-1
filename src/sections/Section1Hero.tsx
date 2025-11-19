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
        transition={{ duration: 1 }}
        className="max-w-content mx-auto flex flex-col items-center text-center relative z-10"
      >
        {/* Headline principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider-xl leading-tight mb-6"
        >
          Seus Anúncios estavam funcionando meses atrás...
          <br />
          <span className="text-[#ED2100]">E de repente pararam de funcionar?</span>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-full max-w-[800px] mx-auto my-8 md:my-12 image-glass-container"
        >
          <img
            src="/assets/sessao_1.png"
            alt="Dashboard de anúncios com métricas em queda"
            className="w-full rounded-lg"
            loading="eager"
          />
        </motion.div>

        {/* CTA primário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
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
          transition={{ delay: 1.5 }}
          className="mt-8 md:absolute md:bottom-10 cursor-pointer"
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
