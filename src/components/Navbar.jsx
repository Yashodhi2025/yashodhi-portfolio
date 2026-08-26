function Navbar({ onNavigate }) {
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

        <nav className="nav-links">
          <a href="/" onClick={(event) => handleNavigation(event, '/')}>Home</a>
          <a href="/about" onClick={(event) => handleNavigation(event, '/about')}>About</a>
          <a href="/skills" onClick={(event) => handleNavigation(event, '/skills')}>Skills</a>
          <a href="/projects" onClick={(event) => handleNavigation(event, '/projects')}>Projects</a>
          <a href="/education" onClick={(event) => handleNavigation(event, '/education')}>Education</a>
          <a href="/contact" onClick={(event) => handleNavigation(event, '/contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;