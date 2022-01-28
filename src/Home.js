import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="landingScreenImage">
        <div className="bannerContainer">
          <div className="bannerTop">
            <h1 className="bannerText">
              Seltzer Water Fan Club
            </h1>
          </div>
          <div className="bannerBottom">
            <h2 className="bannerText">
              #ILOVESELTZER
            </h2>
          </div>
        </div>
      </div>
      <div className="margin">
        <p>
          <b>Top 5 fun facts about seltzer water:</b>
        </p>
        <ul>
          <li className="listItem">Seltzer Is Originally A German Thing</li>
          <li className="listItem">Seltzer Can Be Healthier Than Drinking Regular Water</li>
          <li className="listItem">If You Have IBS, You Probably Shouldn't Drink Seltzer</li>
          <li className="listItem">Seltzer water tastes good!</li>
        </ul>
      </div>

    </div>
  );
}

export { Home }
