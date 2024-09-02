import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import './portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    // SHOW MENU
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show-menu');
        });
      }
    };
    showMenu('nav-toggle', 'nav-menu');

    // REMOVE MENU MOBILE
    const navLinks = document.querySelectorAll('.nav__link');

    const linkAction = () => {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.remove('show-menu');
      }
    };
    navLinks.forEach(n => n.addEventListener('click', linkAction));

    // CHANGE BACKGROUND HEADER
    const scrollHeader = () => {
      const nav = document.getElementById('header');
      if (nav) {
        if (window.scrollY >= 200) {
          nav.classList.add('scroll-header');
        } else {
          nav.classList.remove('scroll-header');
        }
      }
    };
    window.addEventListener('scroll', scrollHeader);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <div className="portfolio">
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          {/* <a href="#" className="nav__logo">Portfolio</a> */}

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link ">Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#experience" className="nav__link">Experience</a></li>
              <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
          </div>

          <div className="nav__social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav__social-icon"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav__social-icon"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav__social-icon"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav__social-icon"><FaTwitter /></a>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
            <div className="home__data">
              <h1 className="home__title">Sreedeva Reddy</h1>
              <h2 className="home__subtitle">I am a Software Engineer</h2>
              <button className="button">
                My Resume
              </button>
            </div>
          </div>
        </section>
        {/* Add more sections here */}
      </main>
    </div>
  );
};

export default Portfolio;