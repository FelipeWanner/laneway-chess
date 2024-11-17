function ButtonCreateAccount() {
    return (
        <div>
            <button onClick={() => window.location.href = '/registration'}>Create Account</button>
        </div>
    );
}

export default ButtonCreateAccount;