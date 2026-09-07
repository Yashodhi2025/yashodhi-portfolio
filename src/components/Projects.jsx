import { useState } from 'react';

function Projects() {
  const [currentImages, setCurrentImages] = useState({});

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
      images: [
        '/projects/medisync/SearchDoctor.jpeg',
        '/projects/medisync/telemedicine.jpeg',
        '/projects/medisync/DoctorDashboard.jpeg',
        '/projects/medisync/paymentGateway.jpeg',
        '/projects/medisync/BookingSuccess.jpeg',
        
      ],
      featured: false,
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
      liveDemo: 'https://greenrent-frontend.onrender.com/',
      images: [
        '/projects/greenrent/home.png',
        '/projects/greenrent/apartments.png',
        '/projects/greenrent/apartmentDetails.png',
        '/projects/greenrent/booking.png',
      ],
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
      images: [
        '/projects/ceylon-eco-foods/ClientDashboard.jpeg',
        '/projects/ceylon-eco-foods/AdminDashboard.jpeg',
        '/projects/ceylon-eco-foods/InventoryManagement.jpeg',
        '/projects/ceylon-eco-foods/driverManagement.jpeg',
      ],
      featured: false,
    },
  ];

  const nextImage = (projectTitle, imageCount) => {
    setCurrentImages((prev) => {
      const currentIndex = prev[projectTitle] || 0;

      return {
        ...prev,
        [projectTitle]: (currentIndex + 1) % imageCount,
      };
    });
  };

  const previousImage = (projectTitle, imageCount) => {
    setCurrentImages((prev) => {
      const currentIndex = prev[projectTitle] || 0;

      return {
        ...prev,
        [projectTitle]:
          (currentIndex - 1 + imageCount) % imageCount,
      };
    });
  };

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
              {/* Project Image Carousel */}
              <div className="project-image-carousel">
                <img
                  src={
                    project.images[
                      currentImages[project.title] || 0
                    ]
                  }
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      className="carousel-arrow carousel-arrow-left"
                      onClick={() =>
                        previousImage(
                          project.title,
                          project.images.length
                        )
                      }
                      aria-label="Previous image"
                    >
                      ←
                    </button>

                    <button
                      className="carousel-arrow carousel-arrow-right"
                      onClick={() =>
                        nextImage(
                          project.title,
                          project.images.length
                        )
                      }
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </>
                )}

                {project.images.length > 1 && (
                  <div className="carousel-counter">
                    {(currentImages[project.title] || 0) + 1} /{' '}
                    {project.images.length}
                  </div>
                )}

                {project.images.length > 1 && (
                  <div className="carousel-dots">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${
                          (currentImages[project.title] || 0) ===
                          index
                            ? 'active'
                            : ''
                        }`}
                        onClick={() =>
                          setCurrentImages((prev) => ({
                            ...prev,
                            [project.title]: index,
                          }))
                        }
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Information */}
              <div className="project-info">
                <div className="project-meta">
                  {project.featured && (
                    <span className="featured-label">FEATURED</span>
                  )}
                  <p className="project-date">{project.date}</p>
                </div>

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

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-demo-link"
                    >
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

