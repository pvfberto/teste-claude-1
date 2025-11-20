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
        gradient-gold-animated shimmer-effect font-black text-white rounded-lg
        cursor-pointer border-none transition-all duration-300
        hover:brightness-110
        active:brightness-90
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
