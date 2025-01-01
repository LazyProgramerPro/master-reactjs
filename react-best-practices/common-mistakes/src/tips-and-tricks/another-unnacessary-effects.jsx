import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch("/get/courses").then((res) => {
      setCourses(res.formData.courses);
    });
  }, []);

  if (selectedCourse === null) {
    const defaultCourse = courses.find((course) => course.isDefault);
    setSelectedCourse(defaultCourse);
  }

  const selectCourseHandler = (course) => {
    setSelectedCourse(course);
  };

  return (
    <ul>
      {courses?.map((course) => {
        return (
          <Course
            key={course.id}
            isSelected={course.id === selectedCourse.id}
            onSelectCourse={selectCourseHandler}
            course={course}
          />
        );
      })}
    </ul>
  );
};

const Course = ({ isSelected, onSelectCourse, course }) => {
  //lots of stuff here...
  return <>display some stuff about the course</>;
};

export default Courses;
