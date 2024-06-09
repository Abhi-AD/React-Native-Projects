import './Count.css'
const Count = () => {
     return (
          <div>
               <div className="container text-center my-5 w-50">
                    <div className="d-flex justify-content-center align-items-center ">
                         <img src="https://bajratechnologies.com/web/image/34898/Property%201%3DVariant4%20%281%29%20%281%29.png" alt="" className="" />
                    </div>
                    <div className="rounded rounded-6 h-100 d-flex fs-4" style={{ backgroundColor: 'var(--main-color-light)' }}>
                         <div className="col-3 d-flex justify-content-center align-items-center">
                              <div className="text-center">
                                   <div className="custom-border rounded-circle d-flex justify-content-center align-items-center mb-2">
                                        <i className="bi bi-stack fs-1 text-light"></i>
                                   </div>
                                   <div className='text-light'>
                                        <p className="counting mb-0">500</p>
                                        <p className="text-uppercase mb-0 fs-6">Project</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-3 d-flex justify-content-center align-items-center">
                              <div className="text-center">
                                   <div className="custom-border rounded-circle d-flex justify-content-center align-items-center mb-2">
                                        <i className="bi bi-people text-light fs-1"></i>

                                   </div>
                                   <div className='text-light'>
                                        <p className="mb-0">100</p>
                                        <p className="text-uppercase mb-0 fs-6">TEAM MEMBERS</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-3 d-flex justify-content-center align-items-center">
                              <div className="text-center">
                                   <div className="custom-border rounded-circle d-flex justify-content-center align-items-center mb-2">
                                        <i className="bi bi-geo-alt text-light fs-1"></i>
                                   </div>
                                   <div className='text-light'>
                                        <p className="mb-0">2</p>
                                        <p className="text-uppercase mb-0 fs-6">OFFICES</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-3 d-flex justify-content-center align-items-center">
                              <div className="text-center">
                                   <div className="custom-border rounded-circle d-flex justify-content-center align-items-center mb-2">
                                        <i className="bi bi-emoji-laughing text-light fs-1"></i>
                                   </div>
                                   <div className='text-light'>
                                        <p className="mb-0">180</p>
                                        <p className="text-uppercase mb-0 fs-6">HAPPY CLIENTS</p>
                                   </div>
                              </div>
                         </div>
                    </div>


               </div>
          </div>
     );
}

export default Count;
