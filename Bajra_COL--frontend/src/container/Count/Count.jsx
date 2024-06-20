import './Count.css';

const Count = () => {
     // Data for each statistic
     const statistics = [
          { icon: 'bi bi-stack', count: 500, label: 'Project' },
          { icon: 'bi bi-people', count: 100, label: 'Team Members' },
          { icon: 'bi bi-geo-alt', count: 2, label: 'Offices' },
          { icon: 'bi bi-emoji-laughing', count: 180, label: 'Happy Clients' }
     ];

     return (
          <div className='container'>
               <div className="row text-center my-5 w-100">
                    <div className="d-flex justify-content-center align-items-center">
                         <img src="https://bajratechnologies.com/web/image/34898/Property%201%3DVariant4%20%281%29%20%281%29.png" alt="" />
                    </div>
                    <div className="rounded rounded-6 h-100 d-flex fs-4" style={{ backgroundColor: 'var(--main-light-color)' }}>
                         {statistics.map((stat, index) => (
                              <div key={index} className="col-3 d-flex justify-content-center align-items-center">
                                   <div className="text-center">
                                        <div className="custom-border rounded-circle d-flex justify-content-center align-items-center mb-2">
                                             <i className={`${stat.icon} fs-1 text-light`}></i>
                                        </div>
                                        <div className='text-light'>
                                             <p className="counting mb-0 text-light">{stat.count}</p>
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
