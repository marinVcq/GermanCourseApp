import React from 'react'

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='homeLink'> &#60; Page d'Accueil</div>
      <form>
        <h1>Se Connecter</h1>
        <input type="text" placeholder="Nom d'utilisateur"/>
        <input type="password" placeholder="Mot de passe"/>
        <button className='loginButton'>Se connecter</button>
        <button className='registerButton'>Créer un compte</button>
        <p className='loginError'>This is an error!</p>

      </form>

      <div className='bubble'>
        <p>Créer un compte est <b>gratuit</b> et te permet de sauvegarder
        ta progression</p>
      </div>
    </div>
  )
}

export default Login