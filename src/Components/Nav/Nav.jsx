import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return(
        <>
            <NavLink to='/'> Home | </NavLink>     
            <NavLink to='/contact'> Contact |  </NavLink>     
            <NavLink to='/about'> About |  </NavLink>     
            <NavLink to='/services'> Services |  </NavLink>     
            <NavLink to='/projects'> Projects |  </NavLink>     
            <NavLink to='/skills'> Skills |  </NavLink>     
        </>
    )
}