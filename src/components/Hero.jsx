function Hero({ onNavigate }) {
  const handleNavigation = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <section id="home" className="hero">
      {/* Background Glow */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-content">

        {/* Left Side - Text */}
        <div className="hero-text">
          <p className="hero-greeting">
            👋 Hi, I'm <span>Yashodhi</span>
          </p>

          <h1>
            G.K.Y. <span>Kaushallya</span>
          </h1>

          <h2>Software Engineering Undergraduate</h2>

          <p className="hero-description">
            Passionate about building practical, scalable, and user-focused
            software solutions with modern web technologies.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="/projects" className="btn primary-btn" onClick={(event) => handleNavigation(event, '/projects')}>
              View My Projects <span>→</span>
            </a>

            <a
              href="/KaushallyaCV.pdf"
              download="Yashodhi-Kaushallya-CV.pdf"
              className="btn secondary-btn"
            >
              Download CV ↓
            </a>
          </div>

        </div>

        {/* Right Side - Developer Girl */}
        <div className="hero-image-wrapper">

          {/* Soft Glow */}
          <div className="hero-image-glow"></div>

          {/* Image Circle */}
          <div className="hero-image-circle">
            <img
              src="/hiro-girl.jpg"
              alt="Cute developer girl illustration"
              className="hero-image"
            />
          </div>

          {/* Floating Code Decoration */}
          <div className="floating-code floating-code-one">
            &lt;/&gt;
          </div>

          <div className="floating-code floating-code-two">
            {"{ }"}
          </div>

          {/* Floating Dots */}
          <div className="floating-dot floating-dot-one"></div>
          <div className="floating-dot floating-dot-two"></div>

        </div>
      </div>

    
    </section>
  );
}

export default Hero;