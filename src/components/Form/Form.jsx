import style from './form.module.css'

function Form() {
  return (
    <div className={style.container}>
        <div className={style["left-col"]}>
            <img src="/images/paw.png" alt="" className={style.logo}/>
        </div>
        <div className={style["right-col"]}>
            <div className={style.info}>
                <h1>KONTAKTIRAJTE NAS</h1>
                <p>Imate bilo kakav oblik pitanja za nas?
                    Želite udomiti jednu ili vište životinja?
                    Ako želite prijaviti napuštenu životinju? Obratite nam se!
                </p>
            </div>
            <form>
                <label htmlFor="">IME I PREZIME</label>
                <input type="text" placeholder='Unesite vaše ime i prezime'/>
                
                <label htmlFor="">EMAIL</label>
                <input type="email" placeholder='Vaša email adresa'/>

                <label htmlFor="">MESSAGE</label>
                <textarea name="" id="" cols="30" rows="6" placeholder='Unesite vašu poruku'>
                </textarea>

                <button>POŠALJI</button>
            </form>
        </div>
    </div>
  )
}

export default Form