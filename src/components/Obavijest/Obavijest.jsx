import style from './obavijest.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function Obavijest({obavijest, setObavijesti, admin}) {

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/obavijesti/${obavijest.id}`)
    const refreshObavijesti = await axios.get("http://localhost:3001/obavijesti");
    setObavijesti(refreshObavijesti.data);
  }
  
  return (
    <div className={style.obavijest}>
      <div className={style.naslovobavijesti}>
          <h2>{obavijest.naslov}</h2>
          <span>{obavijest.datum}</span>
      </div>

      <p>{obavijest.tekst}</p>

      
        <div className={style.upozorenje}>
          {admin && (<FontAwesomeIcon icon={faTrashCan} className={style.obrisi} onClick={handleDelete}/>)}
          {obavijest.vazno && 
          (<div>
            <FontAwesomeIcon icon={faTriangleExclamation} className={style.ikona}/>
            <span>VAŽNO!</span>
          </div>
          )}
        </div>
    
    </div>
  )
}

export default Obavijest