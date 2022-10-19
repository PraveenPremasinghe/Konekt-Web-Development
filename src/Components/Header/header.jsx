import React, { useEffect, useState } from "react";

import "./headercss.css";



function Headercom() {


 

  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    setMenu(true);
  }

  function closeMenu() {
    setMenu(false);
  }

  return (
    <div>



      <header className={`header ${isScrolled && "on-scroll "}`} id="header">
        <nav className="navbar container">
          <a href="#" className="brand">
            Konekt
          </a> 
          <div className={`burger ${menu && "is-active" }`}  id="burger" onClick={menu ? closeMenu:toggleMenu}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <div className={`menu ${menu && "is-active" }`}  id="menu">
            <ul className="menu-inner">
              <li className="menu-item">
                <a href="#" className="menu-link" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link" onClick={closeMenu}>
                  Our Products
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link" onClick={closeMenu}>
                  About Us
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link" onClick={closeMenu}>
                  help
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link" onClick={closeMenu}>
                  News
                </a>
              </li>
            </ul>
          </div>
          <a href="#" className="menu-block">
            Contact Us
          </a>
        </nav>
      </header>
      {/* <!-- Main Section --> */}
      <main className="main">
        <section className="section banner banner-section">
          <div className="main-padding banner-column">
            <img
              className="banner-image"
              src="https://i.ibb.co/vB5LTFG/Headphone.png"
              alt="banner"
            />
            <div className="banner-inner">
              <h1 className="heading-xl">Experience Media Like Never Before</h1>
              <p className="paragraph">
                Enjoy award-winning stereo beats with wireless listening freedom
                and sleek, streamlined with premium padded and delivering
                first-rate playback.
              </p>
              <button className="readmore readmore-darken readmore-inline">
                Read More <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div className="banner-links">
              <a href="#" title="">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" title="">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" title="">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" title="">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Headercom;
