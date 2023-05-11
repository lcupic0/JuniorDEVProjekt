import { useState } from 'react'
import style from './unos.module.css'
import axios from "axios"

function Unos() {

    const [input, setInput] = useState({
        id: "",
        ime: "",
        vrsta: "",
        cip: false,
        godine: "",
        opis: "",
        pregled: "",
        udomljen: "false",
        image: "",
    })

    const inputChange = (event) => {
        if(event.target.name==="cip"){
            console.log(event)
            const {name,checked} = event.target;
            setInput({...input, [name]: checked});
        }else{
            const {name,value} = event.target;
            setInput({...input, [name]: value});
        }
    }

    console.log(input);

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.replace("/popis");

        axios.post("http://localhost:3001/zivotinje", input)
        .then((res) => console.log(res));
    }

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

            <form className={style.contactform} onSubmit={handleSubmit}>
                <label htmlFor="ime" className={style.label}>IME</label>
                <input type="text" id="ime" name="ime" placeholder='Unesite ime životinje' onChange={inputChange} className={style.input} required/>

                <label htmlFor="slika" className={style.label}>SLIKA</label>
                <input type="text" id="slika" name="image" placeholder='Unesite naziv slike (slika1.jpg)' onChange={inputChange} className={style.input} required/>
                
                <span className={style.label}>VRSTA ŽIVOTINJE</span>
                <div className={style.radioforma}>
                    <div>
                        <input type="radio" id="pas" name="vrsta" value="pas" onChange={inputChange} className={style.tockica} required/>
                        <label htmlFor="pas">Pas</label>
                    </div>
                    <div>
                        <input type="radio" id="macka" name="vrsta" value="mačka" onChange={inputChange} className={style.tockica}/>
                        <label htmlFor="macka">Mačka</label>
                    </div>
                    <div>
                        <input type="radio" id="ostalo" name="vrsta" value="ostalo" onChange={inputChange} className={style.tockica}/>
                        <label htmlFor="ostalo">Ostalo</label>
                    </div>
                </div>

                <label htmlFor="godine" className={style.label}>GODINE</label>
                <input type="number" id="godine" name="godine" value={input.godine} onChange={inputChange} placeholder='Unesite dob životinje' className={style.input} required/>

                <label htmlFor="" className={style.label}>OPIS</label>
                <textarea name="opis" id="opis" cols="30" rows="6" value={input.opis} onChange={inputChange} placeholder='Kratki opis životinje i njenog stanja' className={style.textarea}>
                </textarea>

                <div className={style.check}>
                    <input type="checkbox" className={style.tockica} id="cipiran" name="cip" value={input.cip} onChange={inputChange} />
                    <label htmlFor="cipiran" className={style.label}>Čipiran</label>
                </div>

                <div className={style.datum}>
                    <label htmlFor="date">Pregled:</label>
                    <input type="date" className={style.dateinput} id="date" name="pregled" onChange={inputChange} required/>
                </div>

                <button className={style.button}>UNESI ŽIVOTINJU</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Unos