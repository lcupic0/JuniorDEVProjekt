import style from './pocetna.module.css'
import Carousel from '../../components/Carousel/Carousel'
import PomocniNav from '../../components/PomocniNav/PomocniNav'
import Form from '../../components/Form/Form'

function Pocetna() {
  return (
    <>
      <Carousel />
      <PomocniNav />
      <Form />
    </>
  )
}

export default Pocetna