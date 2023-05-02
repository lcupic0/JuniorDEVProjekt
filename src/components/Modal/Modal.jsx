import style from './modal.module.css'

function Modal() {
  return (
    <div className={style.modal}>
        <div className={style.modalcontent}>
            <span className={style.close}>&times;</span>
            <div>
                <div className={style.gore}>
                    <img src="images/pas3.jpg" alt="" className={style.slika}/>
                    <div>
                        <p><span style={{fontWeight: 'bold'}}>Ime:</span> Doggie</p>
                        <p><span style={{fontWeight: 'bold'}}>Vrsta:</span> Pas</p>
                        <p><span style={{fontWeight: 'bold'}}>Status:</span> NIJE udomljen!</p>
                    </div>
                </div>
                <p><span style={{fontWeight: 'bold'}}>Opis:</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Quo incidunt aperiam nobis libero rerum labore consequatur enim veritatis obcaecati, laborum nam, 
                   temporibus natus ipsam est tempora ex velit. Dolor, temporibus.
                </p>
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