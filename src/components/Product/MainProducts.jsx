import React, { useRef, useState } from 'react';


import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";

import "./OurProductRange.css";

const ParallaxImage = () => {
  return (
    <div className="parallax-wrapper">
      {/* Adjust the background image URL and other styles as needed */}
      <div className="parallax-image"></div>
    </div>
  );
};


const MainProducts = () => {
  return (
    <>
       <ParallaxImage />
        <div className='container-fluid'>
    <div className="row">
        <div className="col-12 whyuscnt">
            <h2 className="whyusTitle mainprodutitle mt-4 pt-4 pb-2 mt-2">We are mainly produce two types of product</h2>
            <div className="line"></div>
            <h3 className='whyush3title mt-3'>Corrugated Box</h3>
            <h3 className='whyush3title mb-3'>Corrugated Sheet Board</h3>
            <p className='paramainproduct w-75'>We understand the need to reliably deliver high quality boxes and sheet board, to fulfill the demands of customers so all our boxes and sheet board are supplied to exacting standards in quality, services and environmental compliance. Our corrugated sheet/boxes are absolutely essential to modern manufacturers, distributors and retailers. Our 3 ply & 5 ply Automatic corrugated packaging boxes go into many different industries including, food manufacturing, Pharmaceutical, Electronic, CeramicTile, Textile, Automobile and pesticide,etc...</p>


        </div>
    </div>
  
</div>
    </>

  )
}

export default MainProducts
