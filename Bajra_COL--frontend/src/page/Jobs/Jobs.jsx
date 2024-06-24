import { Link } from 'react-router-dom'
import './Jobs.css'
import { useEffect, useState } from 'react';
const Jobs = () => {
  const statistics = [
    { count: 500, label: 'Project', threshold: 400 },
    { count: 100, label: 'Team Members', threshold: 90 },
    { count: 150, label: 'HAPPY CLIENTS', threshold: 100 },
    { count: 2, label: 'Offices', threshold: 2 }
  ];

  const [counts, setCounts] = useState(statistics.map(stat => ({ ...stat, currentCount: 0 })));

  const totalDuration = 1500;
  const updateInterval = totalDuration / (Math.max(...statistics.map(stat => stat.count)) / 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map(stat =>
          stat.currentCount < stat.count
            ? { ...stat, currentCount: Math.min(stat.currentCount + 5, stat.count) }
            : stat
        )
      );
    }, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval]);
  return (
    <div>
      <section className=" jobs" data-name="Animated Banner">
        <div className="container">
          <div className="row">
            <section className="banner_wrapper_contact">
              <div className="col-md-6">
                <div className=" position-relative custom-z-index text-light fadeInUp">
                  <h2 className="fw-semibold fs-5">Careers</h2>
                  <h2 className="fw-normal lh0sm fs-5">Come Become a Part of One of The Best  Technology Firms in Nepal!Come Become a Part of One of The Best  Technology Firms in Nepal!</h2>
                  <section className="button">
                    <Link className="jobs-convolink move" to="/contactus" spellCheck="false">
                      Let’s start the conversation
                      <img
                        className="arrow"
                        src="https://bajratechnologies.com/bajra_snippets/static/src/img/icon/arrow.svg"
                        alt="Arrow"
                      />
                    </Link>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section >

      {/* Our Values */}

      <section className=" d-flex justify-content-center align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 justify-content-center align-items-center">
              <img src="https://bajratechnologies.com/web/image/38143/Rectangle%208.png" alt="" className="img-fluid " />
            </div>
            <div className="col-md-6 justify-content-center align-items-center">
              <p className="fs-1 lh-sm">Our Values</p>
              <p className="fs-6 lh-lg">Working at Bajra is not just a job; it&apos;s a continuous journey of honing your expertise and embracing the fact that perfection is a journey that begins from the very start. Our ultimate goal here is to become the best in our fields and to do the best job we can, no matter how small the task. We believe in professional development as the foundation of our team and eventually of the entire company which we achieve through training, exposure, and coaching where required. </p>
              <div className="card shadow border-0">
                <div className="row h-100 mt-4">
                  {counts.map((stat, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-md-6 col-lg-3 mb-4 d-flex align-items-center justify-content-center"
                    >
                      <div className="text-center fw-bold">
                        <p className="counting mb-0 fs-4 fw-bold text-main">
                          {stat.currentCount > stat.threshold ? `${stat.currentCount}+` : stat.currentCount}
                        </p>
                        <p className="text-uppercase mt-3 fs-6 text-dark">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section >

      {/* Join Our Team */}
      <section className=" d-flex justify-content-center align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-md-5 justify-content-center align-items-center">
              <p className="fs-1 lh-sm">Join Our Team</p>
              <p className="fs-6 text-secondary lh-lg">We are always looking for good people to come to work with us. We care less about your past experience and more about your ability to learn as well as your grasp of fundamental concepts. We are an innovative team and help each other grow in a collaborative atmosphere.</p>
              <p className="fs-6 text-secondary lh-lg">Here at Bajra, we value having a friendly and collaborative working environment while taking our work very seriously. Everyone&apos;s work and input are judged solely on merit, with seniority carrying little weight. We encourage you to innovate and take risks. Everyone is accessible, so go ahead and ask for help when you are stuck, and reciprocate when needed. Everyone&apos;s work is regularly critiqued to ensure our products meet Bajra&apos;s high standards while helping you personally learn and grow. At Bajra, we are one team.</p>
              <p className="fs-6 text-secondary lh-lg">Please note that our environment does not provide handholding. We believe in promoting creativity and learning through your own efforts with the necessary aid from our senior people. If this sounds like the right place for you, take a look at the current job openings we have below. </p>
            </div>


            <div className="col-md-6 d-flex flex-column align-items-center">
              <div className="mb-3">
                <img src="https://bajratechnologies.com/web/image/38143/Rectangle%208.png" alt="" className="img-fluid rounded-2" />
              </div>
              <div className="d-flex justify-content-center">
                <div className="mx-2">
                  <img src="https://bajratechnologies.com/web/image/38147/1_BmN3ALM7ftjFa6qCSkaKZA%201%20%281%29.png" alt="" className=" rounded-2 img-fluid" />
                </div>
                <div className="mx-2">
                  <img src="https://bajratechnologies.com/web/image/38148/Mask%20group%20%281%29.jpg" alt="" className="img-fluid rounded-2" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </section >
      {/* Card*/}
      <div className='bg-light p-5'>
        <section className="container mt-4 mb-4  d-flex justify-content-center align-items-center mb-5">
          <div className=" mx-auto">
            <div className="row">
              <div className="card bg-light border-0 col-md-6">
                <img src="https://bajratechnologies.com/web/image/38152/Rectangle%208%20%281%29.png" className="card-img-top img-fluid" alt="Work-life Balance Image" />
                <div className="card-body">
                  <p className="card-text fw-bold fs-5 mb-0">Work-life Balance</p>
                  <p className="card-text fs-6">We understand that a high-pace work environment can create many stresses and we work actively to maintain required balance between our employees’ personal and professional lives through group activities and other company-wide endeavors.</p>
                </div>
              </div>


              <div className="card bg-light border-0 col-md-6">
                <img src="https://bajratechnologies.com/web/image/38156/compensation%20and%20benefits%20%281%29.jpg" className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text fw-bold fs-5 mb-0">Compensation and Benefits</p>
                  <p className='card-text fs-6'>We provide market-leading compensation to our talented employees along with some of the best perks and other benefits to ensure that every Bajra employee can feel proud of being part of this esteemed group of problem solvers.</p>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div>
      {/* Card*/}
      <div className='bg-light'>
        <section className="container  d-flex justify-content-center align-items-center mb-5">
          <div className="w-75 mx-auto">
            <div className="row">
              <div className="card border-0 col-md-6">
                <img src="https://bajratechnologies.com/web/image/38350/Rectangle%2040.png" className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text fw-bold fs-5 mb-0">Looking for a suitable career opportunity with no prior experience?</p>
                  <p className='card-text fs-6'>We have the perfect solution for you to discover and develop your skills. Find out more about the traineeship opportunities.</p>
                  <Link to={'/jobs'} className="btn text-main fw-bold">Check Out Here <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>

              <div className="card border-0 col-md-6">
                <img src="https://bajratechnologies.com/web/image/38351/Rectangle%2040%281%29.png" className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text fw-bold fs-5 mb-0">Passionate about technology but no current openings match your profile?</p>
                  <p className='card-text fs-6'>Fill out the form and upload your resume. We’ll get back to you if there&apos;s a suitable opportunity matching your expertise.</p>
                  <Link to={'/jobs'} className="btn text-main fw-bold">Drop Your Resume <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div>
    </div >
  )
}

export default Jobs
Jobs