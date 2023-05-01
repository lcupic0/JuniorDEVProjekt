import style from './popis.module.css'

function Popis() {
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
                <div className={style.card}>Medo</div>
                <div className={style.card}>Medo</div>
                <div className={style.card}>Medo</div>
                <div className={style.card}>Medo</div>
                <div className={style.card}>Medo</div>
                <div className={style.card}>Medo</div>
            </div>
        </div>
    </div>
  )
}

export default Popis