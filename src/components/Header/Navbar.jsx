import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container">
    <a className="navbar-brand" href="#">LearnFireBase</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <div className="d-flex">
        <button className="btn btn-info" >Login</button>
        <button className="btn btn-success" >Register</button>
      </div>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Navbar