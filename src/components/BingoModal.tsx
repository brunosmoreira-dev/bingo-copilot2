interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-[#0b0917]/95 border border-cyan-500/15 rounded-[28px] p-6 max-w-xs w-full text-center shadow-[0_0_70px_rgba(34,211,238,0.18)] animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4 text-cyan-300">🎉</div>
        <h2 className="text-3xl font-bold text-fuchsia-300 mb-2">BINGO!</h2>
        <p className="text-slate-300 mb-6">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-fuchsia-500 text-slate-950 font-semibold py-3 px-6 rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.35)] hover:bg-fuchsia-400 transition-colors"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
