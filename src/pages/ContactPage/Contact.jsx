import React from "react";
import GoogleMap from "../../components/Sidebar/GoogleMap";
import PageHeader from "../../components/PageHeader";

const conSubTitle = "Get in touch with Contact us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const Contact = () => {
  return (
    <div>
      <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>
          <div className="section-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name *" />
              </div>
              <div className="form-group">
                <input type="text" name="email" placeholder="Your Email *" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  placeholder="Mobile Number *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject *"
                />
              </div>
              <div className="form-group w-100">
                <textarea
                  rows="8"
                  type="text"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-group w-100 text-center">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
