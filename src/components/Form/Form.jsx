import style from './form.module.css'

function Form() {
  return (
    <div className={style.container}>
        <div className={style["left-col"]}>
            <img src="/images/paw2.png" alt="" className={style.logo}/>
        </div>
        <div className={style["right-col"]}>
            <div className={style.info}>
                <h1>KONTAKTIRAJTE NAS</h1>
                <p>Imate bilo kakav oblik pitanja za nas?
                    Želite udomiti jednu ili vište životinja?
                    Ako želite prijaviti napuštenu životinju? Obratite nam se!
                </p>
            </div>
            <form className={style.contactform}>
                <label htmlFor="" className={style.label}>IME I PREZIME</label>
                <input type="text" placeholder='Unesite vaše ime i prezime' className={style.input}/>
                
                <label htmlFor="" className={style.label}>EMAIL</label>
                <input type="email" placeholder='Vaša email adresa' className={style.input}/>

                <label htmlFor="" className={style.label}>MESSAGE</label>
                <textarea name="" id="" cols="30" rows="6" placeholder='Unesite vašu poruku' className={style.textarea}>
                </textarea>

                <button className={style.button}>POŠALJI</button>
            </form>
        </div>
    </div>
  )
}

export default Form