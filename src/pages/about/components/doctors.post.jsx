import React from 'react'
import DoctorsImg from '../images/doctors-post.jpg'
import style from '../about.module.scss'
import { EyeIcon } from '../../../assets/icons/eye-icon';
import { RedHeart } from './../../../assets/icons/red-heart';
export default function DoctorsPost() {
  return (
    <div className={style.container}>
      <div className={style.posts}>
        <div className={style.doctors_flex}>
          <img src={DoctorsImg} alt="" />
          <div className={style.post}>
            <h3>Monday 05, September 2021 | By Author</h3>
            <h2>This Article’s Title goes Here, but not too long.</h2>
            <div className={style.d_icons}>
              <div className={style.doctors_icon}>
                <EyeIcon />
                <span>68</span>
              </div>
              <div className={style.doctors_icon}>
                <RedHeart />
                <span>86</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.doctors_flex}>
          <img src={DoctorsImg} alt="" />
          <div className={style.post}>
            <h3>Monday 05, September 2021 | By Author</h3>
            <h2>This Article’s Title goes Here, but not too long.</h2>
            <div className={style.d_icons}>
              <div className={style.doctors_icon}>
                <EyeIcon />
                <span>68</span>
              </div>
              <div className={style.doctors_icon}>
                <RedHeart />
                <span>86</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.posts}>
        <div className={style.doctors_flex}>
          <img src={DoctorsImg} alt="" />
          <div className={style.post}>
            <h3>Monday 05, September 2021 | By Author</h3>
            <h2>This Article’s Title goes Here, but not too long.</h2>
            <div className={style.d_icons}>
              <div className={style.doctors_icon}>
                <EyeIcon />
                <span>68</span>
              </div>
              <div className={style.doctors_icon}>
                <RedHeart />
                <span>86</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.doctors_flex}>
          <img src={DoctorsImg} alt="" />
          <div className={style.post}>
            <h3>Monday 05, September 2021 | By Author</h3>
            <h2>This Article’s Title goes Here, but not too long.</h2>
            <div className={style.d_icons}>
              <div className={style.doctors_icon}>
                <EyeIcon />
                <span>68</span>
              </div>
              <div className={style.doctors_icon}>
                <RedHeart />
                <span>86</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
