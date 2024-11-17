import Navbar from "../Components/Navbar";

function StatusPage() {
    return (
        <div className= "flex flex-col items-center">
            <h1>Status Page</h1>
            <p>Content</p>
            <div className= "absolute bottom-0 mb-4">
                <Navbar className= "object-bottom"/>
            </div>
        </div>
    );
}

export default StatusPage;