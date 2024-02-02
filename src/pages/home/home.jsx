import React from 'react'
import style from './home.module.scss'
import { Link } from 'react-router-dom'
import { RightArrow } from '../../assets/icons/right-arrow'
import { CheckupIcon } from '../../assets/icons/checkup-icon'
import { HeartPlus } from '../../assets/icons/heart-plus'
import { SquarePlus } from '../../assets/icons/square-plus'
import { BloodBank } from '../../assets/icons/blood-bank'
import img1 from '../../assets/images/ser1.png'
import img2 from '../../assets/images/ser2.png'

export const Home = () => {
    return (
        <>
            <section className={style.hero}>
                <div className={style.container}>
                    <div className={style.hero_content}>
                        <h3 className={style.hero_text}>Caring for Life</h3>
                        <h1 className={style.hero_title}>Leading the Way in Medical Excellence</h1>
                        <Link to="/services">
                            <button className={style.hero_btn}>Our Services</button>
                        </Link>
                    </div>
                    <div className={style.hero_cards}>

                    </div>

                </div>
            </section>
            <section className={style.home_about}>
                <div className="container">
                    <h3 className={style.home_about__text}>Welcome to Meddical</h3>
                    <h2 className={style.home_about__title}>A Great Place to Receive Care</h2>
                    <p className={style.home_about__sub__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
                    </p>
                    <Link to="/about">
                        <button className={style.home_about__btn}>Learn More <RightArrow /> </button>
                    </Link>
                </div>
            </section>
            <section className={style.home_banner}>
                <div className="container">
                    <div className={style.banner}>

                    </div>
                </div>
            </section>
            <section className={style.home_services}>
                <div className="container">
                    <h3 className={style.home_about__text}>Care you can believe in</h3>
                    <h2 className={style.home_services__title}>Our Services</h2>
                    <div className={style.home_services__content}>
                        <div className={style.home_services__tab}>
                            <div className={style.service_tab}>
                                <div className={style.tab_icon}>
                                    <CheckupIcon/>
                                </div>
                                <h3 className={style.tab_title}>Free Checkup</h3>
                            </div>
                            <div className={style.service_tab}>
                                <div className={style.tab_icon}>
                                    <HeartPlus/>
                                </div>
                                <h3 className={style.tab_title}>Cardiogram</h3>
                            </div>
                            <div className={style.service_tab}>
                                <div className={style.tab_icon}>
                                    <SquarePlus/>
                                </div>
                                <h3 className={style.tab_title}>Dna Testing</h3>
                            </div>
                            <div className={style.service_tab}>
                                <div className={style.tab_icon}>
                                    <BloodBank/>
                                </div>
                                <h3 className={style.tab_title}>Blood Bank</h3>
                            </div>
                            <Link to="/services">
                                <button className={style.tab_btn}>View All</button>
                            </Link>
                        </div>
                        <div className={style.home_services__info}>
                            <h2 className={style.services_info__title}>A passion for putting patients first.</h2>
                            <div>
                                <ul>
                                    <li>A Passion for Healing</li>
                                    <li>All our best</li>
                                    <li>A Legacy of Excellence</li>
                                </ul>
                                <ul>
                                    <li>5-Star Care</li>
                                    <li>Believe in Us</li>
                                    <li>Always Caring</li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.home_services__images}>
                            <img src={img1} alt="img" />
                            <img src={img2} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
