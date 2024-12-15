import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import logo from "../../images/logo.png"; // Path to your logo

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    {/* Logo and Navigation Links */}
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <Link to="/market" className="text-white text-base mx-2 cursor-pointer">
          Market
        </Link>
        <Link to="/converter" className="text-white text-base mx-2 cursor-pointer">
          Converter
        </Link>
        <Link to="/about" className="text-white text-base mx-2 cursor-pointer">
          About Us
        </Link>
        <Link to="/contact" className="text-white text-base mx-2 cursor-pointer">
          Contact Us
        </Link>
      </div>
    </div>

    {/* Project Description in a single row with equal gaps */}
    <div className="w-full flex justify-evenly items-center my-4 text-white text-sm" style={{ marginTop: '-50px' }}>
    <div className="flex flex-col items-center">
  <p>
    <strong>Company Overview:</strong> <br />
    Etherra is an innovative blockchain <br />
    platform created to simplify the use <br />
    of cryptocurrencies for everyone <br />interested in digital finance.
  </p>
</div>

  <div className="flex flex-col items-center">
    <p>
      <strong>Our Mission:  </strong><br />
      Our mission is to create a <br />seamless, secure
       environment <br /> for transferring Ethereum coins <br />
       and converting cryptocurrencies <br /> into multiple fiat currencies.</p>
  </div>
  <div className="flex flex-col items-center">
  <p>
    <strong>Commitment to Accessibility:</strong> <br />
    At Etherra, we strive to make <br />blockchain technology
     user-friendly <br />so that everyone can participate
      in <br />the future of finance easily.
  </p>
</div>

</div>


    {/* Developer Links */}
    <div className="w-full flex justify-between items-center mt-5">
      {/* Zaheer Ahmed - Left (move icon even further to the right) */}
      <a
        href="https://www.linkedin.com/in/rabiariaz-pk/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white flex items-center ml-40" // doubled margin-left
      >
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="h-8 w-8" />
        <span className="ml-2">Supervisor</span>
      </a>

      {/* Tayyab - Center */}
      <a
        href="https://www.linkedin.com/in/muhammad-tayyab-667bb328b/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white flex items-center"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="h-8 w-8" />
        <span className="ml-2">Developer</span>
      </a>

      {/* Zohaib - Right (move icon even further to the left) */}
      <a
        href="https://www.linkedin.com/in/zaheer-ahmed-07b302230/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white flex items-center mr-40" // doubled margin-right
      >
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="h-8 w-8" />
        <span className="ml-2">Developer</span>
      </a>
    </div>

    {/* Separator Line */}
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    {/* Footer Bottom */}
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3 space-x-6">
      <p className="text-white text-center text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
