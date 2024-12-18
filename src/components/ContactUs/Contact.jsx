import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "90d383a0-7748-46f7-90ca-5e9ea38b0fc2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully to Pizzario!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your message.",
        icon: "error",
      });
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}> {/* Changed handleSubmit to onSubmit */}
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            className="field"
            placeholder="Enter Your email"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" id="btncontactus">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
