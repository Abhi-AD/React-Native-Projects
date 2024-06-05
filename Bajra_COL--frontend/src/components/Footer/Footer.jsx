import { Link } from 'react-router-dom';
import logo from '../../assets/bajra_col--logo.png'
function Footer() {
  return (
    <footer id="bottom" data-anchor="true" className="bg-light o_footer py-5">
      <div id="footer" className="oe_structure oe_structure_solo">
        <section className="company_footer" data-name="Company Footer">
          <div className="container">
            <section className="anim_footer top_footer fadeInUp row">
              <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
                <section className="logo_wrapper">
                  <img src={logo} alt="Logo" width="60" height="54" className="d-inline-block align-text-top" />

                </section>
              </div>
              {/* <div className="vr" style="height: 250px;"></div> */}
              <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
                <section className="headquarter">
                  <h5>Bajra Technologies, LLC</h5>
                  <h5>99 Wall St.</h5>
                  <h5>Suite 700</h5>
                  <h5>New York, NY 10005</h5>
                </section>
              </div>
              <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
                <section className="regional">
                  <h5>Bajra Technologies Pvt. Ltd.</h5>
                  <h5>Charkhal, Dillibazar</h5>
                  <h5>Kathmandu, Nepal</h5>
                </section>
              </div>
            </section>
            <section className="nav-links anim_footer bottom_footer fadeInUp row mt-4">
              <div className="col-md-6 mb-4 mb-md-0">
                <section className="nav-links-2">
                  <Link to="/" aria-describedby="tooltip692782">Home</Link>
                  <Link to="/about-us">About Us</Link>
                  <Link to="/what-we-do">Services</Link>
                  <Link to="/portfolio" aria-describedby="tooltip182503">Our Work</Link>
                  <a href="/contactus" target="_blank">Contact Us</a>
                </section>
              </div>
              <div className="col-md-6">
                <section className="nav-links-2">
                  <Link to="/trainee" aria-describedby="tooltip692782">Traineeship</Link>
                  <Link to="/jobs">Careers</Link>
                  <a href="https://hardware.bajratechnologies.com/" aria-describedby="tooltip182503">Hardware</a>
                  <Link to="/workshop" aria-describedby="tooltip182503">Workshop</Link>
                  <a href="https://blog.bajratechnologies.com" target="_blank">Blogs</a>
                </section>
              </div>
            </section>
            <hr />
            <section className="anim_footer bottom_footer pt0 fadeInUp row">
              <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <div className="copyright-section">© 2024 Bajra Technologies LLC</div>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <div className="social-section">
                  <a target="_blank" href="https://www.facebook.com/bajratechnologies">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <Link target="_blank" to={`/`}>
                    <i className="bi bi-linkedin"></i>
                  </Link>
                  <Link target="_blank" to={`/`}>
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link target="_blank" to={`/`}>
                    <i className="bi bi-instagram"></i>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
