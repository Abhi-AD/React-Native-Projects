import { Link } from "react-router-dom"

const Connect = () => {
     return (
          <div style={{ background: 'url(https://bajratechnologies.com/web/image/34899/Contact.png)' }}>
               <div className="container">
                    <div className="row">
                         <div className="p-5">
                              <div className="text-center">
                                   <p className="fs-2 text-main" >Let&apos;s Build Something Great Together.</p>
                                   <p className="fs-6 font-weight-bold">Call us at: 🇳🇵+977-01-5912344</p>
                              </div>
                              <div className="text-center pb-2 ">
                                   <Link type="button" className="move text-light btn fs-4 bg-main" to={`/what-we-do`}>
                                        What We Do <i className="bi bi-arrow-right arrow" data-aos="fade-left"></i>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Connect
