import React from 'react'
import style from './servicecard.module.scss'
import { LinkedinIcon } from '../../assets/icons/linkedin'
import { FacebookIcon } from '../../assets/icons/facebook'
import { InstagramIcon } from '../../assets/icons/instagram'
import { Link } from 'react-router-dom'

export const ServiceCard = ({ img, name, jobTitle }) => {
    return (
        <div className={style.service_card}>
            <img src={img} alt="image" />
            <div className={style.service_info}>
                <p className={style.name}>{name}</p>
                <h3 className={style.job}>{jobTitle}</h3>
                <div className={style.card_links}>
                    <a className={style.service_link} href="">
                        <LinkedinIcon />
                    </a>
                    <a className={style.service_link} href="">
                        <FacebookIcon />
                    </a>
                    <a className={style.service_link} href="">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
                <Link to="/doctors">
                    <button className={style.card_btn}>View Profile</button>
                </Link>
        </div>
    )
}
