import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import imageUrl from "./assets/images/avatar-icon.png"


const Header = () => {
    // const activeStyle = {
    //     fontWeight: "bold",
    //     textDecoration: "underline",
    //     color: "red"
    // }
    function fakeLogOut() {
        localStorage.removeItem("loggedIn")
    }

    return (

        <header>

            <NavLink className="site-logo" to="/">#VANLIFE </NavLink>
            <nav>
                <NavLink to="host" className={({ isActive }) => isActive ? "active-link" : null} > Host</NavLink>
                <NavLink to="about" className={({ isActive }) => isActive ? "active-link" : null} >About </NavLink>
                <NavLink to="vans" className={({ isActive }) => isActive ? "active-link" : null}  >Vans </NavLink>
                <Link to='login' className='login-link' >
                    <img src="/src/assets/images/avatar-icon.png" className='login-icon' />
                </Link>
                <button onClick={fakeLogOut}>x</button>
            </nav>
            {/* style={({ isActive }) => isActive ? activeStyle : null}  */}
        </header>
    )
}

export default Header