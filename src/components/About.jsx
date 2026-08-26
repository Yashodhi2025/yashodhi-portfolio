function About() {
  return (
    <section id="about" className="about section">
      <div className="section-container">

        {/* ABOUT HEADER */}
        <div className="about-header">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Turning ideas into{" "}
            <span>practical software solutions.</span>
          </h2>
        </div>

        {/* ABOUT CONTENT */}
        <div className="about-content">

          {/* LEFT SIDE */}
          <div className="about-text">

            <p>
              I am a Software Engineering undergraduate at SLIIT with a
              strong interest in full-stack development and backend
              engineering.
            </p>

            <p>
              I enjoy designing and developing practical software solutions
              that solve real-world problems. Through academic and group
              projects, I have gained hands-on experience with React.js,
              Node.js, Express.js, MongoDB, REST APIs, and microservices.
            </p>

            <p>
              I am continuously improving my technical skills, exploring
              new technologies, and looking for opportunities to apply what
              I learn to meaningful software projects.
            </p>

            <div className="about-line"></div>

            <div className="about-note">
              <span>✦</span>
              Always learning. Always building.
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="about-right">

            {/* SMALL IMAGE */}
            <div className="about-image">
              <img
                src="/about-imagee.jpg"
                alt="About me"
              />
            </div>

            {/* HIGHLIGHTS */}
            <div className="about-highlights">

              <div className="highlight-card">
                <span className="highlight-icon">🎓</span>

                <h3>Education</h3>

                <p>
                  Software Engineering Undergraduate
                </p>
              </div>

              <div className="highlight-card">
                <span className="highlight-icon">💻</span>

                <h3>Focus</h3>

                <p>
                  Full-Stack & Backend Development
                </p>
              </div>

              <div className="highlight-card">
                <span className="highlight-icon">🚀</span>

                <h3>Approach</h3>

                <p>
                  Practical & User-Focused Solutions
                </p>
              </div>

              <div className="highlight-card">
                <span className="highlight-icon">🌱</span>

                <h3>Learning</h3>

                <p>
                  Always Exploring New Technologies
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;