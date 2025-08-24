import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      close();
    }
  };

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container nav-wrap">
        <a
          href="#hero"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          Muhammad <span>Mehboob</span>
        </a>

        <button
          aria-label="Menu"
          className={open ? "hamburger active" : "hamburger"}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={open ? "menu open" : "menu"}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="cta"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
