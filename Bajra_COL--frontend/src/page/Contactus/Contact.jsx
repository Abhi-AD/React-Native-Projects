// ContactBanner.js

import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div>
      <section className=" position-relative top-n3 overflow-hidden mb-n3 position-relative header" data-name="Animated Banner" >
        <div className="row">
          <section className="banner_wrapper_contact">
            <div className="text-center position-relative custom-z-index text-light fadeInUp">
              <h2 className="fw-semibold">Contact Us</h2>
              <p className="px-5 fs-5 fw-normal text-white">
                <span className="fs-5">Get in touch with us about anything related to our company or services. <br /><br /></span>
              </p>
            </div>
            <img className="circle-move right_first_circle_contact" src="https://bajratechnologies.com/bajra_snippets/static/src/img/right_first_circle.png" alt="Circle" />
            <img className="circle-move right_second_circle_contact" src="https://bajratechnologies.com/bajra_snippets/static/src/img/right_second_circle.png" alt="Circle" />
            <img className="circle-move right_third_circle_contact" src="https://bajratechnologies.com/bajra_snippets/static/src/img/right_second_circle.png" alt="Circle" />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Contact;
