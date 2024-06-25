import { Connect, OurWork } from "../../container/import"

const Portfolio = () => {
  return (
    <div>
      <section className=" position-relative top-n3 overflow-hidden mb-n3 position-relative header" data-name="Animated Banner">
        <div className="row">
          <section className="banner_wrapper_contact">
            <div className="container">
              <div className="text-center w-75 mx-auto position-relative custom-z-index text-light fadeInUp">
                <h2 className="fw-semibold fs-3">OUR WORK</h2>
                <h2 className="fw-bold fs-1">Imagine. Solve. Implement. Evolve.</h2>
                <p className="px-5 fs-5 fw-normal text-white">
                  <span className="fs-5">Drawing on years of expertise, our consistent delivery of high standards guarantees customer satisfaction. Want to see what we’ve accomplished? Check it out.<br /><br /></span>
                </p>
              </div>
            </div>
            <img className="circle-move right_first_circle_contact" src="https://bajratechnologies.com/bajra_snippets/static/src/img/right_first_circle.png" alt="Circle" />
            <img className="circle-move right_second_circle_contact" src="https://bajratechnologies.com/bajra_snippets/static/src/img/right_second_circle.png" alt="Circle" />
            <img className="circle-move right_third_circle_contact" src="https://bajratechnologies.com/bajra_snippets/static/src/img/right_second_circle.png" alt="Circle" />
          </section>
        </div>
      </section>
      <OurWork />

      <Connect />
    </div >
  )
}

export default Portfolio
