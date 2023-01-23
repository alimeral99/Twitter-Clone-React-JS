import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListIcon from "@mui/icons-material/List";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Avatar } from "@mui/material";
import MoreOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__imgContainer">
          <img
            className="sidebar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            alt="logo"
          />
        </div>
        <div className="sidebar__menu">
          <SidebarRow title="Home" Icon={HomeIcon} />
          <SidebarRow title="Explore" Icon={ExploreIcon} />
          <SidebarRow title="Notifications" Icon={NotificationsNoneIcon} />
          <SidebarRow title="Messages" Icon={MailOutlineIcon} />
          <SidebarRow title="BookMarks" Icon={BookmarkBorderIcon} />
          <SidebarRow title="Lists" Icon={ListIcon} />
          <SidebarRow title="Profile" Icon={PersonOutlineIcon} />
          <SidebarRow title="More" Icon={MoreOutlinedIcon} />
        </div>
        <button className="sidebarBtn">Tweet</button>

        <div className="sidebar__profileInfo">
          <Avatar
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
            className="profile__img"
          />
          <div className="profile__title">
            <h3 className="profile__name">Ali Meral</h3>
            <h5 className="profile__username">Jessenepd1212</h5>
          </div>
          <MoreHorizIcon className="profile__titleIcon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
