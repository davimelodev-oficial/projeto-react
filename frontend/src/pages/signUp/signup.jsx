import Navbar from '../../components/navbar/navbar'
import '../signUp/signup.css'

function SignUp() {
  return (
    <>
      <Navbar />
      <div id="elemento-cadastro" className='d-flex align-items-center justify-content-center ms-2 me-2 mt-5'>
        <h1 className='text-white'>Nova Conta</h1>
        <form className="row g-1">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label text-white">Nome</label>
            <input type="email" className="form-control b" id="inputName" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
            <input type="email" className="form-control b" id="inputEmail" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label text-white">Senha</label>
            <input type="password" className="form-control b" id="inputPassword" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label text-white">Endereço</label>
            <input type="text" className="form-control b" id="inputAddress" />
          </div>

          <div className="d-flex mt-3 justify-content-center">
            <button type="submit" className="btn btn-dark" id='signUpButton'>Criar Nova Conta</button>
          </div>
        </form>
        <h6 className='d-flex text-primary'>Já Tenho Uma Conta? Entrar</h6>
      </div>
    </>
  )
}

export default SignUp
