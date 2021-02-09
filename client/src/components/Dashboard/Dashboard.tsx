import React, { useState } from 'react';
import Menu from './components/Menu';
import cn from 'classnames';
import styles from './Dashboard.module.scss';


export const Dashboard: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className={styles.dashboard}>
      <div className={styles.icon} onClick={() => setToggleMenu(prev => !prev)} />
      <div className={cn([styles.menu], {[styles.show]: toggleMenu})}>
        <Menu />
      </div>
    </div>
  )
}