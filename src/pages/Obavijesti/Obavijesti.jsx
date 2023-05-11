import { useEffect, useState } from 'react';
import MiniForm from '../../components/MiniForm/MiniForm';
import style from './obavijesti.module.css'
import Obavijest from '../../components/Obavijest/Obavijest';
import axios from "axios"
import { useContext } from 'react';
import AdminContext from '../../context/Context';

function Obavijesti() {

  const [formExpand, toggleFormExpand] = useState(false);

  const [obavijesti, setObavijesti] = useState([]);
  const {admin, setAdmin} = useContext(AdminContext);

  useEffect(() => {
    axios.get("http://localhost:3001/obavijesti")
      .then((result) => {
        setObavijesti(result.data);
    });
  }, []);

  console.log(obavijesti);
    
  return (
    <div className={style.obavijesti}>
        <h1>OBAVIJESTI</h1>
        
        <button className={style.button} 
          onClick={() => toggleFormExpand(!formExpand)}
          style={{backgroundColor: formExpand ? "red" : ""}}
        >
          {formExpand ? "Zatvori prozor" : "Nova obavijest"}
        </button>
      
        {formExpand && (<MiniForm setObavijesti={setObavijesti} toggleFormExpand={toggleFormExpand} admin={admin}/>)}

        {obavijesti.map(obavijest => (
          <Obavijest key={obavijest.id} obavijest={obavijest} setObavijesti={setObavijesti} admin={admin}/>
        ))}

    </div>
  )
}

export default Obavijesti