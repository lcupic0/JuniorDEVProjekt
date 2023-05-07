import { useState } from 'react';
import Donacija from '../../components/Donacija/Donacija'
import DonationForm from '../../components/DonationForm/DonationForm';

import style from './donacije.module.css'

function Donacije() {

  const [formExpand, toggleFormExpand] = useState(false);

  return (
    <div className={style.donacije}>
        <button className={style.button} onClick={() => toggleFormExpand(!formExpand)}>{formExpand ? "Zatvori prozor" : "Nova donacija"}</button>
        {formExpand && (<DonationForm />)}
        <Donacija />
        <Donacija />
    </div>
  )
}

export default Donacije