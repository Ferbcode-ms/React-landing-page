import React from "react";
import "../index.css";

const Landpage = () => {
  return (
    <div className="container">
      <div className="landpage">
        <section>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btns">

          <button>Shop now</button>
          <button>Category</button>
          </div>
        </section>
        <div className="shoes">
          <img src="./public/img/shoe_image.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Landpage;
