import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="shadow bg-white p-3 sticky top-0 w-full">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-end items-center mx-auto max-w-screen-xl">
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="random-user"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-500" : "text-black"}`
                  }
                >
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="random-product"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-500" : "text-black"}`
                  }
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
