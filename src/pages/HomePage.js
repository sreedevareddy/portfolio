import React, {useEffect} from 'react';
// import './styles.css';
// import ScrollReveal from 'scrollreveal';

const Footer = () => {
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

    // SCROLL SECTIONS ACTIVE LINK
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (sectionId) {
          const linkElement = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (linkElement) linkElement.classList.add('active-link');
          } else {
            if (linkElement) linkElement.classList.remove('active-link');
          }
        }
      });
    };
    window.addEventListener('scroll', scrollActive);

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

    // SHOW SCROLL TOP
    const scrollTop = () => {
      const scrollTop = document.getElementById('scroll-top');
      if (scrollTop) {
        if (window.scrollY >= 560) {
          scrollTop.classList.add('show-scroll');
        } else {
          scrollTop.classList.remove('show-scroll');
        }
      }
    };
    window.addEventListener('scroll', scrollTop);

    // SCROLL REVEAL ANIMATION
    const sr = window.ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      reset: true,
    });

    sr.reveal(`.home__data, .home__img,
                .about__data, .about__img,
                .services__content, .menu__content,
                .app__data, .app__img,
                .contact__data, .contact__button,
                .footer__content`, {
      interval: 200
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollActive);
      window.removeEventListener('scroll', scrollHeader);
      window.removeEventListener('scroll', scrollTop);
    };
  }, []);

  return (
    <footer className="footer section bd-container">
      <div className="footer__container bd-grid">
        <div className="footer__content">
          <a href="/#" className="footer__logo">Zinacor S.A.</a>
          <span className="footer__description"></span>
          <div>
            <a href="/#" className="footer__social"
              ><i className="bx bxl-facebook" /></a>
            <a href="/#" className="footer__social">
              <i className="bx bxl-instagram" /></a>
            <a href="/#" className="footer__social">
              <i className="bx bxl-twitter" /></a>
          </div>
        </div>


        <div className="footer__content">
          <h3 className="footer__title">Information</h3>
          <ul>
            <li><a href="/#" className="footer__link">Technical advices</a></li>
            <li><a href="/#" className="footer__link">References</a></li>
            <li><a href="/#" className="footer__link">Privacy policy</a></li>
            <li><a href="/#" className="footer__link">Legal mentions</a></li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Address</h3>
          <ul>
            <li>Centre d'affaires Dony</li>
            <li>Rue de Chênée 53 (entrée B)</li>
            <li>B-4031 Angleur- Belgique</li>
            <li>Telephone +3243666471</li>
            <li>Zinacor@email.com</li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">&#169; 2020 Bedimcode. All right reserved</p>
    </footer>
  )
}

const HomePage = () => {
  return (
    <div>
      <a href="/#" className="scrolltop" id="scroll-top">
        <i className="bx bx-chevron-up scrolltop__icon" />
      </a>

      <header className="l-header" id="header">
        <nav className="nav bd-container">
          {/* <a className="nav__logo">
            <img src= "./assets/img/logo-255eb1eb39.svg" alt="Zinacor" />
          </a> */}

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">About</a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">Services</a>
              </li>
              <li className="nav__item">
                <a href="#products" className="nav__link">Products</a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">Contact us</a>
              </li>

            </ul>
          </div>

          <div>
            <a href="/#" className="footer__social"
              ><i className="bx bxl-facebook" /></a>
            <a href="/#" className="footer__social">
              <i className="bx bxl-instagram" /></a>
            <a href="/#" className="footer__social">
              <i className="bx bxl-twitter" /></a>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu" />
          </div>
        </nav>
      </header>

      <main className="l-main">
        <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
            <div className="home__data">
              <h1 className="home__title">
                Leader in manufacturing zinc and zinc-aluminium wire
              </h1>
              <a href="#products" className="button">View Products</a>
            </div>
          </div>
        </section>

        <section className="video" id="video">
          <video src="assets/video/homepage.mp4" autoPlay loop muted ></video>
        </section>

        <section className="about section bd-container" id="about">
          <div className="about__container bd-grid">
            <div className="about__data">
              <span className="section-subtitle about__initial">About us</span>
              <h2 className="section-title about__initial">
                Protection withstanding the test of time
              </h2>
            </div>

            <div className="about__data">
              <p className="about__description">
                With their wealth of experience and know-how, Zinacor brings you
                the best anti-corrosion solution: the zinc and zinc-aluminium
                wire. 
                <br />
                <br />
                Zinacor, specialised in the manufacturing of zinc and
                zinc-aluminium wire used in the field of thermal spraying, ideally
                combines quality, expertise and worldwide vision. All these
                aspects make Zinacor the ultimate world leader in the production
                of zinc and zinc-aluminium wire.
              </p>
              <a href="/#" className="button">Explore history</a>
            </div>
          </div>
        </section>

        <section className="services section bd-container" id="services">
          <span className="section-subtitle">Services</span>
          <h2 className="section-title">Our amazing services</h2>

          <div className="services__container bd-grid">
            <div className="services__content">
              <h3 className="services__title">Protection for all types of projects</h3>
            </div>

            <div className="services__content">
              <h3 className="services__title">The best advertising</h3>
            </div>

            <div className="services__content">
              <h3 className="services__title">Perfection is also found in the manufacturing process</h3>
            </div>
          </div>
          <div className="services__container bd-grid">
            <div className="services__content">
              <a href="#services" className="button services_button">Applications</a>
            </div>

            <div className="services__content">
              <a href="#services" className="button services_button">References</a>
            </div>

            <div className="services__content">
              <a href="#services" className="button services_button">Metallisation process</a>
            </div>
          </div>
        </section>

        <section className="menu section bd-container" id="products">
          <span className="section-subtitle">Products</span>
          <h2 className="section-title">Zinc-aluminium</h2>

          <div className="menu__container bd-grid">
            <div className="menu__content">
              <img src="./assets/img/barre_centered.jpg" alt="" className="menu__img" />
              <h3 className="menu__name">Rods</h3>
              <span className="menu__detail">Pure Zinc</span>
              <span className="menu__detail">High-quality rods</span>
              <span className="menu__preci">Zn ≥ 99,995%</span>
              <a href="/#" className="button menu__button">
                  <i className='bx bx-chevron-right' />
              </a>
            </div>

            <div className="menu__content">
              <img src="./assets/img/berlingot_centered.png" alt="" className="menu__img" />
              <h3 className="menu__name">Berlingots</h3>
              <span className="menu__detail">Pure Zinc</span>
              <span className="menu__detail">High-quality zinc berlingots</span>
              <span className="menu__preci">Zn ≥ 99,995%</span>
              <a href="/#" className="button menu__button">
                  <i className='bx bx-chevron-right' />
              </a>
            </div>

            <div className="menu__content">
              <img src="./assets/img/grenailles_centered.png" alt="" className="menu__img" />
              <h3 className="menu__name">Zinc shots</h3>
              <span className="menu__detail">Pure Zinc</span>
              <span className="menu__detail">For perfect surface preparation</span>
              <span className="menu__preci">Zn ≥ 99,995%</span>
              <a href="/#" className="button menu__button">
                  <i className='bx bx-chevron-right' />
              </a>
            </div>
          
            
          </div>
        </section>

        <section className="contact section bd-container" id="contact">
          <div className="contact__container bd-grid">
            <div className="contact__data">
              <span className="section-subtitle contact__initial">Let's talk</span>
              <h2 className="section-title contact__initial">Contact us</h2>
              <p className="contact__description">
              Get in touch helps us to understand you better
              </p>
            </div>

            <div className="contact__button">
              <a href="/#" className="button">Contact us now</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  )
}

export default HomePage;