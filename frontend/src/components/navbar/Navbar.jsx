import '../navbar/navbar.css'
import logo from '../../assets/logo.png' 
import profileicon from '../../assets/profile.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div id="element-navbar">
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">
                        <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-center me-2"/>
                            Delivery 
                    </a>
                    <div className='d-flex align-items-center'>
                        <img src={profileicon} alt="profile-icon" width="40" height="40" />
                        <Link className='options text-primary ms-1 me-2' to="/signup">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar