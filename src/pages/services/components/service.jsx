import style from '../../services/services.module.scss';
import free from "../images/free.jpg"
import icons from "../images/icons.svg"
export const Service = () => {
    return(
        <div className={style.card_img} >
        <img className={style.style_img} src={free} alt="" />
        <img src={icons} className={style.icons} alt="" />
        <div className={style.style_checkup}>
         <h2>Free Checkup</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
        <button>Learn More </button>
        </div>
     </div>
    )
}