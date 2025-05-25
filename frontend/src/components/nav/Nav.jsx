import '../../assets/logo.png'
import logo from '../../assets/logo.png'

function Nav() {
    return (
        <>
            <div id="element-navbar" className='fixed-top'>
                <nav className="navbar bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-warning" href="#">
                            <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-center me-2" />
                            Delivery
                        </a>
                    </div>
                </nav>
            </div>
            <br />
            <br />
            <br />
        </>

    )
}

export default Nav