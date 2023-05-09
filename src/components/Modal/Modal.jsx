import { useEffect } from 'react';
import style from './modal.module.css'

function Modal({selectedAnimal, setSelectedAnimal}) {

    const handleClose = () => {
        setSelectedAnimal();
    }

    
    const handleKeyDown = (event) => {
        if(event.keyCode === 27){
            setSelectedAnimal();
        }
    }
    document.addEventListener('keydown', handleKeyDown);

  return (
    <div className={style.modal}>
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
                    <button style={{backgroundColor: 'var(--clr-accent-500)'}}>Udomi</button>
                    <button style={{backgroundColor: '#0f914e'}}>Uredi</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal