import './index.scss'
import { Link } from 'react-router-dom'
//import LogoS from "../../assets/images/logo-s.png"
import LogoG from '../../assets/images/logo_g.png'
import GoharLogo from '../../assets/images/goharali-rbg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faBriefcase,
  faLightbulb,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoG} alt="logo" />

          <img className="sub-logo" src={GoharLogo} alt="Gohar" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="experience-link"
            to="/experience"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="skills-link"
            to="/skills"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="projects-link"
            to="/projects"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="close-icon"
          />
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=lbc8JjJ8V6g"
            >
              <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/go-har-ali"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    </>
  )
}

export default Sidebar
