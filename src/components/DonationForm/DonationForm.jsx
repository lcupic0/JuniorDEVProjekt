import { useState } from 'react'
import style from './donationform.module.css'
import axios from "axios"



function DonationForm({setDonacije, admin, toggleFormExpand}) {

    const initalState = {
        id: "",
        kategorija: admin ? "trazi" : "nudi", // Provjeriti moze li se ovo malo bolje realizirati?
        tip: "",
        vrijednost: "",
        opis: ""
    }
    const options = [
        { value: "Hrana", label: "Hrana" },
        { value: "Igračke", label: "Igračke" },
        { value: "Novac", label: "Novac" },
    ]

    const [input, setInput] = useState(initalState);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value});
    }

    const createDonation = async (event) => {
        event.preventDefault();
        

        await axios.post("http://localhost:3001/donacije", input);
        const refreshDonacija = await axios.get("http://localhost:3001/donacije");
        setDonacije(refreshDonacija.data);
        toggleFormExpand(false);
    }

    console.log(input);
    
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

            <form className={style.contactform} onSubmit={createDonation}>
                <label htmlFor="tip" className={style.label}>TIP DONACIJE</label>
                <select className={style.input} id="tip" name="tip" value={input.tip} onChange={handleChange} required>
                    <option value="">Biraj</option>
                    {options.map((option) => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                </select>
                
                <label htmlFor="vrijednost" className={style.label}>VRIJEDNOST</label>
                <input type="number" id="vrijednost" placeholder='1 (&euro;)' name="vrijednost" value={input.vrijednost} onChange={handleChange} className={style.input} />

                <label htmlFor="opis" className={style.label}>OPIS</label>
                <textarea name="opis" id="opis" cols="30" rows="6" placeholder='Opis vaše donacije' value={input.opis} onChange={handleChange} className={style.textarea}>
                </textarea>

                <button className={style.button}>POŠALJI DONACIJU</button>
            </form>
        </div>
    </div>
  )
}

export default DonationForm