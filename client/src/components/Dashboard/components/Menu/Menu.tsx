import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  const logOut = () => console.log('logout');

  return (
    <div className="menu">
      <ul className="list">
        <li>
          <Link to="/">
            Главная
          </Link>
        </li>
        <li>
          <Link to="/profile">
            Профиль
          </Link>
        </li>
        <li>
          <a onClick={logOut}>
            Переключить тему
          </a>
        </li>
        <li>
          <a onClick={logOut}>
            Выйти
          </a>
        </li>
      </ul>
    </div>
  ) 
}