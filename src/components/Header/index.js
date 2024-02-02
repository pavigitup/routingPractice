import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-con">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p>Wave</p>
    </div>
    <ul>
      <li>
        <Link className="class-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="class-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="class-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
