import screen from '../assets/screening.png';
export default function Maincontent2() {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <h1 className='hero-section-h1 '>What we offer</h1>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-12 mb-2">
                    <p className="text-center hero-section-p ">
                        Along with online classes and a list of expert Qaris,<br />
                        we provide the following benefits as well.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4 col-md-12 text-center">
                    <img src={screen} alt="image-screen " />
                    <h5 className='mt-2 mb-2 font-h5'>Screening</h5>
                  <p className='mx-3'>Every teacher is screened for expertise and is only accepted to the platform if they meet Qari.io’s standards.</p>
                </div>
                <div className="col-lg-4 col-md-12 text-center">
                    <img src={screen} alt="image-screen " />
                    <h5 className='mt-2 mb-2 font-h5'>Quiz system</h5>
                    <p className='mx-3'>You can see your quizes rated along with teacher’s remarks any time. Specially helpful in tracking children’s progress.</p>
                </div>
                <div className="col-lg-4 col-md-12 text-center">
                    <img src={screen} alt="image-screen " />
                    <h5 className='mt-2 mb-2 font-h5'>Notes</h5>
                    <p className='mx-3'>Students can take notes during their classes right into their accounts. Teachers can give them notes and homework.</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4 col-md-12 text-center">
                    <img src={screen} alt="" />
                    <h5 className='mt-2 mb-2 font-h5'>Easy to use</h5>
                    <p className='mx-3'>Simple and easy to use system that will take the difficulty out of usage, so you can focus on your studies.</p>
                </div>
                <div className="col-lg-4 col-md-12 text-center">
                    <img src={screen} alt="" />
                    <h5 className='mt-2 mb-2 font-h5'>A safe place to learn</h5>
                    <p className='mx-3'>Our screening means you and your children learn in a safe environment. Any inappropriate actions are taken seriously.</p>
                </div>
                <div className="col-lg-4 col-md-12 text-center">
                    <img src={screen} alt="" />
                    <h5 className='mt-2 mb-2 font-h5'>Cancel anytime</h5>
                    <p className='mx-3'>If you are not satisfied with your techer, you can end the contract from the next month and find another tutor.</p>
                </div>
            </div>
        </div>
    )
}
