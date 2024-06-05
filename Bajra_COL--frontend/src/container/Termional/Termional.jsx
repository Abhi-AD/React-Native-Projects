import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Termional.css'
function Termional() {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          fade: true,
          pauseOnHover: false
     };
     return (
               <div className="container mb-5 ">
                    <Slider {...settings} >
                         <div className="termional">
                              <div className="d-flex">
                                   <i className="bi bi-quote terminoal_icon" ></i>
                                   <p className="fw-regular fs-4">We were very impressed with Bajra from day one. I liked that they told us up front the specific code base they use, the hosting platform they use, and so forth. Right off the bat, they took care of some of those decisions that would be difficult for software lay people to make. They held semi-daily standups with us to keep communication as fluid as possible. We do not have any developers on staff, but that didn’t cause us any problems as communicating directly with their developers was very easy.</p>
                              </div>

                              <div className="row text-center">
                                   <p className="fs-2 fw-semibold mb-0" style={{ color: 'var(--main-color)' }}>Jeff DeBolt</p>
                                   <p className="fs-6 fw-light mt-0" style={{ color: 'var(--secondary-color)' }}>Accounting Systems Guru, MuseMinded</p>
                              </div>
                         </div>
                         <div className="termional">
                              <div className="d-flex">
                                   <i className="bi bi-quote terminoal_icon" ></i>
                                   <p className="fw-regular fs-4">I highly recommend Bajra Technologies to anyone looking for custom mobile or web application development. Over the past four years, I have partnered with Bajra to deliver several sophisticated online applications. With each engagement, the Bajra team treated my customers like their customers.</p>
                              </div>

                              <div className="row text-center">
                                   <p className="fs-2 fw-semibold mb-0" style={{ color: 'var(--main-color)' }}>Justin Bryant</p>
                                   <p className="fs-6 fw-light mt-0" style={{ color: 'var(--secondary-color)' }}>CEO, Grymatter</p>
                              </div>
                         </div>
                         <div className="termional">
                              <div className="d-flex">
                                   <i className="bi bi-quote terminoal_icon" ></i>
                                   <p className="fw-regular fs-4">I&apos;m continually amazed by both the speed and quality of work Bajra can accomplish for us across multiple products and projects. More than a partner, we consider them to be an extension of our own team due to the thought and care they put into every request.

                                   </p>
                              </div>

                              <div className="row text-center">
                                   <p className="fs-2 fw-semibold mb-0" style={{ color: 'var(--main-color)' }}>Jake LaCivita</p>
                                   <p className="fs-6 fw-light mt-0" style={{ color: 'var(--secondary-color)' }}>VP of Product, Smarter Sorting</p>
                              </div>
                         </div>
                         <div className="termional">
                              <div className="d-flex">
                                   <i className="bi bi-quote terminoal_icon" ></i>
                                   <p className="fw-regular fs-4">A good rhythm and excellent project management on Bajra’s end meant we didn’t have to worry about keeping track of all the work details. Their Agile methodology allowed me to get visibility into pieces I needed. I have only the highest regard for this team and would highly recommend them for any of your technological needs.</p>
                              </div>

                              <div className="row text-center">
                                   <p className="fs-2 fw-semibold mb-0" style={{ color: 'var(--main-color)' }}>Nishan Subedi</p>
                                   <p className="fs-6 fw-light mt-0" style={{ color: 'var(--secondary-color)' }}>Co-founder and CTO, Harvest Platform</p>
                              </div>
                         </div>
                         <div className="termional">
                              <div className="d-flex">
                                   <i className="bi bi-quote terminoal_icon" ></i>
                                   <p className="fw-regular fs-4">Their knowledge of mobile apps and web development with the understanding and ability to help turn your ideas and drawings into active products is incredible. I wanted to build a music streaming app, and Bajra built out a masterful music streaming mobile app and platform that can be used universally used! Score!</p>
                              </div>

                              <div className="row text-center">
                                   <p className="fs-2 fw-semibold mb-0" style={{ color: 'var(--main-color)' }}>Adell Hendon</p>
                                   <p className="fs-6 fw-light mt-0" style={{ color: 'var(--secondary-color)' }}>CEO, YouSpin</p>
                              </div>
                         </div>
                    </Slider>
               </div>
     );
}

export default Termional;