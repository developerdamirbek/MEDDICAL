import React from 'react'
import style from './contactcards.module.scss'
import { Card } from '../card'
import { ContactPhone } from '../../assets/icons/contact-phone'
import { ContactLocation } from '../../assets/icons/contact-location'
import { ContactMail } from '../../assets/icons/contact-mail'
import { ContactClock } from '../../assets/icons/contact-clock'

export const ContactCards = () => {
  return (
    <div className={style.card_sec}>
        <div className={style.container}>
        <h2 className={style.title}>GET IN TOUCH</h2>
        <h3 className={style.sec_name}>Contact</h3>
        <div className={style.card_block}>
            <Card img={<ContactPhone/>} title="Emergency" text1="(237) 681-812-255" text2="(237) 666-331-894"/>
            <Card img={<ContactLocation/>} title="Location" text1="0123 Some place" text2="9876 Some country"/>
            <Card img={<ContactMail/>} title="Email" text1="fildineeesoe@gmil.com" text2="myebstudios@gmail.com"/>
            <Card img={<ContactClock/>} title="Working Hours" text1="Mon-Sat 09:00-20:00" text2="Sunday Emergency only"/>
        </div>
        </div>
    </div>

  )
}
