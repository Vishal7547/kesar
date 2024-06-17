import React from "react";
import { IoShield } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import "./Whyus.css";
import CoreValue from "./CoreValue";
import Vision from "./Vision";
import Misson from "./Misson";
import CompanyOverview from "./CompanyOverview";
const Whyus = () => {
  return (
    <>
      <div id="whyus" className="container-fluid containwyus">
        <div className="row">
          <div className="col-12">
            <div className="upper">
              <div className="whyusHeading m-4 pt-5 pb-3 ">
                <span>WHY CHOOSE US ?</span>
              </div>
              <div className="line"></div>
              <div className="parawhy m-4 ">
                <p className="pt-3 pb-5">
                  "To be leading company and preferred supplier for providing
                  Corrugated Box packaging solutions to customers across the
                  country" We want to become a trusted partner to our customers,
                  providing high end packaging solutions for all their needs.."
                </p>
              </div>
            </div>
            <div className="middle">
              <div className="container-fluid">
                <div className="row newclasswhy m-0 p-0 g-0">
                  <div className="col-md-3 p-0 m-0">
                    <div className="iconpara mt-5 mb-5 pb-5">
                      <div className="hoverbounce mt-4 mb-4">
                        <IoShield
                          color="#ED6D1E"
                          fontSize={40}
                          className="ioshield"
                        />
                        <span className="titlewhy w-100 mx-2">
                          International quality standards
                        </span>
                      </div>

                      <div className="paraicon mb-4">
                        <p>
                          International quality standards are criteria or rules
                          set up by organizations that help determine compliance
                          across national borders.
                        </p>
                      </div>
                    </div>

                    <div className="iconpara mt-5 mb-5 pb-5">
                      <div className="hoverbounce mt-4 mb-4">
                        <IoPricetagsSharp
                          color="#ED6D1E"
                          fontSize={40}
                          className="ioshield"
                        />
                        <span className="titlewhy w-100 mx-2">
                          Competitive pricing policy
                        </span>
                      </div>

                      <div className="paraicon">
                        <p>
                          Competitive pricing is a pricing strategy in which the
                          competitors' prices are taken into consideration when
                          setting the price of the same or similar products.
                        </p>
                      </div>
                    </div>

                    <div className="iconpara mt-5 mb-5 pb-5">
                      <div className="hoverbounce mt-4 mb-4">
                        <FaPaperPlane
                          color="#ED6D1E"
                          fontSize={40}
                          className="ioshield"
                        />
                        <span className="titlewhy w-100 mx-2">
                          Technically qualified engineers
                        </span>
                      </div>

                      <div className="paraicon">
                        <p>
                          An engineering technician is primarily trained in the
                          skills and techniques related to a specific ...
                          Engineering technicians help solve technical problems
                          in many ways.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <img
                      src="https://kesarcraft.com/images/device.jpg"
                      alt="kesarmobileapp"
                    />
                  </div>

                  <div className="col-md-3">
                    <div className="iconpara mt-5 mb-5 pb-5">
                      <div className="hoverbounce extraright mt-4 mb-4 mr-0">
                        <span className="titlewhy w-100 mx-2">
                          Stringent quality control
                        </span>
                        <FaRegCalendarDays
                          color="#ED6D1E"
                          fontSize={40}
                          className="ioshield"
                        />
                      </div>
                      <div className="paraicon mb-4">
                        <p className="rightparawhy">
                          Our customers should expect nothing less than the best
                          possible product.
                        </p>
                      </div>
                    </div>

                    <div className="iconpara mt-5 mb-5 pb-5">
                      <div className="hoverbounce mt-4 mb-4">
                        <span className="titlewhy w-100 mx-2">
                          Ethical business policies
                        </span>
                        <MdBusinessCenter
                          color="#ED6D1E"
                          fontSize={40}
                          className="ioshield"
                        />
                      </div>
                      <div className="paraicon mb-4">
                        <p className="rightparawhy">
                          Ethical policies are guidelines for all employees of a
                          company to do the right thing and behave at high
                          standards at all times. Good ethical policies create a
                          good culture based on trust and transparency..
                        </p>
                      </div>
                    </div>

                    <div className="iconpara mt-5 mb-5 pb-5">
                      <div className="hoverbounce mt-4 mb-4">
                        <span className="titlewhy w-100 mx-2">
                          Timely delivery schedule
                        </span>
                        <IoMdSettings
                          color="#ED6D1E"
                          fontSize="40"
                          className="ioshield"
                        />
                      </div>
                      <div className="paraicon mb-4">
                        <p className="rightparawhy">
                          On time delivery seems simple but is actually quite
                          nuanced, with a myriad of factors complicating both
                          the definition of OTD and how it is measured.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyOverview/>
      <CoreValue />
      <Vision />
      <Misson />
    </>
  );
};

export default Whyus;