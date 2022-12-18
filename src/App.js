import { useState } from 'react';
import './App.css';
import AddLunchItem from './components/AddLunchItem';
import ShowLunchItem from './components/ShowLunchItem';

function App(props) {
  const [lunchList, setLunchList] = useState(props.lunchList)
  const viewLunchList=lunchList.map((item)=> (
    <ShowLunchItem 
      id={item.id}
      dish={item.dish}
      ingredient1={item.ingredient1}
      ingredient2={item.ingredient2}
      key={item.id}
    />
  ))


  return (
    <div className="App">  
    <h1>Lunch CRUD with React</h1> 
    <AddLunchItem />
    <h2>List of Lunch items</h2>
    <div className='listItem'>
        <ul className="list-group" >
            <li id={props.id} className="list-group-item list-group-item-dark">
                <div className="d-flex mb-3 justify-content-around">
                    <div>dish</div>
                    <div>ingredient 1</div>
                    <div>ingredient 2</div>
                    <div>Actions</div>
                </div>              
            </li> 
            {viewLunchList}
          </ul>
      </div>
    </div>
  );
}

export default App;
