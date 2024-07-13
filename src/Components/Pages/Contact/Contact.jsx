import React from "react";
import "./contact.css";
import Map from "./Map";
const Contact = () => {
  return (
    <div className="">
      {/* <!-- Contact Form Section --> */}
      <section class="bg-white  form-container  ">
        <div class="container mx-auto   overlay">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-1/2 xl:w-1/2 p-6">
              <h2 class="text-3xl font-bold mb-4">Get in Touch</h2>
              <form>
                <div class="mb-4">
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="message"
                  >
                    Message
                  </label>
                  <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 e leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div class="w-full lg:w-1/2 xl:w-1/2 p-6">
              <img
                src="https://i.ibb.co/Zh4T4kg/book-Store.jpg"
                alt="Bookshelf"
                class="w-full h-1/2 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
