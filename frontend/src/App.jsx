import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from "./pages/signUp/signup"
import PageWelcome from './LandingPage';
import Home from './pages/homePage/Home';
import Carrinho from './pages/cartSystem/carrinho';
import Favoritos from './pages/favoritos/Favoritos';
import Sobre from './pages/sobre/Sobre';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageWelcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path='/inicio' element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
