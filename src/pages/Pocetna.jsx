import style from './pocetna.module.css'
import Carousel from '../components/Carousel/Carousel'
import PomocniNav from '../components/PomocniNav/PomocniNav'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

function Pocetna() {
  return (
    <>
      <Carousel />
      <PomocniNav />
      <Form />
      <Footer />
    </>
  )
}

export default Pocetna