import { useState } from 'react'
import style from './navigation.module.css'

function Navigation() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    console.log(isNavExpanded);

  return (
    <>
        <div className={style.wrapper}>
            <nav>
                <img src="/images/paw2.png" alt="Azil Šapa" className={style.logo}/>
                <div className={`${style.listwrapper} ${isNavExpanded ? `${style.visible}` : ""}`}>
                    <ul className={style.list}>
                        <li>O nama</li>
                        <li>Popis</li>
                        <li>Donacije</li>
                        <li>Obavijesti</li>
                        <li>Unos</li>
                    </ul>
                </div>
                <div className={`${style.mobile} ${isNavExpanded ? `${style.change}` : ''}`} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
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