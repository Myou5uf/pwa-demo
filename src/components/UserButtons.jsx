import React from 'react';
import {Stack} from 'react-bootstrap';
import HistoryIcon from './icons/HistoryIcon';
import {Link} from 'react-router-dom';
import StarIcon from './icons/StarIcon';
import UserIcon from './icons/UserIcon';
import styles from './UserButtons.module.css';

const UserButtons = ({className}) => {
  return (
    <Stack direction="horizontal" className={`${className} ${className}`}>
      <Link className={styles.link}>
        <HistoryIcon />
        <span className={styles.text}>История</span>
      </Link>
      <Link className={styles.link}>
        <StarIcon />
        <span className={styles.text}>Избранное</span>
      </Link>
      <Link className={styles.link}>
        <UserIcon />
        <span className={styles.text}>Профиль</span>
      </Link>
    </Stack>
  );
};

export default UserButtons;
