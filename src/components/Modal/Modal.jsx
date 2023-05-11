import { useEffect, useState } from 'react';
import style from './modal.module.css'
import axios from "axios"
import { useContext } from 'react';
import AdminContext from '../../context/Context';

function Modal({selectedAnimal, setSelectedAnimal, zivotinje, postaviZivotinje}) {

    const {admin, setAdmin} = useContext(AdminContext);

    const listaVrsta = ["pas","mačka"];

    const [updateMode, setUpdateMode] = useState(false);
    const [input, setInput] = useState({
        id: selectedAnimal.id,
        ime: selectedAnimal.ime,
        vrsta: selectedAnimal.vrsta,
        cip: selectedAnimal.cip,
        godine: selectedAnimal.godine,
        opis: selectedAnimal.opis,
        pregled: selectedAnimal.pregled,
        udomljen: selectedAnimal.udomljen,
        image: selectedAnimal.image,
    });

    const handleClose = () => {
        setSelectedAnimal();
    }

    const inputChange = (event) => {
        const {name,value} = event.target;
        setInput({...input, [name]: value});
    }

    const handleUpdate = async () => {
        await axios.put(`http://localhost:3001/zivotinje/${selectedAnimal.id}`, input)
        .then(res => {
            setSelectedAnimal(res.data);
            return res.data;
        })
        .then(editedAnimal => { // Moglo se i umjesto ovoga pisati const result = await axios.get("http://localhost:3001/animals"); pa postaviZivotinje(result.data);
            const updatedAnimals = zivotinje.map(z => {
                if(z.id === editedAnimal.id){
                    return editedAnimal; // Zamijeni originalnu s updateanom zivotinjom
                }else{
                    return z; // Vrati originalnu zivotinju
                }
            });
            postaviZivotinje(updatedAnimals);
            setUpdateMode(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleUdomi = async () => {
        const promjena = selectedAnimal;
        promjena.udomljen = "true";
        await axios.put(`http://localhost:3001/zivotinje/${selectedAnimal.id}`, promjena);
        const noviRezultati = await axios.get("http://localhost:3001/zivotinje")
        .then(res => postaviZivotinje(res.data));
    }

  return (
    <div className={style.modal}>
        {updateMode ? (
            <div className={style.modalcontent}>
                <div>
                    <div className={style.gore}>
                        <img src={`images/${selectedAnimal.image}`} alt="" className={style.slika}/>
                        <div>
                            <div>
                                <span style={{fontWeight: 'bold'}}>Ime: </span>
                                <input type="text" id="ime" name="ime" value={input.ime} placeholder='Unesite ime životinje' onChange={inputChange} className={style.input} required/>
                            </div>
                            <div>
                                <span style={{fontWeight: 'bold'}}>Vrsta: </span>
                                <select name="vrsta" value={input.vrsta} onChange={inputChange} required>
                                    {listaVrsta.map((vrsta) => (
                                        <option key={vrsta} value={vrsta}> 
                                            {vrsta}
                                        </option>
                                    ))}
                                </select>                            
                            </div>
                            <div>
                                <span style={{fontWeight: 'bold'}}>Status: </span>
                                <select name="udomljen" value={input.udomljen} onChange={inputChange} required>
                                    <option value="true">Udomljen</option>
                                    <option value="false">Nije udomljen</option>
                                </select>                   
                            </div>
                            <div>
                                <span style={{fontWeight: 'bold'}}>Čipiran: </span>
                                <select name="cip" value={input.cip} onChange={inputChange} required>
                                    <option value={true}>Da</option>
                                    <option value={false}>Ne</option>
                                </select>                 
                            </div>
                            <div>
                                <span style={{fontWeight: 'bold'}}>Pregled: </span>
                                <input type="date" id="date" name="pregled" value={input.pregled} onChange={inputChange} required/>                
                            </div>
                            <div>
                                <span style={{fontWeight: 'bold'}}>Godine: </span>
                                <input type="number" id="godine" name="godine" value={input.godine} onChange={inputChange} placeholder='Unesite dob životinje' required/>
                            </div>
                        </div>
                    </div>
                    <p><span style={{fontWeight: 'bold'}}>Opis:</span></p>
                    <textarea name="opis" id="opis" cols="30" rows="6" value={input.opis} onChange={inputChange}>
                    </textarea>
                    <div className={style.botuni}>
                        <button style={{backgroundColor: '#0f914e'}} onClick={handleUpdate}>SPREMI</button>
                    </div>
                </div>
            </div>
        ) : (
            <div className={style.modalcontent}>
                <span className={style.close} onClick={handleClose}>&times;</span>
                <div>
                    <div className={style.gore}>
                        <img src={`images/${selectedAnimal.image}`} alt="" className={style.slika}/>
                        <div>
                            <p><span style={{fontWeight: 'bold'}}>Ime:</span> {selectedAnimal.ime}</p>
                            <p><span style={{fontWeight: 'bold'}}>Vrsta:</span> {selectedAnimal.vrsta}</p>
                            <p><span style={{fontWeight: 'bold'}}>Status:</span> {selectedAnimal.udomljen ==="true" ? "Udomljen" : "Nije udomljen"}</p>
                            <p><span style={{fontWeight: 'bold'}}>Čipiran:</span> {selectedAnimal.cip ? "Da" : "Ne"}</p>
                            <p><span style={{fontWeight: 'bold'}}>Pregled:</span> {selectedAnimal.pregled}</p>
                            <p><span style={{fontWeight: 'bold'}}>Godine:</span> {selectedAnimal.godine}</p>
                        </div>
                    </div>
                    <p><span style={{fontWeight: 'bold'}}>Opis:</span></p>
                    <p>{selectedAnimal.opis}</p>
                    <div className={style.botuni}>
                        {selectedAnimal.udomljen === "false" ? (<button style={{backgroundColor: 'var(--clr-accent-500)'}} onClick={handleUdomi}>Udomi</button>) : ("")}
                        {admin && <button style={{backgroundColor: '#0f914e'}} onClick={() => setUpdateMode(true)}>Uredi</button>}
                    </div>
                </div>
            </div>
        )}
        
    </div>
  )
}

export default Modal