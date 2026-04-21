import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name?: string;
  leftIcon?: string;
  rightIcon?: string;
};

const Button = ({
  name,
  leftIcon,
  rightIcon,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {leftIcon && (
        <span className="left-icon" aria-hidden="true">
          <i className={leftIcon}></i>
        </span>
      )}
      {name && <span>{name}</span>}
      {rightIcon && (
        <span className="right-icon" aria-hidden="true">
          <i className={rightIcon}></i>
        </span>
      )}
    </button>
  );
};

export default Button;
