import Link from "next/link";
import { ArrowLeft, Gamepad2 } from "lucide-react";

export default function Play() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 animated-gradient relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ff3dff] opacity-[0.04] blur-[150px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <Gamepad2 className="w-10 h-10 text-[#7b61ff]/60" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Coming Soon
        </h1>

        <p className="max-w-md text-lg text-white/35 leading-relaxed">
          Drawing games and challenges are on the way. Stay tuned for multiplayer fun!
        </p>

        <Link
          href="/draw-mode"
          className="mt-4 flex items-center gap-2 text-white/40 hover:text-[#00f0ff] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
