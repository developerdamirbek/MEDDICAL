import React from "react";
import { links } from "./data";
import { NavLink } from "react-router-dom";
import style from './header.module.scss'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">

        <ul className={style.navbar}>
          {links.map((item) => (
            <li key={item.path}>
              <NavLink className={style.navbar_link} to={item.path}>
              {item.name}
            </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
