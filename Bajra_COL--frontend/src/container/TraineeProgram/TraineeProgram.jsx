import { Link } from "react-router-dom";
import { Program1, Program2, Program3 } from "../Parnter/images";

const batches = [
     {
          img: Program1,
          title: "J-24-01",
          date: "15 Jan - 15 Apr 2024",
     },
     {
          img: Program2,
          title: "J-23-06",
          date: "19 Jun - 15 Sep 2023",
     },
     {
          img: Program3,
          title: "J-23-01",
          date: "30 Jan - 01 May 2023",
     },
];

const TraineeProgram = () => {
     return (
          <div className="container mb-5">
               <p className="text-center fs-4 fw-bold p-5">
                    Successful Batches From Our Recent Traineeship Program
               </p>
               <div className="row justify-content-center">
                    {batches.map((batch, index) => (
                         <div key={index} className="col-md-4 mb-4">
                              <div className="card">
                                   <img src={batch.img} className="card-img-top" alt={batch.title} />
                                   <div className="card-body">
                                        <h5 className="card-title">{batch.title}</h5>
                                        <p className="card-text">{batch.date}</p>
                                        <a href="/trainee" className="btn btn-primary text-light bg-main">
                                             Read more
                                        </a>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
               <div className="text-center mb-5">
                    <Link type="button" className="text-light btn btn-primary fs-5 bg-main" to={`/trainee`}>
                         View All <i className="bi bi-arrow-right fs-4" data-aos="fade-left"></i>
                    </Link>
               </div>
          </div>
     );
};

export default TraineeProgram;
