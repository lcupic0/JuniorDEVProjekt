import style from './pomocninav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'


function PomocniNav() {
  return (
    <div className={style.wrapper}>
        <div className={style.group}>
            <FontAwesomeIcon className={style.icon} icon={faPeopleGroup} />
            <p className={style.title}>PRIDRUŽI SE</p>
            <p className={style.opis}>Postani i ti dio našeg tima! Obrati nam se putem maila ili društevnih mreža</p>
            <p className={style.opis}>Obrati nam se putem maila ili društevnih mreža</p>
        </div>
        <div className={style.group}>
            <FontAwesomeIcon className={style.icon} icon={faThumbsUp} />
            <p className={style.title}>DRUŠTVENE MREŽE</p>
            <p className={style.opis}>Zapratite nas na Instagram ili Facebook mrežama</p>
            <p className={style.opis}>Vjerujemo da će Vas oduševiti slike naših ljubimaca!</p>
        </div>
        <div className={style.group}>
            <FontAwesomeIcon className={style.icon} icon={faHandHoldingDollar} />
            <p className={style.title}>DONACIJE</p>
            <p className={style.opis}>Usrećite životinje bilo kakvom pomoći</p>
            <p className={style.opis}>Svaka pomoć je dobrodošla i radi toga Vam se zahvaljujemo!</p>
        </div>
        <div className={style.group}>
            <FontAwesomeIcon className={style.icon} icon={faBullhorn} />
            <p className={style.title}>OBAVIJESTI</p>
            <p className={style.opis}>Prijavite se na naš newsletter!</p>
            <p className={style.opis}>Budite među prvima koji će saznati novosti vezane uz naš azil</p>
        </div>
    </div>
  )
}

export default PomocniNav