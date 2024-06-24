import { useState } from "react";
import './OurWork.css'
const OurWork = () => {
     const [activeTab, setActiveTab] = useState('All');

     // Define tabs with arrays of items
     const tabs = [
          {
               name: 'All',
               items: [
                    { title: 'Airscout Enterprise', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/38/profile_image' },
                    { title: 'Airscout Residential', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/37/profile_image' },
                    { title: 'Brandguarde', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/32/profile_image' },
                    { title: 'Coral: Where E-commerce Intelligence ', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/2/profile_image' },
                    { title: 'DataScout Etherne', title_category: 'Android', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/9/profile_image' },
                    { title: 'FloorZap', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/21/profile_image' },
                    { title: 'Foster Keeper', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/33/profile_image' },
                    { title: 'Frontline EHS', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/25/profile_image' },
                    { title: 'GOS Enterprise', title_category: 'Desktop', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/34/profile_image' },
                    { title: 'Harvest Platform', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/27/profile_image' },
                    { title: 'Inventory Manager for Restaurants', title_category: 'Android', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/31/profile_image' },
                    { title: 'Iron Fitness', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/22/profile_image' },
                    { title: 'Lekhandas (लेखनदास)', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/43/profile_image' },
                    { title: 'MuseMinded', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/1/profile_image' },
                    { title: 'NS-Mindfulness', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/35/profile_image' },
                    { title: 'Nagarik News', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/17/profile_image' },
                    { title: 'Nfluence', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/41/profile_image' },
                    { title: 'PaddleYou', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/16/profile_image' },
                    { title: 'Rpple Analytics', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/30/profile_image' },
                    { title: 'SIS Products', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/36/profile_image' },
                    { title: 'Seller Certify', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/4/profile_image' },
                    { title: 'Seller Insight', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/3/profile_image' },
                    { title: 'SiteHawk', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/19/profile_image' },
                    { title: 'Smart ECG System', title_category: 'Andorid', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/20/profile_image' },
                    { title: 'Tempocom - Tempo Report Writer En', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/40/profile_image' },
                    { title: 'TicketBuilder', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/10/profile_image' },
                    { title: 'YouSpin', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/13/profile_image' },
                    { title: 'iKringLoop', title_category: 'Web/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/11/profile_image' },
               ]
          },
          {
               name: 'Web',
               items: [
                    { title: 'Airscout Enterprise', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/38/profile_image' },
                    { title: 'Brandguarde', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/32/profile_image' },
                    { title: 'Coral: Where E-commerce Intelligence ', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/2/profile_image' },
                    { title: 'FloorZap', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/21/profile_image' },
                    { title: 'Foster Keeper', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/33/profile_image' },
                    { title: 'Harvest Platform', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/27/profile_image' },
                    { title: 'Iron Fitness', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/22/profile_image' },
                    { title: 'MuseMinded', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/1/profile_image' },
                    { title: 'Nfluence', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/41/profile_image' },
                    { title: 'PaddleYou', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/16/profile_image' },
                    { title: 'Rpple Analytics', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/30/profile_image' },
                    { title: 'SIS Products', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/36/profile_image' },
                    { title: 'Seller Certify', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/4/profile_image' },
                    { title: 'Seller Insight', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/3/profile_image' },
                    { title: 'SiteHawk', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/19/profile_image' },
                    { title: 'Tempocom - Tempo Report Writer En', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/40/profile_image' },
                    { title: 'TicketBuilder', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/10/profile_image' },
                    { title: 'YouSpin', title_category: 'Web', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/13/profile_image' },
                    { title: 'iKringLoop', title_category: 'Web/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/11/profile_image' },

               ]
          },
          {
               name: 'Android',
               items: [
                    { title: 'Airscout Residential', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/37/profile_image' },
                    { title: 'DataScout Etherne', title_category: 'Android', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/9/profile_image' },
                    { title: 'Frontline EHS', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/25/profile_image' },
                    { title: 'Harvest Platform', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/27/profile_image' },
                    { title: 'Inventory Manager for Restaurants', title_category: 'Android', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/31/profile_image' },
                    { title: 'Iron Fitness', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/22/profile_image' },
                    { title: 'Lekhandas (लेखनदास)', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/43/profile_image' },
                    { title: 'NS-Mindfulness', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/35/profile_image' },
                    { title: 'Nagarik News', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/17/profile_image' },
                    { title: 'Nfluence', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/41/profile_image' },
                    { title: 'Smart ECG System', title_category: 'Andorid', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/20/profile_image' },
                    { title: 'Tempocom - Tempo Report Writer En', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/40/profile_image' },

               ]
          },
          {
               name: 'iOS',
               items: [
                    { title: 'Airscout Residential', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/37/profile_image' },
                    { title: 'Frontline EHS', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/25/profile_image' },
                    { title: 'Harvest Platform', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/27/profile_image' },
                    { title: 'Iron Fitness', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/22/profile_image' },
                    { title: 'Lekhandas (लेखनदास)', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/43/profile_image' },
                    { title: 'NS-Mindfulness', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/35/profile_image' },
                    { title: 'Nagarik News', title_category: 'Android/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/17/profile_image' },
                    { title: 'Nfluence', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/41/profile_image' },
                    { title: 'Tempocom - Tempo Report Writer En', title_category: 'Web/Android /iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/40/profile_image' },
                    { title: 'iKringLoop', title_category: 'Web/iOS', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/11/profile_image' },

               ]
          },
          {
               name: 'Desktop',
               items: [
                    { title: 'GOS Enterprise', title_category: 'Desktop', img: 'https://bajratechnologies.com/website/image/website_portfolios.portfolios/34/profile_image' },
               ]
          },
     ];

     return (
          <div className="container text-center">
               <p className="fs-1 mt-4">Who We Are</p>

               <div className="nav border-0 nav-tabs d-flex justify-content-center mt-4" id="myTab" role="tablist">
                    {tabs.map((tab) => (
                         <button
                              key={tab.name}
                              className={`nav-link fs-5 fw-normal me-2 ${activeTab === tab.name ? 'active border-0 text-light bg-danger' : 'text-dark border border-dark border-0'}`}
                              onClick={() => setActiveTab(tab.name)}
                         >
                              {tab.name}
                         </button>
                    ))}
               </div>

               <div className="tab-content mt-4 p-5" id="myTabContent">
                    {tabs.map((tab) => (
                         <div
                              key={tab.name}
                              className={`tab-pane fade ${activeTab === tab.name ? 'show active' : ''}`}
                              id={tab.name}
                              role="tabpanel"
                         >
                              <div className="row justify-content-center g-5">
                                   {tab.items.map((item, index) => (
                                        <div key={index} className="col-md-4">
                                             <div className="card border-0">
                                                  <div style={{ height: '200px' }}>
                                                       <img
                                                            src={item.img}
                                                            className="card-img-top img-fluid w-100 h-100"
                                                            style={{ objectFit: 'cover', maxHeight: '100%' }}
                                                            alt={item.title}
                                                       />
                                                  </div>
                                                  <div className="card-body">
                                                       <p className="card-title fs-5 text-dark">{item.title}</p>
                                                       <p className="card-title fs-6 text-secondary text-captize">{item.title_category}</p>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                         </div>
                    ))}
               </div>
          </div>
     );
}


export default OurWork;