import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getCost, getTrips} from './ferry'

function App() {
  return (
    <div className="App">
      <FerryForm />
      <TripsAnswer geese={1} corn={2}/>    
      </div>
  );
}

const TripsAnswer = ({geese, corn}) => {
  return <div>
<div>
  <span>list of trips:</span>
  {getTrips(geese, corn)}
</div>
  </div>
} 

const FerryForm = () => {
  return <div>
    <label for="geese">Number of geese:</label> <input type="number" id="geese" name="geese" min="0"/>
    <label for="corn">Number of bags of corn:</label> <input type="number" id="corn" name="corn" min="0"/>
  </div>
}


export default App;
