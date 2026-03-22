import "./styles/WhyHireMe.css";
import { FaLaptopCode, FaMicrochip, FaCogs, FaRocket } from "react-icons/fa";

const whyData = [
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Web Mastery",
    desc: "End-to-end development of scalable, high-performance web applications.",
    points: [
      "Advanced proficiency in the MERN Stack (MongoDB, Express, React, Node.js).",
      "Building seamless User Interfaces with React & Next.js.",
      "Developing secure and optimized backend RESTful APIs.",
      "Deploying and managing web platforms autonomously."
    ]
  },
  {
    icon: <FaMicrochip />,
    title: "IoT & Hardware Integration",
    desc: "A rare capability bridging software engineering with physical hardware computing.",
    points: [
      "Programming microcontrollers such as ESP32, Arduino, and Raspberry Pi.",
      "Integrating physical sensors with real-time cloud analytics and logic.",
      "Developing custom Smart Home Automation devices and dashboards.",
      "Experience with edge computing and localized network setups."
    ]
  },
  {
    icon: <FaCogs />,
    title: "Complex Problem Solving",
    desc: "Proven ability to architect advanced algorithms and sophisticated system logic.",
    points: [
      "Designed 'Jarvis' – a complex native NLP Python AI voice assistant.",
      "Engineered autonomous robotics with spatial awareness (Smart Vacuum).",
      "Architected complex relational databases for luxury hotel booking systems.",
      "Focused on elegant, error-free, and heavily maintainable software architecture."
    ]
  },
  {
    icon: <FaRocket />,
    title: "Rapid Deployment & Autonomy",
    desc: "A highly-driven freelance product mindset focused on delivering direct value.",
    points: [
      "Extensive experience operating independently to meet strict execution deadlines.",
      "Ability to quickly take product specifications from 0-to-1 production.",
      "Strong communication skills for QA, client, and project management alignment.",
      "Passionate continuous learner executing modern CI/CD Git workflows."
    ]
  }
];

const WhyHireMe = () => {
  return (
    <div className="why-section section-container" id="why-hire-me">
      <div className="why-container">
        <h2>
          Why <span>Hire</span> Me?
        </h2>
        <div className="why-grid">
          {whyData.map((item, index) => (
            <div className="why-card" key={index} data-cursor="hover">
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
              <ul className="why-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
