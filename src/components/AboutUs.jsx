import React from "react";
import jada from "./assets/jada.jpeg";
import kel from "./assets/Kel.jpeg";
import nick from "./assets/nick.jpeg";
import zach from "./assets/zach.jpeg";
import shankar from "./assets/shankar.jpeg";
import "./AboutUs.css"; 

export class AboutUs extends React.Component {

render() {
  return (
    
      <header className="team-section">
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h1>Fridge Buddies</h1>
              <p>
                We're professional software developers looking for opportunities
                to excel in the world of Technology.{" "}
              </p>
              <p>
                We take business requirements and translate them into technical
                solutions to solve real world challenges.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="team-items">
              <div class="item">
                <img src={jada} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Jada Quandt</h5>
                    <p>Software Engineer</p>
                    <div class="social-links">
                      <a
                        href="https://www.jadaquandt.digital/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-info"></span>
                      </a>
                      <a
                        href="https://github.com/jadaquandt"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-github"></span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jadaquandt/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-linkedin"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={kel} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Kelvin Lester</h5>
                    <p>Software Engineer</p>
                    <div class="social-links">
                      <a
                        href="https://www.kelvinlester.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-info"></span>
                      </a>
                      <a
                        href="https://github.com/klester01"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-github"></span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/kelvin-lester-451a682/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-linkedin"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={nick} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Nicholas Howland</h5>
                    <p>Software Engineer</p>
                    <div class="social-links">
                      <a
                        href="https://nhowlandatl.github.io/portfolio-site/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-info"></span>
                      </a>
                      <a
                        href="https://github.com/nhowlandatl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-github"></span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nicholas-howland-6553b0137/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-linkedin"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={zach} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Zach Gardner</h5>
                    <p>Software Engineer</p>
                    <div class="social-links">
                      <a
                        href="https://zgard.github.io/portfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-info"></span>
                      </a>
                      <a
                        href="https://github.com/zgard"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-github"></span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/zfgardner/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-linkedin"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={shankar} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Shankar Pushparaj</h5>
                    <p>Software Engineer</p>
                    <div class="social-links">
                      <a
                        href="https://shankarp88.github.io/Shankar-portfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-info"></span>
                      </a>
                      <a
                        href="https://github.com/Shankarp88"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-github"></span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/shankar-pushparaj-634632124/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="fa fa-linkedin"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    
  );
}
}

export default AboutUs;
