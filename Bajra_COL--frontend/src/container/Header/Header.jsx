import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section className="header position-relative custom-height" data-name="Animated Hero Home">
            <div className="container  h-100">
                <div className="row p-5 align-items-center h-50">
                    <div className="col-md-6 order-1 order-md-1 me-4">
                        <div className="position-relative h-100">
                            <img
                                className="big-circle img-fluid position-absolute left-0 top-0 mw-90 mh-90"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/hero_big_circle.png"
                                alt="Big Circle"
                            />
                            <img
                                className="small-circle img-fluid position-absolute l   eft-0 top-0 mw-90 mh-90"
                                src="https://bajratechnologies.com/bajra_snippets/static/src/img/hero_small_circle.png"
                                alt="Small Circle"
                            />
                            <div className="text-content fs-1">
                                <h1 className="heading-title fs-1 lh-sm text-light">
                                    Years of industry experience in Building Technologies&nbsp;
                                    <span className="last-text">that bring Ideas to Life</span>.
                                </h1>
                                <p className="fs-4 lh-1 text-light">At Bajra Technologies, We Make Your Ideas Work.</p>
                            </div>
                            <div className="button-content mt-5">
                                <div className="row mt-2">
                                    <div className="col-lg-7">
                                        <section className="d-flex align-items-center border border-light border-2 p-0 rounded text-white mb-3 mb-lg-0 overflow-hidden">
                                            <Link className="d-inline-flex align-items-center text-decoration-none text-white py-3 px-4" to={"/contactus"}>
                                                Let’s start the conversation
                                                <img
                                                    className="ms-4"
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
                                            <a href="/portfolio" className="text-light text-decoration-none">
                                                <span>Check out what we’ve done</span>
                                            </a>
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 order-1 order-md-1">
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
                                className="question img-fluid"
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
