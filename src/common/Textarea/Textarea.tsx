import { FC, TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea: FC<ITextarea> = (props) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea {...props} />
    </div>
  );
};
