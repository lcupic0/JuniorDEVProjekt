import { useState } from 'react'
import style from './navigation.module.css'
import { Link, useLocation } from "react-router-dom"
import { useContext } from 'react';
import AdminContext from '../../context/Context';

function Navigation() {

    const {admin, setAdmin} = useContext(AdminContext);

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const location = useLocation(); 
    const splitLocation = location.pathname.split("/")

    const handleAdmin = () => {
        setAdmin(!admin);
        localStorage.setItem("admin", !admin);
    }

    //console.log(splitLocation);

  return (
    <>
        <div className={style.wrapper}>
            <nav>
                <Link to="/"><img src="/images/paw2.png" alt="Azil Šapa" className={style.logo}/></Link>
                <div className={`${style.listwrapper} ${isNavExpanded ? `${style.visible}` : ""}`}>
                    <ul className={style.list}>
                        <li><Link to="/" className={splitLocation[1] === "" ? style.activelink : ""} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>O nama</Link></li>
                        <li><Link to="/popis" className={splitLocation[1] === "popis" ? style.activelink : ""} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Popis</Link></li>
                        <li><Link to="/donacije" className={splitLocation[1] === "donacije" ? style.activelink : ""} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Donacije</Link></li>
                        <li><Link to="/obavijesti" className={splitLocation[1] === "obavijesti" ? style.activelink : ""} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Obavijesti</Link></li>
                        <li><Link to="/unos" className={splitLocation[1] === "unos" ? style.activelink : ""} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Unos</Link></li>
                        <li onClick={handleAdmin} className={admin ? `${style.adminon}` : ""}>AdminLogin</li>
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