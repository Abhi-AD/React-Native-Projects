import { Link } from "react-router-dom";
import ProgramTrainnerbg from '../../assets/Trainee/ProgramTrainnerbg.png';

const ProgramTrainer = () => {
     return (
          <div className="bg-cover bg-center" style={{ backgroundImage: `url(${ProgramTrainnerbg})` }}>
               <div className="d-flex justify-content-center align-items-center p-5 min-vh-50">
                    <div className="text-center">
                         <p className="fs-2">Initiate Your Journey with Our Batch Traineeship Program!</p>
                         <p className="col-md-10 mx-auto fs-6 font-weight-bold">Apply today for our next traineeship batch and keep an eye out for updates on our next intake. We&apos;ll notify you if there&apos;s a suitable opportunity that matches your skills.</p>
                         <div className="col-md-4 mx-auto fs-6 font-weight-bold">
                              <p className="mb-0">Contact:</p>
                              <p className="mb-0">Email: traineeshcoip@coltechnology.com</p>
                              <p className="mb-0">Phone: +977-01-5912344</p>
                         </div>
                         <div className="text-center pb-2 pt-4">
                              <Link type="button" className="text-light btn btn-primary fs-5 bg-main" to={"/drop-cv"}>
                                   Submit Your CV<i className="bi bi-arrow-right" data-aos="fade-left"></i>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ProgramTrainer;
