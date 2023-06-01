import React, { FC } from "react";

import styles from "./Button.module.css";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  handleClick: () => void;
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  buttonText,
  handleClick,
  className,
  ...props
}) => (
  <button
    className={`${styles.button} ${className}`}
    onClick={handleClick}
    {...props}
  >
    {buttonText}
  </button>
);
