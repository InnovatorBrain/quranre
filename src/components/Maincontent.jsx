import first_image from '../assets/first_image.png'
import second_image from '../assets/second_image.png'
import third_image from '../assets/third_image.png'
export default function Maincontent() {
  return (
    <>

      <div className="container p-4">
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <h1 className='hero-section-h1 '>What does Qari.io do?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-2">
            <p className="text-center hero-section-p ">
              Qari.io helps you connect with expert Qaris, certified by our team.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-4 mb-md-1 mb-lg-0 d-flex justify-content-center">
            <div className="card  text-white">
              <img src={first_image} className="img-fluid" alt="..." />
              <div className="card-img-overlay d-flex flex-column">
                <div className="mt-auto">
                  <h4 className="card-text ">Find the right teacher</h4>
                  <p className="card-text  ">With our range of filters, like languages, countries, experience, you can find the exact teacher.</p>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-4 mb-md-1 mb-lg-0 d-flex justify-content-center">
            <div className="card text-white">
              <img src={second_image} className="img-fluid" alt="..." />
              <div className="card-img-overlay d-flex flex-column">
                <div className="mt-auto">
                  <h4 className="card-text">Online classes</h4>
                  <p className="card-text">All the classes are held online, so wherever you are in the world, you can learn the beautiful Quran.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-4 mb-md-1 mb-lg-0 d-flex justify-content-center">
            <div className="card  text-white">
              <img src={third_image} className="img-fluid" alt="..." />
              <div className="card-img-overlay d-flex flex-column">
                <div className="mt-auto">
                  <h4 className="card-text">Paid monthly</h4>
                  <p className="card-text">Students are charged on a monthly basis; only when they hire a teacher that they like.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


