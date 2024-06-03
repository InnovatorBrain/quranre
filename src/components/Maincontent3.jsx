import { Link } from "react-router-dom"
export default function Maincontent3() {
  return (
    <div className="container">
      <div className="row mt-4 d-flex justify-content-around">
        <div className="col-lg-10 ">
          <h1 className="hero-section-h1">Discover some of our best teachers</h1>
        </div>
        <div className="col-lg-2 mt-2">
          <Link to="/Teachers">
          <button className="btn btn-primary">
            see all teachers
          </button>
          </Link>
        </div>
      </div>
      <hr />
    </div>
    




  )
}
