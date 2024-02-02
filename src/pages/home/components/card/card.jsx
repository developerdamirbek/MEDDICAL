import React from 'react'
import style from './card.module.scss'

export const Card = ({variant, text, icon}) => {
  return (
    <div className={variant}>
        <h3>{text}</h3>
        {icon}
    </div>
  )
}
