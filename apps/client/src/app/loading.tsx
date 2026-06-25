export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center animated-gradient relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00f0ff] opacity-[0.04] blur-[150px] rounded-full" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-white/[0.06]" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00f0ff] animate-spin" />
        </div>
        <div className="text-2xl">
          ძထძℓ౿
          <span className="px-1.5 py-0.5 text-[#00f0ff]">ᦓραс౿</span>
        </div>
      </div>
    </div>
  );
}
