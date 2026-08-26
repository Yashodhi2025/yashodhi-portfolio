function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:yasodhikaushallya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-container contact-container">
        <div className="contact-header">
          <p className="section-label">GET IN TOUCH</p>

          <h2 className="section-title">Let's talk.</h2>

          <p className="contact-description">
            Have a project or question? Send me a message.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-visual">
            <img
              src="/3D_cute_cartoon_girl_-removebg.png"
              alt="Developer pointing toward the contact form"
            />
          </div>

          <div className="contact-main">
            <div className="contact-content">
              <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send me a message</h3>

            <div className="contact-form-row">
              <div className="contact-form-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="contact-form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button type="submit" className="contact-form-button">
              Send Message <span aria-hidden="true">-&gt;</span>
            </button>
              </form>

              <div className="contact-links">
          <a
            href="mailto:yasodhikaushallya@gmail.com"
            className="contact-card"
          >
            <img
              className="contact-icon"
              src="/mail%20app%20icon.jpg"
              alt="Email"
            />

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
            <img
              className="contact-icon"
              src="/github.jpg"
              alt="GitHub"
            />

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
            <img
              className="contact-icon"
              src="/LinkedIn.jpg"
              alt="LinkedIn"
            />

            <div>
              <h3>LinkedIn</h3>
              <p>Yasodhi Kaushallya</p>
            </div>
          </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;