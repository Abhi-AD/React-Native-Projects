import { Link } from 'react-router-dom';
// import './Header.css'
import './Header1.css'

const Header = () => {
     return (
          <section className="s_anim_hero_home position-relative z-index-2 p-5" data-name="Animated Hero Home">
               <div className="container ">
                    <div className="row">
                         <div className="d-flex">
                              <div className="col-md">
                                   <div className="position-relative p-5">
                                        <img
                                             className="big-circle"
                                             src="https://bajratechnologies.com/bajra_snippets/static/src/img/hero_big_circle.png"
                                             alt="Big Circle"
                                        />
                                        <img
                                             className="small-circle"
                                             src="https://bajratechnologies.com/bajra_snippets/static/src/img/hero_small_circle.png"
                                             alt="Small Circle"
                                        />
                                        <div className="text-content">
                                             <p className="heading-title p-2">
                                                  Years of industry experience in Building Technologies&nbsp;
                                                  <span className="last-text">that bring Ideas to Life</span>.
                                             </p>
                                             <p className="fs-4 lh-1 text-light">At Bajra Technologies, We Make Your Ideas Work.</p>
                                        </div>
                                        <div className="button-content">
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
                                             <div className="ms-5 fs-5 lh-lg text-white">
                                                  OR,
                                                  <br />
                                                  <Link to="/portfolio" className='text-light text-decoration-none'>
                                                       <span>Check out what we’ve done</span>
                                                  </Link>
                                                  ...
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md">
                                   <div className="position-relative">
                                        <img
                                             className="star"
                                             src="https://bajratechnologies.com/bajra_snippets/static/src/img/star.png"
                                             alt="Star"
                                        />
                                        <img
                                             className="code"
                                             src="https://bajratechnologies.com/bajra_snippets/static/src/img/Code.png"
                                             alt="Code"
                                        />
                                        <img
                                             className="hero-visual"
                                             src="https://bajratechnologies.com/bajra_snippets/static/src/img/pics/hero-visual.png"
                                             alt="Hero Visual"
                                        />
                                        <img
                                             className="brackets"
                                             src="https://bajratechnologies.com/bajra_snippets/static/src/img/Brackets.png"
                                             alt="Brackets"
                                        />
                                        <img
                                             className="colon"
                                             src="https://bajratechnologies.com/bajra_snippets/static/src/img/Colon.png"
                                             alt="Colon"
                                        />
                                        <img
                                             className="question"
                                             src="https://bajratechnologies.com/bajra_snippets/static/src/img/Question.png"
                                             alt="Question"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};


export default Header