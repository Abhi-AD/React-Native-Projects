import { Link } from "react-router-dom";
import './WhatDoSucess.css';

const WhatDoSucess = () => {
     return (
          <div className="">
               <div className="container">
                    <div className=" text-center my-5 w-lg-50 row">
                         <p className="fs-2 mb-4 text-main ">Daily Deliveries of Success</p>
                         <p className="fs-1 mt-2 text-dark">What Do You Require?</p>
                         <p className="fs-6 w-75  mx-auto text-secondary">
                              COL Technology excels in delivering cutting-edge technological solutions across diverse domains. Whether your concepts are straightforward or highly complex, we meticulously analyze every potential avenue to determine the optimal course of action, ensuring the realization of your project within specified constraints. We thrive on pushing boundaries with the latest technologies and exploring the forefront of innovation, while also maintaining stability and efficiency within existing technology stacks and processes. Explore our comprehensive range of services tailored for our valued partners.
                         </p>
                    </div>
                    <div className="">
                         <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mx-auto">
                              {services.map((service, index) => (
                                   <div className="col d-flex" key={index}>
                                        <div className="card border-0 card-hover h-100 w-100 d-flex flex-column">
                                             <div className="card shadow default-content flex-grow-1 d-flex flex-column">
                                                  <img src={service.image} alt={service.alt} width={50} className="mx-auto pt-3" />
                                                  <div className="card-body flex-grow-1 d-flex flex-column">
                                                       <p className="card-title fs-6">{service.title}</p>
                                                  </div>
                                             </div>
                                             <div className="card shadow hover-content h-100 flex-grow-1 d-flex flex-column">
                                                  <div className="card-body flex-grow-1 d-flex flex-column">
                                                       <p className="card-title fs-6">{service.description}</p>
                                                       <Link
                                                            to={`/what-we-do`}
                                                            type="button"
                                                            className="btn-outline-light btn-hover-dark border-0 mt-auto text-light"
                                                            data-mdb-ripple-init
                                                            data-mdb-ripple-color="dark"
                                                            style={{ textDecoration: 'none' }}
                                                       >
                                                            Learn More <i className="bi bi-arrow-right" data-aos="fade-left"></i>
                                                       </Link>

                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                              ))}
                         </div>
                    </div>
                    <div className="text-center mb-5 mt-5">
                         <Link type="button" className="text-light btn fs-4 bg-main " to={`/what-we-do`}>
                              What We Do <i className="bi bi-arrow-right" data-aos="fade-left"></i>
                         </Link>
                    </div>
               </div>
          </div>
     );
}

const services = [
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/architecture.png",
          alt: "Innovative Technical Solutions",
          title: "Innovative Technical Solutions",
          description: "We excel in crafting innovative technical solutions to ensure flawless execution..."
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/user-experience-design.png",
          alt: "Interactive User Experience Strategies",
          title: "Interactive User Experience Strategies",
          description: "We implement interactive user experience strategies at COL Technology and for our clients..."
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/agile.png",
          alt: "Agile Software Prototyping and Development",
          title: "Agile Software Prototyping and Development",
          description: "All projects that we undertake follow agile prototyping and development, which"
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/project_management.png",
          alt: "Effective Project Management Solutions",
          title: "Effective Project Management Solutions",
          description: "Achieve success with our effective project management solutions..."
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/consultation.png",
          alt: "Strategic Advisory Services",
          title: "Strategic Advisory Services",
          description: "Offering strategic advisory services at COL Technology..."
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/support_maintainance.png",
          alt: "Comprehensive Maintenance Services",
          title: "Comprehensive Maintenance Services",
          description: "Providing comprehensive maintenance services at COL Technology..."
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/continuous_delivery.png",
          alt: "Automated Deployment Solutions",
          title: "Automated Deployment Solutions",
          description: "Offering automated deployment solutions to optimize continuous delivery practices..."
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/software_monitoring.png",
          alt: "Software Monitoring and Analytics",
          title: "Software Monitoring and Analytics",
          description: "We understand the critical importance of monitoring software performance, user"
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/hardware_software.png",
          alt: "Customized Technology Innovations",
          title: "Customized Technology Innovations",
          description: "Driving customized technology innovations at COL Technology..."
     },
];

export default WhatDoSucess;
