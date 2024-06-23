import "./FrequentlyQuestion.css";

const accordionData = [
     {
          id: 1,
          question: "Who can apply for the traineeship program?",
          answer: "Anyone who is an enthusiastic learner looking for a learning platform can apply!"
     },
     {
          id: 2,
          question: "How can I apply for the traineeship program?",
          answer: "You can apply through our website's career page or the trainee page.."
     },
     {
          id: 3,
          question: "What are supporting documents required while filling out the application?",
          answer: "You will only be required to submit your CV."
     },
     {
          id: 4,
          question: "Is it a paid traineeship program?",
          answer: "The Bajra Batch Traineeship Program aims to prepare participants for various tech and management roles, covering both technical skills (like software development and data science) and critical interpersonal skills (like Project Management and UI/UX designs)."
     },
     {
          id: 5,
          question: "Is it a paid traineeship program?",
          answer: "The Bajra Batch Traineeship Program aims to prepare participants for various tech and management roles, covering both technical skills (like software development and data science) and critical interpersonal skills (like Project Management and UI/UX designs)."
     },
     {
          id: 6,
          question: "What kind of questions can I expect in the Aptitude Test?",
          answer: "It involves general MCQs, subjective, and basic stack-wise questions."
     },
     {
          id: 7,
          question: "What can I expect during the interview?",
          answer: "You can expect the questions to revolve around your skills, personality, and how well you fit in our space."
     },
     {
          id: 8,
          question: "What does the time commitment scenario look like?",
          answer: "It is a full-time on-site traineeship program. We are open from 8 am to 8 pm, out of which you are required to have a log time of 8 hours."
     },
     {
          id: 9,
          question: "Can I take a break if I have any exams during the traineeship program?",
          answer: "If exams are lined up, we suggest you apply to the upcoming traineeship program. We don't offer any leave during these three months."
     },
     {
          id: 10,
          question: "Do I need my own devices?",
          answer: "Yes, you will require your device during the traineeship program."
     },
     {
          id: 11,
          question: "What are the further opportunities at Bajra?",
          answer: "After the rigorous traineeship period, our team will analyze your performance. If you meet the Bajra standards, you will have a chance to work with us."
     },
     {
          id: 12,
          question: "Can I apply again if my application isn&t selected?",
          answer: "Yes, you can apply in the next phase of the application process in the upcoming batch."
     }

];

const FrequentlyQuestion = () => {
     return (
          <div className="container">
               <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-10">
                         <h1 className="text-center mb-4">Frequently Asked Questions</h1>

                         <div className="accordion accordion-flush" id="accordionFlushExample">
                              {accordionData.map(item => (
                                   <div key={item.id} className="accordion-item shadow mb-2 border-0 p-2 rounded-4">
                                        <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                             <button className="accordion-button collapsed no-focus" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                  {item.question}
                                             </button>
                                        </h2>
                                        <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                             <div className="accordion-body">
                                                  {item.answer}
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default FrequentlyQuestion;
