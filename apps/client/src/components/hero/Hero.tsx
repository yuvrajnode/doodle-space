"use client";

import Navbar from "./Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Background from "./Background";
import Grid from "./Grid";
import Video from "./Video";
import { Features } from "./Features";
import { CTA } from "./Cta";
import { Footer } from "./Footer";
import { AnimateScroll } from "./AnimateScroll";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center">
        <Background />
      </div>
      <div className="w-full min-h-screen 2xl:px-40 xl:px-32 lg:px-14 md:px-8 sm:px-6 sm:py-6 py-4 animated-gradient relative">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10">
          <div className="py-6 px-6 md:px-10 lg:px-6 xl:px-10 sm:border-x sm:border-white/[0.06] sm:border-dashed">
            <Navbar />
            <div className="flex flex-col justify-center items-center">
              <AnimateScroll delay={100}>
                <div className="flex flex-col justify-center items-center">
                  <div className="mt-20 flex justify-center items-center">
                    <div className="py-1.5 rounded-full glass flex items-center px-1.5 gap-1.5 sm:gap-2">
                      <div className="bg-gradient-to-r from-[#00f0ff] to-[#7b61ff] rounded-full px-3 sm:px-5 py-1 font-semibold text-black text-sm">
                        <Sparkles className="w-3.5 h-3.5 inline mr-1" />
                        Draw
                      </div>
                      <div className="text-sm sm:text-base text-white/60">Your infinite canvas awaits</div>
                      <Link
                        href="/canvas"
                        className="hover:bg-[#00f0ff]/20 rounded-full p-1.5 transition-all duration-300 text-white/60 hover:text-[#00f0ff]"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 mt-14">
                    <h1 className="2xl:w-6xl text-4xl sm:text-5xl md:text-6xl text-center tracking-wider leading-14 sm:leading-24 xl:px-0 lg:px-8 md:px-6 font-bold">
                      Every <span className="text-[#00f0ff] glow-text-cyan">ძთძℓ౿</span> begins with a
                      spark illuminating creativity
                    </h1>
                    <p className="text-lg xl:text-xl md:w-2xl lg:w-3xl text-center text-white/40 leading-relaxed">
                      Let your doodles turn into memories! Create shapes effortlessly
                      or just have fun — Doodle Space is your boundless space to
                      create and grow
                    </p>
                    <button
                      className="futuristic-btn px-10 sm:px-16 py-3 text-xl mt-10 rounded-full"
                      onClick={() => router.push("/signin")}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </AnimateScroll>
              <AnimateScroll delay={100}>
                <Grid />
              </AnimateScroll>
              <AnimateScroll delay={100}>
                <Video />
              </AnimateScroll>
              <AnimateScroll delay={100}>
                <Features />
              </AnimateScroll>
              <AnimateScroll delay={100}>
                <CTA />
              </AnimateScroll>
              <AnimateScroll delay={100}>
                <Footer />
              </AnimateScroll>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
