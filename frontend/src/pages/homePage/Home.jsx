import '../homePage/home.css'
import Menu from "../../components/menu/menu";
import Nav from "../../components/nav/nav";
import Cards from '../../components/productsCards/Cards';
import lupa from '../../assets/lupa.png'


function Home() {
    return (
        <div id="home-content">
            <Nav />
            <div id="content">
                <h1 className="ms-2 mt-3" >Que Tal Pedir Algo?</h1>
                <div className='d-flex align-items-center'>
                    <img src={lupa} width={20} height={20} alt="" />
                    <input id="search" type="text" placeholder="Digite Para Pesquisar" className='ms-2 mt-2' />
                </div>
                <br />
                <Cards/>
            </div>
            <Menu />
        </div>
    )
}

export default Home 