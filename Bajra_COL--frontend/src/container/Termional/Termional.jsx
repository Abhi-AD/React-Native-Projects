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
          <div className="container">
               <div className="row justify-content-center termional">
                    <div className="col-10 col-md-8 col-lg-6 ">
                         <Slider {...settings}>
                              {testimonials.map((testimonial, index) => (
                                   <div key={index} className=" p-4 rounded">
                                        <div className="d-flex align-items-start">
                                             <i className="bi bi-quote terminoal_icon"></i>
                                             <p className="fw-normal fs-5 mb-0 text-secondary">{testimonial.quote}</p>
                                        </div>

                                        <div className="text-center text-primar">
                                             <p className="fs-4 fw-bold  mb-0 mt-5 text-main" >{testimonial.author}</p>
                                             <p className="fs-6 fw-light mb-0 text-secondary ">{testimonial.title}</p>
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
          quote: "We were thoroughly impressed with SmithTech right from the start. They were transparent about their technology stack, hosting preferences, and other technical decisions that can be daunting for non-tech professionals. Their regular standup meetings ensured seamless communication throughout the project. Despite not having an in-house development team, we faced no hurdles as direct communication with their developers was effortless.",
          author: "Alice Johnson",
          title: "Marketing Director, Bright Solutions Inc."

     },
     {
          quote: "I highly recommend COL Technology to anyone looking for custom mobile or web application development. Over the past four years, I have partnered with COL Technology to deliver several sophisticated online applications. With each engagement, the COL Technology team treated my customers like their own.",
          author: "Samantha Rodriguez",
          title: "Chief Technology Officer, Grymatter"
     },
     {
          quote:
               "I'm consistently amazed by the speed and quality of work Zephyr can accomplish for us across multiple products and projects. They have truly become an invaluable extension of our team, demonstrating thoughtful consideration in every task.",
          author: "Sarah Chen",
          title: "Chief Operating Officer, NexGen Innovations"
     },
     {
          quote:
               "A strong sense of rhythm and outstanding project management at Bajra ensured we didn't have to stress over tracking every detail. Their Agile approach provided the transparency I required. I hold this team in the highest regard and wholeheartedly recommend them for all your technological requirements.",
          author: "Jessica Chen",
          title: "CEO, Tech Innovators Inc."

     },
     {
          quote:
               "Their expertise in mobile app and web development, combined with their capability to transform concepts and sketches into functional products, is remarkable. I had a vision for a music streaming app, and Bajra delivered an exceptional mobile app and platform for universal use. A definite win!",
          author: "Evan Patel",
          title: "Founder, TuneWave"

     }
];
export default Termional;
