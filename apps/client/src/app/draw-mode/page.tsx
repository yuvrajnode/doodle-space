"use client";

import ProtectedRoute from "@/components/guards/ProtectedRoute";
import SelectMode from "@/components/draw-mode/selectMode";
import { useUserStore } from "@/store/useUserStore";
import { useState } from "react";
import JoinRoom from "@/components/draw-mode/joinRoom";
import CreateRoom from "@/components/draw-mode/createRoom";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DrawModePage() {
  const user = useUserStore((s) => s.user);
  const [joinRoom, setJoinRoom] = useState(false);
  const [createRoom, setCreateRoom] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    useUserStore.getState().clearUser();
    router.push('/signin');
  };

  return (
    <ProtectedRoute>
      <div className="relative min-h-screen animated-gradient overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#00f0ff] opacity-[0.04] blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#7b61ff] opacity-[0.04] blur-[150px] rounded-full" />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 px-5 lg:px-16 py-6 min-h-screen flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="text-2xl sm:text-3xl">
                ძთძℓ౿
                <span className="px-1.5 py-0.5 text-[#00f0ff] glow-text-cyan">ᦓραс౿</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/40 hover:text-white/70 hover:bg-white/[0.04] transition-all duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Logout</span>
              </button>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#7b61ff] text-black text-lg font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex justify-center items-center flex-col -mt-10">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                What would you like to do?
              </h1>
              <p className="text-white/35 text-lg">
                Choose a mode to get started
              </p>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-10 w-full max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                <SelectMode type="draw" href="/canvas" />
                <SelectMode type="join" onClick={() => setJoinRoom(true)} />
                <SelectMode type="create" onClick={() => setCreateRoom(true)} />
              </div>
            </div>
          </div>
        </div>

        {joinRoom && <JoinRoom setJoinRoom={setJoinRoom} />}
        {createRoom && <CreateRoom setCreateRoom={setCreateRoom} />}
      </div>
    </ProtectedRoute>
  );
}
