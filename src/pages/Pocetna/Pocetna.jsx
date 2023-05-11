import style from './pocetna.module.css'
import Carousel from '../../components/Carousel/Carousel'
import PomocniNav from '../../components/PomocniNav/PomocniNav'
import Form from '../../components/Form/Form'
import Maps from '../../components/Maps/Maps'

function Pocetna() {
  return (
    <>
      <Carousel />
      <PomocniNav />
      <Maps />
      <Form />
    </>
  )
}

export default Pocetna