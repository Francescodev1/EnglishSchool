// /src/api/professorsAPI.js
import axios from 'axios';

export const fetchProfessors = async () => {
  try {
    const response = await axios.get('http://localhost/quiz/wordpress/wp-json/wp/v2/professors');
    return response.data;
  } catch (error) {
    console.error("Error fetching professors:", error);
    throw error;
  }
};
