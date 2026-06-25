"use client";
import { useRouter } from "next/navigation";

export const CTA = () => {
  const router = useRouter();
  return (
    <div className="w-full px-0.5 xl:px-5 2xl:px-40 mt-20">
      <div className="relative rounded-3xl overflow-hidden glass">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(circle at 5px 5px, rgba(0, 240, 255, 0.06) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            backgroundPosition: "center",
            backgroundRepeat: "repeat"
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00f0ff] opacity-[0.04] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#7b61ff] opacity-[0.04] blur-[120px] rounded-full" />

        <section className="relative z-10 flex flex-col items-center justify-center py-20 sm:py-24 w-full max-w-2xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center leading-tight">
            Ready to Start Doodling?
          </h2>

          <p className="mb-8 text-sm sm:text-lg text-center text-white/35 max-w-md leading-relaxed">
            Experience real-time drawing with friends on a limitless canvas. No barriers, just creativity.
          </p>

          <button
            onClick={() => router.push('/signin')}
            className="futuristic-btn px-10 sm:px-14 py-3 text-lg rounded-full"
          >
            Start Drawing for Free
          </button>
        </section>
      </div>
    </div>
  );
}
