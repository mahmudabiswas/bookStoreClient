import React from "react";

const BookLogoHeading = () => {
  return (
    <div className="bg-gray-100 w-1/3 m-auto flex items-center justify-center">
      <div class="flex items-center space-x-2">
        {/* <!-- Book Icon --> */}
        <div class="relative">
          {/* <!-- Book Cover --> */}
          <div class="w-8 h-10 bg-blue-800 rounded-sm"></div>
          {/* <!-- Book Spine --> */}
          <div class="absolute left-0 top-0 w-1 h-10 bg-blue-900 rounded-sm"></div>
          {/* <!-- Book Pages --> */}
          <div class="absolute right-0 top-0 w-1 h-10 bg-white rounded-sm"></div>
        </div>
        {/* <!-- Logo Text --> */}
        <h1 class="text-2xl font-bold text-blue-800">Book Haven</h1>
      </div>
    </div>
  );
};

export default BookLogoHeading;
