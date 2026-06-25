import Link from "next/link";
import { Pencil, Users, Plus, Gamepad2 } from "lucide-react";

const Draw = () => <Pencil className="w-6 h-6 text-[#00f0ff]" />;
const Join = () => <Users className="w-6 h-6 text-[#4ade80]" />;
const Create = () => <Plus className="w-6 h-6 text-[#7b61ff]" />;
const Play = () => <Gamepad2 className="w-6 h-6 text-[#f97316]" />;

export const modes = {
  draw: {
    text: "Draw Solo",
    description: "Personal canvas with full creative freedom",
    color: "text-[#00f0ff]",
    glowColor: "rgba(0, 240, 255, 0.15)",
    borderHover: "hover:border-[#00f0ff]/30",
    Icon: Draw,
  },
  join: {
    text: "Join Room",
    description: "Collaborate in real-time with others",
    color: "text-[#4ade80]",
    glowColor: "rgba(74, 222, 128, 0.15)",
    borderHover: "hover:border-[#4ade80]/30",
    Icon: Join,
  },
  create: {
    text: "Create Room",
    description: "Start a new collaborative space",
    color: "text-[#7b61ff]",
    glowColor: "rgba(123, 97, 255, 0.15)",
    borderHover: "hover:border-[#7b61ff]/30",
    Icon: Create,
  },
  play: {
    text: "Play Game",
    description: "Fun drawing challenges",
    color: "text-[#f97316]",
    glowColor: "rgba(249, 115, 22, 0.15)",
    borderHover: "hover:border-[#f97316]/30",
    Icon: Play,
  },
};

interface SelectModeProps {
  type: keyof typeof modes;
  href?: string;
  onClick?: () => void;
}

export default function SelectMode({ type, href = "", onClick }: SelectModeProps) {
  const mode = modes[type];
  const IconComponent = mode.Icon;

  const isNavigation = type === "draw" || type === "play";

  const content = (
    <div
      className={`group relative flex flex-col items-center p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] ${mode.borderHover} cursor-pointer`}
      style={{
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${mode.glowColor}, inset 0 0 30px ${mode.glowColor}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className={`w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent />
      </div>
      <span className={`text-xl font-semibold text-white mb-2 group-hover:${mode.color} transition-colors`}>
        {mode.text}
      </span>
      <span className="text-white/35 text-sm text-center leading-relaxed">
        {mode.description}
      </span>
    </div>
  );

  if (isNavigation) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className="text-left" onClick={onClick}>
      {content}
    </button>
  );
}
