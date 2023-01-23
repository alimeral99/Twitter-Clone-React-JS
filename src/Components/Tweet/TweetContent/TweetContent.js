import React, { useState } from "react";
import "./TweetContent.css";
import db from "../../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Avatar } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import MmsOutlinedIcon from "@mui/icons-material/MmsOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

function TweetContent({ changeTweet }) {
  const [input, setInput] = useState("");

  const [picture, setPicture] = useState("");

  const handleAddTweet = async (e) => {
    e.preventDefault();
    if (input || picture) {
      changeTweet(true);
      await addDoc(collection(db, "items"), {
        name: "Ali Meral",
        tweet: input,
        img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png",
        timestamp: serverTimestamp(),
        picture: picture,
      });
    }
    changeTweet(false);
    setInput("");
    setPicture("");
    console.log("work");
  };

  const addPicture = () => {
    let newPicture = prompt("resim linki gir");
    setPicture(newPicture);
  };

  return (
    <div className="tweet__content">
      <Avatar src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" />

      <div className="content__container">
        <div className="content__header">
          <div className="content__input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="What's happening"
            />
          </div>

          {picture && (
            <img src={picture} alt="load__image" className="load__image" />
          )}

          <button className="content__headerBtn">
            <PublicIcon className="contentBtn__icon" /> Everyon can replay
          </button>
        </div>

        <div className="content__footerButtons">
          <div className="footer__buttonsLeft">
            <MmsOutlinedIcon onClick={addPicture} />
            <GifBoxOutlinedIcon />
            <ListRoundedIcon />
            <SentimentSatisfiedOutlinedIcon />
            <PendingActionsOutlinedIcon />
          </div>

          <div className="footer__buttonsRight">
            <button
              type="submit"
              onClick={handleAddTweet}
              className="add__tweetButton"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetContent;
