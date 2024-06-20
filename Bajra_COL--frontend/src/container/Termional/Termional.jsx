import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Termional.css";

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
          <div className="container-fluid py-5 ">
               <div className="row justify-content-center termional">
                    <div className="col-10 col-md-8 col-lg-6 ">
                         <Slider {...settings}>
                              {testimonials.map((testimonial, index) => (
                                   <div key={index} className=" p-4 rounded">
                                        <div className="d-flex align-items-center">
                                             <i className="bi bi-quote terminoal_icon"></i>
                                             <p className="fw-normal fs-5 mb-0" style={{ color: "var(--secondary-color)" }}>{testimonial.quote}</p>
                                        </div>
                                        <div className="text-center text-primar">
                                             <p className="fs-4 fw-bold  mb-0" style={{ color: "var(--main-color)" }}>{testimonial.author}</p>
                                             <p className="fs-6 fw-light mb-0" style={{ color: "var(--secondary-color)" }}>{testimonial.title}</p>
                                        </div>
                                   </div>
                              ))}
                         </Slider>
                    </div>
               </div>
          </div>
     );
}
const testimonials = [
     {
          quote:
               "We were very impressed with Bajra from day one. I liked that they told us up front the specific code base they use, the hosting platform they use, and so forth. Right off the bat, they took care of some of those decisions that would be difficult for software lay people to make. They held semi-daily standups with us to keep communication as fluid as possible. We do not have any developers on staff, but that didn’t cause us any problems as communicating directly with their developers was very easy.",
          author: "Jeff DeBolt",
          title: "Accounting Systems Guru, MuseMinded"
     },
     {
          quote:
               "I highly recommend Bajra Technologies to anyone looking for custom mobile or web application development. Over the past four years, I have partnered with Bajra to deliver several sophisticated online applications. With each engagement, the Bajra team treated my customers like their customers.",
          author: "Justin Bryant",
          title: "CEO, Grymatter"
     },
     {
          quote:
               "I'm continually amazed by both the speed and quality of work Bajra can accomplish for us across multiple products and projects. More than a partner, we consider them to be an extension of our own team due to the thought and care they put into every request.",
          author: "Jake LaCivita",
          title: "VP of Product, Smarter Sorting"
     },
     {
          quote:
               "A good rhythm and excellent project management on Bajra’s end meant we didn’t have to worry about keeping track of all the work details. Their Agile methodology allowed me to get visibility into pieces I needed. I have only the highest regard for this team and would highly recommend them for any of your technological needs.",
          author: "Nishan Subedi",
          title: "Co-founder and CTO, Harvest Platform"
     },
     {
          quote:
               "Their knowledge of mobile apps and web development with the understanding and ability to help turn your ideas and drawings into active products is incredible. I wanted to build a music streaming app, and Bajra built out a masterful music streaming mobile app and platform that can be used universally used! Score!",
          author: "Adell Hendon",
          title: "CEO, YouSpin"
     }
];
export default Termional;
