import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* logo Left section of Navbar*/}
      <img src={assets.logo} className="w-36" alt="" />

      {/* Middle section of navbar */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
        <NavLink to="/" className="flex flex-col items-center">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/*Right section of Navbar  */}
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <div className="cursor-pointer hover:text-black">My Profile</div>
              <div className="cursor-pointer hover:text-black">Orders</div>
              <div className="cursor-pointer hover:text-black">Logout</div>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar menu for a smaller screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/">
            HOME
          </NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
