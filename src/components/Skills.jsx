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
        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">
          Technologies I work with.
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;