// /src/api/quizAPI.js
import axios from 'axios';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get('http://localhost/quiz/wordpress/wp-json/wp/v2/domande');
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};
