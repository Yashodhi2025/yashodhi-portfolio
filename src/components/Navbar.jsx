function Navbar({ onNavigate, currentPath }) {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo" onClick={(event) => handleNavigation(event, '/')}>
          YK
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map(({ label, path }) => (
            <a
              key={path}
              href={path}
              className={currentPath === path ? 'active' : ''}
              aria-current={currentPath === path ? 'page' : undefined}
              onClick={(event) => handleNavigation(event, path)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;