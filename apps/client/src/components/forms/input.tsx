import { forwardRef } from "react";
import { IInput } from "@/types/types";

const Input = forwardRef<HTMLInputElement, IInput>(({ label, className, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{label}</label>
      <input
        ref={ref}
        className={`futuristic-input ${className}`}
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
