import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registration">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logedin">Logedin</Link>
        </li>
        <li>
          <Link to="/match">Match</Link>
        </li>
        <li> 
          <Link to="/status">Status</Link>
        </li>
    </ul>
    )
}

export default Navbar