import { useState, useRef, useEffect } from "react";
import "./styles/Chatbot.css";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

const qaPairs = [
  {
    keywords: ["hi", "hello", "hey", "greet", "radhe radhe", "morning", "evening", "afternoon", "namaste"],
    answer: "Radhe Radhe! 👋 I am ARIA, Anshul's AI Assistant. How can I help you today? You can ask me about his skills, experience, or contact information!",
  },
  {
    keywords: ["skills", "tech", "stack", "languages", "tools", "technology", "frontend", "backend", "database"],
    answer: "Anshul is an expert with React, Next.js, Node.js, Express, MongoDB, TypeScript, and Python! For hardware and IoT, he has deep expertise programming Arduino, ESP32, and Raspberry Pi.",
  },
  {
    keywords: ["why", "hire", "choose", "reasons", "value", "recruit", "hr", "company"],
    answer: "You should hire Anshul because he offers a rare combination of Full-Stack MERN expertise and deep physical IoT integration! He can architect scalable web SaaS platforms, while simultaneously building hardware systems (Arduino/ESP32). He is autonomous, ships production-ready code rapidly, and possesses advanced algorithmic problem-solving skills shown in his AI and robotics projects.",
  },
  {
    keywords: ["experience", "work", "job", "career", "background", "internship", "freelance", "history"],
    answer: "With 3+ years of experience, Anshul has built everything from complex SaaS platforms and real-time dashboards to fully automated smart home physical systems. He currently works as a Freelance IoT & Full Stack Developer.",
  },
  {
    keywords: ["projects", "portfolio", "apps", "built", "work", "examples", "software", "website", "platforms", "jarvis", "taxi", "hotel"],
    answer: "Anshul built 4 incredible major projects: 'Jarvis' (an AI Voice Assistant), 'Anshul Palaces' (a Full-Stack Luxury Hotel Booking system), an 'Online Taxi Booking' real-time Web App, and a custom DIY Smart Vacuum Cleaner robot using IoT cameras and sensors!",
  },
  {
    keywords: ["iot", "hardware", "arduino", "esp32", "robotics", "sensors", "electronics", "physical", "vacuum", "hardware"],
    answer: "Anshul is deeply experienced in the Internet of Things (IoT)! He programs microcontrollers like the ESP32 and Arduino, integrates physical hardware sensors with real-time cloud analytics, and has even engineered his own autonomous Smart Vacuum robotics!",
  },
  {
    keywords: ["social", "github", "linkedin", "instagram", "profiles", "links", "twitter", "x", "connect", "handle"],
    answer: "Connect with Anshul instantly on LinkedIn at 'anshul-rana-29805b36b', on GitHub at 'anshulrana454-sketch', or on Instagram at 'rana_155_anshul'! The quick links are floating on the left side of your screen.",
  },
  {
    keywords: ["location", "where", "based", "live", "city", "country", "remote"],
    answer: "Anshul is highly experienced building projects remotely and is available for exciting new Full Stack and IoT opportunities globally! You can email him directly to discuss locations and availability.",
  },
  {
    keywords: ["education", "degree", "college", "university", "study", "graduate", "btech", "b.tech", "study", "student"],
    answer: "Anshul's background solidly mixes Software Engineering with complex hardware integration, highlighted by continuous learning, certifications, and his massive working portfolio of highly advanced, real-world systems.",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "phone", "message", "get in touch", "let's talk"],
    answer: "You can instantly reach Anshul safely at anshulrana454@gmail.com! Alternatively, you can use the interactive 'Let's Work Together' form right at the bottom of this website to send an automatic email.",
  },
  {
    keywords: ["who", "about", "bio", "yourself", "aria", "name", "role", "title", "anshul", "rana"],
    answer: "I am ARIA ✨, Anshul Rana's AI assistant! Anshul is an innovative Full Stack Developer and IoT Solutions Engineer with 3+ years of experience! He builds production-ready web applications, SaaS platforms, and smart device integrations.",
  },
  {
    keywords: ["resume", "cv", "download", "pdf", "document", "qualifications"],
    answer: "Anshul's resume is currently being finalized and uploaded! For now, you can explore his projects and experience right here on the site, or click the 'RESUME' button on the left edge of the screen to check for updates.",
  },
];

const quickActions = [
  "Why hire Anshul?",
  "What are your top projects?",
  "List your Tech Stack",
  "Do you have IoT experience?",
  "How to contact you?",
  "Download Resume",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      text: "Radhe Radhe 🙏! I'm ARIA ✨, Anshul's AI assistant. I can answer any questions you have about his skills, projects, or background. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Show tooltip popup automatically after 3.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
    if (!isOpen) setHasUnread(false);
  };

  const getBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    for (const pair of qaPairs) {
      // Use RegExp with word boundaries to prevent substring overlaps (e.g. "hire" triggering "hi")
      if (pair.keywords.some((kw) => {
        const regex = new RegExp(`\\b${kw}\\b`, 'i');
        return regex.test(lowerInput);
      })) {
        return pair.answer;
      }
    }
    
    return "I'm still learning! But you can contact Anshul directly for a detailed chat or ask me predefined questions about his skills, experience, or social links! Want me to point you to his email?";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
    };
    
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const responseText = getBotResponse(text);
      const newBotMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isBot: true,
      };
      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800); // Random delay between 1.2s and 2s
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(inputValue);
  };

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <div className="status-dot"></div>
            </div>
            <div>
              <h3>ARIA</h3>
              <p>Anshul Assistant</p>
            </div>
          </div>
          <button className="close-btn" onClick={toggleChat} data-cursor="disable">
            <FaTimes />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-wrapper ${msg.isBot ? "bot" : "user"}`}>
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="message-wrapper bot">
              <div className="message-bubble typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-quick-actions">
          {quickActions.map((action, i) => (
            <button
              key={i}
              className="quick-action-btn"
              onClick={() => handleSend(action)}
              data-cursor="disable"
            >
              {action}
            </button>
          ))}
        </div>

        <form className="chatbot-input-area" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ask ARIA anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            data-cursor="disable"
          />
          <button type="submit" className="send-btn" disabled={!inputValue.trim()} data-cursor="disable">
            <FaPaperPlane />
          </button>
        </form>
      </div>

      {/* Floating Action Button */}
      <div className="chatbot-fab-container">
        <div className={`chatbot-tooltip ${!isOpen && showTooltip ? "visible" : ""}`}>
          <strong>Radhe Radhe 🙏</strong><br/>
          Want to know about Anshul's projects, tech stack, or how to contact him? Ask ARIA! ✨
          <button className="tooltip-close" onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }} data-cursor="disable">
            <FaTimes />
          </button>
        </div>
        
        <button className="chatbot-fab" onClick={toggleChat} data-cursor="disable">
          {hasUnread && <div className="fab-badge">1</div>}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
