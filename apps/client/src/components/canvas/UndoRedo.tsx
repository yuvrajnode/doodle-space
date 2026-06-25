import useUndoRedo from "@/hooks/useUndoRedo";
import { Redo, Undo } from "@/icons/icons";

export function UndoRedo() {
  const { undo, redo } = useUndoRedo();

  return (
    <div className="absolute bottom-6 left-6">
      <div className="glass-strong rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center">
          <button
            onClick={() => undo()}
            className="p-2.5 text-white/60 hover:text-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all duration-200 rounded-l-xl cursor-pointer"
            title="Undo — Ctrl+Z"
          >
            <Undo />
          </button>
          <div className="w-px h-6 bg-white/[0.06]" />
          <button
            onClick={() => redo()}
            className="p-2.5 text-white/60 hover:text-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all duration-200 rounded-r-xl cursor-pointer"
            title="Redo — Ctrl+Y"
          >
            <Redo />
          </button>
        </div>
      </div>
    </div>
  );
}
