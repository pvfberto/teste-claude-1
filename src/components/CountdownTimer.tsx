import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-black border-2 border-[#FF5C00] rounded-lg p-2 md:p-5 min-w-[60px] md:min-w-[80px] text-center">
        <span className="text-2xl md:text-5xl font-black text-[#FF5C00]">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm mt-1 md:mt-2 text-[#F3EFE0] tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      <TimeBox value={days} label="Dias" />
      <TimeBox value={hours} label="Horas" />
      <TimeBox value={minutes} label="Min" />
      <TimeBox value={seconds} label="Seg" />
    </div>
  );
};
