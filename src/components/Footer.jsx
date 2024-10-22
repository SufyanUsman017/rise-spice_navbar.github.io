import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container text-center ">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12 ft-1">
            <h3>
              
              {/* <span> Ecommerce &</span> Web */}
              <span> Ecommerce &</span> Web
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              officia nostrum facere quas veritatis placeat quia doloremque eius
              iusto atque, alias voluptatum sapiente iure temporibus neque
              cupiditate praesentium et ipsum!
            </p>
            <div className="footer-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h5>Quick Links</h5>
            <ul>

             


              
              <li className="nav-item">
              <Link className="nav-link " to="/services">
                  Services
                  </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link " to="/portfolio">
                  Portfolio
                  </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link " to="/contact">
                  Contact Us
                  </Link>
                  </li>
              
              
                  <li className="nav-item">
              <Link className="nav-link " to="/signup">
                  SignUp
                  </Link>
                  </li>
                  <li className="nav-item">
              <Link className="nav-link " to="/signin">
                  SignIn
                  </Link>
                  </li>
              
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 col-12 ft-3">
            <h5>Contact Info</h5>
            <p>
              <i className="fa-solid fa-phone-volume"></i>+923147778454
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>dev.sufyan172gmail.com
            </p>
            <p>
              <i className="fa-solid fa-paper-plane"></i>Karachi,Pakistan
            </p>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        {/* <p>@ Design By Rice & Spice</p> */}
        <p>@ Design By Ecommerce & Web</p>

      </div>
    </div>
  );
}
