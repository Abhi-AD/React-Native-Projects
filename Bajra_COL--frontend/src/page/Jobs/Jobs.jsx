import { Link } from 'react-router-dom'
import './Jobs.css'
const Jobs = () => {
  return (
    <div>
      <section className=" jobs" data-name="Animated Banner">
        <div className="row">
          <section className="banner_wrapper_contact">
            <div className="container w-10">
              <div className="text-center position-relative custom-z-index text-light fadeInUp">
                <h2 className="fw-semibold fs-3">Careers</h2>
                <h2 className="fw-bold fs-1">Come Become a Part of One of The Best  Technology Firms in Nepal!Come Become a Part of One of The Best  Technology Firms in Nepal!</h2>
                <section className="button">
                  <Link className="convolink" to="/contactus" spellCheck="false">
                    Let’s start the conversation
                    <img
                      className="arrow"
                      src="https://bajratechnologies.com/bajra_snippets/static/src/img/icon/arrow.svg"
                      alt="Arrow"
                    />
                  </Link>
                </section>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Jobs
Jobs