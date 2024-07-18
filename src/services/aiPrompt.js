// const fetch = require('node-fetch');
const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com';

export const promptAi = async (prompt) => {
  const response = await fetch(`${GEMINI_BASE_URL}/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        'contents': [
            {
                'parts': [{
                    'text': prompt
                }]
            }
        ]}
    )
  });
  const data = await response.json();

  return data.candidates[0].content?.parts[0]?.text || false;
}