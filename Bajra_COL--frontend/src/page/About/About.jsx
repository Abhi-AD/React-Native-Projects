import { Right_First_Circle, Right_Second_Circle, Right_Third_Circle } from "../../container/Parnter/images";

const About = () => {
  return (
    <div>
      <section className=" position-relative top-n3 overflow-hidden mb-n3 position-relative header" data-name="Animated Banner">
        <div className="row">
          <section className="banner_wrapper_contact">
            <div className="container">
              <div className="text-center position-relative w-75 mx-auto custom-z-index text-light fadeInUp">
                <h2 className="fw-semibold fs-3">About Us</h2>
                <h2 className="fw-bold fs-1">Who We Are</h2>
                <p className="px-5 fs-5 fw-normal text-white">
                  <span className="fs-5">COL Technology is your tech solution hub. We specialize in crafting innovations.
                    Whether you seek new technology development, overhaul, or maintenance, COL Technology offers a unique approach. Let us be your partner in solving challenges, maintaining your current tech, or realizing your visions.</span>
                </p>
              </div>
            </div>
            <img className="circle-move right_first_circle_contact" src={Right_First_Circle} alt="Circle" />
            <img className="circle-move right_second_circle_contact" src={Right_Second_Circle} alt="Circle" />
            <img className="circle-move right_third_circle_contact" src={Right_Third_Circle} alt="Circle" />
          </section>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <p className="fs-6">
              Our team is our greatest asset. We invest in hiring and training top talent, fostering an inclusive environment where everyone has the opportunity to grow into future leaders. With over 100 members in our delivery team, we achieve remarkable success repeatedly. Our diversity in skills and approach strengthens our proficiency across various technical fields and software platforms. When faced with new challenges, we leverage our market reputation to attract the right talent, ensuring we maintain our high standards of delivery.
            </p>
          </div>
          <div className="col-md-10 mx-auto">
            <p className="fs-6">
              We thrive on innovation, consistently seeking to pioneer groundbreaking solutions. Our close collaborations with early-stage companies allow us to contribute significantly to their growth. We are equally at home working alongside established multi-billion dollar enterprises, seamlessly integrating into their teams to bolster their efforts. Guided by our stringent Project Management Protocol, we ensure a transparent and controlled delivery process, prioritizing quality and delivering exceptional outcomes that exceed our partners^&apos; expectations.
            </p>
          </div>
        </div>
      </section>





      <section className="container d-flex justify-content-center align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <p className="fs-2 text-center fw-bold" style={{ lineHeight: '2.8rem' }}>
              Our core mission revolves around <span className="span">Solution Delivery</span>. Partnering with <span className="span">you</span> to transform <span>visions</span> into <span className="span">reality</span> through <span className="span">Quality Solutions</span> is what drives us.
            </p>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <p className="fs-6">
              Established in 2016, COL Technology is a forward-thinking firm specializing in technology solutions, with offices in New York, NY (USA) and Kathmandu, Bagmati (Nepal). We excel in problem-solving and harness the collective brilliance of our team to tackle intricate challenges using state-of-the-art tools and innovations. Our dedication to fostering personal and professional growth among our team members shapes a dynamic work environment that is both enriching and fulfilling, with a proven track record of delivering excellence across all fronts.
            </p>
          </div>
        </div>

      </section>


      <section className="container mb-5 mt-5 d-flex justify-content-center align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://bajratechnologies.com/web/image/37212/Mask%20group.png"
                alt=""
                className="img-fluid rounded w-100"
                style={{ height: '400px' }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://bajratechnologies.com/web/image/37213/1_BmN3ALM7ftjFa6qCSkaKZA%201.png"
                alt=""
                className="img-fluid rounded w-100"
                style={{ height: '400px' }}

              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://bajratechnologies.com/web/image/38436/111.jpg"
                alt=""
                className="img-fluid rounded w-100"
                style={{ height: '400px' }}

              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://bajratechnologies.com/web/image/37215/Mask%20group%20%281%29.png"
                alt=""
                className="img-fluid rounded w-100"
                style={{ height: '400px' }}

              />
            </div>
          </div>
        </div>
      </section>



      <section style={{ background: 'url(https://bajratechnologies.com/web/image/37252/culture.jpg)' }}>
        <div className="col-4" >
          mdj
        </div>
      </section>



    </div>
  )
}

export default About
