function About() {
  return (
    <section id="about" className="about section">
      <div className="section-container">

        {/* Section Header */}
        <div className="about-header">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Turning ideas into{" "}
            <span>practical software solutions.</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="about-content">

          {/* Left - Description */}
          <div className="about-text">

            <p>
              I am a Software Engineering undergraduate at SLIIT with a
              strong interest in full-stack development and backend
              engineering.
            </p>

            <p>
              I enjoy designing and developing practical software solutions
              that solve real-world problems. Through academic and group
              projects, I have gained hands-on experience with{" "}
              <strong>React.js, Node.js, Express.js, MongoDB, REST APIs,</strong>{" "}
              and <strong>microservices.</strong>
            </p>

            <p>
              I am continuously improving my technical skills, exploring
              new technologies, and looking for opportunities to apply what
              I learn to meaningful software projects.
            </p>

            <div className="about-line"></div>

            <p className="about-note">
              <span>✨</span> Always learning. Always building. Always improving.
            </p>

          </div>

          {/* Right - Highlights */}
          <div className="about-highlights">

            <div className="highlight-card">
              <span className="highlight-icon">🎓</span>

              <div>
                <h3>Education</h3>
                <p>Software Engineering Undergraduate</p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">💻</span>

              <div>
                <h3>Focus</h3>
                <p>Full-Stack & Backend Development</p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">🚀</span>

              <div>
                <h3>Approach</h3>
                <p>Practical & User-Focused Solutions</p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">🌱</span>

              <div>
                <h3>Learning</h3>
                <p>Always Exploring New Technologies</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;