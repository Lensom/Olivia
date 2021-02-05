import React, { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import styles from './MainLayout.module.scss';
interface IProps {
  children: ReactNode;
  onChangeTheme: () => void;
}

export const MainLayout: React.FC<IProps> = ({ children, onChangeTheme }) => (
  <div className={styles.page}>
    <Sidebar onChangeTheme={onChangeTheme} />
    <div className={styles.wrapper}>
      <Header />
      <div className="body">
        {children}
      </div>
    </div>
  </div>
);
