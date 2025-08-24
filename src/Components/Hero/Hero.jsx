import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="container hero-wrap card">
        <div className="hero-text">
          <p className="kicker">Frontend Web Developer</p>
          <h1>Hi, I’m <span>Muhammad Mehboob</span></h1>
          <p className="sub">
            I build responsive, fast and accessible websites using
            <strong> HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>WordPress</strong> & <strong>Shopify</strong>.
          </p>
          <div className="actions">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn ghost" href="/CV.pdf" download >Download CV</a>
          </div>
          <ul className="badges">
            <li>3+ yrs HTML/CSS/Bootstrap</li>
            <li>2+ yrs JS, WP & Shopify</li>
            <li>1+ yr React</li>
          </ul>
        </div>
        <div className="hero-art" aria-hidden>
          <div className="blob"></div>
          <div className="ring"></div>
          <div className="dots"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
