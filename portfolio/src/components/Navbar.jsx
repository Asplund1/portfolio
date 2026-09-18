function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#top">
        Andreas Asplund
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
