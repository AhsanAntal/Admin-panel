import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import Avatar from "../Images/profile.jpg";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <Link to="/" className="link">
              <span className="logo">Admin Panel</span>
            </Link>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img src={Avatar} alt="logo" className="topAvatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
