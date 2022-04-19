import './Menu.scss';

export default function Menu ({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
        <ul>
            <li>
                <a href="#about">Home</a>
            </li>
            <li>
                <a href="#resume">Resume</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
