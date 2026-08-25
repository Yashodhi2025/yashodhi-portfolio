function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-container contact-container">
        <p className="section-label">GET IN TOUCH</p>

        <h2 className="section-title">
          Let's connect and build something great.
        </h2>

        <p className="contact-description">
          I'm always open to discussing software projects, opportunities,
          internships, and interesting ideas. Feel free to reach out.
        </p>

        <div className="contact-links">
          <a
            href="mailto:yasodhikaushallya@gmail.com"
            className="contact-card"
          >
            <span className="contact-icon">✉</span>

            <div>
              <h3>Email</h3>
              <p>yasodhikaushallya@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/Yashodhi2025"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">⌘</span>

            <div>
              <h3>GitHub</h3>
              <p>github.com/Yashodhi2025</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/yashodhi-kaushallya-352173316/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">in</span>

            <div>
              <h3>LinkedIn</h3>
              <p>Yasodhi Kaushallya</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;