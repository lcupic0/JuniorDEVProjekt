import style from './modal.module.css'

function Modal({selectedAnimal, setSelectedAnimal}) {

    const handleClose = () => {
        setSelectedAnimal();
    }

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
                        <p><span style={{fontWeight: 'bold'}}>Status:</span> {selectedAnimal.udomljen ? "Udomljen" : "Nije udomljen"}</p>
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