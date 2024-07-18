import './TravelPlan.css';
import TravelPlanPeriod from './travelPlanPeriod/TravelPlanPeriod';

const TravelPlan = ({travelPlan}) => {
  return (
    <ul className="TravelPlan">
      {Object.entries(travelPlan).map(([dayKey, dayDetails], index) => {
        const dayId = `Day ${index + 1}`;

        return (
          <li key={dayKey} className="TravelPlan-day">
            <h2 className="TravelPlan-day-title">
              {dayDetails.title}
              <p className="TravelPlan-day-id">
                {dayId}
              </p>
            </h2>

            <ul className="TravelPlan-day-activity-periods">
              <TravelPlanPeriod
                key={dayKey + "morning"}
                dayKey={dayKey}
                period={"Morning"}
                periodPlan={travelPlan[dayKey].activities.morning}
              />
              <TravelPlanPeriod
                key={dayKey + "afternoon"}
                dayKey={dayKey}
                period={"Afternoon"}
                periodPlan={travelPlan[dayKey].activities.afternoon}
              />
              <TravelPlanPeriod
                key={dayKey + "night"}
                dayKey={dayKey}
                period={"Night"}
                periodPlan={travelPlan[dayKey].activities.night}
              />
            </ul>
          </li>
        )
      })}
    </ul>
  );
}

export default TravelPlan;