import React from 'react'
import download from '../download.png'
function Header(){
    return(
        <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#"><img src={download} alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">How It Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Resources
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Blog</a>
                <a className="dropdown-item" href="#">Media Assets</a>
                <a className="dropdown-item" href="#">Docs</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Schedule Demo</a>
            </li>
          </ul>
        </div>
        <div className="btn-btn">
            <button className="logIn-btn"  type="submit">Login</button>
            <button className="FreeTrial-btn"  type="submit">Free Trail</button>
        </div>
      </nav>   
        </div>
    )
}
export default Header;