import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <div>
      <header>Welcome to James Hoofard's Portfolio</header>
      <h1 id="header">Come and see what I can do for you!</h1>
      <nav>
        <Link to = '/'>
          Homepage
          </Link>
        <a className="proflink" href="https://github.com/hoofmonger">
          GitHub Profile
        </a>
        <a
          className="proflink"
          href="https://www.linkedin.com/in/james-hoofard-ba8abb68/"
        >
          LinkedIn Profile
        </a>
        <a
          className="proflink"
          href="https://drive.google.com/file/d/12Ognwebdq0Oqo397j4o3IGu-oNaDT5Cp/view?usp=sharing"
        >
          Resume
        </a>
      </nav>
    </div>
  );
}

export default header;
