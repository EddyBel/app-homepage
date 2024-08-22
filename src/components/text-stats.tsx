import { formatterAmount } from '../utils/amount';

interface TextStatsProps {
  label?: string;
  value?: number;
}

export function TextStats({ label, value }: TextStatsProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-white/90 text-xl">{label || 'Income'}</span>
      <span className="text-white text-3xl font-bold">{formatterAmount(value || 200)}</span>
    </div>
  );
}
