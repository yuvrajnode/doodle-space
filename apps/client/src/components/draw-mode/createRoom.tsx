import { useState } from "react";
import Button from "../forms/button";
import Input from "../forms/input";
import { X, Copy, Check, Sparkles } from "lucide-react";
import { nanoid } from "nanoid";
import { createRoom } from "@/api/room";
import toast from "react-hot-toast";
import useSocket from "@/hooks/useSocket";

export default function CreateRoom({ setCreateRoom }: { setCreateRoom: (v: boolean) => void }) {
  const [roomLink, setRoomLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isRoomCreated, setIsRoomCreated] = useState(false);
  const [loader, setLoader] = useState(false);
  const { joinRoom } = useSocket();

  const generateRoomLink = async () => {
    try {
      setLoader(true);
      const roomId = nanoid(15);
      const link = `${window.location.origin}/canvas/room/${roomId}`;
      setRoomLink(link);
      await createRoom({ linkId: roomId });
      toast.success("Room created!");
      setIsRoomCreated(true);
    } catch (error: any) {
      toast.error(error.message || "Failed to create room.");
    } finally {
      setLoader(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(roomLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-black/60 backdrop-blur-sm"
      onClick={() => setCreateRoom(false)}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <div className="glass-strong rounded-2xl p-6 sm:p-8 w-80 sm:w-[420px] min-h-72">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Create Room</h2>
            <button
              onClick={() => setCreateRoom(false)}
              className="p-2 rounded-xl hover:bg-white/[0.06] transition-colors"
            >
              <X className="text-white/50 w-5 h-5" />
            </button>
          </div>

          {isRoomCreated ? (
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-end">
                <div className="flex-1">
                  <Input
                    label="Room Link"
                    value={roomLink}
                    readOnly
                    className="w-full text-sm"
                  />
                </div>
                <button
                  onClick={copyToClipboard}
                  className="mb-0.5 p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] transition-colors"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-white/60" />}
                </button>
              </div>

              <div className="text-white/30 text-sm bg-white/[0.02] p-3 rounded-xl border border-white/[0.06]">
                Share this link to invite others to your room.
              </div>

              <Button
                onClick={() => {
                  const roomId = roomLink.split('/').pop() || '';
                  joinRoom(roomId);
                }}
              >
                Join Room
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <p className="text-white/40 leading-relaxed">
                Generate a unique room link that you can share with collaborators.
              </p>
              <Button onClick={generateRoomLink} disabled={loader}>
                {loader ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Generate Room Link
                  </span>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
