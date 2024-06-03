import { Link } from 'react-router-dom';
import image from '../assets/banner1.jpg'
import {
  MDBCarousel,
  // MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
export default function Maincontent4() {
  return (
    <>
      <div className="container mt-4 mb-4 ">
        <div className="row ">
          <div className="col-lg-6 col-md-12">
            <h1 className='hero-section-h1 '>
              An opportunity for Qaris
            </h1>

            <p className='hero-section-p '>
              Quran Reasonate is a Sadaqah Jariyah. We hope to make it easy for everyone to read, study, and learn The Noble Quran. </p>
           <Link to='/signup'> <button className='btn btn-primary'>
              Apply as a Qari
            </button></Link>
          </div>
          <div className="col-lg-6">
            <img src={image} alt="hero-banner image" className='hero-banner-image rounded-8 ' />
          </div>
        </div>
        <hr />
        <h1 className='hero-section-h1 text-center mt-4 '>
              Reviews of Our Students
            </h1>
        <MDBRow className="py-5 text-center">
            <MDBCol md="12">
                <MDBCarousel showControls dark>
                    {/* <MDBCarouselInner> */}
                        <MDBCarouselItem className="active">
                            <p className="lead font-italic mx-4 mx-md-5">
                            Quran Reasonate institute is an excellent portal for those who wish to study Quran and Arabic. It has multi facet learning support by their dedicated Tutors who r highly qualified, experienced and friendly
                            </p>
                            <div className="mt-5 mb-4">
                                <img
                                    src="https://quranayat.com/wp-content/uploads/2020/03/ayaz-100x100-1.png"
                                    className="rounded-circle img-fluid shadow-1-strong"
                                    alt="smaple image"
                                    width="100"
                                    height="100"
                                />
                            </div>
                            <p className="text-muted mb-0">- Mariyum</p>
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <p className="lead font-italic mx-4 mx-md-5">
                            My daughter has been taking classes with different people but the biggest impact I noticed on her was with Sheikh Adel from Quran Reasonate. She is becoming a very confident reader who wants to learn more everyday. She looks forward to her classes and even asks for more Mashallah.
                            </p>
                            <div className="mt-5 mb-4">
                                <img
                                    src="https://quranayat.com/wp-content/uploads/2020/03/pray-150x150.png"
                                    className="rounded-circle img-fluid shadow-1-strong"
                                    alt="smaple image"
                                    width="100"
                                    height="100"
                                />
                            </div>
                            <p className="text-muted mb-0">- Jaffar</p>
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <p className="lead font-italic mx-4 mx-md-5">
                            May Allah bless you Quran Reasonate, they have Excellent teachers.Very passionate. May Allaah keep you strong and preserve you yaa akhi Abu Ahmed. Aameen yaa Rabb.
                            </p>
                            <div className="mt-5 mb-4">
                                <img
                                    src="https://quranayat.com/wp-content/uploads/2020/03/women-Avatar-150x150.jpg"
                                    className="rounded-circle img-fluid shadow-1-strong"
                                    alt="smaple image"
                                    width="100"
                                    height="100"
                                />
                            </div>
                            <p className="text-muted mb-0">- Amna</p>
                        </MDBCarouselItem>
                    {/* </MDBCarouselInner> */}
                </MDBCarousel>
            </MDBCol>
        </MDBRow>
      </div>
    </>
  )
}