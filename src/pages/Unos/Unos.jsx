import style from './unos.module.css'

function Unos() {

    const options = [
        { value: "hrana", label: "Hrana" },
        { value: "igračke", label: "Igračke" },
        { value: "novac", label: "Novac" },
    ]

  return (
    <>
    <h1 className={style.naslov}>ADMIN PANEL</h1>
    <div className={style.container}>
        <div className={style["left-col"]}>
            <img src="/images/paw1.png" alt="" className={style.logo}/>
        </div>
        <div className={style["right-col"]}>
            <div className={style.info}>
                <h1>Unos nove životinje</h1>
                <p>
                    Popunite sve podatke kako bi dodali novu životinju u sustav!
                </p>
            </div>

            <form className={style.contactform}>
                <label htmlFor="" className={style.label}>IME</label>
                <input type="text" placeholder='Unesite ime životinje' className={style.input}/>
                
                <span className={style.label}>VRSTA ŽIVOTINJE</span>
                <div className={style.radioforma}>
                    <div>
                        <input type="radio" id="pas" name="vrsta" value="Pas" className={style.tockica}/>
                        <label htmlFor="pas">Pas</label>
                    </div>
                    <div>
                        <input type="radio" id="macka" name="vrsta" value="Mačka" className={style.tockica}/>
                        <label htmlFor="pas">Mačka</label>
                    </div>
                    <div>
                        <input type="radio" id="ostalo" name="vrsta" value="Ostalo" className={style.tockica}/>
                        <label htmlFor="pas">Ostalo</label>
                    </div>
                </div>

                <label htmlFor="" className={style.label}>GODINE</label>
                <input type="number" placeholder='Unesite dob životinje' className={style.input}/>

                <label htmlFor="" className={style.label}>OPIS</label>
                <textarea name="" id="" cols="30" rows="6" placeholder='Kratki opis životinje i njenog stanja' className={style.textarea}>
                </textarea>

                <div className={style.check}>
                    <input type="checkbox" className={style.tockica} id="cipiran" name="cipiran" value="Čipiran"/>
                    <label htmlFor="cipiran" className={style.label}>Čipiran</label>
                </div>

                <div className={style.datum}>
                    <label htmlFor="">Pregled:</label>
                    <input type="date" className={style.dateinput}/>
                </div>

                <button className={style.button}>POŠALJI DONACIJU</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Unos