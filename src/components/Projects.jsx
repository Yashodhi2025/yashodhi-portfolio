function Projects() {
  const projects = [
    {
      title: 'MediSync',
      subtitle:
        'AI-Enabled Smart Healthcare Appointment & Telemedicine Platform',
      description:
        'An AI-enabled healthcare platform designed to simplify appointment management and support remote medical consultations. The system follows a microservices architecture with services for authentication, patients, doctors, appointments, payments, notifications, symptom checking, and telemedicine.',
      contribution:
        'My contribution focused on Payment, Notification, and AI-related components, including payment processing, notification functionality, and AI-assisted healthcare features.',
      technologies: [
        'Node.js',
        'JavaScript',
        'REST APIs',
        'Microservices',
        'AI Integration',
      ],
      date: 'Mar 2026 – Apr 2026',
      github: 'https://github.com/nimnadee-203/MediSync',
      featured: true,
    },
    {
      title: 'GreenRent',
      subtitle: 'Sustainable Apartment Finder',
      description:
        'A sustainable apartment-finding and booking platform that helps users discover and reserve environmentally friendly rental properties. The system includes property browsing, property details, eco-rating evaluation, and booking management.',
      contribution:
        'I contributed to the booking and reservation management functionality, including the frontend interface and integration with backend services.',
      technologies: [
        'React.js',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
      ],
      date: 'Feb 2026 – Apr 2026',
      github: 'https://github.com/nimnadee-203/GreenRent',
      featured: false,
    },
    {
      title: 'Ceylon Eco Foods',
      subtitle: 'Food Processing Factory Management System',
      description:
        'A MERN stack-based food processing factory management system connecting farmers, the food processing factory, and customers. The platform supports raw material management and the sale of processed food products.',
      contribution:
        'My main contribution was the Raw Material Inventory Management module, where I designed and implemented functionality to track, manage, and monitor raw materials used within the factory.',
      technologies: [
        'React.js',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
      ],
      date: 'Jul 2025 – Sep 2025',
      github: 'https://github.com/nimnadee-203/Ceylon-Eco-Foods',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="section-container">
        <p className="section-label">MY PROJECTS</p>

        <h2 className="section-title">
          Projects I've worked on.
        </h2>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? 'featured-project' : ''
              }`}
              key={project.title}
            >
              <div className="project-info">
                {project.featured && (
                  <span className="featured-label">
                    FEATURED PROJECT
                  </span>
                )}

                <p className="project-date">{project.date}</p>

                <h3>{project.title}</h3>

                <h4>{project.subtitle}</h4>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-contribution">
                  <strong>My Contribution:</strong>{' '}
                  {project.contribution}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;