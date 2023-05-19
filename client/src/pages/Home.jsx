import React from 'react'
import BrandeburgGate from '../assets/home_header.jpg'



const Home = () => {
  return (
      <div className='homeContainer'>

        <div className='home'>

          <img className="headerImage" src={BrandeburgGate}></img>
          <h1><b>Klar</b> Le site participatif</h1>
          <h2>Dernières Leçons</h2>

        </div>

      </div>     
  )
}

export default Home