function RegistrationForm() {
    return (
        <div>
            <h1>Registration Form</h1>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" />
                </div>
                <button>Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm