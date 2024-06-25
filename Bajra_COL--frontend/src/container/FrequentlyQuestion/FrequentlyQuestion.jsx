import "./FrequentlyQuestion.css";

const accordionData = [
     {
          id: 1,
          question: "Who is eligible to apply for the traineeship program?",
          answer: "The program is open to anyone who is eager to learn and seeking a valuable learning opportunity!"
     },
     {
          id: 2,
          question: "What are the application methods for the traineeship program?",
          answer: "You have the option to apply via our career page on the website or directly through the trainee page."
     },
     {
          id: 3,
          question: "What documentation do I need to provide when applying?",
          answer: "The only document required for your application is your CV."
     },
     {
          id: 4,
          question: "Is the traineeship program compensated?",
          answer: "The COL Batch Traineeship Program is designed to equip participants with essential technical skills such as software development and data science, as well as crucial interpersonal skills like project management and UI/UX design."
     },
     {
          id: 5,
          question: "Is the traineeship program remunerated?",
          answer: "The COL Batch Traineeship Program is focused on equipping participants with technical skills such as software development and data science, alongside essential interpersonal skills like project management and UI/UX design."
     },
     {
          id: 6,

          question: "What types of questions are included in the Aptitude Test?",
          answer: "The Aptitude Test comprises general multiple-choice questions (MCQs), subjective questions, and fundamental stack-related inquiries."
     },
     {
          id: 7,
          question: "What should I anticipate during the interview?",
          answer: "During the interview, you can expect questions related to your skills, personality, and how well you align with our environment."
     },
     {
          id: 8,
          question: "What is the time commitment required for the program?",
          answer: "This is a full-time on-site traineeship program. Our operating hours are from 8 am to 8 pm, and participants are expected to log a minimum of 8 hours per day."
     },
     {
          id: 9,
          question: "If I have exams during the traineeship program, can I take a break?",
          answer: "If you have exams scheduled, we recommend applying for our next traineeship program. Unfortunately, we do not grant leave during the three-month duration."
     },
     {
          id: 10,
          question: "Will I need to use my own devices during the traineeship program?",
          answer: "Yes, you will need to use your own device throughout the traineeship program."
     },
     {
          id: 11,
          question: "What are the prospects for advancement at COL?",
          answer: "Following the intensive traineeship period, our team evaluates your performance. Meeting COl's standards could lead to potential employment opportunities with us."
     },
     {
          id: 12,
          question: "If I have exams during the traineeship program, can I take a break?",
          answer: "If you have exams scheduled, we recommend applying for our next traineeship program. Unfortunately, we do not grant leave during the three-month duration."
     }

];

const Frequentlyquestion = () => {
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

export default Frequentlyquestion;
