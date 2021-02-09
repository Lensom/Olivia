import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { ReactComponent as Logotype } from '../../global/img/icons/logotype.svg';
import { config } from './config';
import { INavConfig } from './interface';

export const Sidebar: React.FC = () => {
  const [navItems] = useState<INavConfig>(config);
  const { items } = navItems;

  return (
    <div className={styles.sidebar}>
      <div className={styles.logotype}>
        <NavLink to="/">
          <Logotype />
        </NavLink>
      </div>
      <div className={styles.nav}>
        <ul className={styles.list}>
          {items.map(({ id, Image, url, text }) => 
          <li key={id}>
            <NavLink
              to={url}
              className={styles.link}
              activeClassName={styles.active}
            >
              <div className={styles.image}>
                <Image />
              </div>
              {text}
            </NavLink>
          </li>
          )}
      </ul>
    </div>
  </div>
  )
}