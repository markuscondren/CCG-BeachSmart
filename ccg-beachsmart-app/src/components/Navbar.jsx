import React from "react";


function Navbar() {
  return (
      <nav className="navbar fixed-top" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Beach Smart
          </a>
          <button
            className="navbar-toggler"
            id="nav-toggle"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Beach Smart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign In/Sign Up/Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CCG Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Option
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
