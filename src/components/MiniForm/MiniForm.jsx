import { useState } from 'react';
import axios from "axios"
import style from './miniform.module.css'

function MiniForm({ setObavijesti, toggleFormExpand, admin}) {

  const datumD = new Date();
  const formatiraniDatum = `${datumD.getDate()}.${datumD.getMonth()+1}.${datumD.getFullYear()}`

  const initalState = {
    id: "",
    naslov: "",
    datum: formatiraniDatum,
    tekst: "",
    vazno: false
  };

  const [input, setInput] = useState(initalState);

  const handleChange = (event) => {
    
    if(event.target.name === "vazno"){
      console.log(event)
      const {name, checked} = event.target;
      setInput({...input, [name]: checked});
    }else{
      const {name, value} = event.target;
      setInput({...input, [name]: value});
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:3001/obavijesti", input);
    const refreshObavijesti = await axios.get("http://localhost:3001/obavijesti");
    setObavijesti(refreshObavijesti.data);
    toggleFormExpand(false);
  }

  return (
    <div>
      <form className={style.contactform} onSubmit={handleSubmit}>
        <label htmlFor="naslov" className={style.label}>NASLOV</label>
        <input type="text" id="naslov" name="naslov" placeholder='Unesite naslov' className={style.input} onChange={handleChange}/>

        <label htmlFor="tekst" className={style.label}>TEKST</label>
        <textarea name="tekst" id="tekst" cols="30" rows="6" placeholder='Unesite vaš tekst...' className={style.textarea} onChange={handleChange}>
        </textarea>

        {admin && (
          <div className={style.check}>
            <input type="checkbox" value={input.vazno} name="vazno" id="vazno" className={style.tockica} onChange={handleChange} />
            <label htmlFor="vazno" className={style.label}>VAŽNO</label>
          </div>
        )}

        <button className={style.button}>SPREMI</button>
      </form>
    </div>
  )
}

export default MiniForm