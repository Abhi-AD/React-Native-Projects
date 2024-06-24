import { useState } from "react";
const OurExpertise = () => {
     const [activeTab, setActiveTab] = useState('Web Application');

     const tabs = [
          { name: 'Web Application', img: 'https://bajratechnologies.com/web/image/38332/Mobile%20Application%20%281%29.png' },
          { name: 'Mobile Application', img: 'https://bajratechnologies.com/web/image/38333/Mobile%20Application.png' },
          { name: 'Cloud Services', img: 'https://bajratechnologies.com/web/image/38325/Cloud%20%281%29.png' },
          { name: 'Software Application', img: 'https://bajratechnologies.com/web/image/38334/Software%20%281%29.png' },
          { name: 'DevOps', img: 'https://bajratechnologies.com/web/image/38336/Devops%20%282%29.png' },
          { name: 'UI/UX', img: 'https://bajratechnologies.com/web/image/38329/UX.png' },
          { name: 'PMT', img: 'https://bajratechnologies.com/web/image/38335/PM.png' },
     ];

     return (
          <div className="container text-center my-5 w-100 w-md-50">
               <p className="fs-1 mb-4">Who We Are</p>

               <div className="nav border-0 nav-tabs d-flex justify-content-center mt-4" id="myTab" role="tablist">
                    {tabs.map((tab) => (
                         <button
                              key={tab.name}
                              className={`nav-link fs-5 fw-normal me-2 ${activeTab === tab.name ? 'active rounded-4 text-light bg-danger ' : 'text-dark border border-dark rounded-4'}`} // Adjusted className for inactive tabs
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
                              <img src={tab.img} alt={tab.name} className="img-fluid text-center w-75 mt-5 h-70" />
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default OurExpertise;
