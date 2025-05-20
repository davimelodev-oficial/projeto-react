import '../../assets/logo.png'
import logo from '../../assets/logo.png' 

function Nav() {
    return (
        <div id="element-navbar">
           <nav className="navbar bg-dark">
                 <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">
                        <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-center me-2"/>
                            Delivery 
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Nav