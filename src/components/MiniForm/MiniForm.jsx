import style from './miniform.module.css'

function MiniForm() {
  return (
    <div>
      <form className={style.contactform}>
        <label htmlFor="" className={style.label}>NASLOV</label>
        <input type="text" placeholder='Unesite naslov' className={style.input}/>

        <label htmlFor="" className={style.label}>TEKST</label>
        <textarea name="" id="" cols="30" rows="6" placeholder='Unesite vaš tekst...' className={style.textarea}>
        </textarea>

        <div className={style.check}>
          <input type="checkbox" className={style.tockica} id="vazno" name="vazno" value="true"/>
          <label htmlFor="vazan" className={style.label}>VAŽNO</label>
        </div>

        <button className={style.button}>SPREMI</button>
      </form>
    </div>
  )
}

export default MiniForm