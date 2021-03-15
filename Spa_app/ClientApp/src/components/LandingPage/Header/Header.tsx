import React, { Component } from 'react';

export class  Header extends Component {
 static displayName = Header.name;
 render() {
      return (
    <section id="home" className="header_area">
  <div id="header_navbar" className="header_navbar">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html">
              <img id="logo" src={process.env.PUBLIC_URL+'images/logo.svg'} alt="Logo" />
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="toggler-icon" />
              <span className="toggler-icon" />
              <span className="toggler-icon" />
            </button>
            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
              <ul id="nav" className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="page-scroll active" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#portfolio">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#team">Team</a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="page-scroll" href="#contact">Contact</a>
                </li>
              </ul>
            </div> {/* navbar collapse */}
          </nav> {/* navbar */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </div> {/* header navbar */}
  <div className="header_hero">
    <div className="single_hero bg_cover d-flex align-items-center" style={{backgroundImage: 'url(images/hero.jpg)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="hero_content text-center">
              <h2 className="hero_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">SHB InternShip<br /> Website Research</h2>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">A super simple website template based on Bootstrap 5 and HTML5, comes with all essential <br className="d-none d-xl-block" /> elements &amp; features to get started and ready to use for almost any type of business websites.</p>
              <a href="#features" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Explore</a>
            </div> {/* hero content */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </div> {/* single hero */}
  </div> {/* header hero */}
</section>

      )
    }
}