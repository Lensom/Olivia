import React from 'react';
import Dashboard from '../Dashboard';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      header
      <Dashboard/>
    </div>
  )
}