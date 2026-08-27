function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Mongoose ODM'],
    },
    {
      title: 'Database',
      skills: ['MongoDB'],
    },
    {
      title: 'Architecture & Tools',
      skills: ['Microservices', 'GitHub'],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="section-container">
        <div className="skills-heading">
          <div>
            <p className="section-label">MY SKILLS</p>

            <h2 className="section-title">
              Technologies I work with.
            </h2>
          </div>

          <p className="skills-intro">
            A practical toolkit for shaping thoughtful interfaces and
            dependable digital products.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className={`skill-group skill-group-${index + 1}`}
              key={group.title}
            >
              <div className="skill-group-topline">
                <span className="skill-number">0{index + 1}</span>
                <span className="skill-count">
                  {String(group.skills.length).padStart(2, '0')} skills
                </span>
              </div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;