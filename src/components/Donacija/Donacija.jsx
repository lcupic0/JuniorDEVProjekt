import style from './donacija.module.css'
import axios from "axios"
import { useState, useEffect } from 'react';

function Donacija({donacije, setDonacije, admin}) {

    const deleteDonation = async (donacija) => {
        await axios.delete(`http://localhost:3001/donacije/${donacija.id}`);
        const refreshDonacija = await axios.get("http://localhost:3001/donacije");
        setDonacije(refreshDonacija.data);
    }

    const updateDonation = async (donacija) => {
        const temp = donacija;
        if(donacija.kategorija === "donirano"){
            temp.kategorija = "trazi"
        }else{
            temp.kategorija = "donirano";
        }

        await axios.put(`http://localhost:3001/donacije/${donacija.id}`, temp);
        const refreshDonacija = await axios.get("http://localhost:3001/donacije");
        setDonacije(refreshDonacija.data);
    }

  return (
    <div className={style.donacija}>
        <table className={style.tablica}>
            <thead>
                <tr className={style.red}>
                    <th>Tip</th>
                    <th>Vrijednost</th>
                    <th>Opis</th>
                    <th>Opcije</th>
                </tr>
            </thead>
            {/* Za svaku donaciju nekog tipa ispiši sve donacije */}
            <tbody> 
                {donacije.map(donacija => (

                <tr className={style.red}>
                    <td>{donacija.tip}</td>
                    <td>{donacija.vrijednost}&euro;</td>
                    <td><p>{donacija.opis}</p></td>
                    <td className={style.botunired}>
                        {donacija.kategorija === "trazi" && !admin ? (<button onClick={() => updateDonation(donacija)}>Doniraj</button>) : ("")}
                        {donacija.kategorija === "trazi" && admin ? (
                            <div className={style.botuniadmin}>
                            <button onClick={() => updateDonation(donacija)}>Donirano</button>
                            <button onClick={() => deleteDonation(donacija)}>Izbriši</button>
                        </div>
                        ) : ("")}
                        
                        {donacija.kategorija === "nudi" && admin ? (<button onClick={() => updateDonation(donacija)}>Prihvati</button>) : ("")}
                        
                        {donacija.kategorija === "donirano" && admin ? (
                            <div className={style.botuniadmin}>
                                <button onClick={() => updateDonation(donacija)}>Ponovi</button>
                                <button onClick={() => deleteDonation(donacija)}>Izbriši</button>
                            </div>
                        ) : ("")}
                        
                    </td>
                </tr>
                
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Donacija