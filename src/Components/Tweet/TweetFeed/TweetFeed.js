import { Avatar } from "@mui/material";
import React from "react";
import "./TweetFeed.css";
import FooterIcon from "./FooterIcon";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SyncTwoToneIcon from "@mui/icons-material/SyncTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";

function TweetFeed({ name, img, tweet, picture }) {
  return (
    <div className="tweetFeed">
      <Avatar src={img} />
      <div className="feed__info">
        <div className="feed__header">
          <h2 className="feed__title">
            {name}
            <VerifiedIcon />
          </h2>
          <span className="feed__username">@crazymorinson21</span>
        </div>

        <div className="feed__content">
          <p className="feed__text">{tweet}</p>

          {picture && (
            <img src={picture} className="feed__picture" alt="feed__picture" />
          )}
        </div>

        <div className="feed__footer">
          <FooterIcon amount="4" Icon={VerifiedIcon} />
          <FooterIcon amount="4" Icon={ChatBubbleOutlineOutlinedIcon} />
          <FooterIcon amount="4" Icon={SyncTwoToneIcon} />
          <FooterIcon amount="4" Icon={FavoriteBorderTwoToneIcon} />
        </div>
      </div>
    </div>
  );
}

export default TweetFeed;
