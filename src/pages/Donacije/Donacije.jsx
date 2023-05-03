import Donacija from '../../components/Donacija/Donacija'
import Form from '../../components/Form/Form'

import style from './donacije.module.css'

function Donacije() {
  return (
    <div className={style.donacije}>
        <button className={style.button}>Nova donacija</button>
        <Form />
        <Donacija />
        <Donacija />
    </div>
  )
}

export default Donacije