import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./lyceum-of-alabang_logo-removebg-preview.png";
import background from "./reactbg.jpg"; // Import the background image

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Lyceum of Alabang Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          <h3 className="d-inline-block">Lyceum of Alabang</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Course
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    BSREM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSTourism
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSHM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSCA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSBA (Marketing, Financial, HRDM)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSCrim
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSCS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSIT
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSIE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSCpE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSPsych
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSEd (English, Filipino, Math)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BTVTE
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div
      className="home-container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="p-5 bg-light text-dark rounded shadow-lg w-75">
        <div className="row mt-4">
          <div className="col-md-4">
            <h3>PHILOSOPHY</h3>
            <p>
              An institution that provides quality and relevant instruction and
              innovation for the next generation to improve the lives of
              individuals; physically, emotionally, morally, and spiritually
              adhere to the principle of God.
            </p>
          </div>
          <div className="col-md-4">
            <h3>VISION</h3>
            <p>
              Lyceum of Alabang envisions becoming one of the nation’s leading
              educational institutions involved in the pursuit and advancement
              of knowledge, skills, and values for personal, community and
              national development.
            </p>
          </div>
          <div className="col-md-4">
            <h3>MISSION</h3>
            <p>
              Lyceum of Alabang shall provide world-class education and training
              through competent personnel, high-end facilities, advanced
              technology, and equipment and accredited curricula of
              industry-based courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us:</p>
      <ul>
        <li>Email: info@lyceumofalabang.edu.ph</li>
        <li>Phone: +63 123 456 7890</li>
        <li>Address: Alabang, Muntinlupa City, Philippines</li>
      </ul>
    </div>
  );
}

// About Us Component
function AboutUs() {
  return (
    <div className="container mt-5">
      <h2>Mission</h2>
      <p>
        Lyceum of Alabang shall provide world-class education and training
        through competent personnel, high-end facilities, advanced technology,
        and equipment and accredited curricula of industry-based courses.
      </p>
      <h2>Vision</h2>
      <p>
        Lyceum of Alabang envisions becoming one of the nation’s leading
        educational institutions involved in the pursuit and advancement of
        knowledge, skills, and values for personal, community and national
        development.
      </p>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-body-tertiary text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-0">&copy; 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
}

// App Component (Main)
function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
