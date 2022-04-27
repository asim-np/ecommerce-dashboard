import React from 'react'
import './home.css'

const HomePage = () => {
  return (
    <div class="card">
      <div class="circle"></div>
      <div class="container">
          <h2>Coca Cola</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci labore fugiat, incidunt nemo nesciunt ex.</p>
          <a href='/buy.html'>Buy Now</a>
      </div>
      <img src="images/coca-cola.png" alt='coca-cola'/>
    </div>
  )
}

export default HomePage