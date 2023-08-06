import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeinput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text"> Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto: nusratovjahongir@gmail.com" className="p-text">
            nusratovjahongir@gmail
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +998933138899" className="p-text">
            93 313 8899
          </a>
        </div>

        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                type="text"
                className="p-text"
                placeholder="Your Name"
                value={name}
                onChange={handleChangeinput}
                name="name"
              />
            </div>
            <div>
              <input
                type="email"
                className="p-text"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeinput}
                name="email"
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleChangeinput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? "Sending" : "Send"}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
