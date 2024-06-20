import { Link } from 'react-router-dom';
import logo from '../../assets/bajra_col--logo.png'
function Footer() {
  return (
    <footer id="bottom" data-anchor="true" className="o_footer py-5 text-light " style={{ backgroundColor: 'var(--main-color)' }}>
      <div id="footer" className="oe_structure oe_structure_solo container">
        <section className="company_footer" data-name="Company Footer">
          <div className="row">
            <section className="anim_footer top_footer fadeInUp row border-bottom">
              <div className="col-md-3 text-center text-md-left mb-3 mb-md-0 pb-3">
                <section className="logo_wrapper">
                  <img src={logo} alt="Logo" width="90" height="70" className="d-inline-block align-text-top" />
                  <div className="fs-5 fw-bold pt-1 text-light">
                    <p className='fs-1 mb-0 text-light'>COL</p>
                    <p className='mb-0 text-light'>Technology</p>
                  </div>
                </section>
              </div>
              <div className="col-md-6 text-center text-md-left mb-2 mb-md-0 d-flex border-start border-end border-light ">
                <section className="w-50 ">
                  <p className="text-sm mb-1 text-light">Bajra Technologies, LLC</p>
                  <p className="text-sm mb-1 text-light">99 Wall St.</p>
                  <p className="text-sm mb-1 text-light">Suite 700</p>
                  <p className="text-sm mb-1 text-light">New York, NY 10005</p>
                </section>
                <section className="w-50">
                  <p className="text-sm mb-1 text-light">Bajra Technologies Pvt. Ltd.</p>
                  <p className="text-sm mb-1 text-light">Charkhal, Dillibazar</p>
                  <p className="text-sm mb-1 text-light">Kathmandu, Nepal</p>
                </section>
              </div>
              <div className="col-md-3 text-center text-md-left mb-4 mb-md-0 d-flex">
                <div className="w-50">
                  <section className="nav-links-2">
                    <Link to={`/`} className="text-decoration-none d-block text-light">Home</Link>
                    <Link to={`/about-us`} className="text-decoration-none d-block text-light ">About Us</Link>
                    <Link to={`/what-we-do`} className="text-decoration-none d-block text-light ">Services</Link>
                    <Link to={`/portfolio`} className="text-decoration-none d-block text-light">Our Work</Link>
                    <Link to={`/contactus`} className="text-decoration-none d-block text-light">Contact Us</Link>
                  </section>
                </div>
                <div className="w-50">
                  <section className="nav-links-2">
                    <Link to={`/`} className="text-decoration-none d-block text-light">Traineeship</Link>
                    <Link to={`/about-us`} className="text-decoration-none d-block text-light">Careers</Link>
                    <Link to={`/what-we-do`} className="text-decoration-none d-block text-light">Hardware</Link>
                    <Link to={`/portfolio`} className="text-decoration-none d-block text-light">Workshop</Link>
                    <Link to={`/contactus`} className="text-decoration-none d-block text-light">Blogs</Link>
                  </section>
                </div>
              </div>
            </section>
            <section className="anim_footer bottom_footer pt-3 fadeInUp row justify-content-between">
              <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <div className="copyright-section">© 2024 COL Technologies LLC</div>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <div className="social-section fs- d-flex justify-content-end">
                  <Link to={`/`} className=" text-white me-4">
                    <i className="bi bi-facebook fs-3"></i>
                  </Link>
                  <Link to={`/`} className="text-white me-4">
                    <i className="bi bi-linkedin fs-3"></i>
                  </Link>
                  <Link to={`/`} className="text-white me-4">
                    <i className="bi bi-twitter fs-3"></i>
                  </Link>
                  <Link to={`/`} className=" text-white me-4">
                    <i className="bi bi-instagram fs-3"></i>
                  </Link>
                </div>
              </div>
            </section>
          </div >
        </section >
      </div >
    </footer >
  );
}

export default Footer;
