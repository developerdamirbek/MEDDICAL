import React from 'react'
import quote from '../images/quote.svg'
import style from '../about.module.scss'
import dots from '../images/3dot.svg'

export default function DoctorComp() {
  return (
    <section className={style.about_section_bg}>
      <div className={style.doctor_bg_img}>
        <img className={style.quote} src={quote} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque felis vitae tortor augue. Velit nascetur Consequat
          faucibus porttitor enim et.
        </p>
        <div className={style.border_bottom}></div>
        <h3>John Doe</h3>
        <img className={style.dots} src={dots} alt="" />
      </div>
    </section>
  );
}
