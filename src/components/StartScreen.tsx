interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-[#05040d] text-slate-100">
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-extrabold text-cyan-300 mb-2 tracking-tight">Bingo Mixer</h1>
        <p className="text-lg text-slate-300 mb-8">Find your people in the neon grid.</p>
        
        <div className="bg-[#0f1024] border border-cyan-500/20 rounded-3xl p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)] mb-8">
          <h2 className="font-semibold text-slate-100 mb-3">How to play</h2>
          <ul className="text-left text-slate-300 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-cyan-400/95 text-slate-950 font-semibold py-4 px-8 rounded-3xl text-lg shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-300 transition-colors"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
