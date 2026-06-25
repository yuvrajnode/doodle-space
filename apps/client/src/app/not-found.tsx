import Link from 'next/link';
import { Ghost, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 animated-gradient relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7b61ff] opacity-[0.05] blur-[150px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <Ghost className="h-20 w-20 text-[#00f0ff]/60" />

        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          404 - Page Not Found
        </h1>

        <p className="max-w-md text-lg text-white/35">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="futuristic-btn inline-flex items-center gap-3 px-8 py-3 text-lg rounded-xl"
          >
            <Home className="h-5 w-5" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
