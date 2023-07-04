import Navbar from './components/Navbar'
import Movies from './components/Movies'
import MainBody from './components/MainBody';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar title="MoviesBay"/>
    <Routes>
      <Route exact path='/' element={ <MainBody/>}/>
      <Route exact path='/movies' element={ <Movies/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
