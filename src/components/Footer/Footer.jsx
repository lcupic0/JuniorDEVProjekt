import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './footer.module.css'

function Footer() {
  return (
    <div className={style.wrapper}>
        <div className={style.info}>
            <h1>AZIL ŠAPICA</h1>
            <p>Budite i Vi dio naše priče i pridružite se našem timu.</p>
            <div className={style.social}>
                <i className={`fa-brands fa-facebook ${style.icon}`}></i>
                <i className={`fa fa-instagram ${style.icon}`}></i>
            </div>
        </div>
        <hr />
        <div className={style.potpis}>
            <span>EDIT JuniorDev &copy;2023 | <a href="https://digitalnadalmacija.hr/" target='_blank'>DG</a></span>
            <span>Rad by: <a href="https://github.com/lcupic0" target='_blank'>Luka Čupić</a></span>
        </div>
    </div>
  )
}

export default Footer