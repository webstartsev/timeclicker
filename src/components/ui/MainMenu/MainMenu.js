import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainMenu.css';

export const MainMenu = () => (
  <nav className="MainMenu">
    <div className="MainMenu-wrap">
      <NavLink exact activeClassName="MainMenu-item_active" className="MainMenu-item" to="/">
        Главная
      </NavLink>
      <NavLink className="MainMenu-item" activeClassName="MainMenu-item_active" to="/tasks">
        Задачи
      </NavLink>
    </div>
  </nav>
);
