// import ButtonCreateAccount from "../Buttons/ButtonCreateAccount";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar";

function LoginPage () {
    return (
        <div className= "bg-[#EADDBE] flex flex-col items-center m-5">
            <Logo/>
            <form className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-5 mt-5">Login</h1>
                <h2 className="font-bold mb-2">Username</h2>
                <input type="text" placeholder="Username" />
                <h2 className="font-bold mb-2 mt-4">Password</h2>
                <input type="password" placeholder="Password" />
                <br></br><br></br>
                <button className="text-white bg-yellow-900 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" type="submit">Login</button>
            </form>
            <h3>or</h3>
            <ul>
                <li>
                    <Link to="/registration">Create Account</Link>
                </li>
            </ul>
            <div className= "absolute bottom-0 mb-4">
                <Navbar className= "object-bottom"/>
            </div>
            </div>
    );
}

export default LoginPage;