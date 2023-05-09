import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import style from './popis.module.css'
import axios from 'axios'

function Popis() {

    const [zivotinje, postaviZivotinje] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState();
    const [filters, setFilters] = useState({
        udomljen: "",
        vrsta: "",
    });

    useEffect(() => {
        axios
            .get("http://localhost:3001/zivotinje")
            .then(res => postaviZivotinje(res.data));
    }, []);

    
    const handleFilterChange = (event) =>{
        const {name,value} = event.target;
        setFilters(prevFilters => ({...prevFilters, [name]: value}));
    } 

    const handleClick = (zivotinja) => {
        setSelectedAnimal(zivotinja);
    }

    const filteredData = zivotinje.filter(zivotinja => {
        // Dakle moraju se zadovoljiti dva uvjeta da bi se filtrirale naše životinje.
        // 1. Provjera je li udomljena zivotinja ili postavljeno na sve (udomljene i neudomljene).
        // 2. Provjera je li vrsta zivotinje pas ili mačka ili je postavljeno na sve(psi i mačke).

        const testUdomljeni = filters.udomljen === "" || filters.udomljen === zivotinja.udomljen;
        const testVrste = filters.vrsta === "" || filters.vrsta === zivotinja.vrsta;

        return testUdomljeni && testVrste; //Dakle oba moraju biti true da bi uspjeli filtrirati. (Ili smo filtrirali ili je filter postavljen na "sve" odnosno na prazni string "").
    })

  return (
    <div className={style.popis}>
        <div className={style.wrapper}>
            <div className={style.leftcol}>
                <div className={style.odabir}>
                    <p>Filter:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" value="" name="udomljen" className={style.input} onChange={handleFilterChange} checked={filters.udomljen === ""} />
                            Svi
                        </label>
                        <label className={style.label}>
                            <input type="radio" value="true" name="udomljen" className={style.input} onChange={handleFilterChange} checked={filters.udomljen === "true"} />
                            Udomljeni
                        </label>
                        <label className={style.label}>
                            <input type="radio" value="false" name="udomljen" className={style.input} onChange={handleFilterChange} checked={filters.udomljen === "false"} />
                            Nije udomljen
                        </label>
                    </form>
                </div>
                <div className={style.odabir}>
                    <p>Vrsta:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" value="" name="vrsta" id="sve" className={style.input} onChange={handleFilterChange} checked={filters.vrsta === ""}/>
                            Sve
                        </label>
                        <label className={style.label}>
                            <input type="radio" value="mačka" name="vrsta" id="mačka" className={style.input} onChange={handleFilterChange} checked={filters.vrsta === "mačka"}/>
                            Mačka
                        </label>
                        <label className={style.label}>
                            <input type="radio" value="pas" name="vrsta" id="pas" className={style.input} onChange={handleFilterChange} checked={filters.vrsta === "pas"}/>
                            Pas
                        </label>
                    </form>
                </div>
            </div>

            <div className={style.rightcol}>
                {filteredData.map(z => (
                    <>
                        <div className={style.card} key={z.id} 
                            style={{backgroundImage: `url("images/${z.image}")`, outline: z.udomljen==="true" ? "2px solid rgb(4, 114, 20)" : "2px solid rgb(195, 20, 20)"}}
                            onClick={() => handleClick(z)}
                        >
                            {z.ime}
                        </div>
                    </>
                ))}
                {selectedAnimal && <Modal selectedAnimal={selectedAnimal} setSelectedAnimal={setSelectedAnimal} zivotinje={zivotinje} postaviZivotinje={postaviZivotinje}/>}
            </div>
        </div>
    </div>
  )
}

export default Popis