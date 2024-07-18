import './TravelPlanPeriod.css';
import TravelPlanActivity from '../travelPlanActivity/TravelPlanActivity';

const TravelPlanPeriod = ({dayKey, period, periodPlan}) => {
  const periodClass = period.toLowerCase();

  return (
    <li className="TravelPlanPeriod">
      <h4 className={`TravelPlanPeriod-title ${periodClass}`}>
        {period}
      </h4>
      <ul className="TravelPlanPeriod-activities">
        {(!!periodPlan && periodPlan.map((activity, _index) => (
          <TravelPlanActivity
            key={`${dayKey}-${activity.name.replace(' ', '_')}`}
            activity={activity}
            periodClass={periodClass}
          />
        ))) || (
          <li className="TravelPlanPeriod-empty">
            No activities planned for this period
          </li>
        )}
      </ul>
    </li>
  );
}

export default TravelPlanPeriod;