import style from './donationform.module.css'

function DonationForm() {

    const options = [
        { value: "hrana", label: "Hrana" },
        { value: "igračke", label: "Igračke" },
        { value: "novac", label: "Novac" },
    ]

  return (
    <div className={style.container}>
        <div className={style["left-col"]}>
            <img src="/images/paw2.png" alt="" className={style.logo}/>
        </div>
        <div className={style["right-col"]}>
            <div className={style.info}>
                <h1>DONACIJE</h1>
                <p>Želite pomoći životinjama u nevolji i pridonijeti našoj udruzi?
                    Uputite donaciju u obliku novca ili hrane.
                    Sav novac biti će upućen u zbrinjavanje neusvojenih životinja i širenje našeg azila.
                </p>
            </div>

            <form className={style.contactform}>
                <label htmlFor="" className={style.label}>TIP DONACIJE</label>
                <select className={style.input}>
                    {options.map((option) => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                </select>
                
                <label htmlFor="" className={style.label}>VRIJEDNOST</label>
                <input type="number" placeholder='1 (&euro;)' className={style.input}/>

                <label htmlFor="" className={style.label}>OPIS</label>
                <textarea name="" id="" cols="30" rows="6" placeholder='Opis vaše donacije' className={style.textarea}>
                </textarea>

                <button className={style.button}>POŠALJI DONACIJU</button>
            </form>
        </div>
    </div>
  )
}

export default DonationForm