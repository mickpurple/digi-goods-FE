import React, { FC } from "react";

export type Direction = "right" | "bottom";

export interface ButtonProps {
  text: string;
  onClick?: () => unknown;
  classes?: string;
  disabled?: boolean;
  arrowDirection?: Direction;
}

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  classes = "",
  disabled,
  arrowDirection = "right",
}: ButtonProps) => (
  <div
    className={`relative overflow-hidden rounded-[25px]
      px-5 py-2 flex justify-center gap-[10px] items-center h-[48px] min-w-[160px] text-lg transition-all duration-[0.3s]
      ${classes || ""}
      ${
        disabled
          ? "cursor-not-allowed bg-[#C6C0D4]"
          : "cursor-pointer bg-[#A91D3A] hover:bg-[#C73659] hover:gap-[15px]"
      }
    `}
    onClick={() => {
      if (!disabled && onClick) {
        onClick();
      }
    }}
  >
    <p className="relative z-20 text-white">{text}</p>
  </div>
);

export default Button;
