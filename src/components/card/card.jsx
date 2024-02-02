import React from 'react'
import style from './card.module.scss'

export const Card = ({img, title, text1, text2}) => {
  return (
    <div className={style.card}>
        <img src={img} alt="card image" />
        <h3 className={style.card_title}>{title}</h3>
        <p className={style.card_text}>{text1}</p>
        <p className={style.card_text}>{text2}</p>
    </div>
  )
}
