import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { NavLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div 
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-[80vh] w-[75%] flex-col 
      justify-between bg-white dark:bg-gray-900 dark:text-white 
      px-8 pb-6 pt-16 text-black transition-all duration-200 
      md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        {/* Links  */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavLinks.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <a href="https://wa.me/+2347051149394">Agu</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
