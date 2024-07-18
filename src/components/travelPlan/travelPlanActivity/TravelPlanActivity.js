import './TravelPlanActivity.css';

const TravelPlanActivity = ({activity, periodClass}) => {

  return (
    <li key={activity.name} className={`TravelPlanActivity ${periodClass}`}>
      <h5 className="TravelPlanActivity-title">
        {activity.name}
      </h5>
      <p className="TravelPlanActivity-description">
        {activity.description}
      </p>
      <p className="TravelPlanActivity-price">
        {activity.price}
      </p>
    </li>
  );
}

export default TravelPlanActivity;