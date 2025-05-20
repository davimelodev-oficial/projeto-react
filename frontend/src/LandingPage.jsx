import { Link } from "react-router-dom"

function PageWelcome() {
    return (
        <div id="page-content">
            <h1 className="text-white">Comida Para Todos Os Gostos!</h1>
            <br />
             <Link className='text-dark text-decoration-none' to="/">Proximo</Link>
        </div>
    )
}

export default PageWelcome