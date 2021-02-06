import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

interface IProps {
  onChangeTheme: () => void;
}


export const Footer: React.FC<IProps> = ({ onChangeTheme }) => {
  return (
    <div className={styles.footer}>
        <button className="button" onClick={onChangeTheme}>Change theme</button>
    </div>
  )
}