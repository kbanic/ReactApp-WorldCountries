import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Countries of the World</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <a href="https://restcountries.eu/">Information source</a>
            </div>
        </nav>
    );
}

export default Navbar;