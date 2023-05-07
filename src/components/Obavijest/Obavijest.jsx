import style from './obavijest.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function Obavijest() {
  return (
    <div className={style.obavijest}>
        <div className={style.naslovobavijesti}>
            <h2>Pronađen Pas</h2>
            <span>15.04.2023</span>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis eos cum, repellendus corrupti inventore quasi laudantium sequi minus nesciunt est, accusamus rerum beatae soluta quam assumenda, facere nostrum saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia laudantium minima recusandae quos qui neque deleniti! Ab quia obcaecati culpa praesentium consequuntur ullam beatae pariatur illo, atque voluptatum ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur deserunt quod veniam impedit, ducimus, fuga commodi debitis modi vel repellendus perferendis amet, excepturi obcaecati iste saepe explicabo voluptatum atque nam.</p>

        <div className={style.upozorenje}>
            <FontAwesomeIcon icon={faTriangleExclamation} className={style.ikona}/>
            <span>VAŽNO!</span>
        </div>
    </div>
  )
}

export default Obavijest