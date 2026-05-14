import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded-2xl transition-all duration-150 select-none min-h-[60px] text-[10px] leading-tight shadow-[0_0_0_rgba(0,0,0,0)]';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[#1d0f2d] border-fuchsia-500/70 text-fuchsia-200 shadow-[0_0_22px_rgba(236,72,153,0.22)]'
      : 'bg-[#101124] border-cyan-500/30 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.16)]'
    : 'bg-[#0a0818] border-[#2f2b4b] text-slate-300 hover:border-cyan-400/40 hover:text-cyan-100 active:bg-[#14132a]';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm text-cyan-200' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-cyan-200 text-xs">✓</span>
      )}
    </button>
  );
}
