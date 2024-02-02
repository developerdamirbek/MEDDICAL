import React from 'react'
import AboutImg1 from '../about/images/about-bg-img.jpg'
import style from './about.module.scss'
import DoctorW from './images/doctor-women.svg'
import BgImg2 from './images/about-bg-2.png'
import DoctorComp from './components/doctor-comp'

export const About = () => {
  return (
    <div className="container">
      <div>
        <img className={style.img1} src={AboutImg1} alt="" />
        <div className={style.about_texts}>
          <h4>Home / About</h4>
          <h2>About us</h2>
        </div>
      </div>
      <div className={style.about_flex}>
        <img src={DoctorW} alt="" />
        <div className={style.about_section}>
          <div>
            <h3>Welcome to Hospital name</h3>
            <h1>Best Care for Your Good Health</h1>
          </div>
          <div className={style.about_flex}>
            <div>
              <div className={style.round_flex}>
                <div className={style.about_round}></div>
                <span>A Passion for Healing</span>
              </div>
              <div className={style.round_flex}>
                <div className={style.about_round}></div>
                <span>All our best</span>
              </div>
              <div className={style.round_flex}>
                <div className={style.about_round}></div>
                <span>Always Caring</span>
              </div>
            </div>
            <div>
              <div className={style.round_flex}>
                <div className={style.about_round}></div>
                <span>5-Star Care</span>
              </div>
              <div className={style.round_flex}>
                <div className={style.about_round}></div>
                <span>Believe in Us</span>
              </div>
              <div className={style.round_flex}>
                <div className={style.about_round}></div>
                <span>A Legacy of Excellence</span>
              </div>
            </div>
          </div>
          <div className={style.about_lorem}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>
          </div>
        </div>
      </div>
<DoctorComp />
     
    </div>
  );
}
