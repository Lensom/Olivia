import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import {ReactComponent as Logotype} from '../../global/img/icons/logotype.svg';

interface IProps {
  onChangeTheme: () => void;
}

export const Sidebar: React.FC<IProps> = ({ onChangeTheme }) => {
  return (
    <div className={styles.sidebar}>
      <div className="logotype">
        <Link to="/">
          <Logotype />
        </Link>
      </div>
      <div className="nav">
        <ul className="list">
          <li>
            <Link to="/">Главная</Link>
            <Link to="/profile">Профиль</Link>
          </li>
        </ul>
        <button className="button" onClick={onChangeTheme}>Change theme</button>
      </div>
    </div>
  )
}