import Navbar from './components/Navbar'
import Movies from './components/Movies'
import MainBody from './components/MainBody';
import './App.css';

function App() {
 
  return (
    <>
    <Navbar title="MoviesBay"/>
    <MainBody/>
    <Movies/>
    </>
  );
}

export default App;
