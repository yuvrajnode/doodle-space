import Button from "../forms/button";
import Input from "../forms/input";
import { X, ArrowRight } from "lucide-react";
import useSocket from "@/hooks/useSocket";
import { useState } from "react";
import toast from "react-hot-toast";

export default function JoinRoom({ setJoinRoom }: { setJoinRoom: (v: boolean) => void }) {
  const [link, setLink] = useState("");
  const { joinRoom } = useSocket();

  function getRoomIdFromLink() {
    try {
      const url = new URL(link.trim());
      const parts = url.pathname.split('/').filter(Boolean);
      return parts[parts.length - 1];
    } catch {
      return undefined;
    }
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-black/60 backdrop-blur-sm"
      onClick={() => setJoinRoom(false)}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <div className="glass-strong rounded-2xl p-6 sm:p-8 w-80 sm:w-[420px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Join Room</h2>
            <button
              onClick={() => setJoinRoom(false)}
              className="p-2 rounded-xl hover:bg-white/[0.06] transition-colors"
            >
              <X className="text-white/50 w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <Input
              label="Room Link"
              placeholder="Paste room link here"
              className="w-full"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <Button
              onClick={() => {
                const roomId = getRoomIdFromLink();
                if (roomId) {
                  joinRoom(roomId);
                } else {
                  toast.error("Invalid room link format.");
                }
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Join Room
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
