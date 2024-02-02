import React from "react";
import styleFooter from './footer.module.scss'
import { LinkedinIcon } from "../../assets/icons/linkedin-icon";
import { FacebookIcon } from "../../assets/icons/facebook-icon";
import { InstagramIcon } from "../../assets/icons/instagram-icon";
import { FooterLogo } from "../../assets/icons/footer-logo";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styleFooter.footer}>
      <div className={styleFooter.container}>
        <div className={styleFooter.footer__container}>
          <div className={styleFooter.footer__top}>
            <div className={styleFooter.footer__card}>
              <Link to="/">
                <FooterLogo />
              </Link>
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
                    <Link to="/doctors">Doctors</Link>
                  </li>
                  <li className={styleFooter.form_link}>
                    <Link to="/services">Services</Link>
                  </li>
                  <li className={styleFooter.form_link}>
                    <Link to="/about">About Us</Link>
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
            <div className={styleFooter.footer__links}>
              <a className={styleFooter.footer_link} href="">
                <LinkedinIcon />
              </a>
              <a className={styleFooter.footer_link} href="">
                <FacebookIcon />
              </a>
              <a className={styleFooter.footer_link} href="">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
