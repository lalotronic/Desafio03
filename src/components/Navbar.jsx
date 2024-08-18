import React from 'react'
let token=true;//si token = true...el user ya esta registrado si token=false ...el user no esta registrado

export default function Navbar() {
  return (
    <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 justify-content-between" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">&#x1F355;Home</a>
          </li>
          {!token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">&#x1F510;Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">&#x1F510;Register</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">&#x1F513;Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">&#x1F512;Logout</a>
              </li>
            </>
          )}
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" aria-disabled="false">&#x1F6D2;Total:$25.000</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}