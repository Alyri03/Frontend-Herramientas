// components/Spinner.jsx
import { Loader2 } from "lucide-react";

export default function Spinner({ size = 8 }) {
  return (
    <div className="flex justify-center items-center py-12">
      <Loader2 className={`animate-spin w-${size} h-${size} text-blue-600`} />
    </div>
  );
}
