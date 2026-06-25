"use client";

import { IButton } from "@/types/types";

const Button = ({ children, className, ...rest }: IButton) => {
  return (
    <button
      className={`futuristic-btn w-full text-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
