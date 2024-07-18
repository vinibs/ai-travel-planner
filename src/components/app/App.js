import './App.css';
import { useState } from 'react';
import ScrollingMap from '../scrollingMap/ScrollingMap';
import InputPage from '../../pages/inputPage/InputPage';
import TravelPlanPage from '../../pages/travelPlanPage/TravelPlanPage';
import { generateTravelPlan } from '../../services/generateTravelPlan';

function App() {
  const [destination, setDestination] = useState();
  const [stayingDays, setStayingDays] = useState();
  const [travelPlan, setTravelPlan] = useState({});

  const confirmDaysAction = (days) => {
    setStayingDays(days);
    getTravelPlan(days);
  }

  const getTravelPlan = (days = null) => {
    generateTravelPlan({destination, stayingDays: (days ?? stayingDays)})
    .then((travelPlan) => {
      setTravelPlan(travelPlan);
    });
  }

  const reset = () => {
    setDestination('');
    setStayingDays('');
    setTravelPlan({});
  }

  return (
    <div className="App">
      <ScrollingMap />
      { ((!destination || !stayingDays) && (
        <InputPage
          destination={destination}
          setDestination={setDestination}
          stayingDays={stayingDays}
          confirmDaysAction={confirmDaysAction} />
      )) || (
        <TravelPlanPage
            destination={destination}
            stayingDays={stayingDays}
            travelPlan={travelPlan}
            getTravelPlan={getTravelPlan}
            reset={reset}
          />
      )}
    </div>
  );
}

export default App;
