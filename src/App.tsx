import { useState } from 'react'
import './App.css'
import drawer from '../public/images/drawers.jpg'
import avatar from '../public/images/avatar-michelle.jpg'

function App() {

  return (
    <div className="App">
      <header>
        <h1 className='sr-only'>Article preview page</h1>
       <img src={drawer} alt=""></img>
      </header>
      <main>
         <h2>Shift the overall look and feel by adding these wonderful 
         touches to furniture in your home
         </h2>

         <p>Ever been in a room and felt like something was missing? Perhaps 
         it felt slightly bare and uninviting. I’ve got some simple tips 
         to help you make any room feel complete.
         </p>
         <div className='profile-container'>
          <img className='avatar' src={avatar} alt=""></img>
          <div>
          <p className='profile-name'>
           Michelle Appleton
         </p>
         <p className='post-date'>
         28 Jun 2020
         </p>
         </div>
         <button></button>
         {/* Share */}
         </div>
      </main>
  
    </div>
  )
}

export default App
