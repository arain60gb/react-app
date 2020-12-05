import React from 'react'
import download from '../download.png'

function Footer(){
    return(
        <div className="footer-bottom">
                {/* Footer */}
      <footer className="page-footer font-small blue pt-4">
        {/* Footer Links */}
        <div className="container-fluid text-center text-md-left">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-6 mt-md-0 mt-3">
              {/* Content */}
              <img src={download} alt="" />
              <p>Copyright © 2020 Syntax IQ. All Rights <br/> Reserved.</p>
              <div className="icons">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
            </div>
            {/* Grid column */}
            {/* <hr className="clearfix w-100 d-md-none pb-3" /> */}
            {/* Grid column */}
            <div className="col-md-3 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
              <a href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              See More
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Pricing</a>
                <a className="dropdown-item" href="#">Media Assets</a>
                <a className="dropdown-item" href="#">FAQs</a>
              </div>
            </li>
              </ul>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 mb-md-0 mb-3">
              {/* Links */}
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Documentation</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Media</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
      </footer>
      {/* Footer */}
        </div>
    )
}
export default Footer;