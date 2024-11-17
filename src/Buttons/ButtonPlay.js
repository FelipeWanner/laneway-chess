function ButtonPlay() {
    return (
        <div>
            <button className="text-white bg-yellow-900 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 flex-1 dark:focus:ring-yellow-900" onClick ={() => window.location.href = '/match'}>Play</button>
        </div>
    );
}

export default ButtonPlay;