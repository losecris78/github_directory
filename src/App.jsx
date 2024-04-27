import {CARS as carro} from './teste.js'
import './global.css'
import './index.css'
import { TEMPLES } from './teste.js'
import GROUP  from './constants.js'
import Linkedin from './components/Perfil/Perfil.jsx'
import Formulario from './components/Formulario/index.jsx'
import RepoList from './components/RepoList/index.jsx'
import { useState } from 'react'

function App() {
  
  const nome = 'Cristian';
  const family = ['Pedro', 'Natalia', 'Tatyane', 'Cristian', 'Lu'];

  function returnNome(){
    return nome;
  }
  const esMediodia= true
  const [nomeUsuario, setnomeUsuario]= useState('');
  
  return (
    <div className='appContainer'>
      <input type="text" on onBlur={(e) => setnomeUsuario(e.target.value)} placeholder="Insira seu usuario do Github" className='usuarioGithub'></input>
      <div>
        {/*<Formulario />*/}
      </div>
      {nomeUsuario.length > 4 &&(
        <>
        <Linkedin  nomeUsuario={nomeUsuario}/>
        <RepoList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </div>
  )
}


export default App

      /*<h1>Hola {returnNome()}</h1>
      {TEMPLES.length}<br></br>
      My favorite orchestra is {GROUP}
      <p>
        {esMediodia ? 'Buenos días ' : 'Buenas tardes '}
        {family[1]} va en la {carro}
      </p>*/