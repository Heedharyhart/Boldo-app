import React from "react";
import styles from './button.scss';


const Button = ({ onClick, children, className }) => {
  return (
    <button className={styles.btn, className} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
