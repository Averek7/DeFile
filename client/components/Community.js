import React from "react";
import LottieCard from "./LottieCard";

function Community() {
  return (
    <div className="community-container">
      <div className="header">
        <h2>Community</h2>
      </div>
      <div className="item-container">
        <div style={{ width: "300px" }}>
          <LottieCard src="https://assets7.lottiefiles.com/temp/lf20_LaB9Ps.json" />
          {/* <LottieCard src="https://assets7.lottiefiles.com/packages/lf20_pzrfj90g.json" /> */}
        </div>
      </div>
    </div>
  );
}

export default Community;
