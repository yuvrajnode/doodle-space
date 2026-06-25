import Link from 'next/link';
import { Ghost, Home, PlusCircle } from 'lucide-react';

export default function RoomNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 animated-gradient relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00f0ff] opacity-[0.05] blur-[150px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <Ghost className="h-20 w-20 text-[#00f0ff]/60" />

        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          That Space Has Vanished
        </h1>

        <p className="max-w-md text-lg text-white/35">
          The collaboration room you were looking for doesn&apos;t exist, or the link may be broken.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <Link
            href="/canvas"
            className="futuristic-btn inline-flex w-full items-center justify-center gap-3 px-6 py-3 rounded-xl"
          >
            <Home className="h-5 w-5" />
            Go to Canvas
          </Link>

          <Link
            href="/draw-mode"
            className="group flex w-full items-center justify-center gap-3 rounded-xl glass px-6 py-3 text-white/60 hover:text-[#00f0ff] transition-all duration-200"
          >
            <PlusCircle className="h-5 w-5" />
            Create a Room
          </Link>
        </div>
      </div>
    </div>
  );
}
