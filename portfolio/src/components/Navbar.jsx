import { Brand, Links, Nav } from "../styles/NavbarStyles";

function Navbar() {
  return (
    <Nav aria-label="Main navigation">
      <Brand href="#top">
        Andreas Asplund
      </Brand>

      <Links>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </Links>
    </Nav>
  );
}

export default Navbar;
