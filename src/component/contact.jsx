import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // Track status message
  const [statusType, setStatusType] = useState(""); // Track success or error type

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    console.log("Sending email with params:", templateParams);

    emailjs
    .send(
        import.meta.env.VITE_SERVICE_ID, // service_id from .env
        import.meta.env.VITE_TEMPLATE_ID, // template_id from .env
        formData,
        import.meta.env.VITE_USER_ID // user_id from .env
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response.status, response.text);
          setStatusMessage("Your message has been sent successfully!");
          setStatusType("success");
          setFormData({ fullName: "", email: "", subject: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error("Failed to send email.", error);
          setStatusMessage("Failed to send your message. Please try again.");
          setStatusType("error");
        }
      );
  };

  const clearStatusMessage = () => {
    console.log("Clearing status message");
    setStatusMessage("");
    setStatusType("");
  };

  return (
    <div className="contact-container">
      {/* Status message at the top-right corner */}
      {statusMessage && (
        <div className={`status-message ${statusType}`}>
          <span>{statusMessage}</span>
          <button className="close-button" onClick={clearStatusMessage}>
            &times;
          </button>
        </div>
      )}

      <h1 className="contact-heading">Contact Me</h1>
      <p className="contact-subheading">Send a Message</p>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-row">
          <input
            type="text"
            name="fullName"
            className="form-input"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          className="form-input-email"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          className="form-textarea"
          placeholder="Description..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="form-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;