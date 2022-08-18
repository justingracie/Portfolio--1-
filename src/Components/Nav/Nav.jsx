import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

export const NavBar = () => {
    return(
        <>
            <div className="NavContainer">
            
                <NavLink className="NavItem" to='/'> <img src="../Icons/icons8-home-48.png" alt="home"/> </NavLink>     
                <NavLink className="NavItem" to='/contact'> <img src="../Icons/icons8-contact-50.png" alt="contact"/></NavLink>     
                <NavLink className="NavItem" to='/about'><img src="../Icons/icons8-about-50.png" alt="about"/> </NavLink>     
                <NavLink className="NavItem" to='/services'> <img src="../Icons/icons8-services-58.png" alt="services"/></NavLink>     
                <NavLink className="NavItem" to='/projects'> <img src="../Icons/icons8-group-of-projects-50.png" alt="projects"/>  </NavLink>     
                <NavLink className="NavItem" to='/skills'> <img src="../Icons/icons8-skills-60.png" alt="skills"/></NavLink>     
                <a className="NavItem" href="https://www.linkedin.com/in/justin-gracie-6ab58a67/"><img src="../Icons/icons8-linkedin-circled-50.png" alt="Linkedin"/></a>
                <a className="NavItem" href="https://github.com/justingracie"><img src="../Icons/icons8-github-48.png" alt="Linkedin"/></a>

            </div>
        </>
    )
}