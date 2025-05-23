import '../homePage/home.css'
import Menu from "../../components/menu/menu";
import Nav from "../../components/nav/nav";
import Cards from '../../components/productsCards/Cards';


function Home() {
    return (
        <div id="home-content">
            <Nav />
            <div id="content">
                <h1 className="ms-2 mt-3" >Que Tal Pedir Algo?</h1>
                <div className='d-flex align-items-center'>
                    <input id="search" type="text" placeholder="Digite Para Pesquisar" className='ms-2 mt-2' />
                </div>
                <Cards/>
            </div>
            <Menu />
        </div>
    )
}

export default Home 