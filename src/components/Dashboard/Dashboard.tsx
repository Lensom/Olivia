import React from 'react';
import Menu from './components/Menu';
import styles from './Dashboard.module.scss';


export const Dashboard: React.FC = () => {

  return (
    <div className={styles.dashboard}>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}