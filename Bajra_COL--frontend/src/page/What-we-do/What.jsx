import { Connect, Course } from "../../container/import"
import { Right_First_Circle, Right_Second_Circle, Right_Third_Circle } from "../../container/Parnter/images";

const What = () => {
  return (
    <div>
      <section className=" position-relative top-n3 overflow-hidden mb-n3 position-relative header" data-name="Animated Banner">
        <div className="row">
          <section className="banner_wrapper_contact">
            <div className="container w-10">
              <div className="text-center w-75 mx-auto position-relative custom-z-index text-light fadeInUp">
                <h2 className="fw-semibold fs-3">WHAT WE DO</h2>
                <h2 className="fw-bold fs-1">Delivering Success Daily</h2>
                <p className="px-5 fs-5 fw-normal text-white">
                  <span className="fs-5">COl has consistently aimed to deliver premier mobile and web solutions to our clients across diverse domains. With years of experience in enterprise and non-enterprise projects, we confidently cater to the varied needs of our clientele.<br /><br /></span>
                </p>
              </div>
            </div>
            <img className="circle-move right_first_circle_contact" src={Right_First_Circle} alt="Circle" />
            <img className="circle-move right_second_circle_contact" src={Right_Second_Circle} alt="Circle" />
            <img className="circle-move right_third_circle_contact" src={Right_Third_Circle} alt="Circle" />
          </section>
        </div>
      </section>

      <Course />

      <Connect />

    </div>
  )
}

export default What
