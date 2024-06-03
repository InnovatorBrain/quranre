import { Link } from "react-router-dom"
import quran_image from '../assets/resourse1.png'
// import pdf from '../files/Noorani-Qaida-in-Arabic.pdf'
// import pdf2 from '../files/Noorani-Qaida-in-English.pdf'
// import pdf3 from '../files/Noorani-Qaida-in-Urdu.pdf'
export default function Resources() {
    return (
<>

        <div className="container">
            <h2 className="text-start mt-3 text-dark" style={{ fontFamily: 'raleway', fontWeight: '700' }}>
                Resources
            </h2>
            <div className="row d-flex justify-content-around mt-4 ">
                <div className="col-lg-3 col-md-5 col-sm-12 ">
                    <Link to={pdf} target="_blank" className="card text-white border-0">
                        <img src={quran_image} alt="" style={{ borderRadius: '10px' }} />
                        <div className="card-img-overlay">
                            <h5 className="card-title mt-3"> <small>Noorani Qaida in Arabic</small></h5>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3  col-md-5 col-sm-12 ">
                    <Link to={pdf2} target="_blank" className="card text-white border-0">
                        <img src={quran_image} className="sm-mb-4" alt="" style={{ borderRadius: '10px' }} />
                        <div className="card-img-overlay">
                            <h5 className="card-title mt-3"> <small>Noorani Qaida in English</small></h5>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-12 ">
                    <Link to={pdf3} target="_blank" className="card text-white border-0">
                        <img src={quran_image} alt="" style={{ borderRadius: '10px' }} />
                        <div className="card-img-overlay">
                            <h5 className="card-title mt-3"> <small>Noorani Qaida in Urdu</small></h5>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row d-flex justify-content-around ">
                <div className="col-lg-3 col-md-5 col-sm-12">
                    <Link to={pdf} target="_blank" className="card text-white border-0">
                        <img src={quran_image} alt="" style={{ borderRadius: '10px' }} />
                        <div className="card-img-overlay">
                            <h5 className="card-title mt-3"> <small>Quran Arabic Script</small></h5>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-12 ">
                    <Link to={pdf2} target="_blank" className="card text-white border-0">
                        <img src={quran_image} alt="" style={{ borderRadius: '10px' }} />
                        <div className="card-img-overlay">
                            <h5 className="card-title mt-3"> <small>Quran Indo Pak Nastaleeq</small></h5>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-12 sm-mt-4">
                    <Link to={pdf3} target="_blank" className="card text-white border-0">
                        <img src={quran_image} alt="" style={{ borderRadius: '10px' }} />
                        <div className="card-img-overlay">
                            <h5 className="card-title mt-3"> <small>Your Tajweed made easy</small></h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
</>
    )
}
