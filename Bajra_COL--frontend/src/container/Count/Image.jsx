import { Images } from '../Parnter/images';
import './Count.css';

const Image = () => {
     return (
          <div className="container">
               <div className="row text-center my-5 justify-content-center align-items-center">
                    <div className="col-lg-8 d-flex justify-content-center align-items-center">
                         <img src={Images} alt="" className="img-fluid zoom-out images" />
                    </div>
               </div>
          </div>



     );
}

export default Image;
