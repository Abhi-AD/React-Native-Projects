import { Link } from 'react-router-dom';
import './Header.css';
import { Brackets, Code, Colon, Hero_Big_Circle, Hero_Small_Circle, Question, hero_visual, star } from "../Parnter/images";

const Header = () => {
    return (
        <section className="header position-relative" data-name="Animated Hero Home" style={{ height: '50rem' }}>
            <div className="container  h-100">
                <div className="row p-5 align-items-center h-50">
                    <div className="col-md-6 order-1 order-md-1 me-4">
                        <div className="position-relative h-100">
                            <img
                                className="big-circle img-fluid position-absolute left-0 top-0 mw-90 mh-90"
                                src={Hero_Big_Circle}
                                alt="Big Circle"
                            />
                            <img
                                className="small-circle img-fluid position-absolute l   eft-0 top-0 mw-90 mh-90"
                                src={Hero_Small_Circle}
                                alt="Small Circle"
                            />
                            <div className="text-content fs-1">
                                <h1 className="heading-title fs-1 lh-sm text-light">
                                    Extensive background in COL&nbsp;
                                    <span className="last-text">bringing Ideas to fruition.</span>.
                                </h1>
                                <p className="fs-4 lh-1 text-light">Creating Solutions from Your Ideas at COL.</p>
                            </div>
                            <div className="button-content mt-5">
                                <div className="row mt-2">
                                    <div className="col-lg-8">
                                        <section className="d-flex align-items-center border border-light border-2 p-0 rounded text-white mb-3 mb-lg-0 overflow-hidden">
                                            <Link className="move d-inline-flex align-items-center text-decoration-none text-white py-3 px-4 gap-3" to="/contactus">
                                                Start the Discussion with Us
                                                <i className="bi bi-arrow-right fs-4"></i>
                                            </Link>

                                        </section>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="ms-lg-3 fs-6 lh-lg text-white">
                                            OR,
                                            <br />
                                            <a href="/portfolio" className="text-light text-decoration-none">
                                                <span>Explore Our Portfolio</span>
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
                                src={star}
                                alt="Star"
                            />
                            <img
                                className="code img-fluid"
                                src={Code}
                                alt="Code"
                            />
                            <img
                                className="hero-visual img-fluid"
                                src={hero_visual}
                                alt="Hero Visual"
                            />
                            <img
                                className="brackets img-fluid"
                                src={Brackets}
                                alt="Brackets"
                            />
                            <img
                                className="colon img-fluid"
                                src={Colon}
                                alt="Colon"
                            />
                            <img
                                className="question img-fluid"
                                src={Question}
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
