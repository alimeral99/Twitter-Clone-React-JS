import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Tweet from "./Components/Tweet/Tweet";
import Trends from "./Components/Trends/Trends";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Tweet />
      <Trends />
    </div>
  );
}

export default App;
