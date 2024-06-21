import { FrequentlyQuestion, ProgramTrainner } from "../../container/import"

const Trainee = () => {
  return (
    <div>
      <section className=" position-relative top-n3 overflow-hidden mb-n3 position-relative header" data-name="Animated Banner">
        <div className="row">
          <section className="banner_wrapper_contact">
            <div className="container w-10">
              <div className="text-center position-relative custom-z-index text-light fadeInUp">
                <h2 className="fw-semibold fs-3">WHAT WE DO</h2>
                <h2 className="fw-bold fs-1">We Ship Success Everyday</h2>
                <p className="px-5 fs-5 fw-normal text-white">
                  <span className="fs-5">Bajra has always focused on delivering best mobile and web-based solutions to our clients across various domains. With years of experience in enterprise and non-enterprise projects , we are confident that we can cater to the diverse requirements of our clients. <br /><br /></span>
                </p>
              </div>
            </div>
            <img className="circle-move right_first_circle_contact" src="https://bajratechnologies.com/bajra_snippets/static/src/img/right_first_circle.png" alt="Circle" />
            <img className="circle-move right_second_circle_contact" src="https://bajratechnologies.com/bajra_snippets/static/src/img/right_second_circle.png" alt="Circle" />
            <img className="circle-move right_third_circle_contact" src="https://bajratechnologies.com/bajra_snippets/static/src/img/right_second_circle.png" alt="Circle" />
          </section>
        </div>
      </section>

      <section className="d-flex justify-content-center align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <img src="https://bajratechnologies.com/web/image/41676/Image%281%29.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p className="fs-3" style={{ color: 'var(--main-color)' }}>Discover Bajra Traineeship</p>
              <p className="fs-1 lh-sm">Introduction</p>
              <p className="fs-6 lh-lg">Bajras batch traineeship program is designed to bridge the gap between academia and industry, ensuring that participants are well-prepared for the challenges and opportunities of the tech sector. Our program covers a spectrum of hands-on experience in tech roles, from software development and data science to UI/UX and Project Management, while also prioritizing essential soft skills, like communication, teamwork, presentation, and problem-solving. Join us and embark on a transformative journey toward success in the ever-evolving tech landscape.</p>
            </div>
          </div>
        </div>
      </section>


      <FrequentlyQuestion />



      <ProgramTrainner />


    </div>
  )
}

export default Trainee