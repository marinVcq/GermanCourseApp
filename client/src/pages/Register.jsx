import React from 'react'

const Register = () => {
  return (
    <div className='registerContainer'>
      <div className='homeLink'> &#60; Page d'Accueil</div>
      <form>
        <h1>Créer un compte</h1>
        <label for="username">Nom d'utilisateur</label>
        <input type="text" name="username" placeholder="Nom d'utilisateur"/>

        <label for="password">Mot de passe</label>
        <input type="password" name="password" placeholder='********'/>
        <input type="password" name="password" placeholder='********'/>
        <button className='registerButton'>Créer mon compte</button>
        <p className='loginError'>This is an error</p>

      </form>

      <div className='bubble'>
        <p>Créer un compte est <b>gratuit</b> et te permet de sauvegarder
        ta progression</p>
      </div>
    </div>
  )
}

export default Register