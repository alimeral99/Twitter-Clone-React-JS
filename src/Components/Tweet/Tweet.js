import React, { useState, useEffect } from "react";
import "./Tweet.css";
import TweetFeed from "./TweetFeed/TweetFeed";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import db from "../../firebase/firebase";
import TweetContent from "./TweetContent/TweetContent";

function Tweet() {
  const [tweets, setTweets] = useState([]);
  const [tweetChange, setTweetChange] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "items"), orderBy("timestamp", "desc"));

    async function getData() {
      const tweetData = query(
        collection(db, "items"),
        orderBy("timestamp", "desc")
      );

      const getTweetData = await getDocs(tweetData);
      setTweets(
        getTweetData.docs.map((doc) => ({
          id: doc.id,
          items: doc.data(),
        }))
      );
    }
  }, [tweetChange]);

  return (
    <div className="tweet">
      <div className="tweet__header">
        <h2 className="tweet__headerTitle">Home</h2>
        <div className="tweet__headerButtons">
          <button>For you</button>
          <button>Following</button>
        </div>
      </div>

      <TweetContent changeTweet={setTweetChange} />

      <p className="count__tweet">Show 455. tweets</p>

      {tweets.map(({ items }, id) => (
        <TweetFeed
          name={items.name}
          key={id}
          img={items.img}
          tweet={items.tweet}
          picture={items.picture}
        />
      ))}
    </div>
  );
}

export default Tweet;
