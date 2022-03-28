import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              </Link>
            </li>
            <li>Welcome, {user.name}</li>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li>
              <Link to="" onClick={handleLogout}>
                LOG OUT
              </Link>
            </li>
            <li>
              <Link to="/changePassword">Change Password</Link>
            </li>
            <li>
              <Link to="/create-lobby">create a Lobby</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={styles.navbar}>
          <ul className="navbar">
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBar
