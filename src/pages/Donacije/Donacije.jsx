import { useEffect, useState } from 'react';
import Donacija from '../../components/Donacija/Donacija'
import DonationForm from '../../components/DonationForm/DonationForm';
import style from './donacije.module.css'
import axios from "axios"
import { useContext } from 'react';
import AdminContext from '../../context/Context';

function Donacije() {

  const [formExpand, toggleFormExpand] = useState(false);
  const [donacije, setDonacije] = useState([]);
  const {admin, setAdmin} = useContext(AdminContext);  

  useEffect(() => {
    axios.get("http://localhost:3001/donacije")
      .then((result) => {
        setDonacije(result.data);
      });
  }, []);

  return (
    <div className={style.donacije}>
        <button className={style.button} onClick={() => toggleFormExpand(!formExpand)}>{formExpand ? "Zatvori prozor" : "Nova donacija"}</button>
        {formExpand && (<DonationForm donacije={donacije} setDonacije={setDonacije} admin={admin} toggleFormExpand={toggleFormExpand}/>)}

        <h1>Donirano:</h1>
        <Donacija donacije={donacije.filter((donacija) => donacija.kategorija==="donirano")} setDonacije={setDonacije} admin={admin}/>

        <h1>Traži se:</h1>
        <Donacija donacije={donacije.filter((donacija) => donacija.kategorija==="trazi")} setDonacije={setDonacije} admin={admin}/>

        <h1>Nudi se:</h1>
        <Donacija donacije={donacije.filter((donacija) => donacija.kategorija==="nudi")} setDonacije={setDonacije} admin={admin}/>
    </div>
  )
}

export default Donacije