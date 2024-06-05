
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100 d-flex justify-content-between ">
        <div className="container  ">
          <Link to='/'>
            <img src={logo} alt="" width='250px' height='50px' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto d-flex gap-4 my-2 me-2" >
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/Teachers">Find Teachers</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/timetable">Time Table & Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faqs">Faqs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      {/* <hr /> */}
    </>
  )
}
