import React from "react";
import { Link } from "react-router-dom";

const Courses = ({ item }) => {
  const { _id, img, title, author, genre, price } = item;
  return (
    <>
      <div class="card max-w-sm rounded overflow-hidden shadow-lg dark:border-blue-400 dark:bg-slate-900 dark:text-white bg-white hover:scale-[0.6] hover:duration-[0.5s]">
        <img class="w-full h-64 object-cover" src={img} alt="Book cover" />

        <div class="p-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base mb-2">{author}</p>
          <p class="text-gray-600 text-sm mb-4">{genre}</p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-semibold text-blue-600">{price}</span>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to={`/booking/${_id}`}> Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
