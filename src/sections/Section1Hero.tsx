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

      <div className="max-w-content mx-auto flex flex-col items-center text-center relative z-10">
        {/* Headline principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider-xl leading-tight mb-6">
          Seus anúncios pararam de funcionar?
          <br />
          <span className="text-[#FF5C00]">O problema não é o tráfego, é o que o seu cliente está vendo.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl font-light text-[#F3EFE0] max-w-4xl leading-relaxed mb-8">
          O algoritmo mudou e os criativos amadores de 6 meses atrás agora são ignorados.
          Descubra como produzir os únicos anúncios que o algoritmo prioriza e escala em 2025/2026.
        </p>

        {/* Imagem Hero */}
        <div className="w-full max-w-[800px] mx-auto my-8 md:my-12 image-glass-container">
          <img
            src="/assets/sessao_1.png"
            alt="Dashboard de anúncios com métricas em queda"
            className="w-full rounded-lg"
            loading="eager"
            width="800"
            height="500"
          />
        </div>

        {/* CTA primário */}
        <div className="mt-6 md:mt-10">
          <CTAButton onClick={scrollToNextSection}>
            🔽 QUERO ENTENDER O QUE ACONTECEU
          </CTAButton>
        </div>

        {/* Scroll indicator - visível apenas no mobile */}
        <div className="mt-8 md:hidden cursor-pointer" onClick={scrollToNextSection}>
          <div className="text-[#FF5C00] text-4xl animate-bounce">
            ↓
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1Hero;
