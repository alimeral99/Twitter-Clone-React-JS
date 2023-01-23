import React from "react";
import "./Trends.css";
import trends from "./TrendsData";
import TrendsContent from "./TrendsContent/TreendContent";
import SearchIcon from "@mui/icons-material/Search";
import TrendsFooter from "./TrendsFooter/TrendsFooter";

function Trends() {
  return (
    <div className="trends">
      <div className="trends__container">
        <div className="trends__header">
          <SearchIcon />
          <input type="text" placeholder="search twitter" />
        </div>

        <div className="trends__contentContainer">
          <h3 className="trend__title">Trends for you</h3>
          {trends.map((trend, id) => (
            <TrendsContent trend={trend} key={id} />
          ))}
        </div>

        <div className="trend__footer">
          <TrendsFooter
            name="Elon Musk"
            username="elonmusk221"
            image="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
          />
          <TrendsFooter
            name="Lionel Messi"
            username="leomessi12"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/230px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
          />
          <TrendsFooter
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/250px-GodfreyKneller-IsaacNewton-1689.jpg"
            name="Isaac Newton"
            username="3newton"
          />
        </div>
      </div>
    </div>
  );
}

export default Trends;
