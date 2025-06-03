import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mentee</h4>
                <h5>Code Without Barrier</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            I completed a Coding With Benefits (CWB) program where 
            I learned about Machine Learning, coding skills, and gained 
            industry knowledge from Microsoft employees
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> Student</h4>
                <h5>Internshala </h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Completed 8 weeks summer internship on 
            Full Stack Web Development . 
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
