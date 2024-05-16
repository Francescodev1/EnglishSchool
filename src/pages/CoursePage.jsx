// /src/pages/CoursesPage.jsx
import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../api/corsiAPI';
import CourseCard from '../components/CourseCard';


const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const fetchedCourses = await fetchCourses();
      setCourses(fetchedCourses);
    };

    getCourses();
  }, []);

  return (
    <div>
      <h1>Corsi disponibili</h1>
      <div className="container mt-4">
      <div className="row my-5">
        {courses.map(course => (
          <div key={course.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CoursesPage;
