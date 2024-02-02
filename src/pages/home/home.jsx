import React from 'react'
import style from './home.module.scss'
import { ContactCards } from '../../components/contactcards'

export const Home = () => {
    return (
        <section className={style.hero}>
            <div className={style.container}>
            <div className={style.hero_content}>
                <h3 className={style.hero_text}>Caring for Life</h3>
                <h1 className={style.hero_title}>Leading the Way in Medical Excellence</h1>
                <button className={style.hero_btn}>Our Services</button>
            </div>
            <div className={style.hero_cards}>

            </div>
            </div>
        </section>



        // <ContactCards/>
    )
}
