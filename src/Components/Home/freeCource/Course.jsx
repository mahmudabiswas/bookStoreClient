import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import BookText from "./bookText";
import BookLogoHeading from "./bookLogoHeading";
import UseAxios from "../../Hooks/useAxios";

const Course = () => {
  const [course, setCourse] = useState([]);
  const axios = UseAxios();
  useEffect(() => {
    axios.get("/books").then((res) => {
      setCourse(res.data);
    });
  }, []);
  return (
    <div className=" my-12  min-h-screen m-auto">
      {/* book heading */}
      <BookText />
      {/* book  logo heading */}

      <BookLogoHeading />

      <div className=" mx-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        {course.map((item) => (
          <Courses key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
