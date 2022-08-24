import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { MenuItems, MenuItemsSmall } from "./Menu";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleClick = () => {
    setClick(!click);
  };

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "hidden",
      },
    },
  };

  const handleNavClick = () => {
    if (pathname !== "/") navigate("/");
    setClick(false);

    return;
  };

  return (
    <header className="bg-white py-4 px-6 lg:py-4 lg:px-16 fixed top-0 left-0 right-0 z-50 flex justify-center">
      <nav className="flex flex-row justify-between items-center w-screen max-w-[110rem]">
        <div className="z-50">
          <a href="/#home">
            <div
              className={`${
                click ? "text-white" : "text-[#2E2626]"
              }  text-lg font-medium`}>
              AMINAT AKINODE
            </div>
          </a>
        </div>
        <div>
          <button
            className="-translate-y-4 -translate-x-8 md:hidden block absolute z-50"
            onClick={handleClick}>
            <Icon
              icon={click ? "ep:close" : "charm:menu-hamburger"}
              fontSize={30}
              color={click ? "#fff" : "#2E2626"}
            />
          </button>
          <aside>
            <nav className="md:flex hidden lg:space-x-16 space-x-8">
              <ul className="flex flex-row space-x-8 items-center font-semibold lg:text-base text-sm">
                {MenuItems.map((items, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? items.cNameActive : items.cName
                        }
                        to={items.url}
                        onClick={() => setClick(false)}>
                        {items.title}
                      </NavLink>
                    </li>
                  );
                })}
                <li>
                  <a
                    className="cursor-pointer text-[#2E2626] hover:text-[#800080] transition-all ease-in-out"
                    href="https://drive.google.com/file/d/1yczxg5cSiXhpg9pJQ_KB_Pe8L9GexfNe/view?usp=drivesdk"
                    onClick={handleNavClick}>
                    Download Resume
                  </a>
                </li>
              </ul>
              <ul className="flex flex-row space-x-4 items-center lg:text-base text-sm">
                <li className=" h-11 rounded-sm border-2 border-[#800080] text-[#2E2626] font-semibold">
                  <a
                    className="px-6 w-full h-full flex justify-center items-center"
                    href="mailto://akinodeaminat1@gmail.com"
                    onClick={handleNavClick}>
                    Contact Me
                  </a>
                </li>
              </ul>
            </nav>

            <motion.nav
              initial={false}
              animate={click ? "open" : "closed"}
              variants={variants}
              className={`md:hidden block bg-[#800080] absolute top-0 left-0 right-0 bottom-0 min-h-screen`}>
              <div className="flex flex-col justify-center h-full items-center min-w-full px-8">
                <div className="space-y-16 w-full max-w-md">
                  <ul className="flex flex-col space-y-10 items-center">
                  {MenuItemsSmall.map((items, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? items.cNameActive : items.cName
                        }
                        to={items.url}
                        onClick={() => setClick(false)}>
                        {items.title}
                      </NavLink>
                    </li>
                  );
                })}
                    <li>
                      <a
                        className="cursor-pointer text-white font-semibold"
                        href="https://drive.google.com/file/d/1yczxg5cSiXhpg9pJQ_KB_Pe8L9GexfNe/view?usp=drivesdk"
                        onClick={handleNavClick}>
                        Download Resume
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-row space-x-4 items-center lg:text-base text-sm">
                    <li className=" h-11 w-full rounded-sm border-2 border-white text-white font-semibold">
                      <a
                        className="px-6 w-full h-full flex justify-center items-center"
                        href="mailto://akinodeaminat1@gmail.com"
                        onClick={handleNavClick}>
                        Contact Me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
