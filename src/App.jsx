import { useState } from 'react'
import Pocetna from './pages/Pocetna/Pocetna'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Popis from './pages/Popis/Popis'

/*
$ npm install swiper

*/

function App() {

  return (
    <>
      <Navigation />
      <Popis />
      <Footer/>
    </>
  )
}

export default App
