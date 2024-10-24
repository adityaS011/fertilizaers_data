import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { TrendingUp, Inventory2 } from "@mui/icons-material";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={`sidebarListItem ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <TrendingUp className="sidebarIcon" color={
                  location.pathname === "/" ? "success" : "inherit"
                } />
                Analytics
              </li>
            </Link>
            <Link to="/product" className="link">
              <li
                className={`sidebarListItem ${
                  location.pathname === "/product" ? "active" : ""
                }`}
              >
                <Inventory2 className="sidebarIcon" color={
                  location.pathname === "/product" ? "success" : "inherit"
                } />
                Products
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
