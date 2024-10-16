import React from 'react'

export default function Navbar() {
  return (
    <div>
       <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container py-2">
    <a className="navbar-brand" href="/">Rice & Spice</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* Menu */}
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
    {/* SupportedContent */}
      <ul className="navbar-nav ms-auto nav-ul align-items-center ">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <a className="nav-link "  href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>

        <div className='mx-3'>
        <button type="button" className="btn1  mx-2">Login</button>
        <button type="button" className="btn2 mx-2">Sign Up</button>
        </div>

        <div className="form-check form-switch  ">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
            </div>
       
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    {/* End Menu */}
  </div>
</nav>
    </div>
    </div>
  )
}
