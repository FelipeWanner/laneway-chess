import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <ul>
        <li>
          <Link to="/" className="px-5">Home</Link>
          <Link to="/registration" className="px-5">Register</Link>
          <Link to="/login" className="px-5">Login</Link>
          <Link to="/status" className="px-5">Status</Link>
        </li>
    </ul>
    )
}

export default Navbar