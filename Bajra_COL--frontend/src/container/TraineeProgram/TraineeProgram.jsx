import { Link } from "react-router-dom"

const TraineeProgram = () => {
     return (
          <div className="container mb-5">
               <p className="text-center fs-4 fw-bold p-5">Successful Batches From Our Recent Traineeship Program</p>
               <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                         <div className="card">
                              <img src="https://bajratechnologies.com/web/image/49859/FB_IMG_1711963068894.jpg" className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">J-24-01</h5>
                                   <p className="card-text">15 Jan - 15 Apr 2024</p>
                                   <a href="#" className="btn text-light bg-main ">Read more</a>
                              </div>
                         </div>
                    </div>
                    <div className="col-md-4 mb-4">
                         <div className="card">
                              <img src="https://bajratechnologies.com/web/image/48159/new%20batch.jpg" className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">J-23-06</h5>
                                   <p className="card-text">19 Jun - 15 Sep 2023</p>
                                   <a href="#" className="btn text-light bg-main ">Read more</a>
                              </div>
                         </div>
                    </div>
                    <div className="col-md-4 mb-4">
                         <div className="card">
                              <img src="https://bajratechnologies.com/web/image/49246/batch%203%20%282%29.jpg" className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">J-23-01</h5>
                                   <p className="card-text">30 Jan - 01 May 2023</p>
                                   <a href="#" className="btn text-light bg-main ">Read more</a>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="text-center mb-5">
                    <Link type="button" className="text-light btn fs-5 bg-main " to={`/what-we-do`}>
                         View All <i className="bi bi-arrow-right fs-4" data-aos="fade-left"></i>
                    </Link>
               </div>
          </div>

     )
}

export default TraineeProgram