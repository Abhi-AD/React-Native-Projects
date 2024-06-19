import { Link } from "react-router-dom";
import './WhatDoSucess.css';

const WhatDoSucess = () => {
     return (
          <div className="">
               <div className="p-5">
                    <div className="container text-center my-5 w-50">
                         <p className="fs-2" style={{ color: 'var(--main-color)' }}>We Ship Success Everyday</p>
                         <p className="fs-1">What Can We Do For You?</p>
                         <p className="fs-5">
                              Bajra excels at delivering innovative technological solutions for all types of technology needs across various domains.
                              Regardless of the complexity of your ideas or solutions, we meticulously analyze every potential path and select the best
                              course of action to craft the optimal version of your dream project within required constraints. We don&apos;t hesitate to push
                              the limits using the latest technologies or explore the bleeding edge and we are also very good at keeping things stable
                              and working within specified processes or existing technology stacks. Here are some of the major categories of services
                              we provide for our beloved partners.
                         </p>
                    </div>
                    <div className="container">
                         <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mx-auto">
                              {services.map((service, index) => (
                                   <div className="col d-flex" key={index}>
                                        <div className="card border-0 shadow card-hover h-100 w-100 d-flex flex-column">
                                             <div className="default-content flex-grow-1 d-flex flex-column">
                                                  <img src={service.image} alt={service.alt} width={50} className="mx-auto pt-3" />
                                                  <div className="card-body flex-grow-1 d-flex flex-column">
                                                       <p className="card-title fs-6">{service.title}</p>
                                                  </div>
                                             </div>
                                             <div className="hover-content h-80 flex-grow-1 d-flex flex-column">
                                                  <div className="card-body flex-grow-1 d-flex flex-column">
                                                       <p className="card-title fs-6">{service.description}</p>
                                                       <Link to={`/what-we-do`} type="button" className="btn btn-outline-light btn-hover-dark border-0 mt-auto" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                            Learn More
                                                            <i className="bi bi-arrow-right" data-aos="fade-left"></i>
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>

                                   </div>
                              ))}
                         </div>
                    </div>
                    <div className="text-center mt-5">
                         <Link style={{ backgroundColor: 'var(--main-color)' }} type="button" className="text-light btn fs-4" to={`/what-we-do`}>
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
          alt: "Technical Architecture and Platform Design",
          title: "Technical Architecture and Platform Design",
          description: "Our first priority for delivering solutions with flawless execution is to create a solid.."
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/user-experience-design.png",
          alt: "User Experience/ Interaction Principles and Design",
          title: "User Experience/ Interaction Principles and Design",
          description: "Every business-be it Bajra or any of our clients- builds software and programs to.."
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/agile.png",
          alt: "Agile Software Prototyping and Development",
          title: "Agile Software Prototyping and Development",
          description: "All projects that we undertake follow agile prototyping and development, which"
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/project_management.png",
          alt: "Project Management Suport and Services",
          title: "Project Management Suport and Services",
          description: "Our agile development strategy is effective because it stands on the shoulders of our"
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/consultation.png",
          alt: "Consulting and Advisory Services",
          title: "Consulting and Advisory Services",
          description: "Bajra is home to diverse experts in different fields required to develop software solutions"
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/support_maintainance.png",
          alt: "Support and Maintenance Services",
          title: "Support and Maintenance Services",
          description: "Once you start with Bajra, we will deliver as your closest partner from beginning to end"
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/continuous_delivery.png",
          alt: "Continuous Delivery and Code Deployment",
          title: "Continuous Delivery and Code Deployment",
          description: "Continuous Delivery is an important development practice where we focus on"
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/software_monitoring.png",
          alt: "Software Monitoring and Analytics",
          title: "Software Monitoring and Analytics",
          description: "We understand the critical importance of monitoring software performance, user"
     },
     {
          image: "https://bajratechnologies.com/bajra_snippets/static/src/img/hardware_software.png",
          alt: "Custom Hardware and Software",
          title: "Custom Hardware and Software",
          description: "At Bajra, we take pride in our expertise in crafting Custom Hardware and Software solutions that"
     },
];

export default WhatDoSucess;
