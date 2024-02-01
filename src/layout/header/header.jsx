import React from "react";
import { links } from "./data";
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";
import SearchIcon from "../../assets/icons/search-icon";
import HeaderLogo from "../header/images/header-logo.svg";
// import  Phoneicon from './../../assets/icons/phone-icon';
export const Header = () => {
  return (
    <header>
      <nav className={style.nav_flex}>
        <img src={HeaderLogo} alt="" />
        <div className={style.contacts}>
          <div className={style.contact}>
            {/* <img src={Phoneicon} alt="" /> */}
            <span>img</span>
            <div>
              <p>Emergency</p>
              <span>(237) 681-812-255</span>
            </div>
          </div>
          <div className={style.contact}>
            {/* <img src={Phoneicon} alt="" /> */}
            <span>img</span>
            <div>
              <p>Work Hour</p>
              <span>09:00 - 20:00 Everyday</span>
            </div>
          </div>
          <div className={style.contact}>
            {/* <img src={Phoneicon} alt="" /> */}
            <span>img</span>
            <div>
              <p>Location</p>
              <span>0123 Some Place</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="container header_container ">
        <div className={style.navbar}>
          <ul className={style.nav}>
            {links.map((item) => (
              <li className={style.header_Li} key={item.path}>
                <NavLink className={style.navbar_link} to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={style.search_btn}>
            <SearchIcon />
            <button className={style.header_btn}>Appointment</button>
          </div>
        </div>
      </div>

    
    </header>
  );
};
