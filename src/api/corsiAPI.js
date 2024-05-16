// /src/api/corsiAPI.js
import axios from 'axios';

export const fetchCourses = async () => {
  try {
    const response = await axios.get('http://localhost/quiz/wordpress/wp-json/wp/v2/corsi');
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};
