import React from 'react';
import "./Contact.css";
import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";
const Contactus = () => {
  return (
    <div id="contactus" className="container-fluid">
      <div className="row">
        <div className="col-12 whyuscnt">
          <h2 className="whyusTitle pb-2">Contact Us</h2>
          <div className="line"></div>
          <div className="containerf p-4 m-5">
            <form id="contactForm">
              <div className="formouter">
              <div className="form-group p-4">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className='w-100' required />
              </div>
              <div className="form-group p-4">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" placeholder="Email Address" className='w-100' required />
              </div>
              <div className="form-group p-4">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" className='w-100' required />
              </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="8" placeholder="Your Message" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="captcha">What's 5 + 16 = ?</label>
                <input type="number" id="captcha" name="captcha" placeholder="Your Answer" style={{ width: '10%' }} className='w-25' required />
              </div>
              <div className="form-group">
                <button type="submit" style={{ backgroundColor: '#ED6D1E' }}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
