import { Brand_guarde, DriverReach, Foster_keeper, Harverst, Museminded, Republic_services, Smarter, Tempo_communications } from "./import";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Parnter.css';

const Parnter = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    pauseOnHover: false
  };

  return (
    <section className="h-100 my-5">
      <h2 className="text-center my-5">Our Valued Partners</h2>
      <div className="container h-100 d-flex align-items-center">
        <div className="row w-100 text-center">
          <Slider {...settings}>
            <div className="container h-100 d-flex align-items-center silder">
              <div className="col-xl parnter">
                <img src={Brand_guarde} alt="Logo" width="150" height="80" className="d-inline-block align-text-top parnter_img" />
              </div>
              <div className="col-xl parnter">
                <img src={DriverReach} alt="Logo" width="250" height="80" className="d-inline-block align-text-top parnter_img" />
              </div>
              <div className="col-xl parnter">
                <img src={Foster_keeper} alt="Logo" width="250" height="80" className="d-inline-block align-text-top parnter_img" />
              </div>
              <div className="col-xl parnter">
                <img src={Harverst} alt="Logo" width="250" height="80" className="d-inline-block align-text-top parnter_img" />
              </div>
            </div>
            <div className="container h-100 d-flex align-items-center silder">
              <div className="col-xl parnter">
                <img src={Museminded} alt="Logo" width="250" height="80" className="d-inline-block align-text-top parnter_img" />
              </div>
              <div className="col-xl parnter">
                <img src={Republic_services} alt="Logo" width="250" height="80" className="d-inline-block align-text-top parnter_img" />
              </div>
              <div className="col-xl parnter">
                <img src={Smarter} alt="Logo" width="250" height="80" className="d-inline-block align-text-top parnter_img" />
              </div>
              <div className="col-xl parnter">
                <img src={Tempo_communications} alt="Logo" width="250" height="80" className="d-inline-block align-text-top parnter_img" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Parnter;
