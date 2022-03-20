import React from 'react';
import "./Home.css";

function Home() {
  const message = "#ILOVEMINECRAFT"


  return (
    <div>
      <div className="landingScreenImage">
        <div className="bannerContainer">
            <h1 className="bannerTop bannerText">
              Minecraft Fan Club
            </h1>
            <h2 className="bannerBottom bannerText">
              {message}
            </h2>
        </div>
      </div>
      <p>
        Welcome to the SSD Minecraft Fan Page!
      </p>

      <div className='card'>
        <p>
          <b>Top 5 fun facts about Minecraft:</b>
        </p>
        <ul>
          <li className="listItem">It is cool</li>
          <li className="listItem">There are over 7 types of blocks</li>
          <li className="listItem">Do not ever mine straight upwards 😫</li>
          <li className="listItem">You can row extra fast with the run button</li>
        </ul>
      </div>

      <p className="copyright">
        © 2022 Your Mom
      </p>
    </div>
  );
}

export { Home }