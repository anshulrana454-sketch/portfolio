import { MdEmail, MdLocationOn, MdSend, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    
    // Strict Regex for standard Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Block common gibberish domains like 'gg.com' or purely invalid ones
    const isSuspicious = email.length < 5 || email.endsWith(".xyx");

    if (!emailRegex.test(email) || isSuspicious) {
      alert("Oops! Please enter a valid and correct email address so I can get back to you! 😊");
      return;
    }
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/anshulrana454@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Awesome! Your message was sent successfully. I will get back to you soon!");
        form.reset();
      } else {
        alert("Oops! Something went wrong while sending the message. Please try again.");
      }
    } catch (error) {
      alert("Oops! There was a network error. Please try sending again.");
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 className="section-title">Let's Work Together</h3>
        
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-info-col">
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <MdEmail className="contact-icon" />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p><a href="mailto:anshulrana454@gmail.com">anshulrana454@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <MdLocationOn className="contact-icon location-icon" />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Dehradun, India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-col">
            <form 
              className="contact-form" 
              onSubmit={handleFormSubmit}
            >
              {/* FormSubmit Configurations */}
              <input type="hidden" name="_subject" value="New Message from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" className="form-input" required />
                <input type="email" name="email" placeholder="Your Email" className="form-input" required />
              </div>
              <input type="text" name="subject" placeholder="Subject" className="form-input" required />
              <textarea name="message" placeholder="Tell me about your project..." className="form-input form-textarea" rows={6} required></textarea>
              <button type="submit" className="submit-btn" data-cursor="disable">
                <MdSend className="submit-icon" /> Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <h2>
            Designed and Developed <br /> by <span>Anshul Rana</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
