import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div>
      <Link to="/home">
        <h1 className="logo">Go Games</h1>
      </Link>
    </div>
    <nav>
      <div className="navbar">
        {isLoggedIn ? (
          <div className="loginSection">
            {/* The navbar will show these links after you log in */}
            <div>
              <Link to="/home" className="home">
                Home
              </Link>
            </div>
            <div>
              <Link to="/consoles" className="allConsoles">
                All Consoles
              </Link>
              <Link to="/games">All Games</Link>
              <Link to="/accessories" className="accessories">
                All accessories
              </Link>
            </div>
            <div>
              <a href="#" className="logout" onClick={handleClick}>
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div className="loginSection">
            {/* The navbar will show these links before you log in */}
            <div>
              <Link to="/consoles">All Consoles</Link>
              <Link to="/games">All Games</Link>
              <Link to="/accessories" className="allAccessories">
                All accessories
              </Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
