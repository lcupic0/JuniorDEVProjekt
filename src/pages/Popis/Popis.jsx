import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import style from './popis.module.css'
import axios from 'axios'

function Popis() {

    const [zivotinje, postaviZivotinje] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:3001/zivotinje")
            .then(res => postaviZivotinje(res.data));
    }, []);

    const handleClick = (zivotinja) => {
        setSelectedAnimal(zivotinja);
    }

  return (
    <div className={style.popis}>
        <div className={style.wrapper}>
            <div className={style.leftcol}>
                <div className={style.odabir}>
                    <p>Filter:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" value="svi" name="svi" id="svi" className={style.input}/>
                            Svi
                        </label>
                        <label className={style.label}>
                            <input type="radio" value="udomljen" name="udomljen" id="udomljen" className={style.input}/>
                            Udomljeni
                        </label>
                        <label className={style.label}>
                            <input type="radio" value="nijeudomljen" name="nijeudomljen" id="nijeudomljen" className={style.input}/>
                            Nije udomljen
                        </label>
                    </form>
                </div>
                <div className={style.odabir}>
                    <p>Vrsta:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" value="sve" name="sve" id="sve" className={style.input}/>
                            Sve
                        </label>
                        <label className={style.label}>
                            <input type="radio" value="mačka" name="mačka" id="mačka" className={style.input}/>
                            Mačka
                        </label>
                        <label className={style.label}>
                            <input type="radio" value="pas" name="pas" id="pas" className={style.input}/>
                            Pas
                        </label>
                    </form>
                </div>
            </div>

            <div className={style.rightcol}>
                {zivotinje.map(z => (
                    <>
                        <div className={style.card} key={z.id} 
                            style={{backgroundImage: `url("images/${z.image}")`, outline: z.udomljen ? "2px solid rgb(4, 114, 20)" : "2px solid rgb(195, 20, 20)"}}
                            onClick={() => handleClick(z)}
                        >
                            {z.ime}
                        </div>
                    </>
                ))}
                {selectedAnimal && <Modal selectedAnimal={selectedAnimal} setSelectedAnimal={setSelectedAnimal}/>}
            </div>
        </div>
    </div>
  )
}

export default Popis