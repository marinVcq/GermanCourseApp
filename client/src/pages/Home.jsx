import React from 'react'
import { Link } from 'react-router-dom'
import BrandeburgGate from '../assets/home_header.jpg'



const Home = () => {

  // Dumy data
  const posts = [
    {
      id: 1,
      title: "My great title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore repudiandae corporis architecto necessitatibus hic, minima veritatis adipisci nobis saepe illum voluptatum, consectetur reiciendis dolores?",
      img: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
    },
    {
      id: 2,
      title: "My great title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore repudiandae corporis architecto necessitatibus hic, minima veritatis adipisci nobis saepe illum voluptatum, consectetur reiciendis dolores?",
      img: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
    },
    {
      id: 3,
      title: "My great title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore repudiandae corporis architecto necessitatibus hic, minima veritatis adipisci nobis saepe illum voluptatum, consectetur reiciendis dolores?",
      img: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
    },
    {
      id: 4,
      title: "My great title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore repudiandae corporis architecto necessitatibus hic, minima veritatis adipisci nobis saepe illum voluptatum, consectetur reiciendis dolores?",
      img: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
    },
    {
      id: 5,
      title: "My great title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore repudiandae corporis architecto necessitatibus hic, minima veritatis adipisci nobis saepe illum voluptatum, consectetur reiciendis dolores?",
      img: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
    },
    {
      id: 6,
      title: "My great title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore repudiandae corporis architecto necessitatibus hic, minima veritatis adipisci nobis saepe illum voluptatum, consectetur reiciendis dolores?",
      img: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
    },
  ]
  return (
      <div className='homeContainer'>

        <div className='home'>

          <img className="headerImage" src={BrandeburgGate}></img>
          <h1><b>Klar</b> Le site participatif</h1>
          <h2>Dernières Leçons</h2>
          <div className='posts'>
            {posts.map(post=>(
              <div className='post' key={post.id}>
                <img src={post.img} alt=""></img>
                <div className='content'>
                  <Link to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                  </Link>
                  <p>{post.desc}</p>
                  <button>Read More</button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>     
  )
}

export default Home