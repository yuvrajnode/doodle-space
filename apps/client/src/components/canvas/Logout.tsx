import { useUserStore } from "@/store/useUserStore";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  return (
    <div className="absolute bottom-6 left-6">
      <button
        onClick={() => {
          localStorage.removeItem('token');
          useUserStore.getState().clearUser();
          router.push('/signin');
        }}
        className="group flex items-center gap-2.5 rounded-xl glass-strong px-4 py-2.5 text-sm text-white/50 transition-all duration-200 hover:text-white hover:border-red-500/30 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] cursor-pointer"
      >
        <LogOut className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
        <span>Leave</span>
      </button>
    </div>
  );
}
