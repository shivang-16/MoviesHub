import React, {useState} from 'react';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import MainBody from './components/MainBody';
import TvShows from './components/TvShows';
import Series from './components/Series';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  const [progress, setProgress] = useState(0)
 
  return (
    <>
    <BrowserRouter>
    <LoadingBar
        color='#f11946'
        progress={progress}
            />
    
    <Navbar title="MoviesBay"/>
    <Routes>
      <Route exact path='/' element={ <MainBody setProgress={setProgress}/>}/>
      <Route exact path='/movies' element={ <Movies setProgress={setProgress}/>}/>
      <Route exact path='/tvshows' element={ <TvShows setProgress={setProgress}/>}/>
      <Route exact path='/series' element={ <Series setProgress={setProgress}/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
