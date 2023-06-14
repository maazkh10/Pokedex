
import './App.css';
import Topbar from './components/Topbar';
import Pokeball from './images/pokeball.png'
import Pokedex from './images/Pokedex_logo.png'

import Main from "./components/Main"
import './components/style.css'
function App() {
  return (
    
    <>
    <h1>
      Please Choose a pokemon
    </h1>
    <div className='balll'>
    <img  src={Pokeball} alt='' />
    <img className='poked' src={Pokedex} />
    </div>
    <Main />
   
    </>
   
    
  );
}

export default App;
