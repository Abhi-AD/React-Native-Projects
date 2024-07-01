import { Link } from 'react-router-dom'
import './Jobs.css'
import { useEffect, useState } from 'react';
import { Beliefs, Card1, Card2, Cards1, Cards2, JoinOur1, JoinOur2, JoinOur3 } from '../../container/Parnter/images';
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
                <div className=" position-relative w-75 mx-auto custom-z-index text-light fadeInUp">
                  <h2 className="fw-semibold fs-5">Careers</h2>
                  <h2 className="fw-normal lh-sm fs-5">Discover Your Career at One of Nepal&apos;s Best Technology Companies!</h2>
                  <section className="button">
                    <Link className="jobs-convolink move d-flex align-items-center gap-1" to="/contactus" spellCheck="false">
                      Start the Discussion with Us
                      <i className="bi bi-arrow-right fs-4"></i>
                    </Link>

                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section >

      {/* Our Values */}

      <section className="d-flex justify-content-center align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 d-flex justify-content-center align-items-center h-100">
              <img src={Beliefs} alt="" className="img-fluid card" style={{ height: '450px' }} />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center h-100">
              <div>
                <p className="fs-1 lh-sm">Our Beliefs</p>
                <p className="fs-6 lh-lg">
                  Working at COL goes beyond mere employment; it&apos;s an ongoing quest to refine your skills, understanding that excellence is a journey commencing right from the outset. Our primary objective is to excel in our respective domains, committing to excellence in every task, no matter its scale. We prioritize professional growth as the bedrock of our team and the cornerstone of our company&apos;s success, achieved through comprehensive training, exposure, and targeted coaching.
                </p>
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
        </div>
      </section>


      {/* Join Our Team */}
      <section className=" d-flex justify-content-center align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-md-5 justify-content-center align-items-center">
              <p className="fs-1 lh-sm">Join Our Growing Team</p>
              <p className="fs-6 text-secondary lh-lg">At our company, we&apos;re constantly seeking talented individuals to join our team. We prioritize your capacity to learn and grasp fundamental concepts over past experience. Our environment fosters innovation and collaborative growth. </p>
              <p className="fs-6 text-secondary lh-lg">At COL, we cherish a friendly and collaborative workplace culture alongside a strong commitment to our work. We evaluate everyone&apos;s contributions solely on merit, with little emphasis on seniority. We encourage boldness in innovation and risk-taking. We operate with an open-door policy, where asking for help and offering assistance are both encouraged. Regular feedback ensures our products meet COL high standards while supporting your personal development. Here at COL, we&apos;re all one team.</p>
              <p className="fs-6 text-secondary lh-lg">Please note, our environment is not about handholding; we promote creativity and learning through individual efforts, supplemented by guidance from our senior team members. If this resonates with you, explore our current job openings below.</p> </div>


            <div className="col-md-6 d-flex flex-column align-items-center">
              <div className="mb-3">
                <img src={JoinOur1} alt="" className="img-fluid rounded-2" style={{ width: '420px', height: '300px' }} />
              </div>
              <div className="d-flex justify-content-center">
                <div className="mx-2">
                  <img src={JoinOur2} alt="" className="rounded-2 img-fluid" style={{ width: '200px', height: '200px' }} />
                </div>
                <div className="mx-2">
                  <img src={JoinOur3} alt="" className="img-fluid rounded-2" style={{ width: '200px', height: '200px' }} />
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
                <img src={Card1} className="card-img-top img-fluid" alt="Work-life Balance Image" style={{ height: '400px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text fw-bold fs-5 mb-0">Prioritizing Well-being</p>
                  <p className="card-text fs-6">We prioritize the well-being of our team by fostering a supportive environment that values work-life balance. Through group activities and company-wide initiatives, we ensure our employees thrive both personally and professionally.</p>
                </div>

              </div>


              <div className="card bg-light border-0 col-md-6">
                <img src={Card2} className="card-img-top img-fluid" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text fw-bold fs-5 mb-0">Recognizing Employee Value</p>
                  <p className="card-text fs-6">At COL, we recognize the invaluable contributions of our team members with competitive compensation and exceptional benefits. Our commitment to excellence extends beyond work to ensure every employee feels appreciated and empowered.</p>
                </div>

              </div>
            </div>
          </div>
        </section >
      </div>
      {/* Cards*/}
      <div className="bg-light">
        <section className="container d-flex justify-content-center align-items-center mb-5">
          <div className="w-75 mx-auto">
            <div className="row">
              <div className="card border-0 col-md-6">
                <img
                  src={Cards1}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold fs-5 mb-0">Searching for career opportunities without experience?</p>
                  <p className="card-text fs-6">Unlock your potential with our comprehensive traineeship programs designed to build your skills from the ground up.</p>
                  <Link to="/jobs" className="btn text-main fw-bold">Learn More <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
              <div className="card border-0 col-md-6">
                <img
                  src={Cards2}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold fs-5 mb-0">Interested in launching your career with no prior experience?</p>
                  <p className="card-text fs-6">Discover how our traineeship programs can equip you with the skills and knowledge you need to succeed.</p>
                  <Link to="/jobs" className="btn text-main fw-bold">Explore Opportunities <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div >
  )
}

export default Jobs
Jobs