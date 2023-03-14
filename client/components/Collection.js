import React from "react";
import LottieCard from "./LottieCard";

function Collection() {
  return (
    <div className="collection-container">
      <div className="header">
        <h2>Collection</h2>
      </div>
      <div className="col-container">
        <div className="collection-item-container">
          <div className="item-container">
            <strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              ducimus accusamus explicabo voluptatibus quas qui, voluptatum odio
              sit cupiditate iure modi neque, ab nesciunt fugit, sapiente
              possimus necessitatibus! Mollitia placeat magni iste maxime minus!
            </strong>
          </div>
          <div className="item-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla
            suscipit esse ad iure? Numquam repellat, ducimus necessitatibus
            placeat voluptate error aliquam debitis deserunt porro dolores?
            Beatae minus corrupti aperiam nemo nobis dolorum vero.
          </div>
          <div className="item-container">
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nihil praesentium mollitia earum sed tempore corporis distinctio
              perspiciatis consectetur voluptatibus, maiores quis deleniti, non
              sit labore, beatae amet animi libero numquam illo ad. Quam quo
              vero maxime deleniti doloremque laborum corporis temporibus.
            </strong>
          </div>
        </div>
        <div className="collection-lottie-container">
          <div style={{ width: "300px" }}>
            <LottieCard src="https://assets8.lottiefiles.com/private_files/lf30_k68apabx.json" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
