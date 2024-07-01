import { Right_First_Circle, Right_Second_Circle, Right_Third_Circle } from "../../container/Parnter/images";
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <section className=" position-relative top-2 overflow-hidden mb-0 position-relative header" data-name="Animated Banner" style={{ height: '35rem' }} >
        <div className="row">
          <section className="banner_wrapper_contact">
            <div className="text-center position-relative w-50 mx-auto  custom-z-index text-light fadeInUp">
              <h2 className="fw-semibold">Contact Us</h2>
              <p className="px-5 fs-5 fw-normal text-white">
                <span className="fs-5">Feel free to contact us regarding any questions or inquiries you have about our company or services. Whether you&apso;re seeking more information or want to discuss potential opportunities, we&apos;re here to help. <br /><br /></span>
              </p>
            </div>
            <img className="circle-move right_first_circle_contact" src={Right_First_Circle} alt="Circle" />
            <img className="circle-move right_second_circle_contact" src={Right_Second_Circle} alt="Circle" />
            <img className="circle-move right_third_circle_contact" src={Right_Third_Circle} alt="Circle" />
          </section>
        </div>
      </section>




      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="shadow p-5">
              <p className="fs-2 fw-bold">Send us a Message</p>
              <p className="fs-6 fw-normal text-main">Fields marked with * are mandatory</p>
              <form className="mt-5">
                <div className="form-group mb-3">
                  <label className="fs-5" htmlFor="fullName">Full Name</label>
                  <input type="text" className="form-control bg-white mt-2 p-3" id="fullName" placeholder="Enter your full name" />
                </div>
                <div className="form-group mb-3">
                  <label className="fs-5" htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" className="form-control bg-white mt-2 p-3" id="phoneNumber" placeholder="Enter your phone number" />
                </div>
                <div className="form-group mb-3">
                  <label className="fs-5" htmlFor="email">Email</label>
                  <input type="email" className="form-control bg-white mt-2 p-3" id="email" aria-describedby="emailHelp" placeholder="Enter your email" />
                </div>
                <div className="form-group mb-3">
                  <label className="fs-5" htmlFor="subject">Subject</label>
                  <input type="text" className="form-control bg-white mt-2 p-3" id="subject" placeholder="Enter the subject" />
                </div>
                <div className="form-group mb-3">
                  <label className="fs-5" htmlFor="message">Message</label>
                  <textarea className="form-control bg-white mt-2 p-3" id="message" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary border-0 bg-main text-light">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <p className='fw-semibold fs-4'>Our Location</p>
              </div>
              <div className="col-md-4">
                <p className='fs-5 text-uppercase text-main'>Get direction <i className="bi bi-arrow-right"></i></p>
              </div>
            </div>

            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0, borderRadius: '10px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220.740621054911!2d85.3204025257862!3d27.721919200155398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1719737568336!5m2!1sen!2snp"
              allowFullScreen
              title="Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>




            <div className="col-md-8">
              <div className='d-flex'>
                <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                  <i className="bi bi-geo-alt-fill fs-6 text-light"></i>
                </div>
                <p className=''>P84G+P57, Kathmandu, Bagmati, Nepal</p>
              </div>

            </div>
            <div className="col-md-8">
              <div className='d-flex'>
                <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                  <i className="bi bi-telephone-fill fs-6 text-light"></i>
                </div>
                <p className=''>015912344</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className='d-flex'>
                <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                  <i className="bi bi-envelope-fill fs-6 text-light"></i>
                </div>
                <p className=''>collaborate@col.com</p>
              </div>

            </div>
            <p className='mt-3 fw-semibold fs-5'>Connect With Us</p>
            <div className="row" style={{ marginLeft: '1rem' }}>
              <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                <i className="bi bi-facebook fs-6 text-light"></i>
              </div>
              <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                <i className="bi bi-instagram fs-6 text-light"></i>
              </div>
              <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                <i className="bi bi-twitter fs-6 text-light"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
