import { NavLink, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
  const location = useLocation()


  let activeStyle = {
    color: location.pathname === '/' ? 'white' : 'black'
  }

  let inactiveStyle = {
    color: location.pathname === '/' ? 'white' : 'black'
  }

  let navStyle = {
    backgroundColor: location.pathname === '/' ? '#0583F2' : 'transparent'
  }

  return (
    <>
      <nav className={styles.navbar} style={navStyle}>
        <ul>
          <li><NavLink to={"/"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>Home</NavLink></li>
          <li><NavLink to={"/course"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>Courses</NavLink></li>
          <li><NavLink to={"/create"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>Create</NavLink></li>
          {/* <li><NavLink to={"/about"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>About</NavLink></li> */}
        </ul>
      </nav>
    </>
  )
}

export default Nav