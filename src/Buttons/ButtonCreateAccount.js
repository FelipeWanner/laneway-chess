function ButtonCreateAccount() {
    return (
        <div>
            <button className="text-white bg-[#7F563B] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-bg[#7F563B];" onClick={() => window.location.href = '/registration'}>Create Account</button>
        </div>
    );
}

export default ButtonCreateAccount;