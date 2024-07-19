import { useState, useEffect } from "react";
import './TravelPlanPage.css';
import LoadingDots from "../../components/loadingDots/LoadingDots";
import TravelPlan from "../../components/travelPlan/TravelPlan";
import ResetButton from "../../components/buttons/resetButton/ResetButton";
import RefreshButton from "../../components/buttons/refreshButton/RefreshButton";

const TravelPlanPage = (
    {destination, stayingDays, travelPlan, reset, getTravelPlan}
) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(travelPlan).length > 0) {
      setLoading(false);
    }
  }, [travelPlan]);

  const regenerateTravelPlan = (event) => {
    event.preventDefault();
    setLoading(true);
    getTravelPlan();
  }

  return (
    <div className="TravelPlanPage">
      {loading && (
        <div className="TravelPlanPage-load-container">
          <LoadingDots />
        </div>
      )}

      {!loading && ((Object.keys(travelPlan).includes('error') && (
        <p className="TravelPlanPage-error">
          It was not possible to generate a travel plan for {destination}.
          Please try again.
        </p>
      )) || (
        <>
          <h1 className="TravelPlanPage-title">
            {stayingDays} days in {destination}
            <p className="TravelPlanPage-title-subtitle">
              Travel plan
            </p>
          </h1>

          <TravelPlan travelPlan={travelPlan} />
        </>
      ))}

      {!loading && (
        <div className="TravelPlanPage-button-area">
          <ResetButton onClick={reset}>
            Restart travel plan
          </ResetButton>
          <RefreshButton onClick={regenerateTravelPlan}>
            New plan for this travel
          </RefreshButton>
        </div>
      )}
    </div>
  );
}

export default TravelPlanPage;