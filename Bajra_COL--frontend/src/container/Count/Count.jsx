import { useState, useEffect } from 'react';
import './Count.css';

const Count = () => {
     const statistics = [
          { icon: 'bi bi-stack', count: 550, label: 'Project', threshold: 400 },
          { icon: 'bi bi-people', count: 105, label: 'Team Members', threshold: 90 },
          { icon: 'bi bi-geo-alt', count: 2, label: 'Offices', threshold: 2 },
          { icon: 'bi bi-emoji-laughing', count: 155, label: 'Happy Clients', threshold: 150 }
     ];

     const [counts, setCounts] = useState(statistics.map(stat => ({ ...stat, currentCount: 0 })));

     const totalDuration = 1500;
     const updateInterval = totalDuration / (Math.max(...statistics.map(stat => stat.count)) / 5);

     useEffect(() => {
          const interval = setInterval(() => {
               setCounts(prevCounts =>
                    prevCounts.map(stat =>
                         stat.currentCount < stat.count
                              ? { ...stat, currentCount: Math.min(stat.currentCount + 5, stat.count) }
                              : stat
                    )
               );
          }, updateInterval);

          return () => clearInterval(interval);
     }, [updateInterval]);

     return (
          <div className="container  w-75" style={{ marginTop: '-3rem' }}>
               <div className="container card  w-50" style={{ background: 'var( --main-light-color)' }}>
                    <div className="row text-center justify-content-center">
                         {counts.map((stat, index) => (
                              <div key={index} className="col-sm-6 col-md-6 col-lg-3 mb-4">
                                   <div className="d-flex flex-column align-items-center" style={{ marginTop: '-2rem' }}>
                                        <div className="custom-border rounded-circle d-flex justify-content-center align-items-center mb-2">
                                             <i className={`${stat.icon} fs-1 text-light`}></i>
                                        </div>
                                        <div className="text-light">
                                             <p className="counting mb-0 text-light">
                                                  {stat.currentCount > stat.threshold ? `${stat.currentCount}+` : stat.currentCount}
                                             </p>
                                             <p className="text-uppercase mb-0 fs-6 text-light">{stat.label}</p>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default Count;
