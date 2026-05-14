import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-[#05040d] text-slate-100">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-[#0c0a1f] border-b border-fuchsia-500/15">
        <button
          onClick={onReset}
          className="text-cyan-300/90 text-sm px-3 py-1.5 rounded-xl border border-cyan-400/20 hover:bg-cyan-400/10 transition-colors"
        >
          ← Back
        </button>
        <h1 className="font-bold text-cyan-200 tracking-tight">Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-slate-400 text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-fuchsia-950/80 text-fuchsia-300 text-center py-2 font-semibold text-sm border border-fuchsia-500/20 mx-3 rounded-2xl shadow-[0_0_25px_rgba(236,72,153,0.18)]">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <div className="w-full max-w-md p-3 rounded-[32px] border border-cyan-500/10 bg-[#07061a]/80 shadow-[inset_0_0_80px_rgba(34,211,238,0.05)]">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
