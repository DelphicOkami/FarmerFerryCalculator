import React,{useState} from 'react';
import './App.css';
import {getCost, getTrips} from './ferry'

function App() {
  return (
    <div className="App">
      <FerryForm />
    </div>
    );
  }
  
  const TripsAnswer = ({geese, corn}) => {
    var tripData = getTrips(geese, corn)
    return <div>
      <div>
        <span>Trip cost:</span>
        £{(tripData.trips * 0.25).toFixed(2)}<br/>
        <span>List of trips:</span>
        {tripData.tripList}
      </div>
    </div>
  } 
  
  const FerryForm = () => {
    const [geese, setGeese] = useState(0)
    const [corn, setCorn] = useState(0)
    return <div>
      <div>
        <label for="geese">Number of geese:</label> <input type="number" onChange={e => setGeese(e.target.value)} id="geese"/>
      </div>
      <div>
        <label for="corn">Number of bags of corn:</label> <input type="number"  onChange={e => setCorn(e.target.value)} id="corn"/>
      </div>
      <TripsAnswer geese={geese} corn={corn}/>
    </div>
  }
  
  
  export default App;
  