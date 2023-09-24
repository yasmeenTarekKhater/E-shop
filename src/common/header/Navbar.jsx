import { Link } from "react-router-dom"

const Navbar = () => {
  
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container ">
        <button class="navbar-toggler ms-4  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav mx-auto  ">
            <li class="nav-item ms-4  ">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item ms-4 ">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item ms-4  ">
              <Link class="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
