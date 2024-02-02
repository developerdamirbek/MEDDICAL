import React from 'react'
import style from './home.module.scss'
import { Link } from 'react-router-dom'
import { ContactCards } from '../../components/contactcards'
import { ServiceCard } from '../../components/servicecard'
import { Service } from '../../components/services/service'
import { RightArrow } from '../../assets/icons/right-arrow'
import { useNavigate } from 'react-router-dom'

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

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
