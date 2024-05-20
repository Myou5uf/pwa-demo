import React from 'react';
import styles from './BurgerButton.module.css';



const BurgerButton = ({open, onClick, className}) => {
  const rootClasses = `${styles.btn} ${open ? styles.active : ''} ${className}`.trim();

  return (
    <button type="button" className={rootClasses} onClick={onClick}>
      <div className={styles.rect}></div>
      <div className={styles.rect}></div>
    </button>
  );
};

export default BurgerButton;
