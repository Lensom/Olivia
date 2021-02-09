import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Footer.module.scss';

interface IProps {
  onChangeTheme: () => void;
}


export const Footer: React.FC<IProps> = ({ onChangeTheme }) => {
  const [iconState, setIconState] = useState<boolean>(true);
  const changeTheme = () => {
    setIconState(prev => !prev);
    onChangeTheme();
  }
  return (
    <div className={styles.footer}>
      <svg
          viewBox="0 0 32 32"
          width="64px"
          height="64px"
          className={styles.icon}
          onClick={changeTheme}
      >
        <circle cx="16" cy="16" r="10" />
        <circle cx="22" cy="10" r="10" fill="white" className={cn([styles.animatable, {[styles.animated]: iconState}])} />
      </svg>
    </div>
  )
}