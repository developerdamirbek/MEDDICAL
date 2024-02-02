import React from "react";
import { links } from "./data";
import { Link, NavLink } from "react-router-dom";
import style from "./header.module.scss";
import { SearchIcon } from "../../assets/icons/search-icon";
import { Logo } from "../../assets/icons/logo";
import { PhoneIcon } from '../../assets/icons/phone-icon'
import { ClockIcon } from "../../assets/icons/clock-icon";
import { LocationIcon } from "../../assets/icons/location-icon";
export const Header = () => {
  return (
    <header>
      <div className={style.header_top}>
        <div className={style.container}>
          <nav className={style.nav_flex}>
            <Link to="/">
              <Logo />
            </Link>
            <div className={style.contacts}>
              <div className={style.contact}>
                <PhoneIcon />
                <div>
                  <p>Emergency</p>
                  <span>(237) 681-812-255</span>
                </div>
              </div>
              <div className={style.contact}>
                <ClockIcon />
                <div>
                  <p>Work Hour</p>
                  <span>09:00 - 20:00 Everyday</span>
                </div>
              </div>
              <div className={style.contact}>
                <LocationIcon />
                <div>
                  <p>Location</p>
                  <span>0123 Some Place</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className={style.header_bottom}>
        <div className={style.container}>
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
      </div>
    </header>
  );
};
