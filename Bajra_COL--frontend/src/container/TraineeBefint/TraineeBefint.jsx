
const benefits = [
     {
          title: "Paid Traineeships",
          text: "We value our trainees' contributions, offering competitive compensation to support your learning journey.",
          imgSrc: "https://bajratechnologies.com/web/image/41681/Icon.png",
     },
     {
          title: "Food and Refreshments",
          text: "Enjoy complimentary meals and refreshments to keep you energized provided throughout the program.",
          imgSrc: "https://bajratechnologies.com/web/image/41682/Icon%281%29.png",
     },
     {
          title: "Mentorship Opportunities",
          text: "Receive personalized guidance from industry experts in our mentorship program, ensuring your success.",
          imgSrc: "https://bajratechnologies.com/web/image/41684/Icon%282%29.png",
     },
     {
          title: "Career Growth",
          text: "Unlock your career potential with our traineeship program, accelerating your growth in the tech industry.",
          imgSrc: "https://bajratechnologies.com/web/image/41685/Icon%283%29.png",
     },
     {
          title: "Connections",
          text: "Connect with industry professionals, fellow trainees, and alumni through networking.",
          imgSrc: "https://bajratechnologies.com/web/image/41686/Icon%284%29.png",
     },
     {
          title: "Placement Assistance",
          text: "Transition smoothly into tech careers with our placement assistance. Count on us for your career success.",
          imgSrc: "https://bajratechnologies.com/web/image/41687/Icon%285%29.png",
     },
];

const TraineeBenefit = () => {
     return (
          <div className="container mb-5">
               <div className="container text-center">
                    <p className=" w-75 mx-auto fs-4 fw-semibold text-main">
                         Trainee Benefits
                    </p>
                    <p className=" w-75 lh-sm mx-auto fs-1 mt-4 mb-4">
                         Discover The Perks of Joining Bajra’s Traineeship Program
                    </p>
                    <p className="w-75 mx-auto fs-6">
                         Embracing our program opens the door to a plethora of invaluable benefits as you set sail on your journey toward professional advancement and personal development.
                    </p>
               </div>

               <div className="row mt-5">
                    {benefits.map((benefit, index) => (
                         <div className="col-md-4 mb-4" key={index}>
                              <div className="card p-2 h-100 d-flex flex-column">
                                   <div className="d-flex">
                                        <img src={benefit.imgSrc} className="rounded-circle mt-4 profile" alt="profile" />
                                   </div>
                                   <div className="card-body mt-1 d-flex flex-column" style={{ paddingLeft: '1rem', paddingRight: '6rem' }}>
                                        <p className="card-title fs-5 text-secondary">{benefit.title}</p>
                                        <p className="card-text fs-6 text-secondary">{benefit.text}</p>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default TraineeBenefit;
