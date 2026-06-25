import Canvas from "@/components/canvas/Canvas";
import ProtectedRoute from "@/components/guards/ProtectedRoute";

export default function RoomCanvasPage() {
  return (
    <ProtectedRoute>
      <Canvas />
    </ProtectedRoute>
  );
}
