function Education() {
  return (
    <section id="education" className="education section">
      <div className="section-container">
        <p className="section-label">EDUCATION</p>

        <h2 className="section-title">
          My academic journey.
        </h2>

        <div className="education-card">
          <div className="education-year">
            <img
              className="education-logo"
              src="/img-01.png"
              alt="SLIIT logo"
            />
            2024 – Present
          </div>

          <div className="education-details">
            <h3>BSc (Hons) in Information Technology</h3>

            <h4>
              Specializing in Software Engineering
            </h4>

            <p className="education-institute">
              Sri Lanka Institute of Information Technology (SLIIT)
            </p>

            <p className="education-description">
              Currently pursuing my undergraduate degree with a focus on
              software engineering, application development, and modern
              software technologies.
            </p>
          </div>
        </div>

        <div className="education-card">
          <div className="education-year">
            <img
              className="education-logo"
              src="/images%20(2).jpg"
              alt="Anula Vidyalaya logo"
            />
            2020
          </div>

          <div className="education-details">
            <h3>Anula Vidyalaya</h3>

            <h4>G.C.E. Advanced Level</h4>

            <p className="education-institute">
              Anula Vidyalaya
            </p>

            <p className="education-description">
              Completed my G.C.E. Advanced Level studies at Anula Vidyalaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;