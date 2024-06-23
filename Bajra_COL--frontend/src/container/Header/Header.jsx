import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section className="header position-relative" data-name="Animated Hero Home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 order-1 order-md-1">
                        <div className="position-relative">
                            <img
                                className="big-circle img-fluid position-absolute start-0 top-0 mw-100 mh-100"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/hero_big_circle.png"
                                alt="Big Circle"
                            />
                            <img
                                className="small-circle img-fluid position-absolute start-10 top-80 mw-100 mh-100"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/hero_small_circle.png"
                                alt="Small Circle"
                            />
                            <div className="text-content fs-4 p">
                                <h1 className="heading-title fs-2">
                                    Years of industry experience in Building Technologies&nbsp;
                                    <span className="last-text">that bring Ideas to Life</span>.
                                </h1>
                                <p className="fs-4 lh-1 text-light">At Bajra Technologies, We Make Your Ideas Work.</p>
                            </div>
                            <div className="button-content">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <section className="d-flex align-items-center border border-light p-0 rounded text-white mb-3 mb-lg-0 overflow-hidden">
                                            <Link className="d-inline-flex align-items-center text-decoration-none text-white py-3 px-4" to="/contactus" spellCheck="false">
                                                Let’s start the conversation
                                                <img
                                                    className="ms-1"
                                                    src="https://bajratechnologies.com/bajra_snippets/static/src/img/icon/arrow.svg"
                                                    alt="Arrow"
                                                />
                                            </Link>
                                        </section>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="ms-lg-3 fs-6 lh-lg text-white">
                                            OR,
                                            <br />
                                            <Link to="/portfolio" className="text-light text-decoration-none">
                                                <span>Check out what we’ve done</span>
                                            </Link>
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 order-1 order-md-1"></div>
                    <div className="col-md-4 order-1 order-md-1">
                        <div className="position-relative">
                            <img
                                className="star img-fluid"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/star.png"
                                alt="Star"
                            />
                            <img
                                className="code img-fluid"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/Code.png"
                                alt="Code"
                            />
                            <img
                                className="hero-visual img-fluid"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/pics/hero-visual.png"
                                alt="Hero Visual"
                            />
                            <img
                                className="brackets img-fluid"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/Brackets.png"
                                alt="Brackets"
                            />
                            <img
                                className="colon img-fluid"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/Colon.png"
                                alt="Colon"
                            />
                            <img
                                className="question img-fluid fade-in"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/Question.png"
                                alt="Question"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
