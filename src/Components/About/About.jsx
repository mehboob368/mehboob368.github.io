import React from "react";
import "./About.css";

function About() {
  return (
    <section className="section" id="about">
      <div className="container about grid">
        <div className="card about-card">
          <h2>About Me</h2>
          <p className="lead">
            I’m Muhammad Mehboob, a frontend developer based in Khushab, Pakistan.
            I specialize in modern, responsive UIs and e‑commerce sites.
          </p>
          <div className="hr"></div>
          <ul className="facts">
            <li><strong>Location:</strong> Khushab, Pakistan</li>
            <li><strong>Email:</strong> muhammadmehboobz7869@gmail.com</li>
            <li><strong>Experience:</strong> 3+ years</li>
            <li><strong>Education:</strong> Web Development Program (2021–2025)</li>
          </ul>
        </div>
        <div className="card about-card">
          <h3>What I Do</h3>
          <ul className="bullets">
            <li>Pixel‑perfect, mobile‑first layouts</li>
            <li>Reusable components & clean code</li>
            <li>WordPress/Shopify theme customization</li>
            <li>Performance & SEO best practices</li>
          </ul>
          <a className="btn" href="#contact">Let’s Work Together</a>
        </div>
      </div>
    </section>
  );
}

export default About;
