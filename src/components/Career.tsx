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
                <h4>IoT & Full Stack Developer</h4>
                <h5>Freelance / Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built multiple web and IoT applications, including dashboards, automation systems, and AI assistants. Led project planning, implementation, and deployment for smart devices. Maintained version control and CI/CD pipelines using GitHub and Docker.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Achievements</h4>
                <h5>Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed IoT and embedded systems projects with ESP32, Arduino, and Raspberry Pi. Built multiple production-grade web apps using Next.js, React, and Node.js. Active contributor to personal portfolio and open-source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
