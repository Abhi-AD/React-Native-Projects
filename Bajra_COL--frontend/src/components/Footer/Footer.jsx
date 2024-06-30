import { Link } from 'react-router-dom';
import lglogo from '../../assets/Logo/bajra_col_lg-logo.png'
import smlogo from '../../assets/Logo/bajra_col--smlogo.png'
import { useEffect, useState } from 'react';
function Footer() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  return (
    <footer id="bottom" data-anchor="true" className="o_footer py-5 text-light footer">
      <div id="footer" className="oe_structure oe_structure_solo container">
        <section className="company_footer" data-name="Company Footer">
          <div className="row">
            <section className="anim_footer top_footer fadeInUp row border-bottom">
              <div className="col-md-3 text-center text-md-left mb-3 mb-md-0 pb-3">
                <section className="logo_wrapper">
                  {isWideScreen ? (
                    <img src={lglogo} alt="Logo" width="120" height="100" className="d-inline-block align-text-top" />
                  ) : (
                    <img src={smlogo} alt="Logo" width="85" height="80" className="d-inline-block align-text-top " />
                  )}
                  <div className="fs-5 fw-bold pt-1 text-light">
                    <p className='fs-1 mb-0 text-light'>COL</p>
                  </div>
                </section>
              </div>
              <div className="col-md-6 text-center text-md-left mb-2 mb-md-0 d-flex border-start border-end border-light ">
                <section className="w-50 ">
                  <p className="text-sm mb-1 text-light">COL, LLC</p>
                  <p className="text-sm mb-1 text-light">99 Wall St.</p>
                  <p className="text-sm mb-1 text-light">Suite 700</p>
                  <p className="text-sm mb-1 text-light">New York, NY 10005</p>
                </section>
                <section className="w-50">
                  <p className="text-sm mb-1 text-light">COL Pvt. Ltd.</p>
                  <p className="text-sm mb-1 text-light">Lazimpat</p>
                  <p className="text-sm mb-1 text-light">Kathmandu, Nepal</p>
                </section>
              </div>
              <div className="col-md-3 text-center text-md-left mb-4 mb-md-0 d-flex">
                <div className="w-50">
                  <section className="nav-links-2">
                    <Link to={`/`} className="text-decoration-none d-block text-light">Home</Link>
                    <Link to={`/about`} className="text-decoration-none d-block text-light ">About Us</Link>
                    <Link to={`/what-we-do`} className="text-decoration-none d-block text-light ">Services</Link>
                    <Link to={`/portfolio`} className="text-decoration-none d-block text-light">Our Work</Link>
                    <Link to={`/jobs`} className="text-decoration-none d-block text-light">Careers</Link>
                    <Link to={`/trainee`} className="text-decoration-none d-block text-light">Traineeship</Link>
                    <Link to={`/contactus`} className="text-decoration-none d-block text-light">Contact Us</Link>
                  </section>
                </div>
                <div className="w-50">
                  <section className="nav-links-2">
                    <Link to={`/`} className="text-decoration-none d-block text-light">Traineeship</Link>
                    <Link to={`/about`} className="text-decoration-none d-block text-light">Careers</Link>
                    <Link to={`/what-we-do`} className="text-decoration-none d-block text-light">Hardware</Link>
                    <Link to={`/portfolio`} className="text-decoration-none d-block text-light">Workshop</Link>
                    <Link to={`/contactus`} className="text-decoration-none d-block text-light">Blogs</Link>
                  </section>
                </div>
              </div>
            </section>
            <section className="anim_footer bottom_footer pt-3 fadeInUp row justify-content-between">
              <div className="col-md-6 text-center text-md-left mb-3 mb-md-0" style={{ marginLeft: '-10rem' }}>
                <div className="copyright-section">© 2024 COL LLC</div>
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
