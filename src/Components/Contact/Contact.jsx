import React, { useState } from "react";
import "./Contact.css";

function Contact() {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2d260dd9-cf02-4b29-871e-d8d8dd75ddf8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact grid">
        <div className="card info">
          <h2>Contact</h2>
          <p className="lead">Have a project in mind? Let’s build it.</p>
          <ul className="list">
            <li><strong>Email:</strong> muhammadmehboobz7869@gmail.com</li>
            <li><strong>Location:</strong> Khushab, Pakistan</li>
            <li><strong>Availability:</strong> Open for freelance & full‑time</li>
          </ul>
        </div>

        <form className="card form" onSubmit={onSubmit}>
          <label>
            <span>Name</span>
            <input type="text" name="name" required placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required placeholder="you@example.com" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" required placeholder="Tell me about your project..." />
          </label>
          <button type="submit" className="btn">Send Message</button>
          <span>{result}</span>
        </form>

      </div>
    </section>
  );
}

export default Contact;
