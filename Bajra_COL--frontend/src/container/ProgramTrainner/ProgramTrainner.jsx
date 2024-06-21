import { Link } from "react-router-dom"

const ProgramTrainner = () => {
     return (
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://bajratechnologies.com/web/image/48175/4935872%201.png)' }}>
               <div className="d-flex justify-content-center align-items-center p-5 min-vh-50">
                    <div className="text-center">
                         <p className="fs-2">Kickstart Your Journey with Our Batch Traineeship Program!</p>
                         <p className="col-md-10 mx-auto fs-6 font-weight-bold">Apply for the next traineeship batch now and stay tuned for updates on our next intake. We’ll get back to you if there&apos;s a suitable opportunity that matches your expertise.</p>
                         <div className="col-md-4 mx-auto fs-6 font-weight-bold">
                              <p className="mb-0">Contact:</p>
                              <p className="mb-0">Email: traineeship@bajratechnologies.com</p>
                              <p className="mb-0">Phone: +977-01-5912344</p>
                         </div>
                         <div className="text-center pb-2 pt-4">
                              <Link type="button" className="text-light btn fs-5" to={"/drop-cv"} style={{ background: 'var(--main-color)' }}>
                                   Submit Your CV<i className="bi bi-arrow-right" data-aos="fade-left"></i>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ProgramTrainner
