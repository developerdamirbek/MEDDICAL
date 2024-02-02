import React from "react";
import styleFooter from './footer.module.scss'
import { LinkedinIcon } from "../../assets/icons/linkedin-icon";
import { FacebookIcon } from "../../assets/icons/facebook-icon";
import { InstagramIcon } from "../../assets/icons/instagram-icon";
import { FooterLogo } from "../../assets/icons/footer-logo";

export const Footer = () => {
  return (
    <footer className={styleFooter.footer}>
      <div className="container">
      <div className={styleFooter.footer__container}>
        <div className={styleFooter.footer__top}>
          <div className={styleFooter.footer__card}>
            <a href="" className={styleFooter.logo__img}>
              <FooterLogo />
            </a>
            <h3 className={styleFooter.footer__h3Text}>Leading the Way in Medical
              Execellence, Trusted Care.</h3>
          </div>
          <div className={styleFooter.footer__card}>
            <div className={styleFooter.useful__links}>
              <p className={styleFooter.useful_text}>Important Links</p>
              <ul className={styleFooter.form_list}>
                <li className={styleFooter.form_link}>
                  Apportiment
                </li>
                <li className={styleFooter.form_link}>
                  Doctors
                </li>
                <li className={styleFooter.form_link}>
                  Services
                </li>
                <li className={styleFooter.form_link}>
                  About Us
                </li>
              </ul>
            </div>
          </div>
          <div className={styleFooter.footer__card}>
            <div className={styleFooter.useful__links}>
              <p className={styleFooter.useful_text}>Contect us</p>
              <ul className={styleFooter.form_list}>
                <li className={styleFooter.form_link}>
                  Call: (237) 681-812-255
                </li>
                <li className={styleFooter.form_link}>
                  Email: fildineesoe@gmail.com
                </li>
                <li className={styleFooter.form_link}>
                  Address: 0123 Some place
                </li>
                <li className={styleFooter.form_link}>
                  ASome country
                </li>
              </ul>
            </div>
          </div>
          <div className={styleFooter.footer__card}>
            <p className={styleFooter.useful_text}>Newsletter</p>
            <input placeholder="Enter your email address" className={styleFooter.input__footer} />
          </div>
        </div>
        <div className={styleFooter.footer__bottom}>
          <p className={styleFooter.footer__year}>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
          <div style={{ marginLeft: 700 }}>
            <a href="" className={styleFooter.logo__app}>
              <LinkedinIcon />
            </a>
            <a href="" className={styleFooter.logo__app}>
              <FacebookIcon />
            </a>
            <a href="" className={styleFooter.logo__app}>
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};
