import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <button
        className="btn flex justify-center m-auto my-20 "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Open Form
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Log In!</h3>
          <p className="py-4">
            <div class="w-full max-w-lg">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p class="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                  <p class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    All Ready <br /> Have'an account <br /> please ?
                    <Link to="/register" className="text-pink-500">
                      {" "}
                      Register
                    </Link>
                  </p>
                </div>
              </form>
              <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
              </p>
            </div>
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
