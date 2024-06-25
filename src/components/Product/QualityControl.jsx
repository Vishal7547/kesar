import React from "react";
import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";

const ParallaxImage = () => {
  return (
    <div className="parallax-wrapper">
      {/* Adjust the background image URL and other styles as needed */}
      <div className="parallax-image"></div>
    </div>
  );
};

const QualityControl = () => {
  return (
    <>
      <ParallaxImage />
      <div className="container-fluid p-0 m-0 g-0 mt-4">
        <div className="row">
          <div className="col-12 whyuscnt p-3 ">
            <h2 className="whyusTitle pb-4">QUALITY CONTROL</h2>
            <div className="line"></div>
            <p className="w-75 p-4">
              We are equipped with a dedicated testing laboratory for ensuring
              the best quality of the products. From the raw materials to the
              finished products, we conduct testing with the most modern testing
              equipments under the supervision of qualified professionals to
              make sure that the customers get the best packaging solutions that
              safeguard their products. Each product that comes out of our lab
              has the assurance of high quality and zero defects. The testing
              equipments that we use are ...
            </p>
            <div className="commolistmission mb-5 pb-5">
              <p>→ Box Compression Tester.</p>
              <p>→ Bursting Strength Tester- Double head.</p>
              <p>→ Crush Tester - RCT of paper & ECT & FCT & PAT.</p>
              <p>→ Cobb Tester with a roller.</p>
              <p>→ Electronic GSM Tester.</p>
              <p>→ GSM Tester.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityControl;
