import { useState } from 'react'
import Pocetna from './pages/Pocetna/Pocetna'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Popis from './pages/Popis/Popis'
import Donacije from './pages/Donacije/Donacije'
import Unos from './pages/Unos/Unos'
import Obavijesti from './pages/Obavijesti/Obavijesti'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminContext from './context/Context'

function App() {

  // Za korištenje ADMIN privilegija - pritisnite dugme "AdminLogin" u NAVBAR-u.

  // U localStorage upisemo vrijednost admina.
  // Tako da budemo uvijek ulogirani u slucaju refresha stranice ili daljnjeg koristenja.

  const [admin, setAdmin] = useState(localStorage.getItem("admin") || false);

  console.log(admin);

  return (
    <BrowserRouter>
      <AdminContext.Provider value={{admin, setAdmin}}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Pocetna />} />    
          <Route path="/popis" element={<Popis />} />    
          <Route path="/donacije" element={<Donacije />} />    
          <Route path="/obavijesti" element={<Obavijesti />} />    
          <Route path="/unos" element={admin ? <Unos /> : <Pocetna />} />    
        </Routes>
      </AdminContext.Provider>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

/*
$ npm install swiper
$ npm install react-router-dom@latest       -> Ovo je v6 verzija programa
$ npm install -g json-server                
$ npm install dayjs                        -> za datume
$ npm install --save @react-google-maps/api
*/

/*
  TODO LIST
  - Napraviti Reusable forme.
  - Prilagoditi je za komponentu "Unos" (Unutar nje to napraviti).
  - U ciloj aplikaciji pokušati srediti te forme da budu reusable.
  
  - Modal -> Smisliti kako to napraviti (Mozda preko map funkcije generirati modale?)
  - Početi dodavati "Backend".
  - Po mogućnosti pokušati iskoristiti MongoDB za nekakvu jednostavnu bazu - provjeriti njihove tipove podataka.
  - Nesto poput ContextAPI-ja za admina odnosno user-a. 
*/