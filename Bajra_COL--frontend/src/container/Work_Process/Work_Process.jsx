import { Link } from "react-router-dom"

const Work_Process = () => {
     return (
          <div style={{ backgroundImage: 'url(https://bajratechnologies.com/web/image/34905/contour%20lines.png)' }} >
               <div className="p-4 p-md-6">
                    <div className="container text-center my-5 w-100 w-md-50">
                         <p className="fs-2" style={{ color: 'var(--main-color)' }}>Bajra in a Nutshell</p>
                         <p className="fs-1">Who We Are</p>
                         <p className="fs-5">
                              We build solutions in the form of programs and software. At Bajra, we don’t build for the sake of building, we build to create solutions that execute flawlessly and solve problems. We put in the effort needed, but we also value a healthy balance to maintain both productivity and quality. We want our customers to know upfront that they can expect top-notch deliverables that will perform exceptionally even in the toughest situations. What sets us apart is the strong bond within our team. We&apos;ve all had the privilege of working together before, which has fostered a deep sense of trust and collaboration. This trust is the secret sauce that allows us to consistently produce work of the highest caliber.
                         </p>
                    </div>
                    <div className="text-center">
                         <Link style={{ color: 'var(--main-color)' }} type="button" className="btn fs-4" to={`/what-we-do`}>
                              What We Do <i className="bi bi-arrow-right" data-aos="fade-left"></i>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Work_Process