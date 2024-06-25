import { useState, useEffect } from 'react';
import './TraineeCount.css';

const TraineeCount = () => {
     const statistics = [
          { icon: 'bi bi-award', count: 4, label: 'Batch', threshold: 3 },
          { icon: 'bi bi-pen ', count: 10, label: 'Stacks', threshold: 9 },
          { icon: 'bi bi-person-fill-check', count: 100, label: 'Trained', threshold: 90 },
          { icon: 'fas fa-handshake', count: 30, label: 'Placements', threshold: 20 }
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
          <div className="container  w-100 mb-5" style={{ marginTop: '3rem' }}>
               <div className="container card border-0 shadow  w-75" style={{ background: 'var( --white)' }}>
                    <div className="row text-center justify-content-center">
                         {counts.map((stat, index) => (
                              <div key={index} className="col-sm-6 col-md-6 col-lg-3 mb-4">
                                   <div className="d-flex flex-column align-items-center" style={{ marginTop: '-2rem' }}>
                                        <div className="trainee-custom-border rounded-circle d-flex justify-content-center align-items-center mb-2">
                                             <i className={`${stat.icon} fs-1 text-main`}></i>
                                        </div>
                                        <div className="text-light">
                                             <p className="counting mb-0 fs-4 fw-semibold text-main ">
                                                  {stat.currentCount > stat.threshold ? `${stat.currentCount}+` : stat.currentCount}
                                             </p>
                                             <p className="text-uppercase mt-3 fs-6">{stat.label}</p>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default TraineeCount;
