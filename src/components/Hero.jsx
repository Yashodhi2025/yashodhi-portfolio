function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>Yashodhi Kaushallya</h1>

        <h2>Software Engineering Undergraduate</h2>

        <p className="hero-description">
          I build practical, scalable, and user-focused software solutions
          using modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Projects
          </a>

          <a
            href="https://github.com/Yashodhi2025"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;