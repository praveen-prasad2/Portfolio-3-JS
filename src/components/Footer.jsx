import React from "react";
import Logo from "../assets/logo.svg";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-primary text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div>
            <img src={Logo} alt="" className="w-56"/>
            <p className="pt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
              sunt adipisci magni exercitationem quos dicta inventore quas ipsa
              quibusdam sit!\
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About Us</li>
              <li>Faq</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Drop a Hi!</h4>
            <a href="mailto:info@coinkraft.com">info@coinkraft.com</a>
          </div>
          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <FaInstagramSquare size={40} className="text-[#915EFF]" />
            <IoLogoDiscord size={40} className="text-[#915EFF]" />
            <FaSquareXTwitter size={40} className="text-[#915EFF]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
