import '../menu/menu.css'
import home from '../../assets/home.png'
import cart from '../../assets/cart.png'
import favorite from '../../assets/favorite.png'
import about from '../../assets/about.png'
import { Link } from "react-router-dom"

function Menu() {
    return (
        <>
                <footer className="bg-dark fixed-bottom d-flex justify-content-center align-items-center h">
                    <div className='button'>
                        <Link to="/inicio" className="options">
                            <img src={home} width="40" height="40" alt="" />
                            Inicio
                        </Link>
                    </div>
                     <div className='button'>
                        <Link to="/carrinho" className="options" >
                            <img src={cart} width="40" height="40" alt="" className='ms-2' />
                            Carrinho
                        </Link>
                    </div>
                     <div className='button'>
                        <Link to="/favoritos" className="options">
                            <img src={favorite} width="40" height="40" alt="" className='ms-2' />
                            Favoritos
                        </Link>
                    </div>
                     <div className='button'>
                        <Link to="/sobre" className="options">
                            <img src={about} width="40" height="40" alt="" />
                            Sobre
                        </Link>
                    </div>
                </footer>
        </>
    )
}

export default Menu