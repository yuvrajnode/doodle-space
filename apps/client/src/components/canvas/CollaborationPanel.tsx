"use client";
import { APP_URL } from '@/config';
import useSocket from '@/hooks/useSocket';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Check, Copy, X, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';
import { useParticipantStore } from '@/store/usePaticipantStore';

interface CollaborationPanelProps {
  isVisible: boolean;
  onClose: () => void;
}

export function CollaborationPanel({ isVisible, onClose }: CollaborationPanelProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { leaveRoom } = useSocket();
  const pathname = usePathname();
  const roomLink = `${APP_URL}${pathname}`;
  const { participants } = useParticipantStore();

  function getRoomIdFromLink() {
    try {
      const url = new URL(roomLink.trim());
      const parts = url.pathname.split('/').filter(Boolean);
      return parts[parts.length - 1];
    } catch {
      return undefined;
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(roomLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error('Failed to copy link');
    }
  };

  if (!isVisible) return null;

  const colors = ['#00f0ff', '#7b61ff', '#ff3dff', '#4ade80', '#f97316', '#f43f5e'];

  return (
    <div className="z-10 absolute right-20 bottom-20 sm:right-24 glass-strong rounded-2xl shadow-2xl p-5 w-56 sm:w-72 transition-all duration-200">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
      >
        <X className="w-4 h-4 text-white/40" />
      </button>

      <div className="mb-5">
        <h3 className="font-semibold text-white mb-1">
          Participants
          <span className="ml-2 text-xs text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded-full">
            {participants.length}
          </span>
        </h3>
        <div className="flex flex-col gap-1 max-h-36 overflow-y-auto mt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {participants.map((user, idx) => (
            <div
              key={user.id}
              className="flex items-center gap-2.5 text-white/70 py-1.5 px-2 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-black"
                style={{ backgroundColor: colors[idx % colors.length] }}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h3 className="font-semibold text-white text-sm mb-2">Invite Others</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={roomLink}
            className="futuristic-input text-xs flex-1 py-2"
          />
          <button
            onClick={copyToClipboard}
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-white/50" />}
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          const roomId = getRoomIdFromLink();
          if (roomId) {
            leaveRoom(roomId);
          } else {
            toast.error("Invalid room link.");
          }
        }}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm text-white/70 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/30 hover:text-white transition-all cursor-pointer"
      >
        <LogOut className="w-3.5 h-3.5" />
        Leave Room
      </button>
    </div>
  );
}
