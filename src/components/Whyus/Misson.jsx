import React from 'react';
import "./CoreValue.css";
import "./Vision.css";

const ParallaxImage = () => {
  return (
    <div className="parallax-wrapper">
      {/* Adjust the background image URL and other styles as needed */}
      <div className="parallax-image"></div>
    </div>
  );
};

const Misson = () => {
  return (
    <>
       <ParallaxImage />
        <div className='container-fluid'>
    <div className="row">
      <div className="col-12 whyuscnt">
          <h2 className="whyusTitle pb-2">MISSION</h2>
        <div className="line"></div>
          <p className='w-75 p-4'>"To meet our customers' dynamic packaging needs by providing cost-effective, optimised, and eco-friendly corrugated box solutions. We are committed to delivering on our promises, continually enhancing our quality standards, and building customer services that create long-term satisfaction and loyalty.”
       
          </p>
          <div className="commolistmission ">
          <p >  We want to consistently delight our customers by:</p>



<p>→    Delivering with commitments</p> 

<p> →    Improving ourqualitystandards</p>

<p> →    Building customer services that last</p>
          </div>
        
      </div>
    </div>
        </div>
    </>

  )
}

export default Misson
