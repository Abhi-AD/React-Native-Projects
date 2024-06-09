import { useState } from "react";


const Expertise = () => {
     const [activeTab, setActiveTab] = useState('All');

     const handleTabClick = (cityName) => {
          setActiveTab(cityName);
     };
     return (
          <div className="container text-center my-5 w-100 w-md-50">
               <p className="fs-1">Who We Are</p>

               <div className="nav nav-tabs" id="myTab" role="tablist">
                    <button className={`nav-link ${activeTab === 'All' ? 'active' : ''}`} onClick={() => handleTabClick('All')}>All</button>
                    <button className={`nav-link ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => handleTabClick('Paris')}>Paris</button>
                    <button className={`nav-link ${activeTab === 'Tokyo' ? 'active' : ''}`} onClick={() => handleTabClick('Tokyo')}>Tokyo</button>
               </div>

               <div className="tab-content" id="myTabContent">
                    <div className={`tab-pane fade ${activeTab === 'All' ? 'show active' : ''}`} id="All" role="tabpanel">
                         <h3>All</h3>
                         <p>All is the capital city of England.</p>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'Paris' ? 'show active' : ''}`} id="Paris" role="tabpanel">
                         <h3>Paris</h3>
                         <p>Paris is the capital of France.</p>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'Tokyo' ? 'show active' : ''}`} id="Tokyo" role="tabpanel">
                         <h3>Tokyo</h3>
                         <p>Tokyo is the capital of Japan.</p>
                    </div>
               </div>
          </div>
     );
}


export default Expertise