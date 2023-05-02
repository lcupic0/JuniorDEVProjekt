import style from './donacije.module.css'

function Donacije() {
  return (
    <div className={style.donacije}>
        <button className={style.button}>Nova donacija</button>
        <div className={style.donacija}>
            <h1 className={style.labeltablice}>Tražimo:</h1>
            <table className={style.tablica}>
                <thead>
                    <tr className={style.red}>
                        <th>Tip</th>
                        <th>Vrijednost</th>
                        <th>Opis</th>
                        <th>Opcije</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={style.red}>
                        <td>Hrana</td>
                        <td>10&euro;</td>
                        <td><p>Hrana za održavanje dfasbre dlake aafsfasfasfssa fasf asfasfffffffffafssfa asf fa s</p></td>
                        <td className={style.botunired}>
                            <button>Doniraj</button>
                            <div style={{display: "none"}} className={style.botuniadmin}>
                                <button>Donirano</button>
                                <button>Izbriši</button>
                            </div>
                        </td>
                    </tr>
                    <tr className={style.red}>
                        <td>Hrana</td>
                        <td>10&euro;</td>
                        <td><p>Hrana za održavanje dfasbre dlake aafsfasfasfssa fasf asfasfffffffffafssfa asf fa s</p></td>
                        <td className={style.botunired}>
                            <button>Doniraj</button>
                            <div style={{display: "none"}} className={style.botuniadmin}>
                                <button>Donirano</button>
                                <button>Izbriši</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Donacije