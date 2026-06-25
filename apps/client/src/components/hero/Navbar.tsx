import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex justify-between items-center relative">
      <Link href="/">
        <div className="text-2xl sm:text-3xl">
          ძထძℓ౿
          <span className="px-1.5 py-0.5 text-[#00f0ff] glow-text-cyan">ᦓραс౿</span>
        </div>
      </Link>

      <div className="pl-10 lg:flex lg:gap-10 xl:gap-16 justify-center items-center text-lg z-10 hidden">
        <Link href="/" className="text-white/50 hover:text-[#00f0ff] transition-colors duration-200">
          Home
        </Link>
        <Link href="#demo" className="text-white/50 hover:text-[#00f0ff] transition-colors duration-200">
          How it works
        </Link>
        <Link href="#features" className="text-white/50 hover:text-[#00f0ff] transition-colors duration-200">
          Features
        </Link>
      </div>

      <div className="lg:flex lg:gap-6 xl:gap-8 justify-center items-center text-lg hidden">
        <Link
          href="/canvas"
          className="text-white/50 hover:text-white transition-colors duration-200"
        >
          Draw Solo
        </Link>
        <Link
          href="/signup"
          className="futuristic-btn px-6 py-2 text-base rounded-xl"
        >
          Sign up
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <div className="lg:hidden flex">
        <button onClick={() => setIsOpen(prev => !prev)} className="text-white/60 hover:text-white transition-colors cursor-pointer">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="glass-strong rounded-2xl p-6 absolute top-14 right-0 w-64 z-50">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-white/70 hover:text-[#00f0ff] transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#demo" className="text-white/70 hover:text-[#00f0ff] transition-colors" onClick={() => setIsOpen(false)}>
              How it works
            </Link>
            <Link href="#features" className="text-white/70 hover:text-[#00f0ff] transition-colors" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="/canvas" className="text-white/70 hover:text-[#00f0ff] transition-colors" onClick={() => setIsOpen(false)}>
              Draw Solo
            </Link>
            <div className="pt-2 border-t border-white/[0.06]">
              <button
                className="futuristic-btn w-full py-2.5 text-base rounded-xl"
                onClick={() => { router.push('/signup'); setIsOpen(false); }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
