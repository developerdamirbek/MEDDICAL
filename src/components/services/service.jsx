import React from 'react'
import style from './service.module.scss'
import { ServiceCard } from '../servicecard'
import img1 from '../../assets/images/doc1.png'
import img2 from '../../assets/images/doc2.png'
import img3 from '../../assets/images/doc3.png'

export const Service = () => {
  return (
    <div className={style.services_sec}>
        <div className="container">
            <h3 className={style.services_text}>Trusted Care</h3>
            <h2 className={style.services_title}>Our Doctors</h2>
            <div className={style.services_card__block}>
                <ServiceCard img={img1} name="Doctor’s Name" jobTitle="Doctor’s Name"/>
                <ServiceCard img={img2} name="Doctor’s Name" jobTitle="Doctor’s Name"/>
                <ServiceCard img={img3} name="Doctor’s Name" jobTitle="Doctor’s Name"/>
            </div>
        </div>
    </div>
  )
}
