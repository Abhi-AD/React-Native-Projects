import { useState } from "react";
import { Cloud, Devops, Mobile_Application, PM, Software, UX, Web_Application } from "../Parnter/images";
const OurExpertise = () => {
     const [activeTab, setActiveTab] = useState('Web Application');

     const tabs = [
          { name: 'Web Application', img: Web_Application },
          { name: 'Mobile Application', img: Mobile_Application },
          { name: 'Cloud Services', img: Cloud },
          { name: 'Software Application', img: Software },
          { name: 'DevOps', img: Devops },
          { name: 'UI/UX', img: UX },
          { name: 'PMT', img: PM },
     ];

     return (
          <div className="container text-center my-5 w-100 w-md-50">
               <p className="fs-1 mb-4">Who We Are</p>

               <div className="nav border-0 nav-tabs d-flex justify-content-center mt-4" id="myTab" role="tablist">
                    {tabs.map((tab) => (
                         <button
                              key={tab.name}
                              className={`nav-link fs-5 fw-normal mt-2 me-2 ${activeTab === tab.name ? 'active rounded-4 text-light bg-primary ' : 'text-dark border border-dark rounded-4'}`} // Adjusted className for inactive tabs
                              onClick={() => setActiveTab(tab.name)}
                         >
                              {tab.name}
                         </button>
                    ))}
               </div>

               <div className="tab-content" id="myTabContent">
                    {tabs.map((tab) => (
                         <div
                              key={tab.name}
                              className={`tab-pane  ${activeTab === tab.name ? 'show active' : ''}`}
                              id={tab.name}
                              role="tabpanel"
                         >
                              <img src={tab.img} alt={tab.name} className="img-fluid text-center mt-5" style={{ height: '500px' }} />
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default OurExpertise;
