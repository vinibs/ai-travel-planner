import SearchBox from "../../components/searchBox/SearchBox";
import StayingInput from "../../components/stayingInput/StayingInput";

const InputPage = (
    {destination, setDestination, stayingDays, confirmDaysAction}
) => {
  return (
    <>
      <h1>Travel Planner</h1>
      <SearchBox destination={destination} setDestination={setDestination} />
      { destination && (
        <StayingInput
          stayingDays={stayingDays}
          confirmDaysAction={confirmDaysAction}
        />
      )}
    </>
  );
}

export default InputPage;