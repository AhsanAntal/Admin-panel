import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  AttachMoneyOutlined,
  BarChartOutlined,
  ChatBubbleOutlineOutlined,
  DynamicFeedOutlined,
  EmailOutlined,
  LineStyle,
  PersonOutlined,
  Report,
  StorefrontOutlined,
  Timeline,
  TrendingUp,
  WorkOutlineOutlined,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItems active">
                <LineStyle className="sidebarIcons" />
                Home
              </li>
            </Link>
            <li className="sidebarListItems">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUp className="sidebarIcons" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItems active">
                <PersonOutlined className="sidebarIcons" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItems">
                <StorefrontOutlined className="sidebarIcons" />
                Products
              </li>
            </Link>
            <li className="sidebarListItems">
              <AttachMoneyOutlined className="sidebarIcons" />
              Transactions
            </li>
            <li className="sidebarListItems">
              <BarChartOutlined className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems active">
              <EmailOutlined className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItems">
              <DynamicFeedOutlined className="sidebarIcons" />
              Feedback
            </li>
            <li className="sidebarListItems">
              <ChatBubbleOutlineOutlined className="sidebarIcons" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems active">
              <WorkOutlineOutlined className="sidebarIcons" />
              Manage
            </li>
            <li className="sidebarListItems">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <Report className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
