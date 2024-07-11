import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" my-12 dark:bg-slate-900 dark:text-white bg-gray-100 flex flex-col">
        {/* <!-- Main Content --> */}
        <div className="flex-grow"></div>

        {/* <!-- Footer --> */}
        <footer className="dark:bg-slate-900 dark:text-white bg-slate-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* <!-- About Us --> */}
              <div>
                <h3 className="text-lg font-semibold mb-2">About Book Haven</h3>
                <p className="text-sm">
                  Book Haven is your one-stop shop for the latest and greatest
                  in literature. We offer a wide range of genres and authors to
                  suit every reader's taste.
                </p>
              </div>
              {/* <!-- Contact Info --> */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-sm">
                  123 Book Street <br />
                  Novel City, BK 11223 <br />
                  Email: info@bookhaven.com <br />
                </p>
              </div>
              {/* <!-- Quick Links --> */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="text-sm space-y-1">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Social Media --> */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-facebook-f">
                      <FaFacebook />
                    </i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-twitter">
                      <FaTwitter />
                    </i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-linkedin-in">
                      <FaLinkedin />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center text-sm mt-8">
              &copy; 2024 Book Haven. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
