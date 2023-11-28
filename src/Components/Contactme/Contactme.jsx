import React from "react";
import "./Contactme.css";
function Contactme() {
  return (
    <div className="maincontact">
      <div className="contactimg" />
      <div className="d-flex flex-column align-items-center">
        <div>
          <h1 className="contacthead" id="contactme">CONTACT ME</h1>
        </div>
        <hr className="Hr" />
        <div className="d-flex text-center">
          <p className="contactpara mb-5" style={{ fontWeight: "500" }}>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="contactbox rounded shadow-lg p-5">
            <form action="">
              <div className="d-flex flex-column mb-4">
                <label className="contactlabel py-2"htmlFor="Name">Name</label>
                <input className="contactinput"type="text" placeholder="Enter Your Name" />
              </div>
              <div className="d-flex flex-column mb-5">
                <label className="contactlabel  py-2"htmlFor="Email">Email</label>
                <input className="contactinput"type="text" placeholder="Enter Your Email" />
              </div>

              <div className="d-flex flex-column mb-5">
                <label className="contactlabel  py-2"htmlFor="Message">Message</label>
                <textarea
                  className="contactinput"
                  name="messg"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <div className="d-flex justify-content-end">
              <button className="contactmebutt " >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contactme;
