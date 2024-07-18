import './SearchBox.css';
import { useState } from 'react';
import LoadingDots from '../loadingDots/LoadingDots';
import { generateCitiesList } from '../../services/generateCitiesList';


const SearchBox = ({destination, setDestination}) => {
    const [cityName, setCityName] = useState('');
    const [searching, setSearching] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const searchCities = async (event) => {
        setSearching(true);
        event.preventDefault();

        const cities = await generateCitiesList({cityName});

        setSearchResults(cities);
        setSearching(false);
    }

    const selectDestination = (city) => {
        setDestination(city);
    }

    return (
        <div className="SearchBox-container">
            <p className='SearchBox-title'>
                What city are you going to?
            </p>
            <form className="SearchBox" onSubmit={searchCities}>
                <input
                    type="text"
                    className="SearchBox-input"
                    value={destination ? destination : cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    placeholder="Search city name"
                    disabled={!!destination}
                />
                <button className="SearchBox-button" disabled={searching || cityName.length === 0 || !!destination}>
                    {searching ? <LoadingDots /> : 'Search'}
                </button>
            </form>
            {!destination && searchResults.length > 0 && (
                <div className='SearchBox-results'>
                    {searchResults.map((city, index) => (
                        <div key={`${index}-${city}`}
                            className='SearchBox-results-item'
                            onClick={() => selectDestination(city)}
                        >
                            {city}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBox;