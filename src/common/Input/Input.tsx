import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  placeholderText: string;
}

export const Input: FC<IInput> = ({labelText, placeholderText, ...rest}) => (
  <div className={styles.wrapper}>
    <label>{labelText}
      <input placeholder={placeholderText} {...rest} />
    </label>
  </div>
);
