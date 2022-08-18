import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return(
        <>
            <NavLink to='/'> <img src="../Icons/icons8-home-48.png" alt="home"/> </NavLink>     
            <NavLink to='/contact'> <img src="../Icons/icons8-contact-50.png" alt="contact"/></NavLink>     
            <NavLink to='/about'><img src="../Icons/icons8-about-50.png" alt="about"/> </NavLink>     
            <NavLink to='/services'> <img src="../Icons/icons8-services-58.png" alt="services"/></NavLink>     
            <NavLink to='/projects'> <img src="../Icons/icons8-group-of-projects-50.png" alt="projects"/>  </NavLink>     
            <NavLink to='/skills'> <img src="../Icons/icons8-skills-60.png" alt="skills"/></NavLink>     
        </>
    )
}