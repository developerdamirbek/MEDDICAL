// import React from 'react'
import style from "./services.module.scss"
import main_img from "./images/main_imgs.svg"
import free from "./images/free.jpg"

import icons from "./images/icons.svg"


export const Services = () => {
  return (
   <div>
    <div className={style.main}>
    <div className="">
      <div className={style.style_main}>
      <img src={main_img} alt="imgs" />
       <div className='container'>
       <div className={style.style_title}>
        <p>Home / Services</p>
        <h1>Our Services</h1>
       </div>
       </div>
      </div>
    </div>
   </div>

   <div className={style.Free}>
    <div className='container'>
      <div className={style.card_img} >
         <img className={style.style_img} src={free} alt="" />
         <img src={icons} className={style.icons} alt="" />
         <div className={style.style_checkup}>
          <h2>Free Checkup</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
         <button>Learn More </button>
         </div>
      </div>
      <div className={style.card_img} >
         <img className={style.style_img} src={free} alt="" />
         <img src={icons} className={style.icons} alt="" />
         <div className={style.style_checkup}>
          <h2>Free Checkup</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
         <button>Learn More </button>
         </div>
      </div>
      <div className={style.card_img} >
         <img className={style.style_img} src={free} alt="" />
         <img src={icons} className={style.icons} alt="" />
         <div className={style.style_checkup}>
          <h2>Free Checkup</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
         <button>Learn More </button>
         </div>
      </div>
      <div className={style.card_img} >
         <img className={style.style_img} src={free} alt="" />
         <img src={icons} className={style.icons} alt="" />
         <div className={style.style_checkup}>
          <h2>Free Checkup</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
         <button>Learn More </button>
         </div>
      </div>
      <div className={style.card_img} >
         <img className={style.style_img} src={free} alt="" />
         <img src={icons} className={style.icons} alt="" />
         <div className={style.style_checkup}>
          <h2>Free Checkup</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
         <button>Learn More </button>
         </div>
      </div>
      <div className={style.card_img} >
         <img className={style.style_img} src={free} alt="" />
         <img src={icons} className={style.icons} alt="" />
         <div className={style.style_checkup}>
          <h2>Free Checkup</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
         <button>Learn More </button>
         </div>
      </div>
    </div>

   </div>


   </div>
   
  )
}
