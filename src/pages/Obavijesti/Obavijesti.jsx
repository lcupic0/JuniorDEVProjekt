import { useState } from 'react';
import MiniForm from '../../components/MiniForm/MiniForm';
import style from './obavijesti.module.css'
import Obavijest from '../../components/Obavijest/Obavijest';


function Obavijesti() {

  const [formExpand, toggleFormExpand] = useState(false);
    
  return (
    <div className={style.obavijesti}>
        <h1>OBAVIJESTI</h1>
        <button className={style.button} 
            onClick={() => toggleFormExpand(!formExpand)}
            style={{backgroundColor: formExpand ? "red" : ""}}
        >
            {formExpand ? "Zatvori prozor" : "Nova obavijest"}
        </button>

        {formExpand && (<MiniForm />)}

        <Obavijest />
        <Obavijest />

    </div>
  )
}

export default Obavijesti