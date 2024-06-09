import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
     return (
          <div style={{ backgroundColor: 'var(--main-color)' }}>
               <div className="container p-6">
                    <div className="row pt-4 h-100 w-100 h-80">
                         <div className="col">
                              <div className="text-content text-light">
                                   <p className="fs-3">Years of industry experience in Building Technologies that bring Ideas to life </p>
                                   <p className="fs-5">At Bajra Technologies, We Make Your Ideas Work.</p>
                              </div>
                              <div className="button-content">
                                   <section className="button">
                                        <Link to={`/contactus`}>
                                             <button type="button" className="btn btn-outline-light btn-hover-dark" data-mdb-ripple-init data-mdb-ripple-color="dark">Let’s start the conversation
                                                  <i className="bi bi-arrow-right" data-aos="fade-left"></i>
                                             </button>
                                        </Link>
                                   </section>
                              </div>
                         </div>

                         <div className="col">
                              <img src="https://bajratechnologies.com/bajra_snippets/static/src/img/star.png" width={50} alt="" className='' />
                              <img src="https://bajratechnologies.com/bajra_snippets/static/src/img/Code.png" width={50} alt="" />
                              <img src="https://bajratechnologies.com/web/image/38143/Rectangle%208.png" width={50} alt="" />
                              <img src="https://bajratechnologies.com/bajra_snippets/static/src/img/Brackets.png" width={50} alt="" />
                              <img src="https://bajratechnologies.com/bajra_snippets/static/src/img/Colon.png" width={50} alt="" />
                              <img src="https://bajratechnologies.com/bajra_snippets/static/src/img/Question.png" width={50} alt="" className='position-absolute top-100 start-100 translate-middle' />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Header
