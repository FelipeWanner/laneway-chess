import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";

function RegistrationPage() {
    return (    
    <div className= "bg-[#EADDBE] flex flex-col items-center">
        <Logo/>
        <form className="flex flex-col items-center">
            <h1 className="width: 100%; text-2xl font-bold mb-5 mt-5">Create Account</h1>
            <h2 className="font-bold mb-2">Email</h2>
            <input type="text" placeholder="Email" /> 
            <br></br>
            <h2 className="font-bold mb-2">Username</h2>
            <input type="text" placeholder="Username" />
            <br></br>
            <h2 className="font-bold mb-2">Password</h2>
            <input type="password" placeholder="Password" />
            <br></br>
            <h2 className="font-bold mb-2">Confirm Password</h2>
            <input type="password" placeholder="Confirm Password" />
            <br></br><br></br>
            <button className="text-white bg-[#7F563B] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-bg[#7F563B]" type="submit">Create Account</button>
        </form>
        <div className= "absolute bottom-0 mb-4">
            <Navbar className= "object-bottom"/>
        </div>
    </div>
    );
}

export default RegistrationPage;