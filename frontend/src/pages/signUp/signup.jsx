import { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import '../signUp/signup.css'
import supabase from '../../services/supaBaseClient'

function SignUp() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function criarNovaConta(e) {
    e.preventDefault()
    async function signUpNewUser() {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: senha,
        options: {
          emailRedirectTo: 'http://localhost:3000/inicio',
        },
      })
      
      if (error) {
        console.error('Erro ao fazer o cadastro', error.message)
      }

      else {
        console.log('sucesso!', data)
      }
    }
    signUpNewUser()
  }
  return (
    <>
      <Navbar />
      <div id="elemento-cadastro" className='d-flex align-items-center justify-content-center ms-2 me-2 mt-5'>
        <h1 className='text-white'>Nova Conta</h1>
        <form className="row g-1">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
            <input type="email"
              className="form-control b"
              id="inputEmail"
              value={email}
              placeholder='Digite Seu Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label text-white">Senha</label>
            <input type="password"
              className="form-control b"
              id="inputPassword"
              value={senha}
              placeholder='Digite Sua Senha'
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="d-flex mt-3 justify-content-center">
            <button className="btn btn-dark" id='signUpButton' onClick={criarNovaConta}>Criar Nova Conta</button>
          </div>
        </form>
        <h6 className='d-flex text-primary'>Já Tenho Uma Conta? Entrar</h6>
      </div>
    </>
  )
}

export default SignUp
