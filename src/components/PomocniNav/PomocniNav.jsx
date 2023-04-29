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
            <p className={style.opis}>Fasfsafasfsf  asfhafhk uf ahush u sfsfasf sfsfsaf</p>
        </div>
        <div className={style.group}>
            <FontAwesomeIcon className={style.icon} icon={faThumbsUp} />
            <p className={style.title}>DRUŠTVENE MREŽE</p>
            <p className={style.opis}>Fasfsafasfsf  asfhafhk uf ahush u sfsfasf sfsfsaf</p>
        </div>
        <div className={style.group}>
            <FontAwesomeIcon className={style.icon} icon={faHandHoldingDollar} />
            <p className={style.title}>DONACIJE</p>
            <p className={style.opis}>Fasfsafasfsf  asfhafhk uf ahush u sfsfasf sfsfsaf</p>
        </div>
        <div className={style.group}>
            <FontAwesomeIcon className={style.icon} icon={faBullhorn} />
            <p className={style.title}>OBAVIJESTI</p>
            <p className={style.opis}>Fasfsafasfsf  asfhafhk uf ahush u sfsfasf sfsfsaf</p>
        </div>
    </div>
  )
}

export default PomocniNav