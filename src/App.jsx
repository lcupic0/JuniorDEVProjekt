import { useState } from 'react'
import Pocetna from './pages/Pocetna'
import Navigation from './components/Navigation/Navigation'
import Map from './components/Map/Map'
import Form from './components/Form/Form'
/*
$ npm install swiper

*/

function App() {

  return (
    <>
      <Navigation />
      <Pocetna />
    </>
  )
}

export default App
