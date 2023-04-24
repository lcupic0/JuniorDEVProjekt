import style from './navigation.module.css'

function Navigation() {
  return (
    <>
        <div className={style.wrapper}>
            <nav>
                <img src="" alt="NAV.SLIKA" className={style.logo}/>
                <ul className={style.list}>
                    <li>O nama</li>
                    <li>Popis</li>
                    <li>Donacije</li>
                    <li>Obavijesti</li>
                    <li>Unos</li>
                </ul>
                <div className={style.mobile}>
                    <div className={style.bar1}></div>
                    <div className={style.bar2}></div>
                    <div className={style.bar3}></div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navigation