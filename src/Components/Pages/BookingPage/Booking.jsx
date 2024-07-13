import React from "react";
import { useForm } from "react-hook-form";
import UseAxios from "../../Hooks/useAxios";
import { Link, useNavigate } from "react-router-dom";

const Booking = () => {
  const axios = UseAxios();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const bookingInfo = {
      image: data.photoUrl,
      bookName: data.bookName,
      date: data.date,
      description: data.description,
    };
    axios.post("/bookings", bookingInfo).then((res) => {
      console.log(bookingInfo);
      console.log(res.data);
    });
    reset();
    navigate("/");
  };
  return (
    <div className="max-w-2xl my-20 mx-auto p-4 bg-white rounded shadow-md">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold text-indigo-600">
          Order Your Favorite book!
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photoUrl"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img"
            type="url"
            placeholder="Book Image"
            {...register("photoUrl")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bookName"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Book Name"
            {...register("bookName")}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            placeholder="YYYY-MM-DD"
            {...register("date")}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Why ? you like this book ?"
            {...register("description")}
          />
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Booking;
