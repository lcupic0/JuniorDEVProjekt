import { useState } from 'react'
import Pocetna from './pages/Pocetna/Pocetna'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Popis from './pages/Popis/Popis'
import Donacije from './pages/Donacije/Donacije'

/*
$ npm install swiper

*/

function App() {

  return (
    <>
      <Navigation />
      <Donacije />
      <Footer/>
    </>
  )
}

export default App
