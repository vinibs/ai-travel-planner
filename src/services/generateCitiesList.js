import { promptAi } from './aiPrompt';

export const generateCitiesList = async ({cityName}) => {
    const prompt = `
    List the first 5 cities in the world, at most, whose names are the closest to the following characters: '${cityName}'.
    Present them in the following format: <city name>, <state>, <country>.
    Always consider the city name with its correct accentuation and punctuation, if applicable.
    The same city should never appear more than once in the list.
    Return only a raw list of strings in JSON format, without formatting the response (not even in markdown).
    Sort them by the closest to the given search string.
    `
    const aiResponse = await promptAi(prompt);

    const cities = JSON.parse(
        aiResponse.replace(/```json/, '').replace(/```/, '').trim()
    );

    const filteredCities = [];
    cities.forEach((city) => {
        if (city.length > 0 && !filteredCities.includes(city)) {
            filteredCities.push(city);
        }
    });

    return cities;
}