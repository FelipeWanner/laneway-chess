function ButtonLogin() {
    return (
        <div>
            <button onClick={() => window.location.href = '/login'}>Login</button>
        </div>
    );
}

export default ButtonLogin;