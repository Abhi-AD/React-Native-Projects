import { FrequentlyQuestion, ProgramTrainner, TraineeBefint, TraineeCount, TraineeProgram, TraineeTestimonials } from "../../container/import"
import { Right_First_Circle, Right_Second_Circle, Right_Third_Circle, Traineeship } from "../../container/Parnter/images";

const Trainee = () => {
  return (
    <div>
      <section className=" position-relative top-n3 overflow-hidden mb-n3 position-relative header" data-name="Animated Banner">
        <div className="row">
          <section className="banner_wrapper_contact">
            <div className="container">
              <div className="text-center w-75 mx-auto position-relative custom-z-index text-light fadeInUp">
                <h2 className="fw-semibold fs-3">WHAT WE DO</h2>
                <h2 className="fw-bold fs-1">Empowering Success Daily</h2>
                <p className="px-5 fs-5 fw-normal text-white">
                  <span className="fs-5">COL is dedicated to delivering superior mobile and web solutions to clients across different sectors. Drawing from years of experience in enterprise and non-enterprise projects, we confidently address the unique demands of our clients.</span>
                </p>

              </div>
            </div>
            <img className="circle-move right_first_circle_contact" src={Right_First_Circle} alt="Circle" />
            <img className="circle-move right_second_circle_contact" src={Right_Second_Circle} alt="Circle" />
            <img className="circle-move right_third_circle_contact" src={Right_Third_Circle} alt="Circle" />
          </section>
        </div>
      </section>

      <section className="d-flex justify-content-center align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <img src={Traineeship} alt="" className="img-fluid card" style={{ width: "500px" }} />
            </div>
            <div className="col-md-6 h-100">
              <p className="fs-3 text-accent">Unveil COL Traineeship</p>
              <p className="fs-1 lh-sm">Introduction</p>
              <p className="fs-6 lh-lg">The COL batch traineeship program is meticulously designed to bridge the gap between academic knowledge and industry demands. It provides extensive hands-on experience in a range of tech roles including software engineering, data analysis, UI/UX design, and project coordination. Additionally, the program places a strong emphasis on vital soft skills such as effective communication, teamwork, presentation, and strategic problem-solving. Embark on this transformative journey with us to thrive in the fast-paced tech landscape.</p>
            </div>
          </div>
        </div>
      </section>
      <TraineeCount />
      <TraineeBefint />
      <TraineeProgram />
      <TraineeTestimonials />

      <FrequentlyQuestion />



      <ProgramTrainner />


    </div>
  )
}

export default Trainee