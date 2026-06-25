import {
  Arrow,
  Circle,
  Diamond,
  Eraser,
  Pan,
  Line,
  Pencil,
  Rectangle,
  Select,
  Text,
} from "@/icons/icons";
import { useActiveStore } from "@/store/useActiveStore";
import { ToolType } from "@/types/types";
import { ReactNode, useState } from "react";

export function SelectTool() {
  const setActiveTool = useActiveStore((s) => s.setActive);
  function selectedTool(tool: ToolType) {
    setActiveTool(tool);
  }
  return (
    <div className="glass-strong rounded-2xl p-2 sm:p-3 shadow-2xl">
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col gap-1">
          <Tool onClick={() => selectedTool("rectangle")} name="rectangle" toolTip="Rectangle">
            <Rectangle />
          </Tool>
          <Tool onClick={() => selectedTool("circle")} name="circle" toolTip="Circle">
            <Circle />
          </Tool>
          <Tool onClick={() => selectedTool("diamond")} name="diamond" toolTip="Diamond">
            <Diamond />
          </Tool>
          <Tool onClick={() => selectedTool("arrow")} name="arrow" toolTip="Arrow">
            <Arrow />
          </Tool>
        </div>

        <div className="w-full h-px bg-white/[0.06] my-0.5" />

        <div className="flex flex-col gap-1">
          <Tool onClick={() => selectedTool("line")} name="line" toolTip="Line">
            <Line />
          </Tool>
          <Tool onClick={() => selectedTool("pencil")} name="pencil" toolTip="Pencil">
            <Pencil />
          </Tool>
          <Tool onClick={() => selectedTool("text")} name="text" toolTip="Text">
            <Text />
          </Tool>
        </div>

        <div className="w-full h-px bg-white/[0.06] my-0.5" />

        <div className="flex flex-col gap-1">
          <Tool onClick={() => selectedTool("eraser")} name="eraser" toolTip="Eraser">
            <Eraser />
          </Tool>
          <Tool onClick={() => selectedTool("pan")} name="pan" toolTip="Pan">
            <Pan />
          </Tool>
          <Tool onClick={() => selectedTool("select")} name="select" toolTip="Select">
            <Select />
          </Tool>
        </div>
      </div>
    </div>
  );
}

export function Tool({
  children,
  onClick,
  name,
  toolTip,
}: {
  children: ReactNode;
  onClick: () => void;
  name: ToolType;
  toolTip: string;
}) {
  const activeTool = useActiveStore((s) => s.activeTool);
  const [hovered, setHovered] = useState(false);
  const isActive = activeTool === name;

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`relative flex justify-center items-center w-9 h-9 rounded-xl transition-all ease-in-out duration-200 cursor-pointer
        ${isActive
          ? "text-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_12px_rgba(0,240,255,0.15)]"
          : "text-white/60 hover:text-white/90 hover:bg-white/[0.05]"
        }`}
    >
      {children}
      {hovered && (
        <div className="absolute right-12 px-3 py-1.5 rounded-lg bg-[#0a0a1e] border border-white/[0.08] text-white text-xs whitespace-nowrap z-50 shadow-xl">
          {toolTip}
        </div>
      )}
    </button>
  );
}
