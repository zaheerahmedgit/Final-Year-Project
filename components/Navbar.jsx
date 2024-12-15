import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { TransactionContext } from "../context/TransactionContext"; // Import the context
import { shortenAddress } from "../utils/shortenAddress";

// Updated NavBarItem to use Link for internal navigation and hover effect
const NavBarItem = ({ title, to, className, isExternal }) => (
  <li
    className={`mx-4 cursor-pointer ${className} py-2 px-4 rounded-full text-white transition duration-300 hover:bg-[#f5e8369d] hover:text-white`}
  >
    {isExternal ? (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        {title}
      </a>
    ) : (
      <Link to={to} className="text-white">
        {title}
      </Link>
    )}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount, connectWallet } = useContext(TransactionContext); // Get the current account and connectWallet function

  const navItems = [
    { title: "Market", to: "/market" },
    { title: "Converter", to: "/converter" },
    { title: "About us", to: "/about" },
    { title: "Contact us", to: "/contact" }
  ];

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 gradient-bg-welcome2">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to={'/'}><img src={logo} alt="logo" className="w-32 cursor-pointer" /></Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navItems.map((item, index) => (
          <NavBarItem
            key={index}
            title={item.title}
            to={item.to}
            isExternal={false}
          />
        ))}
        {/* Add the Connect Wallet button */}
        {!currentAccount ? (
          <li
            className="primary-clr py-2 px-7 mx-4 rounded-full cursor-pointer transition duration-300"
            onClick={connectWallet}
          >
            Connect Wallet
          </li>
        ) : (
          <li className="text-white py-2 px-7 mx-4 rounded-full cursor-pointer transition duration-300">
            {shortenAddress(currentAccount)}
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navItems.map((item, index) => (
              <NavBarItem
                key={index}
                title={item.title}
                to={item.to}
                className="my-2 text-lg"
              />
            ))}
            {/* Add the Connect Wallet button in the mobile menu */}
            {!currentAccount ? (
              <li
                className="primary-clr py-2 px-7 mx-4 rounded-full cursor-pointer transition duration-300"
                onClick={connectWallet}
              >
                Connect Wallet
              </li>
            ) : (
              <li className="text-white py-2 px-7 mx-4 rounded-full cursor-pointer transition duration-300">
                {shortenAddress(currentAccount)}
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
