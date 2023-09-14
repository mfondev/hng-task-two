import React, { useState } from "react";
import Side from "./Side"
import { Outlet } from "react-router-dom";
import {FaBars} from "react-icons/fa"

const Layup = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };
    return (
      <div
        className={`app ${sidebarVisible ? "sidebar-visible" : ""}`}
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
        }}
      >
        <button className="toggle-sidebar-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <Side />
        <Outlet />
      </div>
    );
}

export default Layup