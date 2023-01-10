import { useContext } from "react";
import { FormCtx } from "../../Contexts/FormContext";
import styles from "./Input.module.scss";

interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  register: any;
  error: string | undefined;
}

export default function Input({
  type,
  name,
  label,
  placeholder,
  register,
  error,
}: InputProps) {
  const { info } = useContext(FormCtx);

  return (
    <div className={styles.input}>
      <div className={styles.input__label}>
        <label htmlFor={name}>{label}</label>
        <p>{error && error}</p>
      </div>
      <input
        defaultValue={
          info![name as keyof typeof info] !== null
            ? info![name as keyof typeof info]
            : ""
        }
        type={type}
        {...register(`${name}`)}
        id={name}
        placeholder={placeholder}
        className={error && styles.error}
      />
    </div>
  );
}
