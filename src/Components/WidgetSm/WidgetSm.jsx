import React from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import pic from "../Images/profile.jpg";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New joinings</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItems">
          <img src={pic} alt="profile" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Ahsan Antal</span>
            <span className="widgetSmUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItems">
          <img src={pic} alt="profile" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Ahsan Antal</span>
            <span className="widgetSmUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItems">
          <img src={pic} alt="profile" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Ahsan Antal</span>
            <span className="widgetSmUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
