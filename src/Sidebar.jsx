import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {

const recentItem = (topic)=>(
<div className="sidebar__recentItem">
  <span className="sidebar__hash">#</span>
  <p>{topic}</p>
</div>
)


  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.istockphoto.com/photos/abstract-blurred-gradient-background-in-bright-colors-colorful-smooth-picture-id1071588902?k=20&m=1071588902&s=612x612&w=0&h=I0UoBsEAamAalXy_Npx5cB9qBk4XC_kJKPpRON1WZ6g="
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Abhishek Dadhich</h2>
        <h4>abhi@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,000</p>
        </div>
        <div className="sidebar__stat">
          <p>View on post</p>
          <p className="sidebar__statNumber">2,006</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react js")}
        {recentItem("programming")}

        {recentItem("react js")}

        {recentItem("react js")}


        {recentItem("react js")}

      </div>
    </div>
  );
}

export default Sidebar;
