import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder"


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)

    const location = useLocation()

    //On mobile view this removes the NavBar
    //when the user clicks to another page.
    useEffect(() => {
      setExpandNavbar(false)
    }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar