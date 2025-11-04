import { motion } from 'framer-motion';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  large?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  className = '',
  large = false
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        gradient-gold-animated shimmer-effect font-black text-black rounded-lg
        cursor-pointer border-none transition-all duration-300
        shadow-[0_6px_0_rgba(139,105,8,0.8),0_8px_20px_rgba(0,0,0,0.4)]
        hover:shadow-[0_4px_0_rgba(139,105,8,0.8),0_6px_25px_rgba(184,134,11,0.5)]
        hover:translate-y-[2px]
        active:shadow-[0_2px_0_rgba(139,105,8,0.8),0_4px_10px_rgba(0,0,0,0.3)]
        active:translate-y-[4px]
        ${large
          ? 'w-full max-w-[500px] h-20 text-lg md:text-xl px-8'
          : 'px-12 md:px-16 py-4 md:py-5 text-base md:text-lg'
        }
        ${className}
      `}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      aria-label="Call to action button"
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
    </motion.button>
  );
};
