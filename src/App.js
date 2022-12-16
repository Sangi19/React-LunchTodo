import logo from './logo.svg';
import './App.css';
import Dish from './components/Dish';

function App() {
  
  


  return (
    <div className="App">    
        <input 
        id="lunchName"
        type="text" 
        placeholder='lunch Name' />
        
        <input 
        id="ing1"
        type="text" 
        placeholder='ingredient 1' />
        <input 
        id="ing2"
        type="text" 
        placeholder='ingredien 2' />
    </div>
  );
}

export default App;
