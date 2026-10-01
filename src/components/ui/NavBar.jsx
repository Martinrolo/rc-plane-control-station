import { Link } from "react-router";
import '../../css/Navbar.css'

function NavBar()
{   
    return (
        <nav className="navbar">    
            <Link to="/flightnavigation" className="nav-link">Flight Navigation</Link>
            <Link to="/flightplanner" className="nav-link">Flight Planner</Link>
        </nav>
    )
}

export default NavBar;