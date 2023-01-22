import React from "react";
import { Nav } from "@fluentui/react/lib/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const navLinkGroups = [
  {
    name: "Basic components",
    collapseByDefault: true,
    links: [
      {
        key: "<Overview>",
        name: "Overview",
        url: "/overview",
      },
    ],
  },
];

const navLinkGroups2 = [
  {
    name: "Basic components",
    collapseByDefault: true,
    links: [
      {
        key: "<Home>",
        name: "Home",
        url: "/",
      },
    ],
  },
];

const NavigationBar = () => {
  return (
    <div>
      <div className="grid gap-x-0 grid-cols-3 ">
        <Nav groups={navLinkGroups2} />
        <Nav groups={navLinkGroups} />
        <form>
          <div>
            <input
              type="text"
              id="large-input"
              class="p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </form>
      </div>

      <Outlet />
      <Footer />
    </div>
    /*
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div> */
  );
};

export default NavigationBar;
