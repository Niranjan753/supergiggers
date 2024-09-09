import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Unlock your potential with <br/><span>SuperGigs</span>
          </h1>
          <p>Upskill, Connect, Earn, Learn, Teach, <span>Get Paid.</span></p>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="Featured Person" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
