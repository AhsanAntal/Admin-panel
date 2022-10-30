import React from "react";
import "./user.css";
import pic from "../../Images/profile.jpg";
import { Link } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton"> Create </button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userShowTop">
            <img src={pic} alt="pic" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Ahsan Antal</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Ahsan13</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">+28.02.2000</span>
            </div>
            <span className="userShowTitle">Contact details</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+923164459672</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">AhsanAntal@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Pakistan|Gujranwala</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Ahsan"
                  className="userUpdateInfo"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Ahsan Antal"
                  className="userUpdateInfo"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 21242 224"
                  className="userUpdateInfo"
                />
              </div>
              <div className="userUpdateItem">
                <label>E-mail</label>
                <input
                  type="text"
                  placeholder="Ahsan@gmail.com"
                  className="userUpdateInfo"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Gujranwala"
                  className="userUpdateInfo"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={pic} alt="pic" className="userUpdateImg" />
                <label htmlFor="file">
                  {" "}
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
