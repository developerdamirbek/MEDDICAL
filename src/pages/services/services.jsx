// import React from 'react'
import style from "./services.module.scss";
import main_img from "./images/main_imgs.svg";
import {ContactCards} from "../../components/contactcards/contact-cards";
import { Footer } from "../../layout/footer/footer";
import { Header } from "../../layout/header/header";


import { Service } from "./components/service";

export const Services = () => {
  return (
    <div>
      <div className={style.main}>
        <div className="">
          <div className={style.style_main}>
            <img src={main_img} alt="imgs" />
            <div className="container">
              <div className={style.style_title}>
                <p>Home / Services</p>
                <h1>Our Services</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.Free}>
        <div className="container">
          <div className={style.Services_free}>
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
          </div>
        </div>
      <ContactCards />
      
      </div>

    </div>
  );
};
