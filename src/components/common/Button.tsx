import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonWidth {
  FULL = "FULL",
  AUTO = "AUTO",
}

const ButtonWidthToStyles: Record<ButtonWidth, string> = {
  [ButtonWidth.FULL]: "flex w-full",
  [ButtonWidth.AUTO]: "w-fit",
};

export interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "disabled" | "aria-label"
  > {
  label: string;
  width?: ButtonWidth;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  label,
  width = ButtonWidth.AUTO,
  disabled,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center space-x-2 rounded-lg border border-white px-4 py-2.5 leading-tight transition duration-300 ease-in-out hover:border-cyan-300 md:whitespace-nowrap ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${ButtonWidthToStyles[width]} ${className}`}
      aria-label={label}
      disabled={disabled}
      {...props}
    >
      <p className="text-sm">{label}</p>
    </button>
  );
};
