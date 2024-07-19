import { promptAi } from './aiPrompt';

export const generateTravelPlan = async ({destination, stayingDays}) => {
    const prompt = `
      Make a ${stayingDays} ${stayingDays > 1 ? 'days' : 'day'} travel plan for visiting ${destination}.
      Give me the formatted list of what to do each day, without explaining anything besides the list.
      List each day by enumerating them and giving a title for the day's choosen activities.
      For each day, create a list of what to do in each period, as a list of activities, of the day and give a short description of each activity.
      Consider the periods: morning, afternoon and night.
      Include the maximum amount of activities that can be done in each period, considering the time available.
      Consider the physical proximity of the activities and the time it takes to move from one place to another, suggesting close places for the same day and period.
      Also provide the price for each activity.
      The number of days in the resulting list should be exactly ${stayingDays}.
      Never return "N/A" or "Not applicable" as a value. Preferably, leave the list empty. Don't include an activity if any of its values would be "N/A".
      Avoid repeating the same place, even in different days. If there are different activities in the same place, distinguish them in the activity name.
      Avoid including the arrival and departure processes in the plan.
      The response should be a raw, valid and correct JSON object, without any formatting, and follow this example:
      {
        "day_1": {
          "title": "<title>",
          "activities": {
            "morning": [
              {"name": "<place 1>", "description": "<short description of the activity>", "price": "<price>"},
              {"name": "<place 2>", "description": "<short description>", "price": "<price>"}
            ],
            "afternoon": [
              {"name": "<place 3>", "description": "<short description>", "price": "<price>"}
            ],
            "night": [
              {"name": "<place 4>", "description": "<short description>", "price": "<price>"},
            ]
          }
        }
      }
    `;

    try {
      const aiResponse = await promptAi(prompt);

      const travelPlan = JSON.parse(
        aiResponse.replace(/```json/, '').replace(/```/, '').trim()
      );

      return travelPlan;
    }
    catch (e) {
      return {error: 'Error parsing AI response'};
    }
  };